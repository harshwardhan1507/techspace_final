export interface Domain {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const domains: Domain[] = [
  {
    id: "software-development",
    title: "Software Development",
    description: "Build production-ready web, mobile, and desktop applications.",
    icon: "Code",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Learn modern AI, machine learning, and intelligent systems.",
    icon: "Brain",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Explore ethical hacking, digital security, and defensive engineering.",
    icon: "Shield",
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    description: "Strengthen problem-solving and algorithmic thinking.",
    icon: "Trophy",
  },
  {
    id: "open-source",
    title: "Open Source",
    description: "Collaborate on impactful projects and contribute to the global developer ecosystem.",
    icon: "GitBranch",
  },
  {
    id: "innovation-research",
    title: "Innovation & Research",
    description: "Transform ideas into prototypes, research projects, and real-world solutions.",
    icon: "Lightbulb",
  },
];
