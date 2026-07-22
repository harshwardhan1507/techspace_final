"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardSurface } from "@/components/ui/CardSurface";
import { TechChip } from "./TechChip";
import { Domain } from "@/data/domains";
import { categories } from "@/config/registry/categories";
import { icons } from "@/config/registry/icons";
import { domainIllustrations } from "@/config/registry/illustrations";

interface DomainTileProps {
  domain: Domain;
  index: number;
}

export function DomainTile({ domain, index }: DomainTileProps) {
  const categoryIdMap: Record<string, keyof typeof categories> = {
    "programming": "programming",
    "web-development": "webDevelopment",
    "artificial-intelligence": "ai",
    "cybersecurity": "cybersecurity",
    "open-source": "openSource",
    "mobile-development": "mobile",
  };
  
  const catId = categoryIdMap[domain.id] || "programming";
  const category = categories[catId];
  
  const accentColor = category ? category.color : domain.accentColor;
  const Icon = category ? icons[catId] : icons.programming;
  const VisualComponent = domainIllustrations[catId];

  // Determine if it's a large card (index 0 or 1 in our new symmetric layout)
  const isLarge = index === 0 || index === 1;

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const accentRgba = hexToRgba(accentColor, 0.1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <CardSurface accentColor={accentColor} className="h-full">
        {/* Upper Visual Section (~60-65% Focal Point) */}
        {VisualComponent && (
          <div className={`relative ${isLarge ? 'h-[220px] lg:h-[250px]' : 'h-[200px] lg:h-[220px]'} p-2.5 md:p-3`}>
            <VisualComponent accentColor={accentColor} />
          </div>
        )}

        {/* Content section */}
        <div className={`flex flex-col ${VisualComponent ? 'p-5 md:p-6' : 'p-6 md:p-8'} flex-grow relative z-10`}>
          {!VisualComponent && (
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <div 
                className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: accentRgba,
                  boxShadow: `0 0 20px ${hexToRgba(accentColor, 0.3)}`
                }}
              >
                <Icon 
                  className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300"
                  style={{ color: accentColor }}
                />
              </div>
            </div>
          )}
          
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors duration-300 group-hover:text-opacity-90 line-clamp-2">
            {domain.title}
          </h3>
          
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed flex-grow mb-4 md:mb-5 line-clamp-3">
            {domain.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
            {domain.technologies.slice(0, 4).map((tech, techIndex) => (
              <TechChip key={tech} technology={tech} index={techIndex} accentColor={accentColor} />
            ))}
            {domain.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium text-neutral-400 bg-neutral-800/50 rounded-full border border-neutral-700/50">
                +{domain.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </CardSurface>
    </motion.div>
  );
}
