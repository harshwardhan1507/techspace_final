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
  portfolioUrl?: string;
  favoriteStack?: string;
  currentlyLearning?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "harsh-wardhan",
    name: "Harsh Wardhan",
    role: "Member",
    focusArea: "Full-Stack Development & Software Engineering",
    image: "/team/harsh_pic.png",
    intro:
      "I enjoy building scalable software that blends thoughtful design with solid engineering, creating polished and user-friendly experiences.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Python",
      "Supabase"
    ],
    portfolioUrl: "https://harshwardhanportfolio.vercel.app/",
    githubUrl: "https://github.com/harshwardhan1507",
    linkedinUrl: "https://linkedin.com/in/harsh-wardhan-singh-cse",
    favoriteStack: "Next.js + TypeScript + Supabase",
    currentlyLearning: "AI Agents, System Design & Flutter",
  },
  {
    id: "aryan-tailor",
    name: "Aryan Tailor",
    role: "Member",
    focusArea: "AI/ML",
    image: "team/aryantailor_pic.png",
    intro:
      "CS student passionate about Artificial Intelligence and Data Structures & Algorithms. Focused on building strong fundamentals and solving real problems.",
    technologies: [
      "React",
      "Next.js",
      "Python",
      "Pandas"
    ],
    githubUrl: "https://github.com/aryanexe07",
    linkedinUrl: "https://www.linkedin.com/in/aryan-tailor/",
    favoriteStack: "Python",
    currentlyLearning: "Java",
  },
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
    id: "tathagat-aryan",
    name: "Tathagat Aryan",
    role: "Member",
    focusArea: "Full-Stack Development",
    image: "team/tathagat_pic.png",
    intro:
      "Passionate Full-Stack Developer focused on building responsive, user-friendly web applications with modern technologies and clean design.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "C++",
      "Git",
      "GitHub"
    ],
    githubUrl: "https://github.com/Aryan689t",
    linkedinUrl: "https://www.linkedin.com/in/tathagat-aryan-4993a1286",
    favoriteStack: "MERN",
    currentlyLearning: "MongoDB",
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
  }

];
