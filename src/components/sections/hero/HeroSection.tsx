import React from "react";
import { BackgroundPaths } from "@/components/ui/shared/background-paths";
import { HeroContent } from "./components";

export default function HeroSection() {
  return (
    <section id="hero" aria-label="Hero Section">
      <BackgroundPaths>
        <HeroContent />
      </BackgroundPaths>
    </section>
  );
}
