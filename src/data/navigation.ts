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
  { title: "Projects", href: "#projects" },
  { title: "Events", href: "#events" },
  { title: "Team", href: "#team" },
  { title: "Journey", href: "#journey" },
  { title: "Why Join", href: "#why-join" },
];

export const ctaNav: NavItem = {
  title: "Join TechSpace",
  href: "#join-cta"
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
