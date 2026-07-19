"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code2 } from "lucide-react";

interface CompProgVisualProps {
  accentColor: string;
}

export function CompProgVisual({ accentColor }: CompProgVisualProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Simple binary tree nodes for abstract algorithmic representation
  const treeNodes = [
    { id: 0, x: 50, y: 20 },
    { id: 1, x: 30, y: 50 },
    { id: 2, x: 70, y: 50 },
    { id: 3, x: 20, y: 80 },
    { id: 4, x: 40, y: 80 },
    { id: 5, x: 60, y: 80 },
    { id: 6, x: 80, y: 80 },
  ];

  const treeEdges = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
  ];

  return (
    <div className="relative w-full h-full min-h-[90px] overflow-hidden">
      {/* Abstract tree background */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        {/* Edges */}
        {treeEdges.map((edge, i) => {
          const fromNode = treeNodes[edge.from];
          const toNode = treeNodes[edge.to];
          return (
            <motion.line
              key={`edge-${i}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke={hexToRgba(accentColor, 0.3)}
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{
                strokeDashoffset: [0, -20],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          );
        })}

        {/* Nodes */}
        {treeNodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill={hexToRgba(accentColor, 0.2)}
            stroke={hexToRgba(accentColor, 0.8)}
            strokeWidth="1.5"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Floating Trophy Icon */}
      <motion.div
        animate={{ 
          y: [0, -4, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-xl border backdrop-blur-md shadow-xl"
        style={{
          background: `linear-gradient(to bottom right, ${hexToRgba(accentColor, 0.2)}, ${hexToRgba(accentColor, 0.05)})`,
          borderColor: hexToRgba(accentColor, 0.4),
          boxShadow: `0 0 15px ${hexToRgba(accentColor, 0.2)}`
        }}
      >
        <Trophy className="w-6 h-6" style={{ color: accentColor }} />
      </motion.div>

      {/* Subtle floating code bracket */}
      <motion.div
        animate={{ 
          rotate: [0, 10, 0],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-2 left-2 p-1.5 rounded-lg border backdrop-blur-sm"
        style={{
          backgroundColor: hexToRgba(accentColor, 0.1),
          borderColor: hexToRgba(accentColor, 0.2)
        }}
      >
        <Code2 className="w-4 h-4" style={{ color: hexToRgba(accentColor, 0.8) }} />
      </motion.div>

      {/* Subtle gradient glow overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${hexToRgba(accentColor, 0.4)} 0%, transparent 60%)`
        }}
      />
    </div>
  );
}
