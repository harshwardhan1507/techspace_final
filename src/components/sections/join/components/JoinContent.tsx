"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";
import { joinCtaConfig } from "../data";
import { useJoinModal } from "@/components/join/hooks/useJoinModal";

export function JoinContent() {
  const { openJoinModal } = useJoinModal();

  return (
    <div className="flex flex-col space-y-10 mt-10">
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <button 
          onClick={openJoinModal} 
          className={cn(buttonVariants({ size: "lg" }), "bg-[#4169E1] hover:bg-[#4169E1]/90 text-white font-medium px-8 h-12 rounded-md shadow-xl transition-all duration-300")}
        >
          {joinCtaConfig.primary.label}
        </button>
        
        <Link 
          href={joinCtaConfig.secondary.href}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-[#262A31] text-[#F5F5F5] hover:bg-[#131417] hover:text-white h-12 px-8 rounded-md bg-transparent")}
        >
          {joinCtaConfig.secondary.label}
        </Link>
      </div>

      {/* Closing Line */}
      <div className="pt-2 max-w-lg">
        <p className="text-sm sm:text-base font-semibold text-[#F5F5F5] opacity-90">
          "{joinCtaConfig.closingLine}"
        </p>
      </div>
    </div>
  );
}
