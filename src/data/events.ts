export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export const eventsData: Event[] = [
  {
    id: "hackathon-2026",
    title: "Annual Hackathon 2026",
    date: "October 15, 2026",
    description: "A 48-hour coding marathon to solve real-world problems.",
  },
];
