"use client";

import React, { useRef, useState } from "react";
import { cards } from "@/design/tokens/cards";
import { colors } from "@/design/tokens/colors";

interface CardSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  accentColor?: string;
  className?: string;
}

/**
 * CardSurface
 * 
 * Semantic, highly composable base component implementing the shared card styling.
 * Does not contain section-specific logic or styling.
 */
export function CardSurface({ children, accentColor = colors.text.primary, className = "", ...props }: CardSurfaceProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Convert hex to rgba for glow effects
  const hexToRgba = (hex: string, alpha: number) => {
    // Basic conversion, handles 6 char hex
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const accentRgba = hexToRgba(accentColor, cards.border.hoverOpacity);
  const accentRadial = hexToRgba(accentColor, cards.glow.radialOpacity);
  const accentSpotlight = hexToRgba(accentColor, cards.glow.spotlightOpacity);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        borderRadius: cards.radius,
        background: cards.surface.background,
        border: `1px solid ${cards.border.default}`,
        boxShadow: cards.shadows.default,
        backdropFilter: cards.surface.backdropBlur,
      }}
      {...props}
    >
      {/* Background radial glow based on accent color */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentRadial}, transparent 60%)`
        }}
      />

      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${accentSpotlight}, transparent 40%)`,
        }}
      />

      {/* Border Highlight Effect on Hover */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          border: `1px solid ${accentRgba}`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
