import React from "react";
import { SectionHeading } from "./components/SectionHeading";
import { DomainGrid } from "./components/DomainGrid";

export default function WhatWeDoSection() {
  return (
    <section 
      id="what-we-do" 
      aria-label="What We Do Section"
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background - Near-black base matching Hero */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Subtle radial gradient - slightly brighter center */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          background: 'radial-gradient(circle at center, #0B0B0B 0%, #050505 70%)'
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
        <SectionHeading
          eyebrow="WHAT WE DO"
          heading="Explore. Build. Lead."
          description="TechSpace empowers students through practical learning, collaborative development, technical communities, and innovation-driven initiatives across multiple domains of computer science and engineering."
        />
        
        <DomainGrid />
      </div>
    </section>
  );
}
