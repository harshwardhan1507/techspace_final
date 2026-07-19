import React from "react";
import SpotlightCard from "@/components/ui/reactbits/SpotlightCard/SpotlightCard";

interface HeroStatCardProps {
  value: string;
  label: string;
}

export function HeroStatCard({ value, label }: HeroStatCardProps) {
  return (
    <SpotlightCard
      className="p-6 rounded-2xl bg-white/5 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]"
      spotlightColor="rgba(0,229,255,0.15)"
    >
      <span className="block text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
        {value}
      </span>
      <span className="block text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {label}
      </span>
    </SpotlightCard>
  );
}
