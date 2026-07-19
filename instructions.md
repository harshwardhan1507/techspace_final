# TECHSPACE Website - Development Instructions

## Project Overview

This project is the official website for TechSpace, the student technology community of SRM University Sonipat.

The objective is to build a premium, modern, responsive website that showcases the club, its projects, events, domains, and team.

The website should feel closer to Apple, Linear, Vercel and modern SaaS products rather than a traditional college club website.

---

# Primary Goal

Create a production-ready website.

Focus on:

- Performance
- Responsiveness
- Accessibility
- Clean Architecture
- Reusable Components
- Maintainability

---

# Development Philosophy

DO NOT reinvent existing UI components.

Always prefer existing production-tested components.

Priority:

1. Aceternity UI
2. Magic UI
3. Motion Primitives
4. shadcn/ui
5. Custom implementation only when absolutely necessary.

If a suitable component already exists, integrate it instead of recreating it.

---

# Tech Stack

Next.js 15

React 19

TypeScript

Tailwind CSS v4

shadcn/ui

Motion

Lucide React

Aceternity UI

Magic UI (where appropriate)

---

# Design Philosophy

Minimal.

Premium.

Engineering-first.

Avoid flashy or overly colorful designs.

Use whitespace generously.

Typography should carry the design.

Animations should feel smooth and intentional.

Never add animations just because they look cool.

Every animation must have a purpose.

---

# Color Palette

Primary Background:
#050505

Surface:
#0C0C0F

Cards:
#131417

Primary Text:
#F5F5F5

Secondary Text:
#B7BDC8

Muted Text:
#7D8795

Borders:
#262A31

Accent:
Steel Blue

Accent should be used sparingly.

Approximately:

85% Neutral

10% White/Silver

5% Accent

---

# Typography

Use modern sans-serif fonts.

Recommended:

Geist

Inter

SF Pro (fallback)

Large headings.

Comfortable spacing.

Readable body text.

---

# Project Structure

src/

app/

components/

ui/

layout/

sections/

data/

hooks/

lib/

types/

styles/

public/

---

# Section Order

1. Hero

2. What We Do

3. Domains

4. Projects

5. Events & Gallery

6. Team

7. Journey

8. Why Join

9. Join CTA

10. Footer

---

# Approved Components

Navbar
→ Resizable Navbar

Hero
→ Background Paths

What We Do
→ Feature Grid

Domains
→ Feature Grid

Projects
→ 3D Cards

Events
→ Stylish Carousel

Gallery
→ Masonry Grid

Team
→ Expandable Cards

Journey
→ Timeline

Why Join
→ Sticky Scroll

CTA
→ Globe

Footer
→ Premium custom layout inspired by the provided reference.

---

# Component Rules

Never modify third-party components directly.

Place vendor components inside:

components/ui/

Wrap them inside custom sections:

components/sections/

Business logic belongs inside sections.

Vendor components remain untouched.

---

# Code Quality

Use TypeScript strictly.

No any types.

No duplicated code.

Prefer composition over inheritance.

Follow SOLID principles where appropriate.

Keep files small.

Extract reusable utilities.

---

# Responsiveness

Desktop first.

Then optimize:

Tablet

Mobile

No broken layouts.

No horizontal scrolling.

---

# Accessibility

Semantic HTML.

Keyboard accessible.

Visible focus states.

Proper aria labels.

Proper contrast ratios.

---

# Performance

Lazy-load heavy sections.

Optimize images.

Avoid unnecessary re-renders.

Avoid large client components.

Prefer Server Components unless client-side interactivity is required.

---

# Icons

Use Lucide React.

Avoid mixing multiple icon libraries.

---

# Animations

Motion should feel premium.

Avoid excessive motion.

Prefer:

fade

slide

blur

scale

opacity

Avoid:

bounce

rubber-band

flash

spin

unless explicitly required.

---

# Code Comments

Explain WHY.

Not WHAT.

Avoid unnecessary comments.

---

# Git

Every completed section should leave the project in a working state.

---

# Important

When implementing a section:

1. Search for an existing component first.

2. Reuse it.

3. Customize it.

4. Integrate it.

Do not replace approved components with newly invented ones.

Maintain consistency throughout the project.