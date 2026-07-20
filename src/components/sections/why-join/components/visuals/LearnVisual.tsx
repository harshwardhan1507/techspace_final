"use client";

import React from "react";
import { motion } from "motion/react";
import { Code2, Terminal } from "lucide-react";

export function LearnVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-black/20 border border-white/5 rounded-2xl">
      {/* Abstract Editor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute w-[80%] h-[60%] bg-[#0f1115] border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden top-[15%] left-[10%]"
      >
        <div className="h-8 border-b border-white/10 flex items-center px-4 space-x-2 bg-white/[0.02]">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="p-4 space-y-3 font-mono text-xs opacity-70">
          <div className="flex space-x-3">
            <span className="text-blue-400">import</span>
            <span className="text-emerald-300">{"{ useState }"}</span>
            <span className="text-blue-400">from</span>
            <span className="text-orange-300">"react"</span>
          </div>
          <div className="w-3/4 h-2 bg-white/5 rounded mt-2" />
          <div className="w-1/2 h-2 bg-white/5 rounded" />
          <div className="w-full h-2 bg-white/5 rounded" />
          <div className="w-5/6 h-2 bg-white/5 rounded" />
        </div>
      </motion.div>

      {/* Abstract Terminal */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="absolute w-[60%] h-[40%] bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl flex flex-col overflow-hidden bottom-[15%] right-[5%]"
      >
        <div className="h-6 border-b border-white/10 flex items-center px-3 space-x-2 bg-white/[0.05]">
          <Terminal className="w-3 h-3 text-slate-400" />
          <span className="text-[10px] text-slate-400 font-mono">bash</span>
        </div>
        <div className="p-3 font-mono text-xs space-y-2 opacity-80">
          <div className="flex space-x-2 text-emerald-400">
            <span>$</span>
            <span className="text-slate-300">npm run dev</span>
          </div>
          <div className="text-slate-500">v1.0.0 ready in 120ms</div>
          <div className="w-1/3 h-1.5 bg-blue-500/50 rounded mt-2" />
        </div>
      </motion.div>

      {/* Floating Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="absolute top-[10%] right-[15%] w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
      >
        <Code2 className="w-5 h-5 text-blue-400" />
      </motion.div>
    </div>
  );
}
