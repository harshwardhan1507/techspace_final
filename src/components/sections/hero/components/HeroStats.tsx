import React from "react";

interface StatItem {
  label: string;
  value: string;
}

interface HeroStatsProps {
  stats: StatItem[];
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center">
          <span className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {stat.value}
          </span>
          <span className="mt-2 text-sm md:text-base font-medium text-neutral-500 dark:text-neutral-400 text-center">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
