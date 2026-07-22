import { colors } from "../../design/tokens/colors";

export type CategoryId = 
  | "programming" 
  | "webDevelopment" 
  | "ai" 
  | "cybersecurity" 
  | "openSource" 
  | "competitiveProgramming" 
  | "mobile";

export interface CategoryData {
  id: CategoryId;
  label: string;
  color: string;
}

export const categories: Record<CategoryId, CategoryData> = {
  programming: {
    id: "programming",
    label: "Programming",
    color: colors.programming,
  },
  webDevelopment: {
    id: "webDevelopment",
    label: "Web Development",
    color: colors.webDevelopment,
  },
  ai: {
    id: "ai",
    label: "Artificial Intelligence",
    color: colors.ai,
  },
  cybersecurity: {
    id: "cybersecurity",
    label: "Cybersecurity",
    color: colors.cybersecurity,
  },
  openSource: {
    id: "openSource",
    label: "Open Source",
    color: colors.openSource,
  },
  competitiveProgramming: {
    id: "competitiveProgramming",
    label: "Competitive Programming",
    color: colors.competitiveProgramming,
  },
  mobile: {
    id: "mobile",
    label: "Mobile Development",
    color: colors.mobile,
  },
};
