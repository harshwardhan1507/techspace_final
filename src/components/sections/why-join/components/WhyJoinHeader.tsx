"use client";

import React from "react";
import { motion } from "framer-motion";

export function WhyJoinHeader() {
  return (
    <div className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-neutral-500 mb-6 uppercase">
          WHY JOIN
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
      >
        Your Journey Starts Here
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-neutral-400 leading-relaxed max-w-2xl"
      >
        Joining TechSpace is more than attending events. It&apos;s an opportunity to learn, build meaningful projects, collaborate with like-minded students, and grow into a confident developer.
      </motion.p>
    </div>
  );
}
