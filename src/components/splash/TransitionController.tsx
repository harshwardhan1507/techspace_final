"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplashPhase } from "./config/timeline";

interface TransitionControllerProps {
  phase: SplashPhase;
  children: React.ReactNode;
}

export function TransitionController({ phase, children }: TransitionControllerProps) {
  const isTransitioning = phase === "transition";

  return (
    <motion.div
      animate={
        isTransitioning
          ? { opacity: 0, scale: 1.03, y: -20 }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center justify-center w-full h-full"
    >
      {children}
    </motion.div>
  );
}
