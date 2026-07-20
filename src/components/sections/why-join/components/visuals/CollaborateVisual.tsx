"use client";

import React from "react";
import { motion } from "motion/react";
import { GitMerge, Users, MessageSquare } from "lucide-react";

export function CollaborateVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-black/20 border border-white/5 rounded-2xl">
      {/* Node Network Abstract */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="relative w-48 h-48">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute bottom-1/4 left-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-1/4 right-0 w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center"
          >
            <div className="w-3 h-3 rounded-full bg-purple-400" />
          </motion.div>
          
          {/* SVG connecting lines */}
          <svg className="absolute inset-0 w-full h-full -z-10" style={{ strokeDasharray: "4 4" }}>
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              x1="50%" y1="16px" x2="20px" y2="75%"
              stroke="rgba(255,255,255,0.1)" strokeWidth="1"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              x1="50%" y1="16px" x2="calc(100% - 24px)" y2="75%"
              stroke="rgba(255,255,255,0.1)" strokeWidth="1"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              x1="20px" y1="75%" x2="calc(100% - 24px)" y2="75%"
              stroke="rgba(255,255,255,0.1)" strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Floating Team Elements */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-[20%] left-[10%] bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-2xl flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center">
          <Users className="w-4 h-4 text-white" />
        </div>
        <div className="space-y-1.5">
          <div className="w-16 h-1.5 bg-white/20 rounded-full" />
          <div className="w-10 h-1.5 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-[25%] right-[10%] bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-xl flex flex-col gap-2"
      >
        <div className="flex items-center gap-2">
          <GitMerge className="w-4 h-4 text-purple-400" />
          <div className="w-12 h-1.5 bg-white/20 rounded-full" />
        </div>
        <div className="flex items-center gap-2 pl-6 opacity-60">
          <MessageSquare className="w-3 h-3 text-slate-400" />
          <div className="w-16 h-1 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      {/* Abstract Contribution Graph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 opacity-40"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            {Array.from({ length: 3 }).map((_, j) => (
              <div
                key={j}
                className="w-2 h-2 rounded-[2px]"
                style={{
                  backgroundColor: Math.random() > 0.6 ? 'rgba(56, 189, 248, 0.4)' : 'rgba(255, 255, 255, 0.05)'
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
