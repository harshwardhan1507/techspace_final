import { Code2, Smartphone, GitBranch, Terminal, TreeDeciduous, LucideIcon } from "lucide-react";

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
    id: "intro-programming",
    title: "Introduction to Programming",
    description: "Start your programming journey by learning the fundamentals of Java, Python, and C++. Understand programming logic, problem solving, variables, loops, functions, and object-oriented concepts through practical hands-on sessions.",
    status: "Coming Soon",
    difficulty: "Beginner",
    focus: ["Java", "Python", "C++", "Programming Basics"],
    metadata: ["5 Sessions", "Hands-on", "Certificate of Participation"],
    icon: Terminal,
    color: "#0EA5E9", // Azure Blue
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
    id: "git-github-workshop",
    title: "Git & GitHub Workshop",
    description: "Learn version control, Git workflows, GitHub collaboration, repositories, branching strategies, pull requests, and how to contribute effectively to team projects.",
    status: "Upcoming",
    difficulty: "Beginner",
    focus: ["Git", "GitHub", "Version Control", "Collaboration"],
    metadata: ["Weekend", "Hands-on", "Project Based"],
    icon: GitBranch,
    color: "#8B5CF6", // Purple
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
    id: "dsa-algorithms",
    title: "Data Structures & Algorithms",
    description: "Strengthen your problem-solving skills using arrays, linked lists, trees, graphs, recursion, sorting algorithms, and competitive programming concepts.",
    status: "Planning",
    difficulty: "Intermediate",
    focus: ["DSA", "Algorithms", "Java", "Problem Solving"],
    metadata: ["4 Weeks", "Practice Sessions", "Contest Preparation"],
    icon: TreeDeciduous,
    color: "#10B981", // Emerald
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
    color: "#6366F1", // Indigo
  }
];
