import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import logoLight from "@/assets/logos/logo-light.svg";
import logoDark from "@/assets/logos/logo-dark.svg";
import logoMark from "@/assets/logos/logo-mark.svg";

export interface BrandProps {
  size?: "sm" | "md" | "lg";
  variant?: "logo" | "wordmark" | "full";
  className?: string;
}

export function Brand({ size = "md", variant = "full", className }: BrandProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  const heightMap = {
    sm: 24,
    md: 32,
    lg: 48,
  };

  if (variant === "wordmark") {
    return (
      <span
        className={cn(
          "font-bold tracking-tighter text-neutral-950 dark:text-white",
          size === "sm" && "text-lg",
          size === "md" && "text-xl",
          size === "lg" && "text-3xl",
          className
        )}
      >
        TechSpace
      </span>
    );
  }

  const lightSrc = variant === "logo" ? logoMark : logoLight;
  const darkSrc = variant === "logo" ? logoMark : logoDark;

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={lightSrc}
        alt="TechSpace Logo"
        height={heightMap[size]}
        className={cn("w-auto dark:hidden", sizeClasses[size])}
        priority
      />
      <Image
        src={darkSrc}
        alt="TechSpace Logo"
        height={heightMap[size]}
        className={cn("w-auto hidden dark:block", sizeClasses[size])}
        priority
      />
    </div>
  );
}
