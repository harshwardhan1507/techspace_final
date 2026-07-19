import React from "react";
import { BackgroundPaths } from "@/components/ui/shared/background-paths";
import { HeroContent } from "./components";
import { HeroLanyard } from "./components/HeroLanyard";

export default function HeroSection() {
  return (
    <section id="hero" aria-label="Hero Section" className="relative w-full overflow-hidden">
      {/* Background Layer */}
      <BackgroundPaths className="absolute inset-0 z-0 pointer-events-none bg-transparent dark:bg-transparent" />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full min-h-svh py-12 flex items-center justify-center">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center w-full">
          {/* Left Column */}
          <div className="w-full pointer-events-auto">
            <HeroContent />
          </div>
          {/* Right Column */}
          <div className="w-full min-h-[300px] pointer-events-auto">
            <HeroLanyard />
          </div>
        </div>
      </div>
      
      {/* Decorative Layer */}
      <div className="absolute inset-0 pointer-events-none z-20" />
    </section>
  );
}
