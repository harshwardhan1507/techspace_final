export interface FeaturedEvent {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
    href: string;
}

export const featuredEvents: FeaturedEvent[] = [
    {
        id: "ev-1",
        title: "Git & GitHub Workshop",
        description: "Learn Git fundamentals, GitHub collaboration, branching strategies, and modern development workflows.",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
        date: "15 August 2026",
        category: "Workshop",
        href: "#"
    },
    {
        id: "ev-2",
        title: "Introduction to Programming",
        description: "A comprehensive dive into the fundamentals of coding, syntax, and logic for absolute beginners.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        date: "22 August 2026",
        category: "Bootcamp",
        href: "#"
    },
    {
        id: "ev-3",
        title: "Web Development Bootcamp",
        description: "Build modern, responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        date: "05 September 2026",
        category: "Bootcamp",
        href: "#"
    },
    {
        id: "ev-4",
        title: "Artificial Intelligence Workshop",
        description: "Explore the basics of machine learning, neural networks, and how to build simple AI models from scratch.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
        date: "19 September 2026",
        category: "Workshop",
        href: "#"
    },
    {
        id: "ev-5",
        title: "Cybersecurity Fundamentals",
        description: "Understand network security, ethical hacking principles, and how to protect applications from common vulnerabilities.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        date: "03 October 2026",
        category: "Seminar",
        href: "#"
    },
    {
        id: "ev-6",
        title: "Annual Hackathon",
        description: "Join teams to build innovative solutions over a 48-hour coding marathon. Prizes, food, and glory await.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        date: "15-17 October 2026",
        category: "Hackathon",
        href: "#"
    }
];
