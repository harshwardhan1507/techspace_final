"use client";

import React from "react";
import { Shield, Lock } from "lucide-react";
import { BlueprintGrid } from "../base/BlueprintGrid";
import { GlowLayer } from "../base/GlowLayer";
import { FloatingIcon } from "../shared/FloatingIcon";
import { IllustrationProps } from "@/config/registry/illustrations";

export function CyberIllustration({ accentColor }: IllustrationProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="relative w-full h-full min-h-[160px] overflow-hidden rounded-xl">
      <GlowLayer color={accentColor} opacity={0.1} position="bottom" />
      <BlueprintGrid opacity={0.03} size={30} />
      
      {/* Central Shield Concept */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
         {/* Concentric rings */}
         <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-dashed animate-[spin_10s_linear_infinite]" style={{ borderColor: hexToRgba(accentColor, 0.3) }} />
         <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-dotted animate-[spin_15s_linear_infinite_reverse]" style={{ borderColor: hexToRgba(accentColor, 0.4) }} />
      </div>

      <FloatingIcon 
        Icon={Shield} 
        color={accentColor} 
        position={{ top: "20%", right: "20%" }} 
        animation={{ y: [0, -5, 0], duration: 4 }}
      />
      <FloatingIcon 
        Icon={Lock} 
        color={accentColor} 
        position={{ bottom: "20%", left: "20%" }} 
        animation={{ y: [0, 5, 0], duration: 5, delay: 0.5 }}
      />
    </div>
  );
}
