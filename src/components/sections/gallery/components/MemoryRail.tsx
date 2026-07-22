"use client";

import React from "react";
import { motion } from "framer-motion";
import { memories, Memory } from "../data/memories";

interface MemoryRailProps {
  activeIndex: number;
  onSelect: (index: number) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MemoryRail({
  activeIndex,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}: MemoryRailProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-full flex flex-col justify-between h-full space-y-3"
    >
      {/* Desktop Vertical Rail */}
      <div className="hidden lg:flex flex-col space-y-2.5">
        {memories.map((memory: Memory, index: number) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={memory.id}
              onClick={() => onSelect(index)}
              onMouseEnter={() => onSelect(index)}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0.45,
                x: isActive ? 4 : 0,
              }}
              whileHover={{ opacity: isActive ? 1 : 0.75, x: 2 }}
              className="relative p-3.5 rounded-xl cursor-pointer transition-all duration-300 group border border-transparent hover:border-white/10 bg-neutral-900/30 hover:bg-neutral-900/60 backdrop-blur-sm"
            >
              {/* Active Accent Bar */}
              {isActive && (
                <motion.div
                  layoutId="active-memory-rail-bar"
                  className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full shadow-[0_0_12px_currentColor]"
                  style={{
                    backgroundColor: memory.accentColor,
                    color: memory.accentColor,
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              )}

              <div className="pl-2 space-y-1">
                {/* Category Eyebrow */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-wider font-bold text-neutral-400 uppercase">
                  <span style={{ color: isActive ? memory.accentColor : undefined }}>
                    {memory.category}
                  </span>
                  <span>{memory.date.split(" ")[1]}</span>
                </div>

                {/* Title */}
                <h4 className={`text-sm font-semibold tracking-tight transition-colors duration-200 ${isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                  {memory.title}
                </h4>

                {/* Location & Participants Preview */}
                <p className="text-[11px] font-mono text-neutral-500 line-clamp-1">
                  {memory.location} • {memory.participants.split("•")[0]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Horizontal Selector Track */}
      <div className="flex lg:hidden overflow-x-auto gap-3 pb-2 scrollbar-none snap-x snap-mandatory">
        {memories.map((memory: Memory, index: number) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={memory.id}
              onClick={() => onSelect(index)}
              className={`snap-start flex-shrink-0 px-4 py-2.5 rounded-xl border text-left transition-all duration-300 min-w-[200px] ${
                isActive
                  ? 'bg-neutral-900 border-white/20 text-white shadow-lg'
                  : 'bg-neutral-950/60 border-neutral-800 text-neutral-400'
              }`}
            >
              <div 
                className="text-[9px] font-mono font-bold tracking-wider uppercase mb-1"
                style={{ color: isActive ? memory.accentColor : undefined }}
              >
                {memory.category}
              </div>
              <div className="text-xs font-semibold line-clamp-1">{memory.title}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
