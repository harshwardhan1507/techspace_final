"use client";

import React from "react";
import { motion } from "framer-motion";
import { gitCommits } from "./data/gitCommits";
import { SplashPhase } from "./config/timeline";

interface GitTimelineProps {
  phase: SplashPhase;
}

export function GitTimeline({ phase }: GitTimelineProps) {
  const isVisible = phase === "git-timeline" || phase === "repo-ready" || phase === "transition";

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto my-6 px-4"
    >
      <div className="relative border-l-2 border-neutral-800/80 ml-4 pl-6 space-y-4">
        {/* Growing branch line overlay */}
        <motion.div
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute left-[-2px] top-0 w-0.5 bg-gradient-to-b from-sky-500 via-purple-500 to-emerald-500"
        />

        {gitCommits.map((commit, index) => (
          <motion.div
            key={commit.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: index * 0.12 }}
            className="flex items-center gap-3 relative"
          >
            {/* Commit node dot */}
            <div 
              className="absolute -left-[31px] w-3 h-3 rounded-full border-2 border-[#020202] z-10 transition-transform duration-300 hover:scale-125"
              style={{ backgroundColor: commit.color }}
            />

            <span className="font-mono text-[11px] text-neutral-500 bg-neutral-900/60 px-1.5 py-0.5 rounded border border-neutral-800">
              {commit.hash}
            </span>

            <span className="text-xs md:text-sm font-medium text-neutral-200">
              {commit.title}
            </span>
          </motion.div>
        ))}

        {/* HEAD Pointer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase === "repo-ready" || phase === "transition" ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400"
        >
          <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
            HEAD → techspace/main
          </span>
          <span className="text-neutral-400">• Repository Ready</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
