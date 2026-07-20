"use client";

import React from "react";
import { motion } from "motion/react";
import { GitBranch, Box, Database, Blocks } from "lucide-react";

export function BuildVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-black/20 border border-white/5 rounded-2xl">
      {/* Abstract Architecture Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute w-[85%] h-[75%] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-xl flex flex-col justify-center items-center gap-6"
      >
        {/* Top layer (e.g., UI / Client) */}
        <div className="flex gap-4">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-12 bg-blue-500/10 border border-blue-500/20 rounded-md flex items-center justify-center backdrop-blur-sm shadow-lg"
          >
            <Box className="w-5 h-5 text-blue-400 opacity-80" />
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-16 h-12 bg-blue-500/10 border border-blue-500/20 rounded-md flex items-center justify-center backdrop-blur-sm shadow-lg"
          >
            <Box className="w-5 h-5 text-blue-400 opacity-80" />
          </motion.div>
        </div>

        {/* Connecting lines */}
        <div className="relative w-full h-8 flex justify-center opacity-30">
          <div className="absolute w-[1px] h-full bg-blue-400" />
          <div className="absolute top-1/2 w-16 h-[1px] bg-blue-400" />
        </div>

        {/* Middle layer (e.g., API / Server) */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-32 h-14 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg"
        >
          <Blocks className="w-6 h-6 text-purple-400 opacity-80" />
        </motion.div>

        {/* Connecting lines */}
        <div className="relative w-full h-8 flex justify-center opacity-30">
          <div className="absolute w-[1px] h-full bg-purple-400" />
        </div>

        {/* Bottom layer (e.g., Database) */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-24 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-md flex items-center justify-center backdrop-blur-sm shadow-lg"
        >
          <Database className="w-5 h-5 text-emerald-400 opacity-80" />
        </motion.div>
      </motion.div>

      {/* Abstract Git Graph Overlay */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-6 left-6 flex flex-col gap-2 opacity-60"
      >
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-slate-400" />
          <span className="font-mono text-[10px] text-slate-400">main</span>
        </div>
        <div className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-blue-500/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
