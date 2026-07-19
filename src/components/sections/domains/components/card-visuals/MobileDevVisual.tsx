"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, LayoutGrid, Layers } from "lucide-react";

interface MobileDevVisualProps {
  accentColor: string;
}

export function MobileDevVisual({ accentColor }: MobileDevVisualProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full h-full min-h-[90px] overflow-hidden flex items-center justify-center">
      
      {/* Background wireframe layers */}
      <motion.div
        animate={{ 
          y: [-2, 2, -2],
          rotate: [-5, -5, -5]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute w-[70px] h-[120px] rounded-[16px] border opacity-40 backdrop-blur-sm -left-4"
        style={{
          borderColor: hexToRgba(accentColor, 0.4),
          backgroundColor: hexToRgba(accentColor, 0.05),
        }}
      />
      
      <motion.div
        animate={{ 
          y: [2, -2, 2],
          rotate: [5, 5, 5]
        }}
        transition={{ 
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
        className="absolute w-[70px] h-[120px] rounded-[16px] border opacity-40 backdrop-blur-sm -right-4"
        style={{
          borderColor: hexToRgba(accentColor, 0.4),
          backgroundColor: hexToRgba(accentColor, 0.05),
        }}
      />

      {/* Main abstract phone UI */}
      <motion.div
        animate={{ 
          y: [0, -5, 0],
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-[80px] h-[130px] rounded-[20px] border-2 backdrop-blur-md shadow-xl flex flex-col items-center py-2 px-1.5 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${hexToRgba(accentColor, 0.15)} 0%, ${hexToRgba(accentColor, 0.05)} 100%)`,
          borderColor: hexToRgba(accentColor, 0.5),
          boxShadow: `0 10px 30px -10px ${hexToRgba(accentColor, 0.4)}`
        }}
      >
        {/* Dynamic Island / Notch */}
        <div className="w-[30%] h-1.5 rounded-full mb-2" style={{ backgroundColor: hexToRgba(accentColor, 0.4) }} />
        
        {/* App grid abstract UI */}
        <div className="w-full grid grid-cols-2 gap-1.5 px-1 mb-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div 
              key={`app-${i}`}
              className="aspect-square rounded-md"
              style={{ backgroundColor: hexToRgba(accentColor, 0.25) }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
        </div>
        
        {/* App card UI */}
        <div className="w-full px-1 flex-1">
          <div className="w-full h-full rounded-md p-1.5 flex flex-col gap-1" style={{ backgroundColor: hexToRgba(accentColor, 0.15) }}>
             <div className="w-[80%] h-1.5 rounded-full" style={{ backgroundColor: hexToRgba(accentColor, 0.4) }} />
             <div className="w-[60%] h-1.5 rounded-full" style={{ backgroundColor: hexToRgba(accentColor, 0.3) }} />
          </div>
        </div>
      </motion.div>

      {/* Decorative floating icons */}
      <motion.div
        animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-2 left-6 p-1 rounded-md border"
        style={{ backgroundColor: hexToRgba(accentColor, 0.1), borderColor: hexToRgba(accentColor, 0.3) }}
      >
        <LayoutGrid className="w-3.5 h-3.5" style={{ color: accentColor }} />
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-4 right-6 p-1 rounded-md border"
        style={{ backgroundColor: hexToRgba(accentColor, 0.1), borderColor: hexToRgba(accentColor, 0.3) }}
      >
        <Layers className="w-3.5 h-3.5" style={{ color: accentColor }} />
      </motion.div>

      {/* Central glow */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${hexToRgba(accentColor, 0.3)} 0%, transparent 60%)`
        }}
      />
    </div>
  );
}
