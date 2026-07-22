"use client";

import { useState, useCallback } from "react";
import { memories, Memory } from "../data/memories";

export function useMemoryStage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeMemory: Memory = memories[activeIndex] || memories[0];

  const selectMemory = useCallback((index: number) => {
    if (index >= 0 && index < memories.length) {
      setActiveIndex(index);
    }
  }, []);

  const nextMemory = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % memories.length);
  }, []);

  return {
    activeIndex,
    activeMemory,
    totalMemories: memories.length,
    selectMemory,
    nextMemory,
    isHovered,
    setIsHovered,
  };
}
