"use client";

import React from "react";
import { WhyJoinHeader } from "./components/WhyJoinHeader";
import { WhyJoinSticky } from "./components/WhyJoinSticky";
import { BackgroundDecor } from "./components/BackgroundDecor";

export default function WhyJoinSection() {
  return (
    <section 
      id="why-join" 
      aria-label="Why Join TechSpace"
      className="relative w-full pt-32 pb-36 bg-[#020202]"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundDecor />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <WhyJoinHeader />
        </div>
        
        <WhyJoinSticky />
      </div>

      {/* Section-ending transition elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />
    </section>
  );
}
