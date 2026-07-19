import React from "react";

interface HeroDescriptionProps {
  text: string;
}

export function HeroDescription({ text }: HeroDescriptionProps) {
  return (
    <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-white/80 max-w-2xl text-left leading-relaxed">
      {text}
    </p>
  );
}
