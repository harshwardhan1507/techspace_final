"use client";

import React from "react";
import { BentoGrid } from "./components/BentoGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { layout } from "@/design/tokens/layout";

export default function DomainsSection() {
  return (
    <section 
      id="domains" 
      aria-label="Domains Section"
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: layout.rhythm.previousSectionToHeader,
        paddingBottom: layout.rhythm.sectionToNextSection,
      }}
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
      
      {/* Content */}
      <div 
        className="container mx-auto relative z-10"
        style={{ 
          maxWidth: layout.sectionMaxWidth,
          paddingLeft: layout.pagePadding,
          paddingRight: layout.pagePadding,
        }}
      >
        <SectionHeader
          eyebrow="OUR DOMAINS"
          title="Choose Your Path."
          description="Whether you're passionate about building products, solving algorithms, training AI models, securing systems, or contributing to open source, TechSpace provides a community where you can learn, collaborate, and grow."
          align="center"
        />
        
        <BentoGrid />
      </div>
    </section>
  );
}
