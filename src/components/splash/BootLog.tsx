"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { bootMessages, easterEggCommands } from "./data/bootMessages";
import { SplashPhase } from "./config/timeline";

interface BootLogProps {
  phase: SplashPhase;
}

export function BootLog({ phase }: BootLogProps) {
  const [easterEgg, setEasterEgg] = useState<string | null>(null);

  useEffect(() => {
    // Pick a subtle random easter egg on mount
    const randomCmd = easterEggCommands[Math.floor(Math.random() * easterEggCommands.length)];
    setEasterEgg(randomCmd);
  }, []);

  const getVisibleCount = () => {
    switch (phase) {
      case "logo-reveal": return 0;
      case "boot-log": return 2;
      case "git-timeline": return 4;
      case "repo-ready":
      case "transition":
      case "done": return 5;
      default: return 0;
    }
  };

  const visibleCount = getVisibleCount();

  return (
    <div className="w-full max-w-md mx-auto my-4 text-xs font-mono text-neutral-400 space-y-1.5 px-4">
      {/* Optional Subtle Easter Egg Header */}
      {easterEgg && (
        <div className="text-neutral-600 mb-2 flex items-center gap-1.5">
          <span className="text-emerald-500/70">$</span>
          <span>{easterEgg}</span>
        </div>
      )}

      {bootMessages.slice(0, visibleCount).map((msg) => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2"
        >
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-neutral-300">{msg.label}</span>
        </motion.div>
      ))}

      {/* Terminal Blinking Cursor */}
      {phase !== "done" && phase !== "transition" && (
        <div className="flex items-center gap-1 text-neutral-500 pt-1">
          <span className="w-2 h-3.5 bg-sky-400/80 inline-block animate-[pulse_1s_infinite]" />
        </div>
      )}
    </div>
  );
}
