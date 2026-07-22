"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MemoryStage } from "./components/MemoryStage";
import { MemoryRail } from "./components/MemoryRail";
import { useMemoryStage } from "./hooks/useMemoryStage";
import { useAutoRotate } from "./hooks/useAutoRotate";
import { layout } from "@/design/tokens/layout";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GallerySection() {
  const {
    activeIndex,
    activeMemory,
    totalMemories,
    selectMemory,
    nextMemory,
    isHovered,
    setIsHovered,
  } = useMemoryStage();

  const { containerRef } = useAutoRotate({
    nextMemory,
    isHovered,
    intervalMs: 5500,
  });

  return (
    <section
      id="gallery"
      aria-label="Community Gallery Exhibition"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#020202]"
      style={{
        paddingTop: layout.rhythm.sectionToNextSection,
        paddingBottom: layout.rhythm.sectionToNextSection,
      }}
    >
      {/* Target Anchors for Navbar Links */}
      <span id="events" className="absolute -top-24 pointer-events-none" />
      <span id="gallery-anchor" className="absolute -top-24 pointer-events-none" />
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div
        className="container mx-auto relative z-10"
        style={{
          maxWidth: layout.sectionMaxWidth,
          paddingLeft: layout.pagePadding,
          paddingRight: layout.pagePadding,
        }}
      >
        <SectionHeader
          eyebrow="COMMUNITY EXHIBITION"
          title="Moments That Define TechSpace."
          description="Every photo tells a story of late-night breakthroughs, hackathons, and lifelong friendships built together."
          align="center"
        />

        {/* Exhibition Stage & Rail 75/25 Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          style={{ marginTop: layout.rhythm.headerToGrid }}
        >
          {/* Main Memory Stage (75% - 9 cols) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <MemoryStage
              memory={activeMemory}
              activeIndex={activeIndex}
              totalMemories={totalMemories}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          {/* Editorial Sidebar Rail (25% - 3 cols) */}
          <div className="lg:col-span-4 xl:col-span-3 h-full">
            <MemoryRail
              activeIndex={activeIndex}
              onSelect={selectMemory}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>

        {/* Closing Exhibition CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 pt-10 border-t border-neutral-800/80 flex flex-col items-center text-center space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>BECOME PART OF THE NEXT CHAPTER</span>
          </div>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight max-w-xl">
            Every event becomes another story. Join us and create the next one.
          </h3>

          <a
            href="#join"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 shadow-xl group mt-2"
          >
            <span>Explore All Community Events</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
