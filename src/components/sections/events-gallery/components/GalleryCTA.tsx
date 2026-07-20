import Link from "next/link";
import { buttonVariants } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";

export function GalleryCTA() {
  return (
    <div className="flex flex-col items-center text-center mt-16 sm:mt-24 mb-10 max-w-2xl mx-auto px-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4">
        Every great project begins with curiosity.
      </h3>
      <p className="text-[#B7BDC8] text-base sm:text-lg mb-8">
        Join us at the next TechSpace event and become part of the community.
      </p>
      <Link
        href="#events"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "border-[#262A31] text-[#F5F5F5] hover:bg-[#131417] hover:text-white h-12 px-8 rounded-md bg-transparent"
        )}
      >
        Explore Future Workshops
      </Link>
    </div>
  );
}
