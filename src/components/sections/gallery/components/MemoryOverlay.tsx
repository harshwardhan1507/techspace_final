"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Calendar, Quote, Sparkles } from "lucide-react";
import { Memory } from "../data/memories";
import { MemoryProgress } from "./MemoryProgress";
import { overlayStagger, overlayItem } from "../animations";

interface MemoryOverlayProps {
  memory: Memory;
  activeIndex: number;
  totalMemories: number;
}

export function MemoryOverlay({
  memory,
  activeIndex,
  totalMemories,
}: MemoryOverlayProps) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
      {/* Top Right Story Indicator Pill */}
      <div className="flex justify-end pt-2 pr-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono font-semibold text-neutral-200 group-hover:border-white/30 group-hover:text-white transition-all shadow-lg">
          <Sparkles className="w-3.5 h-3.5" style={{ color: memory.accentColor }} />
          <span>Click to explore event story</span>
        </div>
      </div>

      {/* Background Gradient & Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(2, 2, 2, 0.95) 0%, rgba(2, 2, 2, 0.4) 50%, transparent 100%)"
        }}
      />

      <motion.div
        key={memory.id}
        variants={overlayStagger}
        initial="initial"
        animate="animate"
        className="relative z-30 space-y-4 max-w-2xl"
      >
        {/* Category Eyebrow */}
        <motion.div variants={overlayItem} className="flex items-center gap-2">
          <span 
            className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
            style={{ backgroundColor: memory.accentColor, color: memory.accentColor }}
          />
          <span 
            className="text-xs font-mono font-bold tracking-widest uppercase"
            style={{ color: memory.accentColor }}
          >
            {memory.category}
          </span>
        </motion.div>

        {/* Large Story Title */}
        <motion.h3 
          variants={overlayItem}
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md"
        >
          {memory.title}
        </motion.h3>

        {/* Emotional Memory Quote */}
        <motion.div 
          variants={overlayItem} 
          className="flex items-start gap-2.5 text-neutral-300 italic text-sm md:text-base font-light border-l-2 pl-3"
          style={{ borderColor: memory.accentColor }}
        >
          <Quote className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed font-serif text-neutral-200">
            &quot;{memory.quote}&quot;
          </p>
        </motion.div>

        {/* Short Story */}
        <motion.p variants={overlayItem} className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-xl">
          {memory.story}
        </motion.p>

        {/* Rich Metadata Bar */}
        <motion.div variants={overlayItem} className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-mono text-neutral-400 pt-2">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <MapPin className="w-3.5 h-3.5" style={{ color: memory.accentColor }} />
            <span>{memory.location}</span>
          </div>

          <span className="text-neutral-700">•</span>

          <div className="flex items-center gap-1.5 text-neutral-300">
            <Users className="w-3.5 h-3.5" style={{ color: memory.accentColor }} />
            <span>{memory.participants}</span>
          </div>

          <span className="text-neutral-700">•</span>

          <div className="flex items-center gap-1.5 text-neutral-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{memory.date}</span>
          </div>
        </motion.div>

        {/* Apple TV Style Progress Line */}
        <motion.div variants={overlayItem} className="pt-2 max-w-md">
          <MemoryProgress
            activeIndex={activeIndex}
            totalMemories={totalMemories}
            accentColor={memory.accentColor}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
