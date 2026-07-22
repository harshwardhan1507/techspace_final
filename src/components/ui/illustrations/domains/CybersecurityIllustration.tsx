"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, ShieldAlert } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Domain 4: Cybersecurity
 * Hero Motion: Network packets move → Malicious packet blocked → Shield glows → Loop.
 */
export function CybersecurityIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[200px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-6">
      <GlowLayer color={accentColor} opacity={0.18} position="center" />

      {/* Central Hero Composition */}
      <div className="relative flex flex-col items-center justify-center gap-4 z-10 w-full">
        {/* Packets Movement Path */}
        <div className="relative w-full max-w-[220px] h-1 bg-neutral-800 rounded-full flex items-center justify-between">
          {/* Safe Packet Stream */}
          <motion.div
            animate={{ x: ["0px", "200px"], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10B981]"
          />

          {/* Malicious Packet Blocked Animation */}
          <motion.div
            animate={{
              x: ["0px", "100px", "100px"],
              opacity: [0, 1, 0],
              scale: [1, 1, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-0 w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_#EF4444]"
          />

          {/* Glowing Shield Interceptor Core */}
          <motion.div
            animate={{
              scale: [0.95, 1.15, 1],
              boxShadow: [
                "0 0 10px rgba(16,185,129,0.2)",
                "0 0 35px rgba(16,185,129,0.6)",
                "0 0 15px rgba(16,185,129,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 p-3.5 rounded-2xl bg-neutral-900/90 border border-emerald-500/50 shadow-2xl backdrop-blur-md"
          >
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
          </motion.div>
        </div>

        {/* Security Status Badge */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300 backdrop-blur-md mt-2"
        >
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold">Threat Intercepted • SSL Secured</span>
        </motion.div>
      </div>
    </div>
  );
}
