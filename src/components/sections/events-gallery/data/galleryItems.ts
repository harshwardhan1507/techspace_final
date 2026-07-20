export interface GalleryItem {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    category?: string;
}

export const galleryItems: GalleryItem[] = [
    {
        id: "gal-1",
        title: "Late Night Debugging",
        subtitle: "Hackathon 2025",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        category: "Hackathon"
    },
    {
        id: "gal-2",
        title: "Introduction to React",
        subtitle: "Frontend Bootcamp",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
        category: "Workshop"
    },
    {
        id: "gal-3",
        title: "Whiteboard Sessions",
        subtitle: "System Design Prep",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
        category: "Community"
    },
    {
        id: "gal-4",
        title: "Team Assembly",
        subtitle: "Project Kickoff",
        image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1200&auto=format&fit=crop",
        category: "Community"
    },
    {
        id: "gal-5",
        title: "Algorithm Deep Dive",
        subtitle: "Competitive Programming",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        category: "Programming"
    },
    {
        id: "gal-6",
        title: "Cloud Infrastructure",
        subtitle: "AWS & Docker Session",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        category: "Workshop"
    },
    {
        id: "gal-7",
        title: "Final Presentations",
        subtitle: "Demo Day",
        image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop",
        category: "Community"
    }
];
