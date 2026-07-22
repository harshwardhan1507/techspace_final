"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, AppWindow, Layers, CheckCircle2 } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Domain 6: Mobile Development
 * Hero Motion: Phone rotates slightly → Widgets animate into place → Android & iOS icons illuminate → Loop.
 */
export function MobileIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[200px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-6">
      <GlowLayer color={accentColor} opacity={0.18} position="center" />

      {/* Central Hero Composition */}
      <div className="relative flex flex-col items-center justify-center gap-4 z-10 w-full">
        {/* Rotating Minimal Smartphone Frame */}
        <motion.div
          animate={{
            rotate: [-6, 6, -6],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-20 h-28 rounded-2xl bg-neutral-900/90 border-2 border-pink-500/40 p-2 shadow-2xl backdrop-blur-md flex flex-col justify-between"
        >
          {/* Top Notch */}
          <div className="w-6 h-1 rounded-full bg-neutral-700 mx-auto" />

          {/* Animated Widgets Falling/Fading into Place */}
          <div className="flex-1 my-1.5 rounded-lg bg-neutral-950 border border-neutral-800 p-1.5 flex flex-col gap-1.5 justify-center overflow-hidden">
            <motion.div
              animate={{ opacity: [0, 1, 1], y: [-6, 0, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="w-full h-3 rounded bg-pink-500/30 border border-pink-500/40 flex items-center px-1 text-[7px] font-mono text-pink-300 font-bold"
            >
              &lt;Flutter /&gt;
            </motion.div>
            <motion.div
              animate={{ opacity: [0, 1, 1], y: [-6, 0, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
              className="w-full h-6 rounded bg-neutral-800 border border-neutral-700/60 p-1 flex flex-col gap-1"
            >
              <div className="w-3/4 h-1.5 bg-pink-400/40 rounded" />
              <div className="w-1/2 h-1 bg-neutral-600 rounded" />
            </motion.div>
          </div>

          {/* Home Indicator */}
          <div className="w-6 h-0.5 rounded-full bg-neutral-600 mx-auto" />
        </motion.div>

        {/* Target Store Icons Illuminating */}
        <motion.div
          animate={{
            opacity: [0, 0, 1, 1, 0],
            y: [6, 6, 0, 0, -4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/40 text-xs font-mono text-pink-300 backdrop-blur-md shadow-xl"
        >
          <AppWindow className="w-3.5 h-3.5 text-pink-400" />
          <span className="font-bold">Android &amp; iOS Illuminated</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        </motion.div>
      </div>
    </div>
  );
}
