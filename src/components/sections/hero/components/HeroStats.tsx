import React from "react";
import { cn } from "@/lib/utils";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-start p-6 rounded-2xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm"
          >
            <span className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {stat.value}
            </span>
            <span className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
