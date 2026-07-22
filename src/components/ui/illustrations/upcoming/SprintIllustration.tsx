"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy, Rocket } from "lucide-react";
import { GlowLayer } from "../base/GlowLayer";
import { IllustrationProps } from "@/config/registry/illustrations";

/**
 * Event 5: Hackathon / Build Sprint
 * Hero Motion: Idea card appears → Team avatars connect → Prototype grows → Trophy softly glows → Loop.
 */
export function SprintIllustration({ accentColor }: IllustrationProps) {
  return (
    <div className="relative w-full h-full min-h-[180px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#030305] p-5">
      <GlowLayer color={accentColor} opacity={0.16} position="center" />

      {/* Central Hero Composition */}
      <div className="relative flex flex-col items-center justify-center gap-3 z-10 w-full max-w-[240px]">
        {/* Step 1: Idea Card */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 1, 0.5],
            y: [-4, 0, 0, -4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-pink-500/40 text-xs font-mono text-pink-300 shadow-xl backdrop-blur-md"
        >
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-bold">Hackathon Idea</span>
        </motion.div>

        {/* Step 2: Team Avatars Connected Node */}
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              scale: [0.9, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-pink-500/30 text-[10px] font-mono text-neutral-300 shadow-lg"
          >
            <Users className="w-3.5 h-3.5 text-pink-400" />
            <span>Team Assembled</span>
          </motion.div>

          <motion.div
            animate={{
              scale: [0.9, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="p-1.5 rounded-full bg-pink-950 border border-pink-400 text-pink-300 shadow-lg"
          >
            <Rocket className="w-3.5 h-3.5 text-pink-400" />
          </motion.div>
        </div>

        {/* Step 3: Trophy Glowing Output */}
        <motion.div
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [0.9, 0.9, 1.1, 1, 0.9],
            boxShadow: [
              "0 0 0px rgba(245,158,11,0)",
              "0 0 30px rgba(245,158,11,0.5)",
              "0 0 10px rgba(245,158,11,0.2)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-mono text-amber-300 backdrop-blur-md shadow-xl"
        >
          <Trophy className="w-4 h-4 text-amber-400" />
          <span className="font-bold">Prototype Winner!</span>
        </motion.div>
      </div>
    </div>
  );
}
