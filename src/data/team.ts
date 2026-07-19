export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  socials?: {
    github?: string;
    linkedin?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "lead-1",
    name: "John Doe",
    role: "President",
  },
];
