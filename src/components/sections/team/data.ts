export type TeamMember = {
  id: string;
  name: string;
  role: string;
  focusArea: string;
  image: string;
  intro: string;
  tagsTitle?: string;
  tags?: string[];
  technologies?: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  favoriteStack?: string;
  currentlyLearning?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "anshul-yadav",
    name: "Anshul Yadav",
    role: "Founder & Ex-President",
    focusArea: "Leadership, Community Building & Innovation",
    image: "/team/anshul_yadav_pic.jpeg",
    intro:
      "Founded TechSpace with the vision of building a collaborative community where students can explore technology, develop practical skills, and grow through innovation and teamwork.",
    tagsTitle: "Skills",
    tags: [
      "Leadership",
      "Community Building",
      "Project Management",
      "Innovation"
    ],
    linkedinUrl: "https://www.linkedin.com/in/anshul-yadav-3a7b4b293/",
    githubUrl: "https://github.com/Anshulrao08"
  },

  {
    id: "anjali",
    name: "Anjali",
    role: "President",
    focusArea: "Leadership & Community Building",
    image: "/team/anjali_pic.png",
    intro:
      "Passionate about leading teams, fostering innovation, and creating opportunities for students to learn, collaborate, and grow together.",
    tagsTitle: "Skills",
    tags: [
      "Leadership",
      "Project Management",
      "Public Speaking",
      "Team Coordination"
    ],
    linkedinUrl: "https://www.linkedin.com/in/your-linkedin-profile",
    githubUrl: "https://github.com/your-github-username"
  },
  {
    id: "aryan-arya",
    name: "Aryan Arya",
    role: "Vice President",
    focusArea: "AI/ML, Full-Stack",
    image: "/team/aryanarya_pic.png",
    intro:
      "I constantly try learn new technologies in AI and Machine Learning domain.",
    tagsTitle: "Technologies",
    tags: [
      "React",
      "Node.js",
      "Java",
      "Python"
    ],
    portfolioUrl: "https://iamaryankumar.vercel.app/",
    githubUrl: "https://github.com/Aryankumar0022",
    linkedinUrl: "https://www.linkedin.com/in/aryan-kumar-0a54aa2a5/",
  },
  {
    id: "khushbu-chauhan",
    name: "Khushbu Chauhan",
    role: "Treasurer",
    focusArea: "Finance & Team Management",
    image: "/team/khushbu_chauhan_pic.png",
    intro:
      "I help manage finances and keep everything organized with a calm, detail-oriented approach.",
    tagsTitle: "Skills",
    tags: [
      "Budget Planning",
      "Accounting",
      "Organization",
      "Leadership"
    ],

    githubUrl: "https://github.com/chauhanayush1148-code",
    linkedinUrl: "https://www.linkedin.com/in/khushbu-chauhan-076b4329a"
  },
  {
    id: "harsh-wardhan",
    name: "Harsh Wardhan",
    role: "Member",
    focusArea: "Full-Stack Development & Software Engineering",
    image: "/team/harsh_pic.png",
    intro:
      "I enjoy building scalable software that blends thoughtful design with solid engineering, creating polished and user-friendly experiences.",
    tagsTitle: "Technologies",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Python",
      "Supabase"
    ],
    portfolioUrl: "https://harshwardhanportfolio.vercel.app/",
    githubUrl: "https://github.com/harshwardhan1507",
    linkedinUrl: "https://linkedin.com/in/harsh-wardhan-singh-cse",
    favoriteStack: "Next.js + TypeScript + Java",
    currentlyLearning: "AI Agents, System Design & Flutter",
  },
  {
    id: "aryan-tailor",
    name: "Aryan Tailor",
    role: "Member",
    focusArea: "AI/ML",
    image: "team/aryantailor_pic.png",
    intro:
      "CS student passionate about Artificial Intelligence and Data Structures & Algorithms. Focused on building strong fundamentals and solving real problems.",
    tags: [
      "React",
      "Next.js",
      "Python",
      "Pandas"
    ],
    portfolioUrl: "https://aryan-exe.vercel.app/",
    githubUrl: "https://github.com/aryanexe07",
    linkedinUrl: "https://www.linkedin.com/in/aryan-tailor/",
    favoriteStack: "Python",
    currentlyLearning: "Java",
  },

  {
    id: "tathagat-aryan",
    name: "Tathagat Aryan",
    role: "Member",
    focusArea: "Full-Stack Development",
    image: "team/tathagat_pic.png",
    intro:
      "Passionate Full-Stack Developer focused on building responsive, user-friendly web applications with modern technologies and clean design.",
    tagsTitle: "Technologies",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "C++",
      "GitHub"
    ],
    githubUrl: "https://github.com/Aryan689t",
    linkedinUrl: "https://www.linkedin.com/in/tathagat-aryan-4993a1286",
    favoriteStack: "MERN",
    currentlyLearning: "MongoDB",
  },
  {
    id: "aman-yadav",
    name: "Aman Kumar Yadav",
    role: "Designer",
    focusArea: "UI/UX Design & Visual Branding",
    image: "/team/aman_yadav_pic.png",
    intro:
      "I design clean, engaging, and user-focused visuals that help bring TechSpace's ideas and identity to life.",
    tagsTitle: "Skills",
    tags: [
      "UI/UX Design",
      "Graphic Design",
      "Brand Identity",
      "Figma"
    ],
    githubUrl: "https://github.com/amanyadav2311",
    linkedinUrl: "https://www.linkedin.com/in/aman-kumar-yadav-064b6338a/"
  }

];
