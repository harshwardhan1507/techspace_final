"use client";

import React from "react";
import { Trophy, Braces } from "lucide-react";
import { BlueprintGrid } from "../base/BlueprintGrid";
import { GlowLayer } from "../base/GlowLayer";
import { FloatingIcon } from "../shared/FloatingIcon";
import { IllustrationProps } from "@/config/registry/illustrations";

export function CPIllustration({ accentColor }: IllustrationProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full h-full min-h-[160px] overflow-hidden rounded-xl">
      <GlowLayer color={accentColor} opacity={0.1} position="right" />
      <BlueprintGrid opacity={0.03} />
      
      {/* Algorithm Graph Concept */}
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-70">
        <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
           <path d="M40 50 L80 20 L120 50 L160 20" fill="none" stroke={hexToRgba(accentColor, 0.4)} strokeWidth="2" strokeDasharray="4 4" />
           <path d="M40 50 L80 80 L120 50 L160 80" fill="none" stroke={hexToRgba(accentColor, 0.4)} strokeWidth="2" strokeDasharray="4 4" />
           <circle cx="40" cy="50" r="5" fill={accentColor} />
           <circle cx="80" cy="20" r="5" fill={accentColor} />
           <circle cx="80" cy="80" r="5" fill={accentColor} />
           <circle cx="120" cy="50" r="5" fill={accentColor} />
           <circle cx="160" cy="20" r="5" fill={accentColor} />
           <circle cx="160" cy="80" r="5" fill={accentColor} />
        </svg>
      </div>

      <FloatingIcon 
        Icon={Trophy} 
        color={accentColor} 
        position={{ top: "15%", right: "15%" }} 
      />
      <FloatingIcon 
        Icon={Braces} 
        color={accentColor} 
        position={{ bottom: "15%", left: "15%" }} 
        animation={{ y: [0, 5, 0], duration: 4.5, delay: 0.3 }}
      />
    </div>
  );
}
