"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LogoRevealProps {
  isVisible: boolean;
}

export function LogoReveal({ isVisible }: LogoRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="relative p-4 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-md shadow-2xl">
        <motion.div layoutId="techspace-logo">
          <Image
            src="/image.svg"
            alt="TechSpace Logo"
            width={80}
            height={80}
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
            priority
          />
        </motion.div>

        {/* Ambient glow around logo */}
        <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl pointer-events-none" />
      </div>
    </motion.div>
  );
}
