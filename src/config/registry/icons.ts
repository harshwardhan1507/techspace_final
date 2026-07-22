import { Code2, Layout, BrainCircuit, Shield, GitBranch, Trophy, Smartphone, LucideIcon } from "lucide-react";
import { CategoryId } from "./categories";

export const icons: Record<CategoryId, LucideIcon> = {
  programming: Code2,
  webDevelopment: Layout,
  ai: BrainCircuit,
  cybersecurity: Shield,
  openSource: GitBranch,
  competitiveProgramming: Trophy,
  mobile: Smartphone,
};
