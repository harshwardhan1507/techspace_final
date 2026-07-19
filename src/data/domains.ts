export interface Domain {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const domainsData: Domain[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building modern, responsive, and scalable web applications.",
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Creating intuitive mobile experiences for Android and iOS.",
  },
  {
    id: "ai-ml",
    title: "AI & ML",
    description: "Exploring artificial intelligence and machine learning models.",
  },
];
