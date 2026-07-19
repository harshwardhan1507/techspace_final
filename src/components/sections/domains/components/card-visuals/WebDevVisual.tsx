"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu } from "lucide-react";

interface WebDevVisualProps {
  accentColor: string;
}

export function WebDevVisual({ accentColor }: WebDevVisualProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full h-full min-h-[200px] overflow-hidden">
      {/* Browser window frame */}
      <div className="absolute inset-0 bg-neutral-900/80 rounded-lg border backdrop-blur-sm" style={{ borderColor: hexToRgba(accentColor, 0.3) }}>
        {/* Browser header */}
        <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ borderColor: hexToRgba(accentColor, 0.2) }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-2">
            <div className="h-2 bg-neutral-700/50 rounded-full max-w-[200px]" />
          </div>
        </div>
        
        {/* Code snippets */}
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor, opacity: 0.6 }} />
            <div className="flex-1 h-2 bg-neutral-700/40 rounded-full" />
          </div>
          <div className="flex items-center gap-2 pl-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor, opacity: 0.5 }} />
            <div className="flex-1 h-2 bg-neutral-700/40 rounded-full" />
          </div>
          <div className="flex items-center gap-2 pl-8">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor, opacity: 0.4 }} />
            <div className="flex-1 h-2 bg-neutral-700/40 rounded-full" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor, opacity: 0.6 }} />
            <div className="flex-1 h-2 bg-neutral-700/40 rounded-full" />
          </div>
          <div className="flex items-center gap-2 pl-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor, opacity: 0.5 }} />
            <div className="flex-1 h-2 bg-neutral-700/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating logos */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-2 -right-2 p-3 rounded-xl border backdrop-blur-sm shadow-xl"
        style={{
          background: hexToRgba(accentColor, 0.15),
          borderColor: hexToRgba(accentColor, 0.3),
          boxShadow: `0 0 20px ${hexToRgba(accentColor, 0.2)}`
        }}
      >
        <Code2 className="w-6 h-6" style={{ color: accentColor }} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 8, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute -bottom-2 -left-2 p-3 rounded-xl border backdrop-blur-sm shadow-xl"
        style={{
          background: hexToRgba(accentColor, 0.15),
          borderColor: hexToRgba(accentColor, 0.3),
          boxShadow: `0 0 20px ${hexToRgba(accentColor, 0.2)}`
        }}
      >
        <Cpu className="w-6 h-6" style={{ color: accentColor }} />
      </motion.div>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  );
}
