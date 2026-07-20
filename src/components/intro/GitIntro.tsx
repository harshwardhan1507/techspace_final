"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "./hooks/useIntro";
import { GitTimeline } from "./components/GitTimeline";
import { HeadPointer } from "./components/HeadPointer";
import { CheckoutCommand } from "./components/CheckoutCommand";

export default function GitIntro() {
  const { phase } = useIntro();

  if (phase === "pending" || phase === "done") {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="git-intro-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }} // Failsafe, but dissolve phase usually handles opacity
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0B0D10] text-white"
        aria-hidden="true"
      >
        {/* Background Particles (CSS based) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
          
          {/* Ambient Particles */}
          <div className="particle-layer" />
        </div>

        {/* 
          Pass 1 Dissolve Wrapper: 
          When phase is "dissolve", we fade and scale down the timeline content.
          Framer Motion's layoutId handles moving the logo.
        */}
        <motion.div
          animate={
            phase === "dissolve"
              ? { opacity: 0, scale: 0.3 }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center justify-center w-full h-full max-w-3xl"
        >
          {/* The Timeline Components */}
          <GitTimeline phase={phase} />
          
          <HeadPointer phase={phase} />

          <CheckoutCommand phase={phase} />

          {/* Placeholder Logo for layoutId FLIP animation */}
          {/* We want this to appear during the dissolve, or just be present but invisible until dissolve? 
              Actually, if it's rendered, layoutId will FLIP it to the Navbar's logo when this unmounts! 
              So we MUST render it while GitIntro is mounted.
              We can render it visually hidden but in the center, so when GitIntro unmounts, the logo flies from the center to the Navbar. 
          */}
          <motion.div 
            layoutId="techspace-logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-0 pointer-events-none"
          >
            {/* We just need the div with layoutId. The Navbar version has the actual image, 
                Framer Motion will crossfade the visual states automatically. */}
          </motion.div>
        </motion.div>

        {/* Global styles for ambient particles */}
        <style dangerouslySetInnerHTML={{ __html: `
          .particle-layer {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at center, #ffffff 1px, transparent 1px);
            background-size: 100px 100px;
            background-position: 0 0;
            opacity: 0.05;
            animation: drift 20s linear infinite;
          }
          @keyframes drift {
            from { transform: translateY(0px); }
            to { transform: translateY(-100px); }
          }
        `}} />
      </motion.div>
    </AnimatePresence>
  );
}
