import { HeroSection } from "@/components/sections/hero/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { DomainsSection } from "@/components/sections/DomainsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { WhyJoinSection } from "@/components/sections/WhyJoinSection";
import { JoinCTASection } from "@/components/sections/JoinCTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <WhatWeDoSection />
      <DomainsSection />
      <ProjectsSection />
      <EventsSection />
      <TeamSection />
      <JourneySection />
      <WhyJoinSection />
      <JoinCTASection />
    </main>
  );
}
