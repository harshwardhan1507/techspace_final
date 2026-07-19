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
    id: "web-development",
    title: "Web Development",
    description: "Build modern, responsive, and scalable web applications using cutting-edge frameworks and technologies.",
    icon: "Code2",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Full Stack"],
    specialization: "Frontend • Backend • Full Stack",
    size: "large",
    accentColor: "#0EA5E9", // Azure Blue
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Explore machine learning, large language models, computer vision, and generative AI systems.",
    icon: "Brain",
    technologies: ["Machine Learning", "LLMs", "Computer Vision", "Generative AI"],
    specialization: "ML • LLMs • Vision",
    size: "large",
    accentColor: "#06B6D4", // Electric Cyan
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Master ethical hacking, network security, CTFs, and defensive security practices.",
    icon: "Shield",
    technologies: ["Ethical Hacking", "Network Security", "CTFs", "OWASP"],
    specialization: "Red Team • Blue Team • CTFs",
    size: "medium",
    accentColor: "#10B981", // Emerald
  },
  {
    id: "open-source",
    title: "Open Source",
    description: "Contribute to impactful community projects, documentation, and the global OSS ecosystem.",
    icon: "GitBranch",
    technologies: ["GitHub", "Community Projects", "Documentation", "OSS Contributions"],
    specialization: "Contributions • Collaboration",
    size: "medium",
    accentColor: "#8B5CF6", // Purple
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    description: "Strengthen problem-solving skills and algorithmic thinking through coding competitions.",
    icon: "Trophy",
    technologies: ["DSA", "ICPC", "Codeforces", "LeetCode"],
    specialization: "",
    size: "small",
    accentColor: "#F59E0B", // Amber
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Create intuitive mobile experiences for Android, iOS, and cross-platform applications.",
    icon: "Smartphone",
    technologies: ["Flutter", "Android", "Cross Platform", "Firebase"],
    specialization: "Native • Cross Platform",
    size: "small",
    accentColor: "#EC4899", // Pink
  },
];
