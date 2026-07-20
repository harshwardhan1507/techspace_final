import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IntroPhase } from "../hooks/useIntro";

interface CheckoutCommandProps {
  phase: IntroPhase;
}

export function CheckoutCommand({ phase }: CheckoutCommandProps) {
  const isVisible = phase === "checkout" || phase === "dissolve";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-neutral-400 font-mono text-sm tracking-wide"
        >
          <span className="text-green-500 font-bold">$</span>
          <span>git checkout homepage</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
