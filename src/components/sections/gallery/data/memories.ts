export interface Memory {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  participants: string;
  quote: string;
  story: string;
  image: string;
  accentColor: string;
}

export const memories: Memory[] = [
  {
    id: "mem-1",
    title: "36 Hours Without Sleep",
    category: "HACKATHON",
    date: "February 2026",
    location: "SRM Sonipat",
    participants: "42 Teams • 14 Prototypes",
    quote: "Most of us arrived as strangers. We left as teammates.",
    story: "36 hours of non-stop building, late-night debugging, pizza runs, and 14 working prototypes presented at dawn.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#0EA5E9", // Azure Blue
  },
  {
    id: "mem-2",
    title: "Building Our First Compiler",
    category: "WORKSHOP",
    date: "January 2026",
    location: "Tech Lab 4",
    participants: "50 Attendees • 6 Hours",
    quote: "The room stayed full long after the workshop officially ended.",
    story: "From syntax tokens and AST parsing to compiling our very first custom language binary together.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#2563EB", // Royal Blue
  },
  {
    id: "mem-3",
    title: "The Night Everyone Stayed",
    category: "OPEN SOURCE SPRINT",
    date: "November 2025",
    location: "Main Auditorium",
    participants: "80 Developers • 120 PRs",
    quote: "Nobody wanted to break the flow state. We synced code until sunrise.",
    story: "Resolving merge conflicts, reviewing pull requests live, and merging 120 contributions to global OSS projects.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#8B5CF6", // Purple
  },
  {
    id: "mem-4",
    title: "Whiteboard Architecture at 2 AM",
    category: "COMMUNITY MEETUP",
    date: "December 2025",
    location: "Innovation Hub",
    participants: "35 Members • Late Night",
    quote: "Great architecture isn't born in slides. It's drawn on glass at midnight.",
    story: "Mapping distributed microservices, state sync protocols, and database indexes across glass walls.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#06B6D4", // Electric Cyan
  },
  {
    id: "mem-5",
    title: "Training Neural Models Live",
    category: "AI LAB",
    date: "March 2026",
    location: "AI Research Center",
    participants: "40 Attendees • GPU Cluster",
    quote: "Watching loss curves drop in real time made machine learning click.",
    story: "Fine-tuning LLMs, running local vision transformers, and evaluating model accuracy live on cluster nodes.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#10B981", // Emerald Green
  },
  {
    id: "mem-6",
    title: "Cross-Platform App Launch",
    category: "MOBILE SPRINT",
    date: "April 2026",
    location: "App Studio",
    participants: "28 Developers • Dual Release",
    quote: "Seeing our app build natively on both iOS and Android was magic.",
    story: "A 48-hour Flutter build sprint culminating in live app deployments directly to test tracks.",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#EC4899", // Pink
  },
];
