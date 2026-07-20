"use client";

import React from "react";
import { motion } from "framer-motion";
import { Initiative } from "../data";
import { ProgrammingVisual } from "./ProgrammingVisual";

interface InitiativeCardProps {
  initiative: Initiative;
  index: number;
  variant?: "featured" | "standard";
}

export function InitiativeCard({ initiative, index, variant = "standard" }: InitiativeCardProps) {
  const Icon = initiative.icon;
  const isFeatured = variant === "featured";
  
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const accentSubtle = hexToRgba(initiative.color, 0.05);
  const accentBorder = hexToRgba(initiative.color, 0.15);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative h-full rounded-3xl border border-neutral-800/60 bg-[#060608]/80 overflow-hidden transition-all duration-500 hover:border-neutral-700 flex flex-col backdrop-blur-sm ${
        isFeatured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
      }`}
      style={{
        boxShadow: `0 4px 20px rgba(0,0,0,0.3)`
      }}
    >
      {/* Subtle background glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
        style={{ 
          background: `radial-gradient(circle at 50% 0%, ${hexToRgba(initiative.color, 0.08)}, transparent 60%)` 
        }}
      />
      
      {/* Hover accent line at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] opacity-0 group-hover:w-1/3 group-hover:opacity-100 transition-all duration-700 ease-out"
        style={{ background: initiative.color }}
      />

      {/* Decorative visual for featured card - only on md+ */}
      {isFeatured && (
        <div className="hidden md:block">
          <ProgrammingVisual />
        </div>
      )}

      <div className={`flex flex-col flex-1 relative z-10 ${isFeatured ? 'p-8 md:p-10 lg:p-12' : 'p-6 md:p-8'}`}>
        
        {/* Header: Icon & Compact Status */}
        <div className="flex items-start justify-between gap-4 mb-10">
          <div 
            className={`rounded-2xl border flex items-center justify-center transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105 ${isFeatured ? 'w-16 h-16' : 'w-12 h-12'}`}
            style={{ 
              backgroundColor: accentSubtle,
              borderColor: accentBorder,
            }}
          >
            <Icon className={isFeatured ? 'w-8 h-8' : 'w-6 h-6'} style={{ color: initiative.color }} />
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 tracking-wide uppercase mt-1">
            <span style={{ color: initiative.color }} className="opacity-80">{initiative.status}</span>
            <span className="text-neutral-600">•</span>
            <span>{initiative.difficulty}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-auto">
          <h3 className={`font-bold tracking-tight text-white mb-6 transition-colors duration-300 ${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
            <span className="relative inline-block">
              {initiative.title}
              <span 
                className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: initiative.color }}
              />
            </span>
          </h3>
          <p className={`text-neutral-400 leading-relaxed max-w-2xl ${isFeatured ? 'text-lg line-clamp-3' : 'text-base line-clamp-2'}`}>
            {initiative.description}
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <hr className="border-neutral-800/60 mb-8" />
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-neutral-400 font-medium">
            {initiative.metadata.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-neutral-700">•</span>}
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-2">
            {initiative.focus.map((item, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 text-[11px] font-medium text-neutral-500 bg-neutral-900/50 rounded-full transition-colors duration-300 group-hover:bg-neutral-800/80 group-hover:text-neutral-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
