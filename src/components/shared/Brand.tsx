import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface BrandProps {
  size?: "sm" | "md" | "lg";
  variant?: "logo" | "wordmark" | "full";
  className?: string;
}

export function Brand({ size = "md", variant = "full", className }: BrandProps) {
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

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/image.svg"
        alt="TechSpace Logo"
        width={1095}
        height={1095}
        className="w-auto h-8 md:h-9 lg:h-10 object-contain"
        priority
      />
    </div>
  );
}
