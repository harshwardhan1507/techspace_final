"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/aceternity/sticky-scroll-reveal";
import { benefitsData } from "../data";

export function WhyJoinSticky() {
  const content = benefitsData.map((step) => {
    const Visual = step.visual;
    return {
      title: `${step.step}. ${step.title}`,
      description: step.description,
      content: <Visual key={step.id} />,
    };
  });

  return (
    <div className="w-full mx-auto max-w-7xl px-6">
      <StickyScroll 
        content={content} 
        fixedHeight={false}
        internalScroll={false}
        showBackground={false}
        className="w-full flex justify-between gap-16 xl:gap-24"
        leftClassName="max-w-none w-full flex-1"
        contentClassName="w-full h-[500px] sticky top-32 flex items-center justify-center bg-transparent"
      />
    </div>
  );
}
