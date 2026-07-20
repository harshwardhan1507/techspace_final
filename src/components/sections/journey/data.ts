import { Target, Users, Code2, Sparkles, Rocket, LucideIcon } from "lucide-react";

export type JourneyEvent = {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const journeyData: JourneyEvent[] = [
  {
    id: "founded",
    year: "2025",
    title: "TechSpace Founded",
    description: "A vision to build a student-led technology community.",
    icon: Target,
  },
  {
    id: "formation",
    year: "Formation",
    title: "Core Team Established",
    description: "Bringing together passionate students across multiple technical domains.",
    icon: Users,
  },
  {
    id: "initiatives",
    year: "First Initiatives",
    title: "Programming Workshops",
    description: "Launching introductory workshops in Java, Python, C++, Git and GitHub.",
    icon: Code2,
  },
  {
    id: "growth",
    year: "Community Growth",
    title: "Expanding Opportunities",
    description: "Growing through workshops, collaboration, open source and technical events.",
    icon: Sparkles,
  },
  {
    id: "future",
    year: "The Future",
    title: "What's Next",
    description: "Hackathons, research, industry collaborations, mentorship and larger community initiatives.",
    icon: Rocket,
  }
];
