"use client";

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Target, Award } from "lucide-react";

export function GrowVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-black/20 border border-white/5 rounded-2xl">
      {/* Abstract Upward Trend Canvas */}
      <div className="absolute inset-0 flex items-end justify-start p-10 opacity-60">
        <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            d="M 10 140 C 40 140, 60 100, 90 90 C 120 80, 140 40, 190 20"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Milestones */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-[20%] right-[15%] flex flex-col items-center gap-2"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <Award className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="w-16 h-1 bg-white/20 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-[45%] left-[45%] flex flex-col items-center gap-2"
      >
        <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-md">
          <Target className="w-4 h-4 text-purple-400" />
        </div>
      </motion.div>

      {/* Stats Card Abstract */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-[15%] left-[10%] bg-black/80 border border-white/10 rounded-lg p-4 shadow-2xl backdrop-blur-xl flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
          <TrendingUp className="w-5 h-5 text-blue-400" />
        </div>
        <div className="space-y-2">
          <div className="w-24 h-2 bg-white/20 rounded-full" />
          <div className="flex gap-1">
            <div className="w-8 h-1.5 bg-blue-400/80 rounded-full" />
            <div className="w-4 h-1.5 bg-white/10 rounded-full" />
            <div className="w-4 h-1.5 bg-white/10 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
