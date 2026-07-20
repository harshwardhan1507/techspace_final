import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IntroPhase } from "../hooks/useIntro";

interface HeadPointerProps {
  phase: IntroPhase;
}

export function HeadPointer({ phase }: HeadPointerProps) {
  // Only show the head pointer once timeline starts
  const isVisible = 
    phase === "timeline" || 
    phase === "head-slide" || 
    phase === "checkout" || 
    phase === "dissolve";
    
  const isTarget = phase === "head-slide" || phase === "checkout" || phase === "dissolve";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute left-[-20px] top-16" // Align with the top commit node
        >
          <motion.div 
            // The slide down animation. The timeline has 6 nodes, spacing is mb-12 (48px) + line height
            // Roughly 6 nodes * 60px height. We will slide it down manually.
            // Wait, to align perfectly with the last node, we can translate it down 5 * 60 = 300px.
            // Let's use a fixed translateY for simplicity, 5 gaps of 48px + line height = roughly 300px.
            initial={{ y: 0 }}
            animate={isTarget ? { y: 300 } : { y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            {/* Pointer SVG / Branch line */}
            <div className="relative w-8 h-[2px] bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            
            {/* Label Morph */}
            <div className="relative px-3 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold tracking-wider overflow-hidden">
              <span className="relative z-10 flex items-center justify-center min-w-[80px]">
                HEAD &rarr;{" "}
                <span className="ml-1 relative w-20">
                  <motion.span 
                    className="absolute inset-0 flex items-center justify-start"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isTarget ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    main
                  </motion.span>
                  <motion.span 
                    className="absolute inset-0 flex items-center justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isTarget ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    TECHSPACE
                  </motion.span>
                </span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
