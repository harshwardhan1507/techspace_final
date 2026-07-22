"use client";

import React from "react";
import { motion } from "framer-motion";

interface MemoryProgressProps {
  activeIndex: number;
  totalMemories: number;
  accentColor: string;
}

export function MemoryProgress({
  activeIndex,
  totalMemories,
  accentColor,
}: MemoryProgressProps) {
  const progressPercentage = ((activeIndex + 1) / totalMemories) * 100;

  return (
    <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden relative">
      <motion.div
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full shadow-[0_0_12px_rgba(255,255,255,0.4)]"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}
