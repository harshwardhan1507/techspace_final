"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import StylishCarousel from "@/components/ui/lightswind/stylish-carousel";
import { featuredEvents } from "@/data/events";
import { layout } from "@/design/tokens/layout";

export default function EventsSection() {
  return (
    <section
      id="events"
      aria-label="Featured Events Showcase"
      className="relative w-full overflow-hidden bg-[#020202]"
      style={{
        paddingTop: layout.rhythm.sectionToNextSection,
        paddingBottom: layout.rhythm.sectionToNextSection,
      }}
    >
      {/* Anchor for Navbar smooth scrolling */}
      <span id="events-anchor" className="absolute -top-24 pointer-events-none" />

      {/* Ambient Glow Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-indigo-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div
        className="container mx-auto relative z-10"
        style={{
          maxWidth: layout.sectionMaxWidth,
          paddingLeft: layout.pagePadding,
          paddingRight: layout.pagePadding,
        }}
      >
        <SectionHeader
          eyebrow="FEATURED SHOWCASE"
          title="Featured Events"
          description="Explore some of the workshops, hackathons, seminars, and community events organized by TechSpace."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: layout.rhythm.headerToGrid }}
          className="w-full flex justify-center"
        >
          <StylishCarousel
            items={featuredEvents}
            slideSize="clamp(280px, 42vw, 480px)"
            rotationDegrees={20}
            inactiveScale={0.68}
            autoPlay={0}
            showArrows={true}
            showDots={true}
            clickToNavigate={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
