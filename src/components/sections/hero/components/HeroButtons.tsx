import React from "react";
import { Button } from "@/components/ui/shadcn/button";

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
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <a href={primary.href} aria-label={primary.label}>
        <Button size="lg" className="rounded-full px-8 font-medium">
          {primary.label}
        </Button>
      </a>
      <a href={secondary.href} aria-label={secondary.label}>
        <Button size="lg" variant="outline" className="rounded-full px-8 font-medium bg-transparent">
          {secondary.label}
        </Button>
      </a>
    </div>
  );
}
