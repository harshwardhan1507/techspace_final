import React from "react";
import { HeroStatCard } from "./HeroStatCard";

interface StatItem {
  label: string;
  value: string;
}

interface HeroStatsProps {
  stats: StatItem[];
}

export function HeroStats({ stats }: HeroStatsProps) {
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
