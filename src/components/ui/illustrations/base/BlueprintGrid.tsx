"use client";

import React from "react";

interface BlueprintGridProps {
  size?: number;
  opacity?: number;
}

export function BlueprintGrid({ size = 20, opacity = 0.03 }: BlueprintGridProps) {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`
      }}
    />
  );
}
