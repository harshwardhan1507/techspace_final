export interface Domain {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  specialization: string;
  size: "large" | "medium" | "small";
  accentColor: string;
}

export const domainsData: Domain[] = [
  {
    id: "programming",
    title: "Programming & Logic",
    description: "Master software engineering fundamentals, algorithm design, data structures, and problem-solving through clean, efficient code.",
    icon: "Code2",
    technologies: ["C++", "Java", "Python", "Algorithms", "OOP"],
    specialization: "Logic • Algorithms • Software Engineering",
    size: "large",
    accentColor: "#0EA5E9", // Azure Blue
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Design and deploy modern, responsive web applications from wireframe layouts to full-stack cloud deployments.",
    icon: "Layout",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
    specialization: "Frontend • Backend • Full Stack",
    size: "large",
    accentColor: "#2563EB", // Royal Blue
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Train machine learning models, build neural networks, explore computer vision, and deploy generative AI pipelines.",
    icon: "BrainCircuit",
    technologies: ["PyTorch", "TensorFlow", "LLMs", "Computer Vision"],
    specialization: "ML • Neural Nets • Vision",
    size: "medium",
    accentColor: "#06B6D4", // Electric Cyan
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Analyze network traffic, secure cloud infrastructure, conduct ethical penetration testing, and master defensive protocols.",
    icon: "Shield",
    technologies: ["Network Security", "Ethical Hacking", "OWASP", "CTFs"],
    specialization: "Red Team • Blue Team • CTFs",
    size: "medium",
    accentColor: "#10B981", // Emerald Green
  },
  {
    id: "open-source",
    title: "Open Source",
    description: "Collaborate on production repositories, master Git branching workflows, write technical docs, and contribute to global OSS.",
    icon: "GitBranch",
    technologies: ["Git", "GitHub", "Pull Requests", "OSS Ecosystem"],
    specialization: "Workflows • Community • Pull Requests",
    size: "medium",
    accentColor: "#8B5CF6", // Purple
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Build cross-platform mobile apps for iOS and Android using Flutter and React Native with native device integrations.",
    icon: "Smartphone",
    technologies: ["Flutter", "React Native", "Android", "iOS", "Firebase"],
    specialization: "Cross-Platform • Native UI",
    size: "medium",
    accentColor: "#EC4899", // Pink
  },
];
