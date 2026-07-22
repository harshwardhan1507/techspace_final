"use client";

import React from "react";

interface NoiseLayerProps {
  opacity?: number;
}

export function NoiseLayer({ opacity = 0.03 }: NoiseLayerProps) {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-10"
      style={{ opacity }}
    >
      <svg className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
