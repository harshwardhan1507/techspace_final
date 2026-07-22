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
      className={cn(
        "relative flex justify-between items-start w-full gap-12 lg:gap-16",
        containerClassName,
        className
      )}
    >
      {/* Left Column: Natural Height Content Steps */}
      <div className={cn("w-full max-w-2xl flex-1 space-y-12 md:space-y-16 py-4", leftClassName)}>
        {content.map((item, index) => (
          <div key={item.title + index} className="min-h-[70vh] flex flex-col justify-center">
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
        <div className="h-40" />
      </div>

      {/* Right Column: Direct Flex Child Sticky Presentation Panel */}
      <div
        className={cn(
          "hidden lg:block sticky top-32 lg:top-36 w-full max-w-[500px] shrink-0 self-start z-30",
          contentClassName
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
