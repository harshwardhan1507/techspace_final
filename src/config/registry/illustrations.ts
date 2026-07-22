import React from "react";
import { CategoryId } from "./categories";

// Domain Minimal Product Hero Animations ("What can I learn?")
import { ProgrammingIllustration } from "@/components/ui/illustrations/domains/ProgrammingIllustration";
import { WebDevelopmentIllustration } from "@/components/ui/illustrations/domains/WebDevelopmentIllustration";
import { AIIllustration } from "@/components/ui/illustrations/domains/AIIllustration";
import { CybersecurityIllustration } from "@/components/ui/illustrations/domains/CybersecurityIllustration";
import { OpenSourceIllustration } from "@/components/ui/illustrations/domains/OpenSourceIllustration";
import { MobileIllustration } from "@/components/ui/illustrations/domains/MobileIllustration";

// Upcoming Minimal Event Hero Animations ("What can I join next?")
import { WorkshopIllustration } from "@/components/ui/illustrations/upcoming/WorkshopIllustration";
import { BootcampIllustration } from "@/components/ui/illustrations/upcoming/BootcampIllustration";
import { GitWorkshopIllustration } from "@/components/ui/illustrations/upcoming/GitWorkshopIllustration";
import { SprintIllustration } from "@/components/ui/illustrations/upcoming/SprintIllustration";
import { ContestIllustration } from "@/components/ui/illustrations/upcoming/ContestIllustration";
import { CommunityMonthIllustration } from "@/components/ui/illustrations/upcoming/CommunityMonthIllustration";

export interface IllustrationProps {
  accentColor: string;
}

// 1. Domain Minimal Product Animations ("What will I learn?")
export const domainIllustrations: Record<CategoryId, React.ComponentType<IllustrationProps>> = {
  programming: ProgrammingIllustration,
  webDevelopment: WebDevelopmentIllustration,
  ai: AIIllustration,
  cybersecurity: CybersecurityIllustration,
  openSource: OpenSourceIllustration,
  competitiveProgramming: ProgrammingIllustration,
  mobile: MobileIllustration,
};

// 2. Upcoming Initiatives Minimal Event Animations ("What can I join next?")
export const upcomingIllustrations: Record<string, React.ComponentType<IllustrationProps>> = {
  "intro-programming": WorkshopIllustration,
  "web-bootcamp": BootcampIllustration,
  "git-github-workshop": GitWorkshopIllustration,
  "flutter-sprint": SprintIllustration,
  "dsa-algorithms": ContestIllustration,
  "oss-month": CommunityMonthIllustration,
};

// Legacy export
export const illustrations = domainIllustrations;
