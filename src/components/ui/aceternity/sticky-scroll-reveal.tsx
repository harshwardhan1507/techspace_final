"use client";

import React, { useRef, useState } from "react";
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
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className={cn("relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full items-start", className)}
    >
      {/* Left Column: Journey Steps (Aligned to top at y = 0) */}
      <div className={cn("lg:col-span-7 flex flex-col justify-start space-y-24 md:space-y-36 py-4", leftClassName)}>
        {content.map((item, index) => (
          <div 
            key={item.title + index} 
            className={cn(
              "flex flex-col justify-start",
              index === 0 ? "pt-2 pb-12" : "py-12"
            )}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.25,
                scale: activeCard === index ? 1 : 0.98,
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
              className="text-base md:text-lg mt-4 max-w-lg text-neutral-300 leading-relaxed"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Right Column: Sticky Visual Track (Shares Same Grid Row, Aligned to top at y = 0) */}
      <div className="hidden lg:block lg:col-span-5 relative w-full h-full">
        <div className="sticky top-28 lg:top-36 w-full">
          <div className={cn("w-full flex items-center justify-center", contentClassName)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {content[activeCard].content ?? null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
