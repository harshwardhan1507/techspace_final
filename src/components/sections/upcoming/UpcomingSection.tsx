"use client";

import React from "react";
import { motion } from "framer-motion";
import { initiativesData } from "./data";
import { InitiativeCard } from "./components/InitiativeCard";

export default function UpcomingSection() {
  return (
    <section id="upcoming" aria-label="Upcoming Initiatives" className="relative w-full py-24 md:py-32 overflow-hidden bg-[#020202]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500-[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500-[0.02] rounded-full blur-[100px]" />
        
        {/* Barely visible grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest text-neutral-500 mb-6 uppercase">
              Upcoming Initiatives
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Build. Learn. Compete.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 leading-relaxed"
          >
            From workshops and bootcamps to hackathons and community challenges, TechSpace is creating opportunities for students to explore technology, collaborate with peers, and grow together.
          </motion.p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-6 md:gap-8">
          {initiativesData.map((initiative, index) => {
            // First item is featured (index 0)
            const variant = index === 0 ? "featured" : "standard";
            return (
              <InitiativeCard 
                key={initiative.id} 
                initiative={initiative} 
                index={index} 
                variant={variant}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
