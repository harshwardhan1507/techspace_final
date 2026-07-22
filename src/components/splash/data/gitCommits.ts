import { colors } from "@/design/tokens/colors";

export interface GitCommit {
  id: string;
  hash: string;
  title: string;
  color: string;
  branch: string;
}

export const gitCommits: GitCommit[] = [
  {
    id: "commit-1",
    hash: "7a4f2c1",
    title: "Initialize Repository",
    color: colors.programming, // Azure Blue
    branch: "main",
  },
  {
    id: "commit-2",
    hash: "c91de21",
    title: "Create Community Modules",
    color: colors.ai, // Electric Cyan
    branch: "main",
  },
  {
    id: "commit-3",
    hash: "e3b8a90",
    title: "Learn & Build Together",
    color: colors.openSource, // Purple
    branch: "main",
  },
  {
    id: "commit-4",
    hash: "f4d2e10",
    title: "Launch Homepage",
    color: colors.cybersecurity, // Emerald Green
    branch: "main",
  },
];
