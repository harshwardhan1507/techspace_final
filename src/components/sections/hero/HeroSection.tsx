import React from "react";
import { BackgroundPaths } from "@/components/ui/shared/background-paths";
import { HeroContent } from "./components";

export default function HeroSection() {
  return (
    <section id="hero" aria-label="Hero Section" className="relative w-full overflow-hidden">
      <BackgroundPaths>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 min-h-screen pt-28 md:pt-32 pb-12 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 z-10 relative pointer-events-none">
          <div className="w-full md:w-[60%] flex flex-col items-start text-left pointer-events-auto">
            <HeroContent />
          </div>
          {/* Right Content Column (Reserved for future visual badge) */}
          <div className="w-full md:w-[40%] flex justify-center items-center relative mt-8 md:mt-0 pointer-events-auto min-h-[300px]">
            
          </div>
        </div>
      </BackgroundPaths>
    </section>
  );
}
