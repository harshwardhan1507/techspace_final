export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "TechSpace Official Website",
    description: "The official portal for the TechSpace community.",
  },
];
