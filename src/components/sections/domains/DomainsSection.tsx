"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid } from "./components/BentoGrid";

export default function DomainsSection() {
  return (
    <section 
      id="domains" 
      aria-label="Domains Section"
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background - Near-black base with graphite gradient */}
      <div className="absolute inset-0 bg-[#020202]" />
      
      {/* Graphite gradient overlay */}
      <div 
        className="absolute inset-0 opacity-[0.6]"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #090909 50%, #050505 100%)'
        }}
      />
      
      {/* Subtle radial gradient for depth */}
      <div 
        className="absolute inset-0 opacity-[0.3]"
        style={{
          background: 'radial-gradient(circle at center, #080808 0%, #020202 70%)'
        }}
      />
      
      {/* Barely visible grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
              OUR DOMAINS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6"
          >
            Choose Your Path.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
          >
            Whether you're passionate about building products, solving algorithms, training AI models, securing systems, or contributing to open source, TechSpace provides a community where you can learn, collaborate, and grow.
          </motion.p>
        </div>
        
        <BentoGrid />
      </div>
    </section>
  );
}
