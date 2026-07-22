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
    <div className="w-full mx-auto max-w-7xl px-4 md:px-6">
      {/* Desktop Sticky Scroll */}
      <div className="hidden lg:block">
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

      {/* Mobile Sequential Stacked Layout */}
      <div className="flex lg:hidden flex-col space-y-8 mt-8">
        {benefitsData.map((step) => {
          const Visual = step.visual;
          return (
            <div
              key={step.id}
              className="flex flex-col space-y-4 p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md shadow-xl"
            >
              <div className="w-full h-[220px] rounded-xl overflow-hidden bg-neutral-950 flex items-center justify-center p-3 border border-white/5">
                <Visual />
              </div>
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
                  STEP {step.step}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
