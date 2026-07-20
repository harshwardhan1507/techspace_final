"use client";

import React from "react";
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import { journeyData } from "./data";
import { motion } from "framer-motion";

export default function JourneySection() {
  const mappedEvents = journeyData.map((event) => {
    const Icon = event.icon;
    return {
      ...event,
      icon: <Icon className="h-4 w-4 mr-2" />,
      color: "#4682B4"
    };
  });

  return (
    <section 
      id="journey" 
      aria-label="Our Journey"
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
              OUR JOURNEY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Building TechSpace, One Step at a Time
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-2xl"
          >
            Every community starts somewhere. Here&apos;s how TechSpace began and where we&apos;re heading next.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ScrollTimeline 
            events={mappedEvents}
            title=""
            subtitle=""
            cardAlignment="alternating"
            perspective={false}
            cardEffect="none"
            cardVariant="elevated"
            darkMode={true}
            revealAnimation="fade"
            progressIndicator={true}
            progressLineWidth={2}
            lineColor="bg-neutral-800"
            activeColor="bg-[#4682B4]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />
    </section>
  );
}
