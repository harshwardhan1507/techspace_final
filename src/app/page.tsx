import HeroSection from "@/components/sections/hero/HeroSection";
import WhatWeDoSection from "@/components/sections/what-we-do/WhatWeDoSection";
import DomainsSection from "@/components/sections/domains/DomainsSection";
import UpcomingSection from "@/components/sections/upcoming/UpcomingSection";
import EventsGallerySection from "@/components/sections/events-gallery/EventsGallerySection";
import TeamSection from "@/components/sections/team/TeamSection";
import JourneySection from "@/components/sections/journey/JourneySection";
import WhyJoinSection from "@/components/sections/why-join/WhyJoinSection";
import JoinSection from "@/components/sections/join/JoinSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <DomainsSection />
      <UpcomingSection />
      <WhyJoinSection />
      <TeamSection />
      <EventsGallerySection />
      <JourneySection />
      <JoinSection />
      <Footer />
    </>
  );
}
