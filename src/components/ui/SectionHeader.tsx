"use client";

import React from "react";
import { motion } from "framer-motion";
import { layout } from "@/design/tokens/layout";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  const isCenter = align === "center";
  
  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} mb-16 md:mb-24`} style={{ maxWidth: layout.contentWidth }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-neutral-400 dark:text-neutral-500 mb-4 md:mb-6 uppercase">
          {eyebrow}
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6"
      >
        {title}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
}
