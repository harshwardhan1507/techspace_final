"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, CheckCircle2, Cpu } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Event 1: Intro to Programming Workshop
 * Hero Motion: Cursor blinks → Beginner code types → Compile glows → Success check appears → Loop.
 */
export function WorkshopIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[180px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-5">
      <GlowLayer color={accentColor} opacity={0.16} position="center" />

      {/* Central Hero Composition */}
      <div className="relative flex flex-col items-center justify-center gap-3 z-10 w-full max-w-[240px]">
        {/* Typing Code Card */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 1, 0.5],
            scale: [0.98, 1, 1, 0.98],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-sky-500/40 text-xs font-mono text-sky-300 shadow-xl backdrop-blur-md"
        >
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-purple-400">print</span>
          <span className="text-amber-300">(&quot;Hello TechSpace!&quot;)</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-1.5 h-3.5 bg-sky-400 inline-block rounded-sm"
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
          className="p-2.5 rounded-full bg-sky-950/70 border border-sky-500/40 text-sky-400 shadow-2xl"
        >
          <Cpu className="w-5 h-5 text-sky-400" />
        </motion.div>

        {/* Success Output Badge */}
        <motion.div
          animate={{
            opacity: [0, 0, 1, 1, 0],
            y: [6, 6, 0, 0, -4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-400 shadow-xl backdrop-blur-md"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold">Output: Hello TechSpace!</span>
        </motion.div>
      </div>
    </div>
  );
}
