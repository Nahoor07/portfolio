# Developer Portfolio

A modern, minimal portfolio for a React Native & React developer — built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion** for animation.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Making it yours

Almost all content lives in **[`src/data/site.ts`](src/data/site.ts)** — one file, fully typed. Edit it and every section updates:

| Export        | Drives                                          |
| ------------- | ----------------------------------------------- |
| `profile`     | Name, role, tagline, email, phone, availability  |
| `socials`     | GitHub / LinkedIn / X links (hero, Connect, footer) |
| `navLinks`    | Navbar + footer navigation                       |
| `coreStack`   | Hero marquee + skills highlight row              |
| `skillGroups` | Skills section (name + proficiency bar)          |
| `experience`  | Experience timeline                              |
| `projects`    | Featured projects grid (`featured: true` = wide card) |
| `services`    | Services grid                                    |
| `stats`       | Hero stat row                                    |

Two things to replace before publishing:

1. **Resume** — drop your PDF at `public/resume.pdf` (the Experience section links to `profile.resumeUrl`).
2. **Placeholder copy** — company names, project URLs, and stat figures are samples.

## Sections

Hero · About · Skills · Experience · Featured Projects · Services · Connect (GitHub/LinkedIn) · Contact · Footer

## Structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, SEO metadata, no-flash theme script
│  ├─ page.tsx          # composes every section
│  └─ globals.css       # design tokens (light/dark), keyframes
├─ components/
│  ├─ ui/               # Section, SectionHeading, Card, Badge, Button, Reveal, BrandIcons
│  ├─ layout/           # Navbar, Footer, ThemeToggle
│  └─ sections/         # one component per page section
├─ data/site.ts         # all content
└─ lib/                 # cn() helper, shared easing curve
```

### Reusable primitives

- **`Section` / `SectionHeading`** — consistent vertical rhythm, max width, and eyebrow/title/description heading.
- **`Reveal`** — scroll-triggered entrance animation with a direction and delay; falls back to a static render under `prefers-reduced-motion`.
- **`Card`**, **`Badge`**, **`Button` / `ButtonLink`** — variant-based building blocks used throughout.

## Notes

- **Dark mode** is class-based on `<html>`, set before first paint by an inline script so there's no flash. The toggle is stateless — the icons swap in CSS.
- **The contact form** validates client-side and then opens the visitor's mail client via `mailto:`, so it works with no backend. To use a service (Resend, Formspree, a Route Handler), replace the `mailto:` line in `src/components/sections/Contact.tsx` with a `fetch` to your endpoint.
- **Accessibility** — semantic landmarks, visible focus rings, labelled icon buttons, and reduced-motion support across every animation.
# portfolio
