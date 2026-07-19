import React from "react";
import { heroData } from "@/data/hero";
import { HeroHeading } from "./HeroHeading";
import { HeroDescription } from "./HeroDescription";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start w-full max-w-2xl">
      <div className="mb-6 flex flex-col items-start gap-4">
        <HeroHeading 
          text={heroData.heading} 
          highlightedWords={heroData.highlightedWords} 
        />
        <HeroDescription text={heroData.description} />
      </div>

      <div className="mb-12">
        <HeroButtons 
          primary={heroData.primaryCTA} 
          secondary={heroData.secondaryCTA} 
        />
      </div>

      <div className="w-full">
        <HeroStats />
      </div>
    </div>
  );
}
