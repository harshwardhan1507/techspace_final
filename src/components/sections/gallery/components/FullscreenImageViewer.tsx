"use client";

import React, { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Share2, Maximize2 } from "lucide-react";
import { GalleryImage, Memory } from "../data/memories";

interface FullscreenImageViewerProps {
  memory: Memory;
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function FullscreenImageViewer({
  memory,
  initialIndex,
  isOpen,
  onClose,
}: FullscreenImageViewerProps) {
  const images = memory.gallery && memory.gallery.length > 0
    ? memory.gallery
    : [{ id: "hero", src: memory.image, caption: memory.title }];

  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const toPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const toNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") toPrev();
      if (e.key === "ArrowRight") toNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, toPrev, toNext]);

  // Touch Swipe Handling
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) toNext();
      else toPrev();
    }
    touchStartX.current = null;
  };

  const currentImg: GalleryImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none">
          {/* Dimmed Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-neutral-900/80 border border-white/15 text-white hover:bg-neutral-800 transition-all cursor-pointer"
            aria-label="Close Fullscreen Image"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative z-40 w-full h-full max-w-6xl max-h-[85vh] p-4 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg.id || currentIndex}
                layoutId={`gallery-photo-${currentImg.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative max-w-full max-h-full rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/10"
              >
                <img
                  src={currentImg.src}
                  alt={currentImg.caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={toPrev}
                  className="absolute left-6 p-3 rounded-full bg-neutral-900/80 border border-white/15 text-white hover:bg-neutral-800 transition-all cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={toNext}
                  className="absolute right-6 p-3 rounded-full bg-neutral-900/80 border border-white/15 text-white hover:bg-neutral-800 transition-all cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Overlay: Left Counter & Caption, Right Actions */}
          <div className="absolute bottom-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
            {/* Bottom Left Info */}
            <div className="flex flex-col space-y-1 pointer-events-auto bg-neutral-950/80 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-md max-w-md">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="font-bold text-white">{memory.title}</span>
                <span>•</span>
                <span style={{ color: memory.accentColor }}>
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
              <p className="text-xs text-neutral-300 line-clamp-1">
                {currentImg.caption}
              </p>
            </div>

            {/* Bottom Right Tools */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: memory.title,
                      text: currentImg.caption,
                      url: window.location.href,
                    }).catch(() => {});
                  }
                }}
                className="p-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors backdrop-blur-md cursor-pointer"
                aria-label="Share Photo"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
