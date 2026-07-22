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
    id: "mem-dsa-java",
    title: "DSA using Java Workshop",
    category: "WORKSHOP",
    date: "Date coming soon",
    location: "TechSpace Lab",
    participants: "Core Track",
    quote: "Building strong algorithmic foundations together.",
    story: "Deep dive into fundamental data structures, graph theory, dynamic programming, and algorithm optimization using Java.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#0EA5E9", // Azure Blue
  },
  {
    id: "mem-devops",
    title: "DevOps Workshop",
    category: "WORKSHOP",
    date: "Date coming soon",
    location: "Cloud Studio",
    participants: "Infrastructure Track",
    quote: "Automating deployments from local commit to cloud server.",
    story: "Hands-on containerization with Docker, setting up automated CI/CD pipelines, and mastering cloud deployment workflows.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#2563EB", // Royal Blue
  },
  {
    id: "mem-java-gui",
    title: "Java GUI Workshop",
    category: "WORKSHOP",
    date: "Date coming soon",
    location: "Software Lab",
    participants: "Desktop Dev Track",
    quote: "Designing interactive visual interfaces from scratch.",
    story: "Crafting desktop software applications, event-driven layouts, and graphical user interfaces using Java frameworks.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#8B5CF6", // Purple
  },
  {
    id: "mem-memocracy",
    title: "Memocracy",
    category: "COMPETITION",
    date: "Date coming soon",
    location: "Main Arena",
    participants: "Creative Track",
    quote: "Where tech humor and digital culture collide.",
    story: "TechSpace's premier tech-meme and digital design contest celebrating developer humor, culture, and viral creativity.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#06B6D4", // Electric Cyan
  },
  {
    id: "mem-codeblitz",
    title: "CodeBlitz",
    category: "HACKATHON",
    date: "Date coming soon",
    location: "Innovation Hub",
    participants: "Competitive Track",
    quote: "360 seconds on the clock. Pure algorithmic speed.",
    story: "High-octane competitive programming sprint testing rapid problem solving, clean execution, and endurance under pressure.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#10B981", // Emerald Green
  },
  {
    id: "mem-artistic-aura",
    title: "Artistic Aura",
    category: "DESIGN EXHIBITION",
    date: "Date coming soon",
    location: "Design Studio",
    participants: "Creative Tech Track",
    quote: "Bridging the gap between software engineering and visual art.",
    story: "Exhibition showcasing UI/UX concepts, digital vector art, generative visuals, and creative tech design projects.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#EC4899", // Pink
  },
];
