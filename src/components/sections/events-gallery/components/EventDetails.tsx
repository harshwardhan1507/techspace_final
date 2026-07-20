"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { buttonVariants } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";
import { featuredEvents } from "../data/featuredEvents";

interface EventDetailsProps {
  activeIndex: number;
}

export function EventDetails({ activeIndex }: EventDetailsProps) {
  const event = featuredEvents[activeIndex];

  if (!event) return null;

  return (
    <div className="w-full h-[280px] sm:h-[240px] md:h-[280px] lg:h-auto flex items-center justify-start relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col justify-center gap-4"
        >
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131417] border border-[#262A31] text-xs font-medium text-[#B7BDC8]">
              <Calendar className="w-3.5 h-3.5 text-[#4169E1]" />
              {event.date}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131417] border border-[#262A31] text-xs font-medium text-[#B7BDC8]">
              <Tag className="w-3.5 h-3.5 text-[#8A2BE2]" />
              {event.category}
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              {event.title}
            </h3>
            <p className="text-base md:text-lg text-[#B7BDC8] leading-relaxed max-w-lg">
              {event.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Link
              href={event.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#4169E1] hover:bg-[#4169E1]/90 text-white font-medium px-8 h-12 rounded-md"
              )}
            >
              Register
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
