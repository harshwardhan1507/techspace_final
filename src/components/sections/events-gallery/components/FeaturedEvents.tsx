"use client";

import { useState } from "react";
import StylishCarousel from "@/components/ui/lightswind/stylish-carousel";
import { EventDetails } from "./EventDetails";
import { featuredEvents } from "../data/featuredEvents";

export function FeaturedEvents() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Map to the shape StylishCarousel expects
  const carouselItems = featuredEvents.map((event) => ({
    src: event.image,
    title: "", // We don't want the carousel to render the title since we have EventDetails
    alt: event.title,
  }));

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
      {/* Details Side (Left on Desktop, Top on Mobile) */}
      <div className="w-full lg:w-[45%] order-2 lg:order-1 flex justify-center lg:justify-start">
        <EventDetails activeIndex={activeIndex} />
      </div>

      {/* Carousel Side (Right on Desktop, Bottom on Mobile) */}
      <div className="w-full lg:w-[55%] order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="w-full max-w-lg lg:max-w-none">
          <StylishCarousel
            items={carouselItems}
            initialIndex={0}
            onIndexChange={(index) => setActiveIndex(index)}
            showArrows={true}
            showDots={true}
            clickToNavigate={true}
            autoPlay={6000} // Autoplay every 6s to keep the showcase alive
            slideSize="clamp(180px, 40vmin, 320px)"
          />
        </div>
      </div>
    </div>
  );
}
