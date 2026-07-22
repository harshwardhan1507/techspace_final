"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCheck, Trophy } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Event 6: DSA & Contest Practice
 * Hero Motion: Code submitted → Testcases evaluate → Shield / Rank badge glows → Loop.
 */
export function ContestIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[180px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-5">
      <GlowLayer color={accentColor} opacity={0.16} position="center" />

      {/* Central Hero Composition */}
      <div className="relative flex flex-col items-center justify-center gap-3 z-10 w-full max-w-[240px]">
        {/* Animated Submission Node */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 1, 0.5],
            scale: [0.98, 1, 1, 0.98],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-xl backdrop-blur-md"
        >
          <CheckCheck className="w-4 h-4 text-emerald-400" />
          <span>Solution Submitted</span>
        </motion.div>

        {/* Evaluation Shield Glow Core */}
        <motion.div
          animate={{
            scale: [0.9, 1.15, 1],
            boxShadow: [
              "0 0 0px rgba(16,185,129,0)",
              "0 0 25px rgba(16,185,129,0.5)",
              "0 0 10px rgba(16,185,129,0.2)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="p-2.5 rounded-full bg-emerald-950/70 border border-emerald-400 text-emerald-300 shadow-2xl"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
        </motion.div>

        {/* Rank & Passed Badge Output */}
        <motion.div
          animate={{
            opacity: [0, 0, 1, 1, 0],
            y: [6, 6, 0, 0, -4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-300 backdrop-blur-md shadow-xl"
        >
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-bold">All Testcases Passed • Rank #1</span>
        </motion.div>
      </div>
    </div>
  );
}
