import React from "react";
import { BackgroundPaths } from "@/components/ui/shared/background-paths";
import { HeroContent, HeroBadgeLanyard } from "./components";

export default function HeroSection() {
  return (
    <section id="hero" aria-label="Hero Section" className="relative w-full overflow-hidden">
      <BackgroundPaths>
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between min-h-screen pt-24 pb-12 w-full gap-8 z-10 relative pointer-events-none">
          <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col items-start text-left pointer-events-auto">
            <HeroContent />
          </div>
          <div className="w-full md:w-[45%] lg:w-[40%] flex justify-center items-center relative mt-12 md:mt-0 pointer-events-auto">
            <HeroBadgeLanyard />
          </div>
        </div>
      </BackgroundPaths>
    </section>
  );
}
