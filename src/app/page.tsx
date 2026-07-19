import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Domains } from "@/components/sections/Domains";
import { Projects } from "@/components/sections/Projects";
import { EventsGallery } from "@/components/sections/EventsGallery";
import { Team } from "@/components/sections/Team";
import { Journey } from "@/components/sections/Journey";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { JoinCTA } from "@/components/sections/JoinCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <WhatWeDo />
      <Domains />
      <Projects />
      <EventsGallery />
      <Team />
      <Journey />
      <WhyJoin />
      <JoinCTA />
    </main>
  );
}
