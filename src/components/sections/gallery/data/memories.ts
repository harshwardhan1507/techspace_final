export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  aspectRatio?: "wide" | "square" | "tall";
}

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
  // Extended fields for Event Story Experience:
  duration?: string;
  track?: string;
  description?: string;
  gallery?: GalleryImage[];
  highlights?: string[];
  technologies?: string[];
  resources?: {
    slides?: string;
    github?: string;
    recording?: string;
  };
}

export const memories: Memory[] = [
  {
    id: "mem-dsa-java",
    title: "DSA using Java Workshop",
    category: "WORKSHOP",
    date: "Date coming soon",
    location: "TechSpace Lab 01",
    participants: "65 Attendees",
    duration: "4 Hours",
    track: "Data Structures & Algorithms",
    quote: "Building strong algorithmic foundations together.",
    story: "Deep dive into fundamental data structures, graph theory, dynamic programming, and algorithm optimization using Java.",
    description: "An intensive hands-on masterclass focusing on core computational problem solving in Java. Participants analyzed asymptotic time complexity, implemented custom collections, and solved real interview coding questions in small peer groups.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#0EA5E9", // Azure Blue
    technologies: ["Java 21", "Data Structures", "Big-O Notation", "Recursion", "Trees & Graphs"],
    highlights: ["65+ Student Coders", "Live Whiteboard Problem Solving", "Custom Graph Algorithm Demos", "Peer Code Reviews"],
    resources: {
      github: "https://github.com/harshwardhan1507/techspace_final",
      slides: "https://techspace.dev/resources/dsa-java.pdf",
    },
    gallery: [
      {
        id: "img-dsa-1",
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
        caption: "Opening whiteboard architectural walkthrough of binary tree traversals.",
        aspectRatio: "wide",
      },
      {
        id: "img-dsa-2",
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        caption: "Students collaborating on dynamic programming memoization problems.",
        aspectRatio: "square",
      },
      {
        id: "img-dsa-3",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        caption: "Pair programming session solving LeetCode Medium challenges.",
        aspectRatio: "tall",
      },
      {
        id: "img-dsa-4",
        src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1600&auto=format&fit=crop",
        caption: "Interactive Q&A reviewing memory allocation in Java virtual machines.",
        aspectRatio: "wide",
      },
      {
        id: "img-dsa-5",
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        caption: "Group photo at the conclusion of the 4-hour DSA marathon session.",
        aspectRatio: "square",
      },
    ],
  },
  {
    id: "mem-devops",
    title: "DevOps Workshop",
    category: "WORKSHOP",
    date: "Date coming soon",
    location: "Cloud Studio",
    participants: "50 Attendees",
    duration: "5 Hours",
    track: "Cloud & Infrastructure",
    quote: "Automating deployments from local commit to cloud server.",
    story: "Hands-on containerization with Docker, setting up automated CI/CD pipelines, and mastering cloud deployment workflows.",
    description: "A comprehensive practical workshop empowering students to build production-grade deployment pipelines. Attendees containerized full-stack web applications, configured GitHub Actions workflows, and deployed microservices live to cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#2563EB", // Royal Blue
    technologies: ["Docker", "GitHub Actions", "Linux CLI", "Nginx", "CI/CD Pipelines"],
    highlights: ["100% Live Container Builds", "Automated Testing Workflows", "Zero-Downtime Deployments", "Production Cloud Clusters"],
    resources: {
      github: "https://github.com/harshwardhan1507/techspace_final",
      slides: "https://techspace.dev/resources/devops-guide.pdf",
    },
    gallery: [
      {
        id: "img-devops-1",
        src: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1600&auto=format&fit=crop",
        caption: "Live demonstration of multi-stage Docker builds and image optimization.",
        aspectRatio: "wide",
      },
      {
        id: "img-devops-2",
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        caption: "Debugging Linux environment variables and network ports in terminal.",
        aspectRatio: "square",
      },
      {
        id: "img-devops-3",
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
        caption: "Setting up automated pull request validation checks on GitHub.",
        aspectRatio: "tall",
      },
      {
        id: "img-devops-4",
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        caption: "Mentors helping students resolve Docker daemon permissions.",
        aspectRatio: "wide",
      },
    ],
  },
  {
    id: "mem-java-gui",
    title: "Java GUI Workshop",
    category: "WORKSHOP",
    date: "Date coming soon",
    location: "Software Lab 02",
    participants: "45 Attendees",
    duration: "4 Hours",
    track: "Desktop Software Engineering",
    quote: "Designing interactive visual interfaces from scratch.",
    story: "Crafting desktop software applications, event-driven layouts, and graphical user interfaces using Java frameworks.",
    description: "An engaging desktop application design workshop exploring event listener architectures, window layout managers, and custom graphical components in Java. Students designed full desktop utilities and interactive tools from scratch.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#8B5CF6", // Purple
    technologies: ["JavaFX", "Swing", "Event Dispatcher", "CSS Styling", "Object-Oriented UI"],
    highlights: ["Custom GUI Component Design", "Event Listener Architecture", "Desktop App Packaging", "UI Layout Managers"],
    resources: {
      github: "https://github.com/harshwardhan1507/techspace_final",
    },
    gallery: [
      {
        id: "img-gui-1",
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        caption: "Building desktop application layout grids and event listeners in Java.",
        aspectRatio: "wide",
      },
      {
        id: "img-gui-2",
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
        caption: "Custom styling JavaFX UI controls with CSS stylesheet properties.",
        aspectRatio: "square",
      },
      {
        id: "img-gui-3",
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
        caption: "Demonstrating interactive application states and window transitions.",
        aspectRatio: "wide",
      },
    ],
  },
  {
    id: "mem-memocracy",
    title: "Memocracy",
    category: "COMPETITION",
    date: "Date coming soon",
    location: "Main Auditorium",
    participants: "80+ Contestants",
    duration: "Full Day",
    track: "Creative Design & Tech Culture",
    quote: "Where tech humor and digital culture collide.",
    story: "TechSpace's premier tech-meme and digital design contest celebrating developer humor, culture, and viral creativity.",
    description: "A fun, high-energy creative competition celebrating developer culture, pop culture references, and visual storytelling. Designers and developers created hilarious, relatable tech memes, motion graphics, and digital artwork judged by community vote.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#06B6D4", // Electric Cyan
    technologies: ["Digital Art", "UI/UX Memes", "Motion Graphics", "Figma", "Canva"],
    highlights: ["80+ Creative Submissions", "Live Audience Voting", "Developer Culture Trivia", "Trophy & Swag Awards"],
    resources: {
      github: "https://github.com/harshwardhan1507/techspace_final",
    },
    gallery: [
      {
        id: "img-memo-1",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        caption: "Audience reacting to live developer meme showcases on the big auditorium screen.",
        aspectRatio: "wide",
      },
      {
        id: "img-memo-2",
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        caption: "Creative teams refining their final visual meme submissions.",
        aspectRatio: "tall",
      },
      {
        id: "img-memo-3",
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
        caption: "Winner announcement and certificate presentation ceremony.",
        aspectRatio: "wide",
      },
    ],
  },
  {
    id: "mem-codeblitz",
    title: "CodeBlitz",
    category: "HACKATHON",
    date: "Date coming soon",
    location: "Innovation Hub",
    participants: "40 Teams",
    duration: "12 Hours",
    track: "Competitive Programming",
    quote: "360 seconds on the clock. Pure algorithmic speed.",
    story: "High-octane competitive programming sprint testing rapid problem solving, clean execution, and endurance under pressure.",
    description: "A fast-paced blitz competitive coding hackathon where teams faced algorithmic problems with strict time penalties. Coders raced against real-time leaderboards to solve complex dynamic programming, string manipulation, and graph challenges.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#10B981", // Emerald Green
    technologies: ["C++20", "Java", "Python 3", "Algorithms", "Competitive Coding"],
    highlights: ["40 Competitive Teams", "Live Real-Time Leaderboard", "Rapid-Fire Blitz Rounds", "Cash & Merch Prizes"],
    resources: {
      github: "https://github.com/harshwardhan1507/techspace_final",
    },
    gallery: [
      {
        id: "img-cb-1",
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
        caption: "Teams intense focus as final blitz problem sets unlock on judge system.",
        aspectRatio: "wide",
      },
      {
        id: "img-cb-2",
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
        caption: "Analyzing automated test case verdict results on submission portal.",
        aspectRatio: "square",
      },
      {
        id: "img-cb-3",
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        caption: "Leaderboard tense final countdown before time expires.",
        aspectRatio: "wide",
      },
    ],
  },
  {
    id: "mem-artistic-aura",
    title: "Artistic Aura",
    category: "DESIGN EXHIBITION",
    date: "Date coming soon",
    location: "Design Studio",
    participants: "35 Designers",
    duration: "6 Hours",
    track: "UI/UX & Digital Art",
    quote: "Bridging the gap between software engineering and visual art.",
    story: "Exhibition showcasing UI/UX concepts, digital vector art, generative visuals, and creative tech design projects.",
    description: "A breathtaking creative tech exhibition celebrating the intersection of code and aesthetics. Students showcased generative shader animations, interactive web design prototypes, 3D blender models, and vector artwork.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#EC4899", // Pink
    technologies: ["Figma", "Blender", "Three.js", "Generative Art", "UI/UX Systems"],
    highlights: ["35 Student Designers", "Interactive 3D Web Demos", "Generative Shader Exhibits", "Industry Expert Reviews"],
    resources: {
      github: "https://github.com/harshwardhan1507/techspace_final",
    },
    gallery: [
      {
        id: "img-aa-1",
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
        caption: "Interactive digital art installation showcasing WebGL shaders in action.",
        aspectRatio: "wide",
      },
      {
        id: "img-aa-2",
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        caption: "UI/UX wireframes and prototype feedback session with design mentors.",
        aspectRatio: "square",
      },
      {
        id: "img-aa-3",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        caption: "Exhibition walkthrough showcasing 3D blender models and web graphics.",
        aspectRatio: "wide",
      },
    ],
  },
];
