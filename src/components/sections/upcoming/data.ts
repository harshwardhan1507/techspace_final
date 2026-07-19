import { Brain, Code2, Shield, Smartphone, Rocket, GitBranch, LucideIcon } from "lucide-react";

export type InitiativeStatus = "Coming Soon" | "Planning" | "Upcoming";
export type InitiativeDifficulty = "Beginner" | "Intermediate" | "All Levels";

export interface Initiative {
  id: string;
  title: string;
  description: string;
  status: InitiativeStatus;
  difficulty: InitiativeDifficulty;
  focus: string[];
  metadata: string[];
  icon: LucideIcon;
  color: string;
}

export const initiativesData: Initiative[] = [
  {
    id: "ai-workshop",
    title: "AI Workshop Series",
    description: "Master the fundamentals of AI, from prompt engineering to understanding large language models.",
    status: "Coming Soon",
    difficulty: "Beginner",
    focus: ["Prompt Engineering", "LLMs", "AI Fundamentals"],
    metadata: ["3 Sessions", "Hands-on", "Certificate"],
    icon: Brain,
    color: "#06B6D4", // Electric Cyan
  },
  {
    id: "web-bootcamp",
    title: "Web Development Bootcamp",
    description: "Learn to build modern, responsive web applications from scratch using React and modern CSS.",
    status: "Planning",
    difficulty: "Beginner",
    focus: ["HTML", "CSS", "JavaScript", "React"],
    metadata: ["Weekend", "Practical", "Project-based"],
    icon: Code2,
    color: "#0EA5E9", // Azure Blue
  },
  {
    id: "cyber-ctf",
    title: "Cybersecurity CTF",
    description: "Test your skills in our upcoming Capture The Flag competition covering web and network security.",
    status: "Upcoming",
    difficulty: "Intermediate",
    focus: ["Linux", "Networking", "Web Security"],
    metadata: ["Competition", "Team Event", "Practical"],
    icon: Shield,
    color: "#10B981", // Emerald
  },
  {
    id: "flutter-sprint",
    title: "Flutter Build Sprint",
    description: "A rapid-paced sprint to build and deploy cross-platform mobile applications.",
    status: "Planning",
    difficulty: "Intermediate",
    focus: ["Flutter", "Firebase", "Mobile UI"],
    metadata: ["1 Week", "Hands-on", "App Deployment"],
    icon: Smartphone,
    color: "#EC4899", // Pink
  },
  {
    id: "hackathon-prep",
    title: "Hackathon Preparation",
    description: "Get ready for competitive coding with team building exercises and rapid prototyping workshops.",
    status: "Coming Soon",
    difficulty: "All Levels",
    focus: ["Team Building", "Rapid Prototyping", "Pitching"],
    metadata: ["Weekend", "Team Building", "Pitching"],
    icon: Rocket,
    color: "#F59E0B", // Amber
  },
  {
    id: "oss-month",
    title: "Open Source Month",
    description: "Learn how to effectively contribute to open source projects and collaborate with developers globally.",
    status: "Planning",
    difficulty: "Intermediate",
    focus: ["Git", "GitHub", "OSS Contributions"],
    metadata: ["4 Weeks", "Remote", "Mentorship"],
    icon: GitBranch,
    color: "#8B5CF6", // Purple
  }
];
