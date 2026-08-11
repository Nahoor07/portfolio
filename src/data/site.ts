/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to personalise the portfolio — no component changes needed.
 */

export const profile = {
  name: "Your Name",
  firstName: "Your",
  role: "React Native & React Developer",
  tagline: "I build fast, polished mobile and web products.",
  summary:
    "I'm a product-focused engineer specialising in cross-platform mobile apps with React Native and Expo, and modern web apps with React and Next.js. I care about type-safe codebases, predictable state, smooth 60fps interfaces, and shipping features that hold up in production.",
  location: "Remote · Available worldwide",
  email: "sharan.gohar@gmail.com",
  phone: "+00 000 000 0000",
  resumeUrl: "/resume.pdf",
  availability: "Open to full-time & contract roles",
  yearsExperience: "5+",
} as const;

export const socials = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
  twitter: "https://x.com/your-username",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

/** Headline technologies — rendered in the hero marquee and skills highlight row. */
export const coreStack = [
  "React Native",
  "React",
  "TypeScript",
  "Expo",
  "Redux Toolkit",
  "GraphQL",
  "Apollo",
  "Node.js",
  "REST APIs",
] as const;

export type SkillGroup = {
  title: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    description: "Cross-platform apps shipped to the App Store and Play Store.",
    skills: [
      { name: "React Native", level: 95, highlight: true },
      { name: "Expo / EAS", level: 92, highlight: true },
      { name: "React Navigation", level: 90 },
      { name: "Reanimated & Gesture Handler", level: 85 },
      { name: "Native Modules (iOS / Android)", level: 75 },
    ],
  },
  {
    title: "Web & Language",
    description: "Type-safe interfaces that stay maintainable as teams grow.",
    skills: [
      { name: "React", level: 95, highlight: true },
      { name: "TypeScript", level: 93, highlight: true },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Testing Library / Jest", level: 82 },
    ],
  },
  {
    title: "State & Data",
    description: "Predictable data flow from cache to server.",
    skills: [
      { name: "Redux Toolkit", level: 92, highlight: true },
      { name: "GraphQL", level: 88, highlight: true },
      { name: "Apollo Client", level: 88, highlight: true },
      { name: "React Query", level: 85 },
      { name: "Zustand", level: 80 },
    ],
  },
  {
    title: "Backend & Tooling",
    description: "The services and pipelines behind the product.",
    skills: [
      { name: "Node.js", level: 87, highlight: true },
      { name: "REST APIs", level: 90, highlight: true },
      { name: "Express / Nest", level: 80 },
      { name: "PostgreSQL / MongoDB", level: 78 },
      { name: "CI/CD, Fastlane, GitHub Actions", level: 80 },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Company Name",
    role: "Senior React Native Developer",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Lead mobile engineer on a consumer app serving hundreds of thousands of monthly users across iOS and Android.",
    achievements: [
      "Rebuilt the app shell on Expo with EAS Build, cutting release cycle time from days to hours.",
      "Introduced Redux Toolkit + RTK Query, removing ~40% of hand-written data-fetching code.",
      "Improved cold-start time by 45% through bundle splitting, Hermes, and screen-level lazy loading.",
      "Mentored three engineers and set the code review and TypeScript standards for the mobile team.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "GraphQL"],
  },
  {
    company: "Company Name",
    role: "React & React Native Developer",
    period: "2021 — 2023",
    location: "Hybrid",
    summary:
      "Built customer-facing web dashboards and the companion mobile app for a B2B SaaS platform.",
    achievements: [
      "Shipped a shared design system consumed by both the React web app and the React Native client.",
      "Migrated REST endpoints to a GraphQL gateway with Apollo Client, cutting over-fetching significantly.",
      "Raised automated test coverage from 20% to 75% with Jest and React Testing Library.",
    ],
    stack: ["React", "TypeScript", "Apollo", "Node.js", "REST APIs"],
  },
  {
    company: "Company Name",
    role: "Frontend Developer",
    period: "2020 — 2021",
    location: "On-site",
    summary:
      "Delivered responsive marketing sites and internal tools for a fast-moving product team.",
    achievements: [
      "Converted a legacy jQuery admin panel into a modular React application.",
      "Built reusable component primitives that became the base of the company UI kit.",
      "Integrated third-party REST APIs for payments, analytics, and push notifications.",
    ],
    stack: ["React", "JavaScript", "REST APIs", "Node.js"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Fintech Mobile Wallet",
    category: "React Native · Expo",
    description:
      "A cross-platform wallet app with biometric auth, real-time balances, and offline-first transaction history.",
    highlights: [
      "Offline-first sync layer built on Redux Toolkit and a persisted queue",
      "Biometric login with secure keychain storage",
      "60fps animated charts using Reanimated",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "REST APIs"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username",
    featured: true,
  },
  {
    title: "Commerce Storefront",
    category: "React · Next.js",
    description:
      "A headless storefront with server-rendered product pages, GraphQL data layer, and sub-second navigation.",
    highlights: [
      "Apollo Client with normalised cache and optimistic cart updates",
      "Incremental static regeneration for 10k+ product pages",
      "Lighthouse performance score of 98",
    ],
    stack: ["React", "Next.js", "TypeScript", "GraphQL", "Apollo"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username",
    featured: true,
  },
  {
    title: "Delivery Tracking App",
    category: "React Native · GraphQL",
    description:
      "Live driver tracking with map clustering, push notifications, and a GraphQL subscription feed.",
    highlights: [
      "GraphQL subscriptions for real-time location updates",
      "Background location tracking with battery-aware throttling",
      "Shared TypeScript types between the app and the Node.js API",
    ],
    stack: ["React Native", "GraphQL", "Apollo", "Node.js", "TypeScript"],
    repoUrl: "https://github.com/your-username",
  },
  {
    title: "Team Analytics Dashboard",
    category: "React · Node.js",
    description:
      "An internal analytics dashboard with role-based access, saved views, and CSV export pipelines.",
    highlights: [
      "REST API built with Node.js and Express, documented with OpenAPI",
      "Virtualised tables handling 100k+ rows without jank",
      "Redux Toolkit slices for filters, saved views, and permissions",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Node.js", "REST APIs"],
    liveUrl: "https://example.com",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: "smartphone" | "layout" | "server" | "gauge" | "workflow" | "users";
  points: string[];
};

export const services: Service[] = [
  {
    title: "React Native App Development",
    description:
      "End-to-end cross-platform apps — from Expo setup to App Store and Play Store release.",
    icon: "smartphone",
    points: ["Expo & bare workflow", "EAS Build / OTA updates", "Store submission"],
  },
  {
    title: "React & Next.js Web Apps",
    description:
      "Responsive, accessible, type-safe web interfaces built on a reusable component system.",
    icon: "layout",
    points: ["Design systems", "SSR & SEO", "Accessibility"],
  },
  {
    title: "API Integration",
    description:
      "Reliable data layers over REST and GraphQL, with caching, retries, and clean error states.",
    icon: "server",
    points: ["GraphQL & Apollo", "REST clients", "Auth flows"],
  },
  {
    title: "Performance Optimisation",
    description:
      "Profiling and fixing slow screens, heavy bundles, dropped frames, and memory leaks.",
    icon: "gauge",
    points: ["Bundle analysis", "Render profiling", "Startup time"],
  },
  {
    title: "State Architecture",
    description:
      "Scalable state design with Redux Toolkit or React Query so features stay easy to add.",
    icon: "workflow",
    points: ["Redux Toolkit", "RTK Query", "Offline sync"],
  },
  {
    title: "Code Review & Mentoring",
    description:
      "Raising code quality with reviews, TypeScript standards, testing, and team enablement.",
    icon: "users",
    points: ["TypeScript standards", "Testing strategy", "CI pipelines"],
  },
];

export const stats = [
  { value: "5+", label: "Years building products" },
  { value: "20+", label: "Apps & web projects shipped" },
  { value: "1M+", label: "Combined app downloads" },
  { value: "99%", label: "Crash-free sessions" },
] as const;
