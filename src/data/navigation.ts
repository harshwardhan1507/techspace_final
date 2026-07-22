export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { title: "Home", href: "#hero" },
  { title: "What We Do", href: "#what-we-do" },
  { title: "Domains", href: "#domains" },
  { title: "Why Join", href: "#why-join" },
  { title: "Team", href: "#team" },
  { title: "Events", href: "#events" },
  { title: "Upcoming", href: "#upcoming" },
  { title: "Gallery", href: "#gallery" },
  { title: "Journey", href: "#journey" },
];

export const ctaNav: NavItem = {
  title: "Join TechSpace",
  href: "#join"
};

export const footerNav: NavItem[] = [
  ...mainNav,
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
];
