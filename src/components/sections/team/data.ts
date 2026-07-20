import { ReactNode } from "react";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  focusArea: string;
  image: string;
  intro: string;
  technologies: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  favoriteStack?: string;
  currentlyLearning?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "alex",
    name: "Alex Mercer",
    role: "President",
    focusArea: "Full-Stack & Systems",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800&h=800",
    intro: "I love building scalable systems and growing our community of developers. When I'm not coding, I'm usually organizing our next big hackathon.",
    technologies: ["React", "Go", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    favoriteStack: "Next.js + Go",
    currentlyLearning: "Rust & eBPF",
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "Technical Lead",
    focusArea: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&h=800",
    intro: "Passionate about making AI accessible. I lead the ML reading group and help students build their first neural networks.",
    technologies: ["Python", "PyTorch", "TensorFlow", "CUDA"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    favoriteStack: "PyTorch + FastAPI",
    currentlyLearning: "Diffusion Models",
  },
  {
    id: "jordan",
    name: "Jordan Lee",
    role: "Design Lead",
    focusArea: "UI/UX & Frontend",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800&h=800",
    intro: "Obsessed with pixel-perfect designs and smooth animations. I bridge the gap between design and engineering.",
    technologies: ["Figma", "React", "Framer Motion", "Tailwind"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    favoriteStack: "Next.js + Tailwind",
    currentlyLearning: "Three.js",
  },
  {
    id: "taylor",
    name: "Taylor Swift",
    role: "Events Coordinator",
    focusArea: "Developer Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800&h=800",
    intro: "I make sure our workshops and meetups are engaging, inclusive, and fun. Always looking for new speakers!",
    technologies: ["Community Management", "Event Planning", "Public Speaking"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    favoriteStack: "Notion + Slack",
    currentlyLearning: "Technical Writing",
  }
];
