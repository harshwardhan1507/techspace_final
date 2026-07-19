import React from "react";

interface HeroStatCardProps {
  value: string;
  label: string;
}

export function HeroStatCard({ value, label }: HeroStatCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm">
      <span className="block text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {value}
      </span>
      <span className="block mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {label}
      </span>
    </div>
  );
}
