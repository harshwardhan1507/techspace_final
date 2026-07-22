"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  className,
  containerClassName,
  leftClassName,
  fixedHeight = false,
  internalScroll = false,
  showBackground = false,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
  className?: string;
  containerClassName?: string;
  leftClassName?: string;
  fixedHeight?: boolean;
  internalScroll?: boolean;
  showBackground?: boolean;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Phase 2: Page scrolling vs internal container scrolling
  const scrollConfig = internalScroll
    ? { container: ref, offset: ["start start", "end start"] as any }
    : { target: ref, offset: ["start center", "end center"] as any };

  const { scrollYProgress } = useScroll(scrollConfig);
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const backgroundGradient = linearGradients[activeCard % linearGradients.length];

  return (
    <motion.div
      animate={{
        backgroundColor: showBackground
          ? backgroundColors[activeCard % backgroundColors.length]
          : "transparent",
      }}
      className={cn(
        "relative flex justify-between space-x-10",
        fixedHeight ? "h-[30rem]" : "h-auto",
        internalScroll ? "overflow-y-auto" : "overflow-visible",
        showBackground ? "rounded-md p-10" : "",
        containerClassName,
        className
      )}
      ref={ref}
    >
      {/* Left Column: Natural Height Content Steps */}
      <div className="relative flex items-start px-4 w-full">
        <div className={cn("max-w-2xl w-full", leftClassName)}>
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 md:my-32">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.25,
                }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-4xl font-bold tracking-tight text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.25,
                }}
                transition={{ duration: 0.3 }}
                className="text-base md:text-lg mt-6 max-w-lg text-neutral-300 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right Column: Direct Flex Child Sticky Presentation Panel */}
      <div
        style={{ background: showBackground ? backgroundGradient : undefined }}
        className={cn(
          "hidden lg:block sticky top-32 lg:top-36 shrink-0",
          showBackground ? "h-60 w-80 rounded-md bg-white overflow-hidden" : "",
          contentClassName
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
