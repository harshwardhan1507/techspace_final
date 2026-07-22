"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageSquareCode, CheckCircle2 } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Event 4: AI & Open Source Session
 * Hero Motion: Prompt appears → AI processes → Particles glow → Response card appears → Loop.
 */
export function CommunityMonthIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[180px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-5">
      <GlowLayer color={accentColor} opacity={0.16} position="center" />

      {/* Central Hero Composition */}
      <div className="relative flex flex-col items-center justify-center gap-3 z-10 w-full max-w-[240px]">
        {/* User Prompt Input Card */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 1, 0.5],
            scale: [0.98, 1, 1, 0.98],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-indigo-500/40 text-xs font-mono text-indigo-300 shadow-xl backdrop-blur-md"
        >
          <MessageSquareCode className="w-3.5 h-3.5 text-indigo-400" />
          <span>Prompt: "Build UI component"</span>
        </motion.div>

        {/* AI Processing Glow Core */}
        <motion.div
          animate={{
            scale: [0.9, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="p-2.5 rounded-full bg-indigo-950/70 border border-indigo-400 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
        >
          <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
        </motion.div>

        {/* Response Output Card */}
        <motion.div
          animate={{
            opacity: [0, 0, 1, 1, 0],
            y: [6, 6, 0, 0, -4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-400 backdrop-blur-md shadow-xl"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-bold">Component Generated!</span>
        </motion.div>
      </div>
    </div>
  );
}
