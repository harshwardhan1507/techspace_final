"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface StylishCarouselItem {
  src: string;
  title?: string;
  alt?: string;
  category?: string;
  date?: string;
  description?: string;
  galleryLink?: string;
}

export interface StylishCarouselProps {
  /** Array of items to display in the carousel */
  items: StylishCarouselItem[];
  /** Starting active index (0-based) */
  initialIndex?: number;
  /** Size of each slide (CSS clamp value or fixed px). Defaults to responsive clamp. */
  slideSize?: string;
  /** Rotation angle (degrees) applied per offset position */
  rotationDegrees?: number;
  /** Scale of non-active slides (0–1). Defaults to 0.6 */
  inactiveScale?: number;
  /** Y-offset multiplier for perspective fan-out. Defaults to 50 */
  yOffsetPercent?: number;
  /** Spring animation bounce (0–1). Defaults to 0.15 */
  springBounce?: number;
  /** Spring animation duration in seconds. Defaults to 0.8 */
  springDuration?: number;
  /** Whether to show navigation arrows */
  showArrows?: boolean;
  /** Whether to show dot indicators */
  showDots?: boolean;
  /** Whether images are clickable to navigate to that slide */
  clickToNavigate?: boolean;
  /** Auto-advance interval in ms. 0 = disabled */
  autoPlay?: number;
  /** Additional className for the root wrapper */
  className?: string;
  /** Callback fired when the active index changes */
  onIndexChange?: (index: number) => void;
  /** Border radius of each slide image. Defaults to "1.25rem" */
  borderRadius?: string;
  /** Custom dot active color (Tailwind or CSS color) */
  dotActiveColor?: string;
  /** Custom dot inactive color */
  dotInactiveColor?: string;
  /** Custom arrow button class override */
  arrowClassName?: string;
}

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const StylishCarousel = ({
  items = [],
  initialIndex = 0,
  slideSize = "clamp(260px, 40vw, 440px)",
  rotationDegrees = 24,
  inactiveScale = 0.65,
  yOffsetPercent = 40,
  springBounce = 0.15,
  springDuration = 0.8,
  showArrows = true,
  showDots = true,
  clickToNavigate = true,
  autoPlay = 0,
  className,
  onIndexChange,
  borderRadius = "1.25rem",
  arrowClassName,
}: StylishCarouselProps) => {
  const clampedInitial = Math.max(0, Math.min(initialIndex, items.length - 1));
  const [activeIndex, setActiveIndex] = useState(clampedInitial);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // -- helpers ----------------------------------------------------------------
  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      setActiveIndex(clamped);
      onIndexChange?.(clamped);
    },
    [items.length, onIndexChange]
  );

  const toPrev = useCallback(
    () => goTo(activeIndex - 1),
    [activeIndex, goTo]
  );

  const toNext = useCallback(
    () => goTo(activeIndex + 1),
    [activeIndex, goTo]
  );

  // -- keyboard navigation ----------------------------------------------------
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") toPrev();
      if (e.key === "ArrowRight") toNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toPrev, toNext]);

  // -- touch / swipe ----------------------------------------------------------
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        toNext();
      } else {
        toPrev();
      }
    }
    touchStartX.current = null;
  };

  // -- auto-play --------------------------------------------------------------
  useEffect(() => {
    if (!autoPlay) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1 >= items.length ? 0 : prev + 1;
        setTimeout(() => {
          onIndexChange?.(next);
        }, 0);
        return next;
      });
    }, autoPlay);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, items.length, onIndexChange]);

  // -- spring transition ------------------------------------------------------
  const spring = {
    type: "spring" as const,
    bounce: springBounce,
    duration: springDuration,
  };

  if (!items.length) return null;

  const activeItem = items[activeIndex];
  const hasMetadata = Boolean(
    activeItem?.category || activeItem?.description || activeItem?.date || activeItem?.galleryLink
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative flex flex-col items-center select-none w-full", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Stylish Carousel"
      role="region"
    >
      {/* ---------------- SLIDES CONTAINER ---------------- */}
      <div
        style={{ width: slideSize, aspectRatio: "16 / 10" }}
        className="relative mt-2 md:mt-4"
      >
        {/* Horizontal sliding strip */}
        <motion.div
          className="flex w-fit"
          animate={{ x: `${(-activeIndex * 100) / items.length}%` }}
          transition={spring}
        >
          {items.map((item, i) => {
            const offset = i - activeIndex;
            const isActive = offset === 0;

            return (
              <motion.div
                key={i}
                style={{ width: slideSize, aspectRatio: "16 / 10" }}
                className="flex-shrink-0 flex flex-col items-center gap-2 will-change-transform"
                animate={{
                  rotate: offset * rotationDegrees,
                  scale: isActive ? 1 : inactiveScale,
                  y: `${offset * yOffsetPercent}%`,
                }}
                transition={spring}
              >
                {/* Fallback title label for carousels without rich metadata */}
                <AnimatePresence>
                  {item.title && !hasMetadata && (
                    <motion.span
                      key={`title-${i}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs sm:text-sm font-semibold whitespace-nowrap text-foreground/80 tracking-wide"
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Image Card */}
                <div
                  className="relative w-full h-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group border border-white/10 backdrop-blur-md"
                  style={{ borderRadius }}
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? item.title ?? `Slide ${i + 1}`}
                    draggable={false}
                    onClick={() => clickToNavigate && goTo(i)}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500 will-change-transform group-hover:scale-105",
                      !isActive && "brightness-75",
                      clickToNavigate && !isActive && "cursor-pointer"
                    )}
                    loading="lazy"
                  />

                  {/* Active glow ring */}
                  {isActive && (
                    <motion.div
                      layoutId="glow-ring"
                      className="absolute inset-0 rounded-[inherit] pointer-events-none"
                      style={{
                        boxShadow: "0 0 0 2px hsl(var(--primary, 221 83% 53%) / 0.8), 0 0 25px hsl(var(--primary, 221 83% 53%) / 0.3)",
                        borderRadius,
                      }}
                      transition={spring}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ---------------- ACTIVE METADATA BLOCK ---------------- */}
      {hasMetadata && activeItem && (
        <div className="min-h-[170px] sm:min-h-[190px] flex flex-col items-center justify-start mt-6 z-10 w-full px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`metadata-${activeIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center text-center max-w-xl"
            >
              {/* Category badge scale animation */}
              {activeItem.category && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-sky-500/10 border border-sky-500/30 text-sky-400 mb-2 backdrop-blur-md shadow-sm"
                >
                  {activeItem.category}
                </motion.span>
              )}

              {/* Title fade-up animation */}
              {activeItem.title && (
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight"
                >
                  {activeItem.title}
                </motion.h3>
              )}

              {/* Date fade-in animation */}
              {activeItem.date && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                  className="mt-1 text-xs sm:text-sm font-medium text-neutral-400"
                >
                  {activeItem.date}
                </motion.p>
              )}

              {/* Description fade-up animation */}
              {activeItem.description && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg line-clamp-3"
                >
                  {activeItem.description}
                </motion.p>
              )}

              {/* CTA button slide-up animation */}
              {activeItem.galleryLink && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 }}
                  className="mt-3.5"
                >
                  <a
                    href={activeItem.galleryLink}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md shadow-lg group"
                  >
                    <span>View Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* ---------------- CONTROLS ---------------- */}
      <div className="mt-4 flex items-center gap-4 px-3 py-2 rounded-full bg-background/60 border border-border/60 backdrop-blur-md shadow-lg z-10">
        {/* Prev */}
        {showArrows && (
          <button
            aria-label="Previous slide"
            onClick={toPrev}
            disabled={activeIndex === 0}
            className={cn(
              "p-2 rounded-full transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed",
              arrowClassName
            )}
          >
            <ChevronLeft className="w-4 h-4 text-foreground/80" />
          </button>
        )}

        {/* Dots */}
        {showDots && (
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <motion.button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                animate={{
                  width: activeIndex === i ? 28 : 8,
                  opacity: activeIndex === i ? 1 : 0.35,
                }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                className="h-2 rounded-full bg-foreground cursor-pointer"
                style={{ minWidth: 8 }}
              />
            ))}
          </div>
        )}

        {/* Next */}
        {showArrows && (
          <button
            aria-label="Next slide"
            onClick={toNext}
            disabled={activeIndex === items.length - 1}
            className={cn(
              "p-2 rounded-full transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed",
              arrowClassName
            )}
          >
            <ChevronRight className="w-4 h-4 text-foreground/80" />
          </button>
        )}
      </div>

      {/* Counter */}
      <p className="mt-2.5 text-xs text-muted-foreground font-medium tabular-nums z-10">
        {activeIndex + 1} / {items.length}
      </p>
    </div>
  );
};

export default StylishCarousel;
