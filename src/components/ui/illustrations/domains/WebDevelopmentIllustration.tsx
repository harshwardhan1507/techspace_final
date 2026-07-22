"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, Tablet } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Domain 2: Web Development
 * Hero Motion: Browser smoothly transforms between Desktop, Tablet, and Mobile layouts.
 */
export function WebDevelopmentIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[200px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-6">
      <GlowLayer color={accentColor} opacity={0.15} position="center" />

      {/* Responsive Morphed Browser Container */}
      <motion.div
        animate={{
          width: ["240px", "160px", "100px", "240px"],
          height: ["110px", "125px", "140px", "110px"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex flex-col justify-between rounded-xl bg-neutral-900/90 border border-blue-500/40 p-3 shadow-2xl backdrop-blur-md overflow-hidden z-10"
      >
        {/* Minimal Browser Header */}
        <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-[10px] font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <span className="text-blue-300 font-semibold flex items-center gap-1">
            <Globe className="w-3 h-3 text-blue-400" />
            techspace.dev
          </span>
        </div>

        {/* Minimal Responsive Content Skeleton */}
        <div className="flex-1 my-2 flex flex-col justify-between gap-1.5">
          <div className="w-full h-3 rounded bg-blue-500/25 border border-blue-500/30" />
          <div className="flex gap-1.5 flex-1">
            <div className="flex-1 rounded bg-neutral-800/80 border border-neutral-700/50" />
            <div className="flex-1 rounded bg-blue-500/15 border border-blue-500/20" />
          </div>
        </div>

        {/* Viewport Indicator Badge */}
        <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-blue-400 pt-1 border-t border-neutral-800/60">
          <Monitor className="w-3 h-3" />
          <Tablet className="w-3 h-3 opacity-60" />
          <Smartphone className="w-3 h-3 opacity-60" />
          <span>Responsive Layout</span>
        </div>
      </motion.div>
    </div>
  );
}
