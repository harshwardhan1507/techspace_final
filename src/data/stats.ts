export interface Stat {
  id: string;
  label: string;
  value: string;
}

export const statsData: Stat[] = [
  {
    id: "members",
    label: "Active Members",
    value: "200+",
  },
  {
    id: "events",
    label: "Events Organized",
    value: "50+",
  },
];
