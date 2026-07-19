import React from "react";
import { heroData } from "@/data/hero";
import { HeroBadge } from "./HeroBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroDescription } from "./HeroDescription";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-2xl">
      <HeroBadge text={heroData.badge} />
      
      <div className="mt-8 flex flex-col items-start">
        <HeroHeading 
          text={heroData.heading} 
          highlightedWords={heroData.highlightedWords} 
        />
        <HeroDescription text={heroData.description} />
      </div>

      <HeroButtons 
        primary={heroData.primaryCTA} 
        secondary={heroData.secondaryCTA} 
      />

      <HeroStats stats={heroData.stats} />
    </div>
  );
}
