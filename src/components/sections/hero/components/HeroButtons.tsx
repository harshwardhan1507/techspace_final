"use client";

import React from "react";
import { Button } from "@/components/ui/shadcn/button";
import { useJoinModal } from "@/components/join/hooks/useJoinModal";

interface HeroButtonsProps {
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
}

export function HeroButtons({ primary, secondary }: HeroButtonsProps) {
  const { openJoinModal } = useJoinModal();

  return (
    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
      <Button 
        size="lg" 
        onClick={openJoinModal}
        className="w-full sm:w-auto min-h-[44px] h-12 rounded-full px-8 font-semibold text-sm shadow-lg transition-all duration-300"
      >
        {primary.label}
      </Button>
      <a href={secondary.href} aria-label={secondary.label} className="w-full sm:w-auto">
        <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[44px] h-12 rounded-full px-8 font-medium bg-transparent text-sm">
          {secondary.label}
        </Button>
      </a>
    </div>
  );
}
