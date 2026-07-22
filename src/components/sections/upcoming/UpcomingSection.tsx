"use client";

import React from "react";
import { motion } from "framer-motion";
import { initiativesData } from "./data";
import { InitiativeCard } from "./components/InitiativeCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { layout } from "@/design/tokens/layout";

export default function UpcomingSection() {
  return (
    <section 
      id="upcoming" 
      aria-label="Upcoming Initiatives" 
      className="relative w-full overflow-hidden bg-[#020202]"
      style={{
        paddingTop: layout.rhythm.sectionToNextSection, // spacing from previous section
        paddingBottom: layout.rhythm.sectionToNextSection,
      }}
    >
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

      <div 
        className="container mx-auto relative z-10"
        style={{ 
          maxWidth: layout.sectionMaxWidth,
          paddingLeft: layout.pagePadding,
          paddingRight: layout.pagePadding,
        }}
      >
        <SectionHeader
          eyebrow="UPCOMING INITIATIVES"
          title="Build. Learn. Compete."
          description="From workshops and bootcamps to hackathons and community challenges, TechSpace is creating opportunities for students to explore technology, collaborate with peers, and grow together."
          align="center"
        />

        {/* Editorial Layout */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,auto)]"
          style={{
            gap: layout.gridGap.medium,
            marginTop: layout.rhythm.headerToGrid,
          }}
        >
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
