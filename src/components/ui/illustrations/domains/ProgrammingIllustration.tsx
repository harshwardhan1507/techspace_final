"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Domain 1: Programming
 * Hero Motion: Blinking cursor types code → Compile glows → Success check appears → Loop.
 */
export function ProgrammingIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[200px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-6">
      <GlowLayer color={accentColor} opacity={0.15} position="center" />

      {/* Hero Canvas - 3-5 Minimal Elements */}
      <div className="relative flex flex-col items-center justify-center gap-4 z-10 w-full max-w-[260px]">
        {/* Typing Code Bar */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 1, 0.4],
            scale: [0.98, 1, 1, 0.98],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-sky-500/30 text-xs font-mono text-sky-300 shadow-xl backdrop-blur-md"
        >
          <span className="text-purple-400">const</span>
          <span>solve</span>
          <span className="text-neutral-400">=</span>
          <span className="text-emerald-400 font-bold">()</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-1.5 h-4 bg-sky-400 inline-block rounded-sm"
          />
        </motion.div>

        {/* Compile Icon Glow */}
        <motion.div
          animate={{
            scale: [0.9, 1.15, 1],
            boxShadow: [
              "0 0 0px rgba(14,165,233,0)",
              "0 0 25px rgba(14,165,233,0.5)",
              "0 0 10px rgba(14,165,233,0.2)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="p-3 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-400 shadow-2xl"
        >
          <Cpu className="w-6 h-6" style={{ color: accentColor }} />
        </motion.div>

        {/* Success Check Badge */}
        <motion.div
          animate={{
            opacity: [0, 0, 1, 0],
            y: [8, 8, 0, -4],
            scale: [0.9, 0.9, 1, 0.95],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-400 shadow-xl backdrop-blur-md"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold">Compiled Successfully</span>
        </motion.div>
      </div>
    </div>
  );
}
