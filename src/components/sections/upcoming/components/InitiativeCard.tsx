"use client";

import React from "react";
import { motion } from "framer-motion";
import { Initiative } from "../data";
import { CardSurface } from "@/components/ui/CardSurface";
import { categories } from "@/config/registry/categories";
import { icons } from "@/config/registry/icons";
import { upcomingIllustrations } from "@/config/registry/illustrations";

interface InitiativeCardProps {
  initiative: Initiative;
  index: number;
  variant?: "featured" | "standard";
}

export function InitiativeCard({ initiative, index, variant = "standard" }: InitiativeCardProps) {
  const isFeatured = variant === "featured";
  
  const categoryIdMap: Record<string, keyof typeof categories> = {
    "intro-programming": "programming",
    "web-bootcamp": "webDevelopment",
    "git-github-workshop": "openSource",
    "flutter-sprint": "mobile",
    "dsa-algorithms": "competitiveProgramming",
    "oss-month": "openSource",
  };
  
  const catId = categoryIdMap[initiative.id] || "programming";
  const category = categories[catId];
  
  const accentColor = category ? category.color : initiative.color;
  const Icon = category ? icons[catId] : initiative.icon;
  // Use distinct experiential upcoming illustrations, NOT domain illustrations!
  const VisualComponent = upcomingIllustrations[initiative.id];
  
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const accentSubtle = hexToRgba(accentColor, 0.05);
  const accentBorder = hexToRgba(accentColor, 0.15);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={isFeatured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}
    >
      <CardSurface accentColor={accentColor} className="h-full flex flex-col group">
        {/* Minimal Event Hero Visual Area (~60% Hero) */}
        {VisualComponent && (
          <div className={isFeatured ? "h-[220px] lg:h-[250px] flex-shrink-0 p-3 md:p-4 pb-0" : "h-[180px] lg:h-[200px] flex-shrink-0 p-2.5 pb-0"}>
            <VisualComponent accentColor={accentColor} />
          </div>
        )}

        <div className={`flex flex-col flex-1 relative z-10 ${isFeatured ? 'p-6 md:p-8' : 'p-5 md:p-6'}`}>
          
          {/* Header: Icon & Compact Status */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div 
              className={`rounded-xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${isFeatured ? 'w-14 h-14' : 'w-10 h-10'}`}
              style={{ 
                backgroundColor: accentSubtle,
                borderColor: accentBorder,
                boxShadow: `0 0 20px ${hexToRgba(accentColor, 0.2)}`
              }}
            >
              <Icon className={isFeatured ? 'w-7 h-7' : 'w-5 h-5'} style={{ color: accentColor }} />
            </div>
            
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-medium text-neutral-400 tracking-wide uppercase mt-1">
              <span style={{ color: accentColor }} className="opacity-80">{initiative.status}</span>
              <span className="text-neutral-600">•</span>
              <span>{initiative.difficulty}</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-6">
            <h3 className={`font-bold tracking-tight text-white mb-3 md:mb-4 transition-colors duration-300 ${isFeatured ? 'text-2xl md:text-3xl line-clamp-2' : 'text-xl line-clamp-2'}`}>
              <span className="relative inline-block">
                {initiative.title}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: accentColor }}
                />
              </span>
            </h3>
            <p className={`text-neutral-400 leading-relaxed ${isFeatured ? 'text-base md:text-lg line-clamp-4' : 'text-sm line-clamp-2'}`}>
              {initiative.description}
            </p>
          </div>

          {/* Feature Highlights Grid for Intro to Programming Featured Card */}
          {isFeatured && initiative.id === "intro-programming" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col gap-1 backdrop-blur-sm">
                <span className="text-base">⚡</span>
                <span className="text-xs font-semibold text-neutral-200">5 Hands-on Labs</span>
                <span className="text-[11px] text-neutral-400">Interactive practice sessions</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col gap-1 backdrop-blur-sm">
                <span className="text-base">🏆</span>
                <span className="text-xs font-semibold text-neutral-200">Certificate</span>
                <span className="text-[11px] text-neutral-400">Verified completion badge</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col gap-1 backdrop-blur-sm">
                <span className="text-base">👥</span>
                <span className="text-xs font-semibold text-neutral-200">1-on-1 Mentorship</span>
                <span className="text-[11px] text-neutral-400">Direct code review & support</span>
              </div>
            </div>
          )}

          {/* Compact "What You'll Learn" Section for Featured Intro to Programming Card */}
          {isFeatured && initiative.id === "intro-programming" && (
            <div className="my-5 pt-4 border-t border-neutral-800/60">
              <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-3 flex items-center gap-2">
                <span>📚 What You&apos;ll Learn</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-400 font-medium list-none">
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Variables &amp; Data Types</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Conditional Logic &amp; Loops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Functions &amp; Methods</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Object-Oriented Programming</span>
                </li>
              </ul>
            </div>
          )}

          <div className="mt-6 md:mt-8">
            <hr className="border-neutral-800/60 mb-4 md:mb-6" />
            
            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6 text-xs md:text-sm text-neutral-400 font-medium">
              {initiative.metadata.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-neutral-700">•</span>}
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Technology Chips */}
            <div className="flex flex-wrap gap-2">
              {initiative.focus.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-[10px] md:text-[11px] font-medium text-neutral-500 bg-neutral-900/50 rounded-full transition-colors duration-300 group-hover:bg-neutral-800/80 group-hover:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardSurface>
    </motion.div>
  );
}
