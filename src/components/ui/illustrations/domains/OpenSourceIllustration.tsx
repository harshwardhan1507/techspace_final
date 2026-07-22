"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, GitPullRequest, Check } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Domain 5: Open Source
 * Hero Motion: Commit appears → Branch extends → Merge happens → HEAD moves → Loop.
 */
export function OpenSourceIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[200px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-6">
      <GlowLayer color={accentColor} opacity={0.18} position="center" />

      {/* Central Hero Composition */}
      <div className="relative flex flex-col items-center justify-center gap-4 z-10 w-full max-w-[240px]">
        {/* Animated Git Timeline Track */}
        <div className="relative w-full h-12 flex items-center justify-between px-4">
          {/* Main Track Line */}
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-neutral-800" />

          {/* Extended Branch Arc */}
          <svg className="absolute inset-0 w-full h-full stroke-purple-500/60 fill-none">
            <motion.path
              d="M 20 24 C 60 0, 140 0, 180 24"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [40, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Commit Node 1 */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 p-2 rounded-full bg-neutral-900 border border-purple-500/40 text-purple-400 shadow-lg"
          >
            <GitCommit className="w-4 h-4" />
          </motion.div>

          {/* Branch Commit Node (Top Arc) */}
          <motion.div
            animate={{
              opacity: [0, 1, 1, 0],
              y: [12, -12, -12, 12],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 p-1.5 rounded-full bg-purple-900/80 border border-purple-400 text-purple-300 shadow-xl"
          >
            <GitBranch className="w-3.5 h-3.5" />
          </motion.div>

          {/* Merged HEAD Pointer Node */}
          <motion.div
            animate={{
              scale: [0.9, 1.1, 1],
              boxShadow: [
                "0 0 0px rgba(139,92,246,0)",
                "0 0 25px rgba(139,92,246,0.5)",
                "0 0 10px rgba(139,92,246,0.2)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="relative z-10 p-2 rounded-full bg-purple-950 border border-purple-400 text-purple-300 shadow-2xl"
          >
            <GitPullRequest className="w-4 h-4 text-emerald-400" />
          </motion.div>
        </div>

        {/* HEAD -> main Status Badge */}
        <motion.div
          animate={{
            opacity: [0, 0, 1, 1, 0],
            y: [6, 6, 0, 0, -4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-400 backdrop-blur-md shadow-xl"
        >
          <Check className="w-3.5 h-3.5" />
          <span className="font-bold">HEAD → main (PR Merged)</span>
        </motion.div>
      </div>
    </div>
  );
}
