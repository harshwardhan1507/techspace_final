"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, Tablet, Check } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Event 3: Web Development Bootcamp
 * Hero Motion: Browser appears → Desktop layout morphs to Tablet & Mobile → Deploy badge appears → Loop.
 */
export function BootcampIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[180px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-5">
      <GlowLayer color={accentColor} opacity={0.16} position="center" />

      {/* Responsive Morphed Browser Container */}
      <motion.div
        animate={{
          width: ["210px", "150px", "90px", "210px"],
          height: ["95px", "110px", "125px", "95px"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex flex-col justify-between rounded-xl bg-neutral-900/90 border border-blue-500/40 p-2.5 shadow-2xl backdrop-blur-md overflow-hidden z-10"
      >
        {/* Minimal Browser Header */}
        <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 text-[9px] font-mono text-neutral-400">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-blue-300 font-semibold flex items-center gap-1">
            <Globe className="w-2.5 h-2.5 text-blue-400" />
            bootcamp.dev
          </span>
        </div>

        {/* Minimal Responsive Content Skeleton */}
        <div className="flex-1 my-1.5 flex flex-col justify-between gap-1">
          <div className="w-full h-2.5 rounded bg-blue-500/25 border border-blue-500/30" />
          <div className="flex gap-1 flex-1">
            <div className="flex-1 rounded bg-neutral-800/80 border border-neutral-700/50" />
            <div className="flex-1 rounded bg-blue-500/15 border border-blue-500/20" />
          </div>
        </div>

        {/* Deploy Badge */}
        <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 pt-1 border-t border-neutral-800/60">
          <div className="flex items-center gap-1 text-blue-400">
            <Monitor className="w-2.5 h-2.5" />
            <Tablet className="w-2.5 h-2.5 opacity-60" />
            <Smartphone className="w-2.5 h-2.5 opacity-60" />
          </div>
          <span className="text-emerald-400 font-bold flex items-center gap-0.5">
            <Check className="w-2.5 h-2.5" /> Deployed 200 OK
          </span>
        </div>
      </motion.div>
    </div>
  );
}
