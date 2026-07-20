"use client";

import React from "react";

export function BackgroundDecor() {
  return (
    <>
      {/* Radial glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#4682B4] rounded-full blur-[150px] opacity-[0.03]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#4682B4] rounded-full blur-[120px] opacity-[0.02]" />
      
      {/* Blueprint/grid pattern spanning entire section at 2-4% opacity */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </>
  );
}
