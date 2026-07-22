"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSplashTimeline } from "./hooks/useSplashTimeline";
import { BackgroundEffects } from "./BackgroundEffects";
import { LogoReveal } from "./LogoReveal";
import { BootLog } from "./BootLog";
import { GitTimeline } from "./GitTimeline";
import { TransitionController } from "./TransitionController";

export default function SplashScreen() {
  const { phase } = useSplashTimeline();

  if (phase === "done") {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="techspace-splash-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="splash-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#020202] text-white"
        aria-hidden="true"
      >
        <BackgroundEffects />

        <TransitionController phase={phase}>
          <LogoReveal isVisible={true} />
          <BootLog phase={phase} />
          <GitTimeline phase={phase} />
        </TransitionController>
      </motion.div>
    </AnimatePresence>
  );
}
