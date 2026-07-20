import { EventsHeader } from "./components/EventsHeader";
import { FeaturedEvents } from "./components/FeaturedEvents";
import { GalleryHeader } from "./components/GalleryHeader";
import { GalleryGrid } from "./components/GalleryGrid";
import { GalleryCTA } from "./components/GalleryCTA";

export default function EventsGallerySection() {
  return (
    <section id="events" className="relative w-full py-24 overflow-hidden bg-transparent">
      {/* Background radial lighting to match homepage continuum */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4169E1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#8A2BE2]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Part 1: Upcoming Events Showcase */}
        <div className="flex flex-col">
          <EventsHeader />
          <FeaturedEvents />
        </div>

        {/* Comfortable Spacing Between Parts (120px) */}
        <div className="h-[120px] w-full" aria-hidden="true" />

        {/* Part 2: Community Gallery */}
        <div className="flex flex-col">
          <GalleryHeader />
          <GalleryGrid />
          <GalleryCTA />
        </div>

      </div>
    </section>
  );
}
