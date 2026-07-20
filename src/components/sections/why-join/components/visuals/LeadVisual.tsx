"use client";

import React from "react";
import { motion } from "motion/react";
import { Map, Milestone, Mic } from "lucide-react";

export function LeadVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-black/20 border border-white/5 rounded-2xl">
      {/* Abstract Roadmap Canvas */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-[70%] h-[80%] border-l border-white/10 ml-8 flex flex-col justify-between py-6"
        >
          {/* Milestone 1 */}
          <div className="relative flex items-center">
            <div className="absolute -left-[5px] w-2 h-2 rounded-full bg-white/20" />
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="ml-6 bg-white/[0.03] border border-white/10 rounded-lg p-3 w-48 shadow-lg backdrop-blur-sm"
            >
              <div className="w-16 h-1.5 bg-white/30 rounded-full mb-2" />
              <div className="w-full h-1 bg-white/10 rounded-full" />
              <div className="w-5/6 h-1 bg-white/10 rounded-full mt-1.5" />
            </motion.div>
          </div>

          {/* Milestone 2 (Active) */}
          <div className="relative flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -left-[7px] w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            />
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-6 bg-[#0f172a]/80 border border-blue-500/30 rounded-lg p-3 w-56 shadow-xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
              <div className="flex items-center gap-2 mb-2">
                <Milestone className="w-4 h-4 text-blue-400" />
                <div className="w-20 h-1.5 bg-blue-400/80 rounded-full" />
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full" />
              <div className="w-3/4 h-1 bg-white/20 rounded-full mt-1.5" />
            </motion.div>
          </div>

          {/* Milestone 3 */}
          <div className="relative flex items-center">
            <div className="absolute -left-[5px] w-2 h-2 rounded-full bg-white/10" />
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="ml-6 bg-white/[0.02] border border-white/5 rounded-lg p-3 w-40 opacity-50"
            >
              <div className="w-12 h-1.5 bg-white/20 rounded-full mb-2" />
              <div className="w-full h-1 bg-white/5 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Presentation Element */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-[10%] right-[10%] w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 backdrop-blur-md shadow-2xl"
      >
        <Mic className="w-6 h-6 text-indigo-400" />
        <div className="w-8 h-1 bg-indigo-400/50 rounded-full" />
      </motion.div>
      
      {/* Abstract Map Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bottom-[10%] right-[15%] w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10"
      >
        <Map className="w-4 h-4 text-slate-400" />
      </motion.div>
    </div>
  );
}
