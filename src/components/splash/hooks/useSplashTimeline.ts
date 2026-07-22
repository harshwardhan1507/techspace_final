"use client";

import { useState, useEffect, useCallback } from "react";
import { TIMELINE_CONFIG, SplashPhase } from "../config/timeline";

export function useSplashTimeline() {
  const [phase, setPhase] = useState<SplashPhase>(() => {
    if (typeof window !== "undefined") {
      const navEntries = performance.getEntriesByType?.("navigation");
      const isReload = navEntries && navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === "reload";
      const hasSeen = sessionStorage.getItem(TIMELINE_CONFIG.sessionKey);
      if (hasSeen === "true" && !isReload) return "done";
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return "done";
    }
    return "logo-reveal";
  });

  const finishSplash = useCallback(() => {
    setPhase("done");
    if (typeof window !== "undefined") {
      sessionStorage.setItem(TIMELINE_CONFIG.sessionKey, "true");
    }
  }, []);

  // Initialization & Smart Skip Checks
  useEffect(() => {
    if (typeof window === "undefined" || phase === "done") return;

    // Check if navigation is a page reload (F5 / Refresh)
    const navEntries = performance.getEntriesByType?.("navigation");
    const isReload = navEntries && navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === "reload";

    // Check if session storage flag exists (only skip if NOT a reload)
    const hasSeen = sessionStorage.getItem(TIMELINE_CONFIG.sessionKey);
    if (hasSeen === "true" && !isReload) {
      queueMicrotask(finishSplash);
      return;
    }

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      queueMicrotask(finishSplash);
      return;
    }

    // Check pageshow event for back/forward restoration (bfcache)
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        finishSplash();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [finishSplash, phase]);

  // Phase State Machine with 2.0s Total Budget
  useEffect(() => {
    if (phase === "done") return;

    let timer: ReturnType<typeof setTimeout>;
    const d = TIMELINE_CONFIG.durations;

    if (phase === "logo-reveal") {
      timer = setTimeout(() => setPhase("boot-log"), d.logoReveal);
    } else if (phase === "boot-log") {
      timer = setTimeout(() => setPhase("git-timeline"), d.bootLog);
    } else if (phase === "git-timeline") {
      timer = setTimeout(() => setPhase("repo-ready"), d.gitTimeline);
    } else if (phase === "repo-ready") {
      timer = setTimeout(() => setPhase("transition"), d.repoReady);
    } else if (phase === "transition") {
      timer = setTimeout(() => finishSplash(), d.transition);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phase, finishSplash]);

  // Global Fast-Forward Skip on User Interaction
  useEffect(() => {
    if (phase === "done") return;

    const handleUserInteraction = (e: Event) => {
      if (e.type === "keydown") {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.key === "Tab") return;
      }
      finishSplash();
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [phase, finishSplash]);

  return { phase, finishSplash };
}
