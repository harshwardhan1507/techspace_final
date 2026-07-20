"use client";

import React from "react";
import { ExpandableTeamCards } from "./ExpandableTeamCards";
import { teamMembers } from "./data";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section 
      id="team" 
      className="relative w-full py-32 md:py-48 mb-16 md:mb-24 overflow-hidden bg-[#020202]"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest text-[#4682B4] mb-6 uppercase">
              MEET THE TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            The People Behind TechSpace
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-2xl"
          >
            Meet the students building a community where people learn, collaborate, and grow together through technology.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ExpandableTeamCards members={teamMembers} />
        </motion.div>
      </div>
    </section>
  );
}
