import React from "react";
import { cn } from "@/lib/utils";

interface HeroHeadingProps {
  text: string;
  highlightedWords?: string[];
}

export function HeroHeading({ text, highlightedWords = [] }: HeroHeadingProps) {
  // Simple utility to wrap highlighted words in a span for styling
  const renderText = () => {
    if (!highlightedWords.length) return text;
    
    // Split the text by the highlighted words (basic implementation for the placeholder)
    let processedText: React.ReactNode = text;
    highlightedWords.forEach(word => {
      const parts = text.split(word);
      if (parts.length > 1) {
        processedText = (
          <>
            {parts[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
              {word}
            </span>
            {parts[1]}
          </>
        );
      }
    });
    return processedText;
  };

  return (
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white max-w-4xl text-left leading-tight">
      {renderText()}
    </h1>
  );
}
