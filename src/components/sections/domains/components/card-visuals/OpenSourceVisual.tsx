"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, GitMerge } from "lucide-react";

interface OpenSourceVisualProps {
  accentColor: string;
}

export function OpenSourceVisual({ accentColor }: OpenSourceVisualProps) {
  const branches = [
    { x: 20, y: 30, delay: 0 },
    { x: 50, y: 50, delay: 0.3 },
    { x: 80, y: 40, delay: 0.6 },
    { x: 35, y: 70, delay: 0.9 },
    { x: 65, y: 75, delay: 1.2 },
  ];

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full h-full min-h-[120px] overflow-hidden">
      {/* Git branch graph */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Connection lines */}
        {branches.map((branch, i) => {
          const nextBranch = branches[(i + 1) % branches.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${branch.x}%`}
              y1={`${branch.y}%`}
              x2={`${nextBranch.x}%`}
              y2={`${nextBranch.y}%`}
              stroke={hexToRgba(accentColor, 0.4)}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: branch.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Branch nodes */}
        {branches.map((branch, i) => (
          <motion.g
            key={`node-${i}`}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: branch.delay,
              ease: "easeInOut",
            }}
          >
            <circle
              cx={`${branch.x}%`}
              cy={`${branch.y}%`}
              r="6"
              fill={hexToRgba(accentColor, 0.2)}
              stroke={hexToRgba(accentColor, 0.6)}
              strokeWidth="2"
            />
            <circle
              cx={`${branch.x}%`}
              cy={`${branch.y}%`}
              r="3"
              fill={hexToRgba(accentColor, 0.8)}
            />
          </motion.g>
        ))}
      </svg>

      {/* Git branch icon */}
      <motion.div
        animate={{ 
          y: [0, -5, 0]
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
        <GitBranch className="w-5 h-5" style={{ color: accentColor }} />
      </motion.div>

      {/* Git merge icon */}
      <motion.div
        animate={{ 
          y: [0, 5, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute -bottom-1 -left-1 p-2 rounded-lg border backdrop-blur-sm"
        style={{
          backgroundColor: hexToRgba(accentColor, 0.2),
          borderColor: hexToRgba(accentColor, 0.4)
        }}
      >
        <GitMerge className="w-5 h-5" style={{ color: accentColor }} />
      </motion.div>

      {/* Contribution dots pattern */}
      <div className="absolute bottom-2 right-2 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: hexToRgba(accentColor, 0.6) }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
