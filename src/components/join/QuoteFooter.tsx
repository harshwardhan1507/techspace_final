"use client";

import React from "react";
import { Quote } from "lucide-react";

export function QuoteFooter() {
  return (
    <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-center text-center">
      <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-400 font-serif italic">
        <Quote className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
        <span>"Every great project starts with a conversation."</span>
      </div>
    </div>
  );
}
