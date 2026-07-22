"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  Icon: LucideIcon;
  color: string;
  position: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
  animation?: {
    y?: number[];
    x?: number[];
    rotate?: number[];
    duration?: number;
    delay?: number;
  };
  size?: number;
}

export function FloatingIcon({ 
  Icon, 
  color, 
  position, 
  animation = { y: [0, -10, 0], rotate: [0, 5, 0], duration: 4, delay: 0 },
  size = 24
}: FloatingIconProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <motion.div
      animate={{ 
        ...(animation.y && { y: animation.y }),
        ...(animation.x && { x: animation.x }),
        ...(animation.rotate && { rotate: animation.rotate })
      }}
      transition={{ 
        duration: animation.duration || 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animation.delay || 0
      }}
      className="absolute p-3 rounded-xl border backdrop-blur-sm shadow-xl z-20"
      style={{
        ...position,
        background: hexToRgba(color, 0.15),
        borderColor: hexToRgba(color, 0.3),
        boxShadow: `0 0 20px ${hexToRgba(color, 0.2)}`
      }}
    >
      <Icon style={{ color, width: size, height: size }} />
    </motion.div>
  );
}
