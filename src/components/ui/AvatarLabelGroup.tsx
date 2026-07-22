"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarLabelGroupProps {
  size?: "sm" | "md" | "lg";
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
  isOpen?: boolean;
}

export function AvatarLabelGroup({
  size = "md",
  src,
  alt,
  title,
  subtitle,
  className,
  onClick,
  isOpen = false,
}: AvatarLabelGroupProps) {
  const sizeMap = {
    sm: {
      avatar: "w-8 h-8",
      avatarSize: 32,
      title: "text-xs font-semibold text-neutral-200 group-hover:text-white",
      subtitle: "text-[10px] text-neutral-400",
      gap: "gap-2.5",
    },
    md: {
      avatar: "w-9.5 h-9.5",
      avatarSize: 38,
      title: "text-xs sm:text-sm font-semibold text-neutral-100 group-hover:text-white",
      subtitle: "text-[10px] sm:text-xs text-neutral-400",
      gap: "gap-3",
    },
    lg: {
      avatar: "w-11 h-11",
      avatarSize: 44,
      title: "text-base font-bold text-white",
      subtitle: "text-xs text-neutral-300",
      gap: "gap-3.5",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group inline-flex items-center text-left focus:outline-none transition-all duration-300 rounded-full py-1 px-1.5 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer",
        currentSize.gap,
        isOpen && "bg-white/5",
        className
      )}
    >
      {/* Avatar Image Wrapper with Glow */}
      <div
        className={cn(
          "relative rounded-full overflow-hidden border transition-all duration-300 flex-shrink-0",
          isOpen
            ? "border-sky-400/80 ring-2 ring-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
            : "border-white/20 group-hover:border-white/40 shadow-sm"
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={currentSize.avatarSize}
          height={currentSize.avatarSize}
          className={cn(
            "object-cover rounded-full transition-transform duration-300 group-hover:scale-105",
            currentSize.avatar
          )}
        />
      </div>

      {/* Label & Subtitle */}
      <div className="flex flex-col leading-tight">
        <span className={cn("transition-colors duration-200", currentSize.title)}>
          {title}
        </span>
        {subtitle && (
          <span className={cn("transition-colors duration-200", currentSize.subtitle)}>
            {subtitle}
          </span>
        )}
      </div>
    </button>
  );
}
