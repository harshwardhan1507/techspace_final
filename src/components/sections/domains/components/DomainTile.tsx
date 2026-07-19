"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Brain, 
  Shield, 
  Trophy, 
  GitBranch, 
  Smartphone,
  LucideIcon 
} from "lucide-react";
import SpotlightCard from "@/components/ui/reactbits/SpotlightCard/SpotlightCard";
import { TechChip } from "./TechChip";
import { Domain } from "@/data/domains";
import { WebDevVisual } from "./card-visuals/WebDevVisual";
import { AIVisual } from "./card-visuals/AIVisual";
import { CyberVisual } from "./card-visuals/CyberVisual";
import { OpenSourceVisual } from "./card-visuals/OpenSourceVisual";
import { CompProgVisual } from "./card-visuals/CompProgVisual";
import { MobileDevVisual } from "./card-visuals/MobileDevVisual";

interface DomainTileProps {
  domain: Domain;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Shield,
  Trophy,
  GitBranch,
  Smartphone,
};

const visualComponents: Record<string, React.ComponentType<{ accentColor: string }>> = {
  "web-development": WebDevVisual,
  "artificial-intelligence": AIVisual,
  "cybersecurity": CyberVisual,
  "open-source": OpenSourceVisual,
  "competitive-programming": CompProgVisual,
  "mobile-development": MobileDevVisual,
};

export function DomainTile({ domain, index }: DomainTileProps) {
  const Icon = iconMap[domain.icon] || Code2;
  const VisualComponent = visualComponents[domain.id];
  const hasVisual = VisualComponent !== undefined;
  const accentColor = domain.accentColor;

  // Convert hex to rgba for opacity
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const accentRgba = hexToRgba(accentColor, 0.1);
  const accentGlow = hexToRgba(accentColor, 0.15);
  const accentRadial = hexToRgba(accentColor, 0.08);

  const visualHeightClass = {
    large: "h-[160px] md:h-[180px] lg:h-[200px]",
    medium: "h-[120px] md:h-[130px] lg:h-[140px]",
    small: "h-[90px] md:h-[100px] lg:h-[110px]",
  }[domain.size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <SpotlightCard
        className="group h-full rounded-2xl backdrop-blur-sm border flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden relative"
        style={{
          background: `linear-gradient(135deg, rgba(10, 10, 12, 0.8) 0%, rgba(18, 18, 22, 0.6) 100%)`,
          borderColor: accentRgba,
        }}
        spotlightColor={accentGlow}
      >
        {/* Per-domain radial gradient for large cards */}
        {domain.size === "large" && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${accentRadial} 0%, transparent 60%)`
            }}
          />
        )}

        {/* Visual section */}
        {hasVisual && (
          <div className={`relative ${visualHeightClass} p-4 md:p-6`}>
            <VisualComponent accentColor={accentColor} />
          </div>
        )}

        {/* Content section */}
        <div className={`flex flex-col ${hasVisual ? 'p-5 md:p-6' : 'p-6 md:p-8'} flex-grow relative z-10`}>
          {/* Icon for cards without visual */}
          {!hasVisual && (
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
          
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors duration-300 group-hover:text-opacity-90">
            {domain.title}
          </h3>
          
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed flex-grow mb-4 md:mb-5">
            {domain.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
            {domain.technologies.map((tech, techIndex) => (
              <TechChip key={tech} technology={tech} index={techIndex} accentColor={accentColor} />
            ))}
          </div>
          
          {domain.specialization && (
            <div className="mt-auto pt-3 md:pt-4 border-t" style={{ borderColor: accentRgba }}>
              <p className="text-xs md:text-sm text-neutral-400">
                <span className="font-medium text-neutral-300">Specialization:</span> {domain.specialization}
              </p>
            </div>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
