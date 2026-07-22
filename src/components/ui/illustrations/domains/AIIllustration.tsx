"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Domain 3: Artificial Intelligence
 * Hero Motion: Glowing particles gather → Neural shape forms → Prediction card appears → Loop.
 */
export function AIIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[200px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-6">
      <GlowLayer color={accentColor} opacity={0.18} position="center" />

      {/* Central Hero Composition */}
      <div className="relative flex flex-col items-center justify-center gap-4 z-10 w-full">
        {/* Gathering Glowing Neural Core */}
        <motion.div
          animate={{
            scale: [0.85, 1.1, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-16 h-16 rounded-full border border-cyan-400/40 bg-cyan-950/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        >
          {/* Orbital Particles */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-8px] rounded-full border border-dashed border-cyan-400/30"
          />

          <BrainCircuit className="w-8 h-8 text-cyan-400 animate-pulse" />
        </motion.div>

        {/* Prediction Card Reveal */}
        <motion.div
          animate={{
            opacity: [0, 0, 1, 1, 0],
            y: [10, 10, 0, 0, -6],
            scale: [0.95, 0.95, 1, 1, 0.95],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-mono text-cyan-300 shadow-xl backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold">Prediction: 98.4%</span>
        </motion.div>
      </div>
    </div>
  );
}
