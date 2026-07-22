# TechSpace — Official Website 🚀

<div align="center">

![TechSpace Banner](https://img.shields.io/badge/TechSpace-SRM%20University%20Sonipat-blue?style=for-the-badge&logo=react)

**The official web platform for TechSpace — the premier student technology community of SRM University Sonipat.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Motion-v12.4-f50057?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-R185-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)

[Explore Features](#-key-features--sections) • [Getting Started](#-getting-started) • [Tech Stack](#-tech-stack) • [Architecture](#-project-structure) • [Design System](#-design-philosophy)

</div>

---

## 📌 Project Overview

**TechSpace Final** is a modern, high-performance, dark-themed web platform engineered for **TechSpace**, the official student tech community at SRM University Sonipat. Designed with an engineering-first mindset inspired by tech industry leaders like Apple, Linear, and Vercel, this website serves as the hub for club domains, events, interactive projects, team showcases, and community onboarding.

### Key Highlights
- 🎨 **Minimal & Premium Aesthetics**: Dark mode interface (`#050505` canvas) with subtle steel-blue accents and generous typography-driven whitespace.
- 🌌 **3D & Motion Experiences**: Integrated Three.js / React Three Fiber dynamic visual components, interactive Cobe 3D Globe, and fluid Framer Motion / Motion animations.
- ⚡ **Cutting-Edge Framework**: Powered by Next.js 16 App Router and React 19 for optimal performance, accessibility, and SEO.
- 🛡️ **Strict Architecture**: Component isolation pattern separating vendor UI components from domain section components.

---

## ⚡ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) | App Router architecture, Server & Client components |
| **UI Library** | [React 19](https://react.dev/) | Concurrent rendering & modern hooks |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety across all components |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with `@tailwindcss/postcss` |
| **3D & WebGL** | [Three.js](https://threejs.org/) & [R3F](https://r3f.docs.pmnd.rs/) | 3D graphics with `@react-three/fiber`, `@react-three/drei`, and Rapier physics |
| **Globe Graphics** | [Cobe](https://github.com/shading-art/cobe) | Interactive 3D WebGL globe visualization |
| **Animations** | [Framer Motion / Motion v12](https://motion.dev/) & [GSAP](https://greensock.com/gsap/) | Micro-interactions, scroll-driven motion, and smooth transitions |
| **Icons & UI** | [Lucide React](https://lucide.dev/), [Tabler Icons](https://tabler.io/icons), [shadcn/ui](https://ui.shadcn.com/) | Accessible icons & base UI component primitives |
| **Fonts** | [Geist](https://vercel.com/font) & [Inter](https://fonts.google.com/specimen/Inter) | Clean typography tuned for legibility |

---

## ✨ Key Features & Sections

The application consists of seamless, single-page scrollable sections paired with interactive modals and splash states:

1. 🎬 **Animated Splash Screen (`SplashScreen`)**
   - Immersive intro sequence with session storage persistence so returning users skip directly to content.
2. 🧭 **Dynamic Navigation Bar (`Navbar`)**
   - Sleek, glassmorphic header with smooth-scroll section links and quick community action buttons.
3. ⚡ **Hero Section (`HeroSection`)**
   - Interactive background paths vector animations, high-impact headings, and prompt CTA triggers.
4. 🛠️ **What We Do (`WhatWeDoSection`)**
   - Grid breakdown of community core pillars: *Build*, *Learn*, *Innovate*, and *Collaborate*.
5. 🌐 **Technical Domains (`DomainsSection`)**
   - Interactive cards highlighting club tracks: Web Development, App Development, AI/ML, Cybersecurity, Competitive Programming, Cloud/DevOps, and UI/UX Design.
6. 📅 **Upcoming & Events (`UpcomingSection` / `GallerySection`)**
   - Highlight of upcoming hackathons and workshops alongside an Embla carousel gallery showcasing past events and student moments.
7. 💡 **Why Join (`WhyJoinSection`)**
   - Sticky scroll feature presenting interactive visual representations (`BuildVisual`, `LearnVisual`, etc.).
8. 👥 **Core Team (`TeamSection`)**
   - Interactive member cards featuring club leads, mentors, and domain headers with social links.
9. 🗺️ **Community Journey (`JourneySection`)**
   - Vertical interactive timeline illustrating TechSpace’s growth, milestones, and achievements over time.
10. 🌍 **Join Community CTA (`JoinSection` & `JoinCommunityModal`)**
    - Interactive 3D Cobe Globe paired with an accessible modal dialog for student registration.
11. 🖤 **Footer (`Footer`)**
    - Comprehensive dark footer complete with university branding, quick links, and social channel handles.

---

## 🎨 Design Philosophy & Tokens

TechSpace follows a strict **Engineering-First Minimalist Design** paradigm:

- **Color Distribution Rule**: ~85% Neutral Dark, ~10% Crisp White/Silver Text, ~5% Steel Blue Accent.
- **Palette**:
  - **Canvas Background**: `#050505`
  - **Surface Level**: `#0C0C0F`
  - **Card Containers**: `#131417`
  - **Primary Text**: `#F5F5F5`
  - **Secondary Text**: `#B7BDC8`
  - **Border Tokens**: `#262A31`

Animations are designed to feel purposeful, smooth, and subtle (fade, slide, blur, scale) while avoiding excessive or distracting motion.

---

## 📂 Project Structure

```
techspace_final/
├── public/                 # Static assets, logos, favicons, images
├── src/
│   ├── app/                # Next.js 16 App Router (layout.tsx, page.tsx, globals.css)
│   ├── assets/             # Vector SVGs, icons, static graphics
│   ├── components/
│   │   ├── intro/          # Intro splash components
│   │   ├── join/           # Join community modal & state hooks
│   │   ├── layout/         # Navbar, Footer, Layout wrappers
│   │   ├── providers/      # Motion & Theme providers
│   │   ├── sections/       # Section components (Hero, Domains, Team, etc.)
│   │   │   ├── domains/    # Domains section & visual cards
│   │   │   ├── events/     # Events & carousel components
│   │   │   ├── gallery/    # Gallery masonry grid
│   │   │   ├── hero/       # Hero section & background vectors
│   │   │   ├── journey/    # Interactive timeline
│   │   │   ├── team/       # Core team cards
│   │   │   ├── upcoming/   # Upcoming events section
│   │   │   ├── what-we-do/ # Feature grid components
│   │   │   └── why-join/   # Sticky scroll & visual interactive components
│   │   ├── splash/         # Splash screen loader logic
│   │   └── ui/             # Vendor UI primitives (shadcn, Aceternity UI, Radix)
│   ├── config/             # Site configuration & metadata constants
│   ├── data/               # Static data collections (events, team members, domains)
│   ├── design/             # Centralized design tokens (layout, colors, spacing)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility helper functions (`cn`, class merges)
│   ├── styles/             # Modular CSS styles
│   └── types/              # TypeScript declarations & interface definitions
├── instructions.md         # Comprehensive project design & development guidelines
├── roadmap.md              # Project status roadmap & milestone tracker
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies & build scripts
├── postcss.config.mjs      # PostCSS configuration for Tailwind CSS v4
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.17.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/techspace-website.git
   cd techspace-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot module replacement (HMR) |
| `npm run build` | Builds the optimized production bundle |
| `npm run start` | Starts the production server using the built assets |
| `npm run lint` | Runs ESLint to check for code quality and type issues |

---

## 📐 Development Guidelines & Rules

- **Component Isolation**: Never modify third-party vendor primitives directly in `src/components/ui/`. Wrap them inside section wrappers under `src/components/sections/`.
- **Strict TypeScript**: Avoid `any` types. Ensure all props and data models are defined under `src/types/`.
- **Performance**: Prefer React Server Components (RSC) by default. Use `"use client"` only for components requiring interactivity, state, or client-side hooks.
- **Accessibility**: Use semantic HTML tags (`<section>`, `<header>`, `<nav>`, `<main>`, `<footer>`), visible focus states, and aria labels for screen readers.

---

## 👥 Community & Contributions

TechSpace is built by students, for students! Contributions are welcomed from all members of SRM University Sonipat.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is created for **TechSpace — SRM University Sonipat**. All rights reserved.
