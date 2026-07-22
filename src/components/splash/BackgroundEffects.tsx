"use client";

import React from "react";
import { BlueprintGrid } from "@/components/ui/illustrations/base/BlueprintGrid";
import { GlowLayer } from "@/components/ui/illustrations/base/GlowLayer";
import { NoiseLayer } from "@/components/ui/NoiseLayer";
import { colors } from "@/design/tokens/colors";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Near-black base background */}
      <div className="absolute inset-0 bg-[#020202]" />

      {/* Blueprint Grid */}
      <BlueprintGrid size={32} opacity={0.03} />

      {/* Soft Radial Glow */}
      <GlowLayer color={colors.programming} opacity={0.08} position="center" />

      {/* Subtle Noise Texture */}
      <NoiseLayer opacity={0.025} />

      {/* Vignette Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 40%, rgba(2, 2, 2, 0.8) 100%)"
        }}
      />
    </div>
  );
}
