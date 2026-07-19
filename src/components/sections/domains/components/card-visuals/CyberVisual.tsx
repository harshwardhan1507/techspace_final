"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

interface CyberVisualProps {
  accentColor: string;
}

export function CyberVisual({ accentColor }: CyberVisualProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full h-full min-h-[120px] overflow-hidden">
      {/* Terminal window */}
      <div 
        className="absolute inset-0 bg-neutral-900/90 rounded-lg border backdrop-blur-sm"
        style={{ borderColor: hexToRgba(accentColor, 0.3) }}
      >
        {/* Terminal header */}
        <div 
          className="flex items-center gap-2 px-3 py-2 border-b"
          style={{ borderColor: hexToRgba(accentColor, 0.2) }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hexToRgba(accentColor, 0.6) }} />
          </div>
          <div className="text-xs font-mono" style={{ color: hexToRgba(accentColor, 0.8) }}>terminal</div>
        </div>
        
        {/* Terminal content */}
        <div className="p-3 font-mono text-xs space-y-1.5">
          <div className="flex items-center gap-2">
            <span style={{ color: accentColor }}>$</span>
            <span className="text-neutral-300">nmap -sV target</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: accentColor }}>$</span>
            <span className="text-neutral-300">sqlmap --url=...</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: accentColor }}>$</span>
            <span className="text-neutral-300">_</span>
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-4"
              style={{ backgroundColor: accentColor }}
            />
          </div>
        </div>
      </div>

      {/* Shield icon overlay */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-1 -right-1 p-2 rounded-lg border backdrop-blur-sm"
        style={{
          backgroundColor: hexToRgba(accentColor, 0.2),
          borderColor: hexToRgba(accentColor, 0.4)
        }}
      >
        <Shield className="w-5 h-5" style={{ color: accentColor }} />
      </motion.div>

      {/* Lock icon */}
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-1 -left-1 p-2 rounded-lg border backdrop-blur-sm"
        style={{
          backgroundColor: hexToRgba(accentColor, 0.2),
          borderColor: hexToRgba(accentColor, 0.4)
        }}
      >
        <Lock className="w-5 h-5" style={{ color: accentColor }} />
      </motion.div>

      {/* Radar sweep effect */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border"
        style={{
          borderColor: hexToRgba(accentColor, 0.2),
          background: `conic-gradient(from 0deg, transparent 0deg, ${hexToRgba(accentColor, 0.1)} 30deg, transparent 60deg)`
        }}
      />
    </div>
  );
}
