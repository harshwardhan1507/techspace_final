import { BookOpen, Hammer, Users, Flag, TrendingUp, LucideIcon } from "lucide-react";
import { LearnVisual } from "./components/visuals/LearnVisual";
import { BuildVisual } from "./components/visuals/BuildVisual";
import { CollaborateVisual } from "./components/visuals/CollaborateVisual";
import { LeadVisual } from "./components/visuals/LeadVisual";
import { GrowVisual } from "./components/visuals/GrowVisual";

export interface WhyJoinStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  visual: React.FC;
  accent: string;
}

export const benefitsData: WhyJoinStep[] = [
  {
    id: "learn",
    step: "01",
    title: "Learn the Fundamentals",
    description: "Master programming concepts through workshops covering Java, Python, C++, Git, GitHub and modern development tools.",
    icon: BookOpen,
    visual: LearnVisual,
    accent: "#4682B4",
  },
  {
    id: "build",
    step: "02",
    title: "Build Real Projects",
    description: "Apply your knowledge by creating practical projects, contributing to open source, and experimenting with modern technologies.",
    icon: Hammer,
    visual: BuildVisual,
    accent: "#3b82f6",
  },
  {
    id: "collaborate",
    step: "03",
    title: "Collaborate With Others",
    description: "Work alongside students from different domains, participate in technical events and learn through teamwork.",
    icon: Users,
    visual: CollaborateVisual,
    accent: "#8b5cf6",
  },
  {
    id: "lead",
    step: "04",
    title: "Take Initiative",
    description: "Organize workshops, mentor juniors and contribute to building a stronger technical community.",
    icon: Flag,
    visual: LeadVisual,
    accent: "#6366f1",
  },
  {
    id: "grow",
    step: "05",
    title: "Grow Beyond the Classroom",
    description: "Develop technical skills, communication, teamwork and confidence that extend beyond academics.",
    icon: TrendingUp,
    visual: GrowVisual,
    accent: "#10b981",
  },
];
