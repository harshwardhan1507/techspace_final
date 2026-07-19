"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechChipProps {
  technology: string;
  index: number;
  accentColor?: string;
}

export function TechChip({ technology, index, accentColor }: TechChipProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const chipAccent = accentColor ? hexToRgba(accentColor, 0.15) : 'rgba(255, 255, 255, 0.05)';
  const chipBorder = accentColor ? hexToRgba(accentColor, 0.3) : 'rgba(255, 255, 255, 0.1)';
  const chipHover = accentColor ? hexToRgba(accentColor, 0.25) : 'rgba(255, 255, 255, 0.1)';
  const chipText = accentColor ? accentColor : 'rgba(255, 255, 255, 0.7)';

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05 + 0.2 
      }}
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg border hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
      style={{
        background: chipAccent,
        borderColor: chipBorder,
        color: chipText,
      }}
      whileHover={{
        background: chipHover,
        boxShadow: accentColor ? `0 0 15px ${hexToRgba(accentColor, 0.3)}` : '0 0 15px rgba(255, 255, 255, 0.1)',
      }}
    >
      {technology}
    </motion.span>
  );
}
