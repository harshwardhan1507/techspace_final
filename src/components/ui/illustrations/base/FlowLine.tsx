"use client";

import React from "react";
import { motion } from "framer-motion";

interface FlowLineProps {
  d?: string;
  x1?: string | number;
  y1?: string | number;
  x2?: string | number;
  y2?: string | number;
  color?: string;
  animated?: boolean;
  duration?: number;
  className?: string;
}

export function FlowLine({ 
  d, 
  x1, 
  y1, 
  x2, 
  y2, 
  color = "#0EA5E9", 
  animated = true, 
  duration = 3,
  className = "" 
}: FlowLineProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none overflow-visible ${className}`}>
      {/* Base line path */}
      {d ? (
        <path
          d={d}
          fill="none"
          stroke={hexToRgba(color, 0.25)}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      ) : (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={hexToRgba(color, 0.25)}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      )}

      {/* Animated glowing pulse traveling along path */}
      {animated && (
        d ? (
          <motion.path
            d={d}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="10 40"
            animate={{ strokeDashoffset: [50, -50] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        ) : (
          <motion.line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="2"
            strokeDasharray="10 40"
            animate={{ strokeDashoffset: [50, -50] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        )
      )}
    </svg>
  );
}
