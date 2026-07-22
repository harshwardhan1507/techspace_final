"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Users, Clock, Tag, ExternalLink, Sparkles, Quote, ArrowLeft } from "lucide-react";
import { Memory, GalleryImage } from "../data/memories";
import { FullscreenImageViewer } from "./FullscreenImageViewer";

interface EventStoryExperienceProps {
  memory: Memory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventStoryExperience({
  memory,
  isOpen,
  onClose,
}: EventStoryExperienceProps) {
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll & listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreenImageIndex === null) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, fullscreenImageIndex]);

  if (!memory) return null;

  const galleryImages: GalleryImage[] = memory.gallery && memory.gallery.length > 0
    ? memory.gallery
    : [{ id: "hero-1", src: memory.image, caption: memory.title, aspectRatio: "wide" }];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto select-none scrollbar-thin">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-2xl z-10"
            aria-hidden="true"
          />

          {/* Main Story Container */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 min-h-screen w-full max-w-5xl mx-auto bg-[#070709] border-x border-white/10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.9)] pb-24"
          >
            {/* Ambient Accent Glow Background */}
            <div 
              className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-20"
              style={{ backgroundColor: memory.accentColor }}
            />

            {/* Sticky Floating Close & Back Bar */}
            <div className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-[#070709]/80 backdrop-blur-md border-b border-white/10">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Gallery</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-neutral-900/80 border border-white/15 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
                aria-label="Close Event Story"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ---------------- CINEMATIC HERO BANNER ---------------- */}
            <div className="relative w-full h-[420px] sm:h-[520px] overflow-hidden">
              <motion.img
                src={memory.image}
                alt={memory.title}
                animate={{ scale: [1, 1.04] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="w-full h-full object-cover filter brightness-[0.85]"
              />

              {/* Hero Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #070709 0%, rgba(7,7,9,0.5) 50%, transparent 100%)"
                }}
              />

              {/* Hero Glass Badge & Title Info */}
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor]"
                    style={{ backgroundColor: memory.accentColor, color: memory.accentColor }}
                  />
                  <span
                    className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10"
                    style={{ color: memory.accentColor }}
                  >
                    {memory.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {memory.title}
                </h1>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300 pt-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" style={{ color: memory.accentColor }} />
                    <span>{memory.location}</span>
                  </div>

                  <span className="text-neutral-600">•</span>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{memory.date}</span>
                  </div>

                  {memory.duration && (
                    <>
                      <span className="text-neutral-600">•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{memory.duration}</span>
                      </div>
                    </>
                  )}

                  <span className="text-neutral-600">•</span>

                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{memory.participants}</span>
                  </div>

                  {memory.track && (
                    <>
                      <span className="text-neutral-600">•</span>
                      <div className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5" style={{ color: memory.accentColor }} />
                        <span>{memory.track}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* ---------------- STORY CONTENT BODY ---------------- */}
            <div className="px-6 sm:px-10 mt-8 space-y-12">
              
              {/* Quote & Narrative Overview */}
              <div className="space-y-4 max-w-3xl">
                <div 
                  className="flex items-start gap-3 text-neutral-200 italic text-base sm:text-lg border-l-2 pl-4 py-1"
                  style={{ borderColor: memory.accentColor }}
                >
                  <Quote className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                  <p className="font-serif leading-relaxed">
                    &quot;{memory.quote}&quot;
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-2">
                  {memory.description || memory.story}
                </p>
              </div>

              {/* ---------------- APPLE PHOTOS EDITORIAL GALLERY ---------------- */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4" style={{ color: memory.accentColor }} />
                    <span>Event Gallery</span>
                  </h2>
                  <span className="text-xs font-mono text-neutral-400">
                    {galleryImages.length} Photos • Click to expand
                  </span>
                </div>

                {/* Editorial Photo Composition */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryImages.map((img: GalleryImage, idx: number) => {
                    const isWide = img.aspectRatio === "wide" || idx % 4 === 0;

                    return (
                      <motion.div
                        key={img.id || idx}
                        layoutId={`gallery-photo-${img.id}`}
                        onClick={() => setFullscreenImageIndex(idx)}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.25 }}
                        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 cursor-pointer shadow-lg ${
                          isWide ? "sm:col-span-2" : "col-span-1"
                        } h-64 sm:h-72`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.caption}
                          loading="lazy"
                          className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Caption Glass Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                          <p className="text-xs font-medium text-white line-clamp-2">
                            {img.caption}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* ---------------- EVENT HIGHLIGHTS ---------------- */}
              {memory.highlights && memory.highlights.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    Event Highlights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {memory.highlights.map((highlight: string, idx: number) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-xs font-semibold text-neutral-200 flex items-center gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: memory.accentColor }} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ---------------- TECHNOLOGIES USED ---------------- */}
              {memory.technologies && memory.technologies.length > 0 && (
                <div className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    Technologies & Concepts
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {memory.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ---------------- RESOURCES LINKS ---------------- */}
              {memory.resources && (
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-neutral-400">
                    Workshop Resources
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {memory.resources.github && (
                      <a
                        href={memory.resources.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
                      >
                        <span>GitHub Repository</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {memory.resources.slides && (
                      <a
                        href={memory.resources.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
                      >
                        <span>Workshop Slides</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

            </div>
          </motion.div>

          {/* Fullscreen Photo Viewer Sub-Component */}
          {fullscreenImageIndex !== null && (
            <FullscreenImageViewer
              memory={memory}
              initialIndex={fullscreenImageIndex}
              isOpen={fullscreenImageIndex !== null}
              onClose={() => setFullscreenImageIndex(null)}
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
