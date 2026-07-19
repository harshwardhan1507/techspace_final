"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap } from "lucide-react";

interface AIVisualProps {
  accentColor: string;
}

export function AIVisual({ accentColor }: AIVisualProps) {
  const nodes = [
    { id: 0, x: 25, y: 35, delay: 0.2 },
    { id: 1, x: 75, y: 20, delay: 0.8 },
    { id: 2, x: 15, y: 75, delay: 1.5 },
    { id: 3, x: 85, y: 80, delay: 0.5 },
    { id: 4, x: 45, y: 15, delay: 1.1 },
    { id: 5, x: 55, y: 85, delay: 0.3 },
    { id: 6, x: 95, y: 50, delay: 1.8 },
    { id: 7, x: 5, y: 50, delay: 0.9 },
    { id: 8, x: 35, y: 65, delay: 1.4 },
    { id: 9, x: 65, y: 40, delay: 0.7 },
    { id: 10, x: 80, y: 65, delay: 1.2 },
    { id: 11, x: 20, y: 20, delay: 0.6 },
  ];

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full h-full min-h-[200px] overflow-hidden">
      {/* Neural network nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            backgroundColor: hexToRgba(accentColor, 0.6),
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {nodes.slice(0, 8).map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              animate={{
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
            backgroundColor: hexToRgba(accentColor, 0.8),
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central brain icon */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl border backdrop-blur-sm"
        style={{
          background: `linear-gradient(to bottom right, ${hexToRgba(accentColor, 0.2)}, ${hexToRgba(accentColor, 0.05)})`,
          borderColor: hexToRgba(accentColor, 0.3),
        }}
      >
        <Brain className="w-12 h-12" style={{ color: accentColor }} />
      </motion.div>

      {/* Floating spark */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
          rotate: [0, 180]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-4 right-4"
      >
        <Zap className="w-5 h-5" style={{ color: accentColor }} />
      </motion.div>

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${hexToRgba(accentColor, 0.3)} 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${hexToRgba(accentColor, 0.3)} 0%, transparent 50%)`
        }}
      />
    </div>
  );
}
