"use client";

import React from "react";
import { GitBranch, GitCommit } from "lucide-react";
import { BlueprintGrid } from "../base/BlueprintGrid";
import { GlowLayer } from "../base/GlowLayer";
import { FloatingIcon } from "../shared/FloatingIcon";
import { IllustrationProps } from "@/config/registry/illustrations";

export function GitIllustration({ accentColor }: IllustrationProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full h-full min-h-[160px] overflow-hidden rounded-xl">
      <GlowLayer color={accentColor} opacity={0.1} position="left" />
      <BlueprintGrid opacity={0.02} />
      
      {/* Git Graph Concept */}
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-70">
        <div className="relative w-full h-1 bg-neutral-800" style={{ maxWidth: '60%' }}>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
          {/* Branch line */}
          <div className="absolute top-1/2 left-1/4 w-1/2 h-10 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: accentColor }} />
          <div className="absolute top-[calc(50%-2.5rem)] right-1/4 w-3 h-3 rounded-full translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: accentColor }} />
        </div>
      </div>

      <FloatingIcon 
        Icon={GitBranch} 
        color={accentColor} 
        position={{ top: "10%", left: "10%" }} 
      />
      <FloatingIcon 
        Icon={GitCommit} 
        color={accentColor} 
        position={{ bottom: "10%", right: "10%" }} 
        animation={{ y: [0, 6, 0], duration: 4.5, delay: 0.3 }}
      />
    </div>
  );
}
