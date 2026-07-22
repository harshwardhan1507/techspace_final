export interface FeaturedEvent {
  id: string;
  title: string;
  category: "Workshop" | "Event";
  date?: string;
  description: string;
  image: string;
  src: string;
  galleryLink?: string;
}

export const featuredEvents: FeaturedEvent[] = [
  {
    id: "evt-dsa-java",
    title: "DSA using Java",
    category: "Workshop",
    date: "Date coming soon",
    description:
      "Master fundamental data structures, core algorithms, and time complexity analysis in Java through interactive problem-solving and coding practice.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    galleryLink: "#gallery",
  },
  {
    id: "evt-devops",
    title: "DevOps Workshop",
    category: "Workshop",
    date: "Date coming soon",
    description:
      "Hands-on experience with modern CI/CD pipelines, Docker containerization, server deployment workflows, and cloud infrastructure best practices.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1600&auto=format&fit=crop",
    src: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1600&auto=format&fit=crop",
    galleryLink: "#gallery",
  },
  {
    id: "evt-java-gui",
    title: "Java GUI Workshop",
    category: "Workshop",
    date: "Date coming soon",
    description:
      "Build desktop software applications with Java GUI frameworks. Learn event-driven programming, custom UI components, and software layout design.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    galleryLink: "#gallery",
  },
  {
    id: "evt-memocracy",
    title: "Memocracy",
    category: "Event",
    date: "Date coming soon",
    description:
      "TechSpace's flagship tech-meme and creative design competition celebrating developer culture, pop culture humor, and digital creativity.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    galleryLink: "#gallery",
  },
  {
    id: "evt-codeblitz",
    title: "CodeBlitz",
    category: "Event",
    date: "Date coming soon",
    description:
      "A fast-paced competitive programming showdown testing algorithmic speed, logical accuracy, and problem-solving under pressure.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    galleryLink: "#gallery",
  },
  {
    id: "evt-artistic-aura",
    title: "Artistic Aura",
    category: "Event",
    date: "Date coming soon",
    description:
      "Where technology meets art. Showcase digital illustrations, UI/UX designs, generative visuals, and creative tech art built with modern tools.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    galleryLink: "#gallery",
  },
];
