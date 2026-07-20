import Link from "next/link";
import { buttonVariants } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";
import { joinCtaConfig } from "../data";

export function JoinContent() {
  return (
    <div className="flex flex-col space-y-10 mt-10">
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <Link 
          href={joinCtaConfig.primary.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "bg-[#4169E1] hover:bg-[#4169E1]/90 text-white font-medium px-8 h-12 rounded-md")}
        >
          {joinCtaConfig.primary.label}
        </Link>
        
        <Link 
          href={joinCtaConfig.secondary.href}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-[#262A31] text-[#F5F5F5] hover:bg-[#131417] hover:text-white h-12 px-8 rounded-md bg-transparent")}
        >
          {joinCtaConfig.secondary.label}
        </Link>
      </div>

      {/* Identity Badges */}
      <div className="flex flex-wrap gap-2.5 max-w-xl">
        {joinCtaConfig.pillars.map((pillar) => (
          <div 
            key={pillar.label}
            className="px-4 py-2 rounded-full border border-[#262A31] bg-[#0C0C0F] text-sm text-[#B7BDC8] font-medium tracking-wide"
          >
            {pillar.label}
          </div>
        ))}
      </div>

      {/* Closing Line */}
      <div className="pt-4 max-w-lg">
        <p className="text-sm sm:text-base font-semibold text-[#F5F5F5] opacity-90">
          "{joinCtaConfig.closingLine}"
        </p>
      </div>
    </div>
  );
}
