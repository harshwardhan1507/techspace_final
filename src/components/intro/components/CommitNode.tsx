import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { commits } from "../data/commits";
import { IntroPhase } from "../hooks/useIntro";

interface CommitNodeProps {
  id: string;
  message: string;
  index: number;
  total: number;
  phase: IntroPhase;
}

export function CommitNode({ message, index, total, phase }: CommitNodeProps) {
  // Commit nodes should appear only in timeline phase or later
  const shouldAppear = phase !== "pending" && phase !== "idle";
  
  // Calculate delay: 250ms per commit
  const delay = index * 0.25;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={shouldAppear ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ 
        delay: shouldAppear ? delay : 0, 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative flex items-center gap-6 w-[300px] mb-12 last:mb-0"
    >
      {/* Node Dot */}
      <div className="relative flex items-center justify-center">
        {/* Glow */}
        <div className="absolute w-6 h-6 bg-blue-500/30 rounded-full blur-md" />
        {/* Core */}
        <div className="relative w-3 h-3 bg-blue-400 border-2 border-[#0B0D10] rounded-full z-10" />
      </div>

      {/* Message */}
      <span className="text-sm md:text-base font-medium text-neutral-300 font-mono tracking-tight">
        {message}
      </span>
    </motion.div>
  );
}
