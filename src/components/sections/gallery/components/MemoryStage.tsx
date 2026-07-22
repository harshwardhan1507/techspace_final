"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Memory } from "../data/memories";
import { MemoryOverlay } from "./MemoryOverlay";
import { stageVariants } from "../animations";

interface MemoryStageProps {
  memory: Memory;
  activeIndex: number;
  totalMemories: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onOpenStory?: (memory: Memory) => void;
}

export function MemoryStage({
  memory,
  activeIndex,
  totalMemories,
  onMouseEnter,
  onMouseLeave,
  onOpenStory,
}: MemoryStageProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => onOpenStory?.(memory)}
      className="relative w-full h-[480px] md:h-[580px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-[#020202] shadow-2xl group cursor-pointer"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={memory.id}
          variants={stageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Cinematic Image with Horizontal Motion & Ambient Scale */}
          <motion.img
            src={memory.image}
            alt={memory.title}
            animate={{
              scale: [1, 1.05],
              x: [-10, 10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.9]"
          />

          {/* Subtle Film Grain Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at center, transparent 30%, rgba(2, 2, 2, 0.8) 100%)`
            }}
          />

          {/* Soft Glass Highlight Edge */}
          <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-white/20 transition-colors" />

          {/* Editorial Overlay */}
          <MemoryOverlay
            memory={memory}
            activeIndex={activeIndex}
            totalMemories={totalMemories}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
