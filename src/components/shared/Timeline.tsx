"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: LucideIcon;
  color?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow";
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  perspective?: boolean;
  darkMode?: boolean;
}

export function Timeline({
  events,
  animationOrder = "sequential",
  cardAlignment = "left",
  lineColor = "bg-[#262A31]",
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "none",
  progressLineWidth = 2,
  progressLineCap = "round",
  dateFormat = "badge",
  className = "",
  revealAnimation = "fade",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  perspective: _perspective = false,
  darkMode = true,
}: ScrollTimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getCardVariants = (index: number) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
        ? index * 0.15
        : index * 0.2;

    const initialStates = {
      fade: { opacity: 0, y: 20 },
      slide: {
        x: cardAlignment === "left" ? -50 : 50,
        opacity: 0,
      },
      scale: { scale: 0.95, opacity: 0 },
      flip: { rotateY: 90, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      initial: initialStates[revealAnimation],
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.5,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
        },
      },
      viewport: { once: true, margin: "-50px" },
    };
  };

  const getCardClasses = () => {
    const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
    const variantClasses = {
      default: "bg-[#0C0C0F] border border-[#262A31]",
      elevated: "bg-[#0C0C0F] border border-[#262A31] shadow-md",
      outlined: "bg-[#0C0C0F]/50 backdrop-blur border-2 border-[#4682B4]/20",
      filled: "bg-[#4682B4]/10 border border-[#4682B4]/30",
    };
    const effectClasses = {
      none: "",
      glow: "hover:shadow-[0_0_10px_rgba(70,130,180,0.3)]",
      shadow: "hover:shadow-lg hover:-translate-y-0.5",
    };
    const alignmentClasses =
      cardAlignment === "left"
        ? "ml-0"
        : cardAlignment === "right"
        ? "ml-auto"
        : "";

    return `${baseClasses} ${variantClasses[cardVariant]} ${effectClasses[cardEffect]} ${alignmentClasses} w-full`;
  };

  return (
    <div
      ref={scrollRef}
      className={`relative w-full overflow-hidden ${darkMode ? "bg-[#020202]" : ""} ${className}`}
    >
      <div className="relative max-w-4xl mx-auto px-4 pb-16">
        <div className="relative mx-auto">
          {/* Connector Line */}
          <div
            className={`absolute left-4 top-0 h-full ${lineColor} w-[${progressLineWidth}px]`}
            style={{ width: `${progressLineWidth}px` }}
          ></div>

          {/* Progress Indicator - Subtle steel blue fill */}
          {progressIndicator && (
            <motion.div
              className="absolute left-4 top-0 z-10"
              style={{
                height: progressHeight,
                width: `${progressLineWidth}px`,
                borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                background: "#4682B4",
              }}
            />
          )}

          <div className="relative z-20">
            {events.map((event, index) => {
              const EventIcon = event.icon;

              return (
                <div
                  key={event.id || index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className="relative flex items-start mb-12 py-4"
                >
                  {/* Progress Dot */}
                  <div className="absolute left-2 top-6 transform -translate-x-1/2 z-30">
                    <motion.div
                      className={`w-3 h-3 rounded-full border-2 bg-[#020202] ${
                        index <= activeIndex ? "border-[#4682B4]" : "border-[#262A31]"
                      }`}
                      animate={
                        index <= activeIndex
                          ? {
                              scale: [1, 1.1, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`${getCardClasses()} ml-12`}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="p-5">
                      {dateFormat === "badge" ? (
                        <div className="flex items-center mb-3">
                          {EventIcon && <EventIcon className="h-4 w-4 mr-2 text-[#4682B4]" />}
                          <span
                            className="text-sm font-bold"
                            style={{ color: event.color || "#4682B4" }}
                          >
                            {event.year}
                          </span>
                        </div>
                      ) : (
                        <p className="text-lg font-bold text-[#4682B4] mb-2">
                          {event.year}
                        </p>
                      )}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {event.title}
                      </h3>
                      {event.subtitle && (
                        <p className="text-neutral-400 font-medium mb-2 text-sm">
                          {event.subtitle}
                        </p>
                      )}
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
