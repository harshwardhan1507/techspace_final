"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Check } from "lucide-react";
import { PlatformConfig } from "./communityLinks";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface PlatformCardProps {
  config: PlatformConfig;
}

export function PlatformCard({ config }: PlatformCardProps) {
  const isWhatsApp = config.id === "whatsapp";

  const IconComponent = isWhatsApp ? MessageCircle : InstagramIcon;

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 37;
    const g = parseInt(hex.slice(3, 5), 16) || 211;
    const b = parseInt(hex.slice(5, 7), 16) || 102;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const bgSubtle = hexToRgba(config.accentColor, 0.08);
  const borderSubtle = hexToRgba(config.accentColor, 0.25);

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative p-5 rounded-2xl bg-neutral-900/70 border border-white/10 hover:border-white/20 shadow-xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
      style={{
        boxShadow: `0 8px 30px ${hexToRgba(config.accentColor, 0.05)}`
      }}
    >
      {/* Top Header: Icon & Title */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="p-2.5 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ 
                backgroundColor: bgSubtle, 
                borderColor: borderSubtle,
                color: config.accentColor 
              }}
            >
              <IconComponent className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {config.title}
              </h3>
              <p className="text-[11px] font-mono text-neutral-400">
                {config.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Short Bullet Points */}
        <ul className="space-y-1.5 pt-1 text-xs text-neutral-300 font-medium">
          {config.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: config.accentColor }} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Primary Action Button */}
      <div className="pt-4 mt-2">
        <a
          href={config.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[48px] py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg text-white group/btn"
          style={{
            backgroundColor: isWhatsApp ? '#25D366' : '#E1306C',
          }}
        >
          <span>{config.buttonText}</span>
          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
