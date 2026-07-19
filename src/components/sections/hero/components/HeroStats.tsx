import React from "react";
import { HeroStatCard } from "./HeroStatCard";

const stats = [
  { value: "200+", label: "Members" },
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Events" },
  { value: "20+", label: "Workshops" },
];

export function HeroStats() {
  return (
    <div className="w-full pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {stats.map((stat, idx) => (
          <HeroStatCard 
            key={idx} 
            value={stat.value} 
            label={stat.label} 
          />
        ))}
      </div>
    </div>
  );
}
