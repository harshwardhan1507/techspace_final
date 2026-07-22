"use client";

import { useEffect, useRef } from "react";

interface UseAutoRotateProps {
  nextMemory: () => void;
  isHovered: boolean;
  intervalMs?: number;
}

export function useAutoRotate({
  nextMemory,
  isHovered,
  intervalMs = 5500,
}: UseAutoRotateProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    let isVisible = true;

    // IntersectionObserver to pause rotation when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );

    const currentElem = containerRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    const startTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        const isTabActive = document.visibilityState === "visible";
        if (isVisible && isTabActive && !isHovered) {
          nextMemory();
        }
      }, intervalMs);
    };

    startTimer();

    // Tab visibility listener
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startTimer();
      } else if (timer) {
        clearInterval(timer);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (timer) clearInterval(timer);
      if (currentElem) observer.unobserve(currentElem);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [nextMemory, isHovered, intervalMs]);

  return { containerRef };
}
