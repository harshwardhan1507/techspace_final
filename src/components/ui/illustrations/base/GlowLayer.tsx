"use client";

import React from "react";

interface GlowLayerProps {
  color: string;
  opacity?: number;
  position?: "center" | "top" | "bottom" | "left" | "right";
}

export function GlowLayer({ color, opacity = 0.15, position = "center" }: GlowLayerProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const getPositionStyles = () => {
    switch (position) {
      case "top": return "radial-gradient(ellipse at 50% 0%, %color%, transparent 70%)";
      case "bottom": return "radial-gradient(ellipse at 50% 100%, %color%, transparent 70%)";
      case "left": return "radial-gradient(ellipse at 0% 50%, %color%, transparent 70%)";
      case "right": return "radial-gradient(ellipse at 100% 50%, %color%, transparent 70%)";
      case "center":
      default: return "radial-gradient(circle at 50% 50%, %color%, transparent 70%)";
    }
  };

  const gradientTemplate = getPositionStyles();
  const background = gradientTemplate.replace("%color%", hexToRgba(color, opacity));

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ background }}
    />
  );
}
