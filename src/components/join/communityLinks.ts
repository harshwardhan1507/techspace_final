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
    url: "https://chat.whatsapp.com/B6VOoPe6MEZ69aj554H9W4?s=sw&p=a&ilr=0",
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
    url: "https://www.instagram.com/techspace_srmuh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    accentColor: "#E1306C",
  },
};
