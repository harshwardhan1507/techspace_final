"use client";

import { useState, useEffect, useCallback } from "react";

export type IntroPhase =
  | "pending"
  | "idle"
  | "timeline"
  | "head-slide"
  | "checkout"
  | "dissolve"
  | "done";

export function useIntro() {
  const [phase, setPhase] = useState<IntroPhase>("pending");

  const skipIntro = useCallback(() => {
    setPhase("done");
    if (typeof window !== "undefined") {
      sessionStorage.setItem("techspace-intro-seen", "true");
    }
  }, []);

  // Initialization & SSR safe check
  useEffect(() => {
    if (phase !== "pending") return;

    if (typeof window !== "undefined") {
      const hasSeen = sessionStorage.getItem("techspace-intro-seen");
      if (hasSeen === "true") {
        setTimeout(() => skipIntro(), 0);
        return;
      }
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    
    if (prefersReducedMotion) {
      // Reduced motion: skip animation, jump to static state briefly, then done
      queueMicrotask(() => setPhase("idle"));
      const timer = setTimeout(() => {
        skipIntro();
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Start normal animation asynchronously to avoid cascading renders
      queueMicrotask(() => setPhase("idle"));
    }
  }, [phase, skipIntro]);

  // Phase Machine Timers
  useEffect(() => {
    if (phase === "pending" || phase === "done") return;

    let timer: ReturnType<typeof setTimeout>;

    if (phase === "idle") {
      // Small pause before starting
      timer = setTimeout(() => setPhase("timeline"), 100);
    } else if (phase === "timeline") {
      // 6 commits * 250ms = 1500ms
      timer = setTimeout(() => setPhase("head-slide"), 1500);
    } else if (phase === "head-slide") {
      // 350ms for head slide
      timer = setTimeout(() => setPhase("checkout"), 350);
    } else if (phase === "checkout") {
      // 500ms hold
      timer = setTimeout(() => setPhase("dissolve"), 500);
    } else if (phase === "dissolve") {
      // 600ms dissolve
      timer = setTimeout(() => {
        skipIntro(); // mark seen and set done
      }, 600);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phase, skipIntro]);

  // Global skip listeners
  useEffect(() => {
    // Only attach if we are actually playing the intro
    if (phase === "pending" || phase === "done") return;

    const handleSkip = (e: Event) => {
      // Prevent default on key presses if it's escape or space etc.
      if (e.type === "keydown") {
        const keyEvent = e as KeyboardEvent;
        // Skip on any key
        if (keyEvent.key !== "Tab") {
          e.preventDefault();
          skipIntro();
        }
      } else {
        skipIntro();
      }
    };

    window.addEventListener("click", handleSkip);
    window.addEventListener("keydown", handleSkip);
    window.addEventListener("touchstart", handleSkip);

    return () => {
      window.removeEventListener("click", handleSkip);
      window.removeEventListener("keydown", handleSkip);
      window.removeEventListener("touchstart", handleSkip);
    };
  }, [phase, skipIntro]);

  return { phase, skipIntro };
}
