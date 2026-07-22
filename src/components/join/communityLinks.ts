export interface PlatformConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  buttonText: string;
  url: string;
  accentColor: string;
}

export const communityLinks: Record<string, PlatformConfig> = {
  whatsapp: {
    id: "whatsapp",
    title: "WhatsApp Community",
    subtitle: "Instant updates & community chat",
    description: "Stay connected with the TechSpace community through instant announcements, event registrations, collaboration opportunities, and workshop updates.",
    bullets: [
      "Workshop announcements",
      "Event registrations",
      "Community discussions",
      "Collaboration opportunities"
    ],
    buttonText: "Join WhatsApp",
    url: "https://chat.whatsapp.com/invite_placeholder",
    accentColor: "#25D366",
  },
  instagram: {
    id: "instagram",
    title: "Instagram",
    subtitle: "Behind the scenes & visual stories",
    description: "Follow TechSpace to see event highlights, community stories, project showcases, and behind-the-scenes moments.",
    bullets: [
      "Event highlights",
      "Behind-the-scenes moments",
      "Community projects",
      "Club updates"
    ],
    buttonText: "Follow Instagram",
    url: "https://instagram.com/techspace_srm",
    accentColor: "#E1306C",
  },
};
