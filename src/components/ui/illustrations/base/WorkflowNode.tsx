"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WorkflowNodeProps {
  icon?: LucideIcon;
  label: string;
  sublabel?: string;
  color?: string;
  active?: boolean;
  pulse?: boolean;
  className?: string;
  step?: string;
}

export function WorkflowNode({
  icon: Icon,
  label,
  sublabel,
  color = "#0EA5E9",
  active = true,
  pulse = false,
  className = "",
  step
}: WorkflowNodeProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md z-10 transition-all duration-300 ${className}`}
      style={{
        background: hexToRgba(color, 0.08),
        border: `1px solid ${hexToRgba(color, active ? 0.35 : 0.15)}`,
        boxShadow: active ? `0 0 16px ${hexToRgba(color, 0.2)}` : "none",
      }}
    >
      {/* Pulse Outer Ring */}
      {pulse && (
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ border: `1px solid ${color}` }}
        />
      )}

      {step && (
        <span 
          className="text-[9px] font-mono font-bold px-1 py-0.2 rounded"
          style={{ background: hexToRgba(color, 0.2), color }}
        >
          {step}
        </span>
      )}

      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />}

      <div className="flex flex-col text-left">
        <span className="text-[10px] font-mono font-semibold text-neutral-200 leading-tight">
          {label}
        </span>
        {sublabel && (
          <span className="text-[8px] font-mono text-neutral-400 leading-tight">
            {sublabel}
          </span>
        )}
      </div>
    </motion.div>
  );
}
