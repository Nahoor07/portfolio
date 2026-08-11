/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const profile = {
  name: "Nahoor Tahir",
  firstName: "Nahoor",
  role: "React Native & Full-Stack Developer",
  tagline: "I ship production mobile and web apps end to end.",
  summary:
    "Full-stack developer with 4+ years building production mobile and web applications, shipped across four companies from concept to Play Store and App Store release. I work in React Native and React.js on the frontend and NestJS with TypeORM on the backend, which lets me own a feature end to end — API contract through shipped screen. My recent work centres on super-app architecture, real-time order and location tracking, payment integration, and performance tuning for large, data-heavy apps.",
  location: "Islamabad, Pakistan",
  email: "nahoor98@gmail.com",
  phone: "+92 318 0970708",
  resumeUrl: "/resume.pdf",
  availability: "Open to new opportunities",
  yearsExperience: "4+",
} as const;

export const socials = {
  github: "https://github.com/Nahoor07",
  linkedin: "https://www.linkedin.com/in/nahoor-tahir-6917a41b3",
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
  "React.js",
  "TypeScript",
  "Expo",
  "Redux Toolkit",
  "NestJS",
  "Node.js",
  "GraphQL",
  "Apollo",
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
    description: "Cross-platform apps shipped to the Play Store and App Store.",
    skills: [
      { name: "React Native CLI", level: 95, highlight: true },
      { name: "Expo (SDK 54, EAS Build/Submit, OTA)", level: 92, highlight: true },
      { name: "React Navigation", level: 90 },
      { name: "FlashList / list virtualization", level: 88 },
      { name: "Push notifications (Expo, FCM)", level: 85 },
    ],
  },
  {
    title: "Web & Language",
    description: "Type-safe interfaces that stay maintainable as products grow.",
    skills: [
      { name: "React.js", level: 93, highlight: true },
      { name: "TypeScript", level: 90, highlight: true },
      { name: "Next.js (SSR / SSG)", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Angular", level: 70 },
    ],
  },
  {
    title: "State & Data",
    description: "Predictable data flow from server response to rendered screen.",
    skills: [
      { name: "Redux Toolkit", level: 92, highlight: true },
      { name: "Custom hooks & Context API", level: 90 },
      { name: "TanStack Query", level: 86 },
      { name: "Zustand", level: 80 },
      { name: "GraphQL & Apollo Client", level: 78, highlight: true },
    ],
  },
  {
    title: "Backend & Integrations",
    description:
      "Supporting backend work — I build feature modules and endpoints against an existing architecture so mobile work never blocks on API handoffs.",
    skills: [
      { name: "REST APIs & typed service layers", level: 90, highlight: true },
      { name: "Firebase, Stripe, Twilio, Google Maps", level: 85 },
      { name: "WebSockets (Socket.IO)", level: 78 },
      { name: "NestJS", level: 72, highlight: true },
      { name: "TypeORM & PostgreSQL", level: 68 },
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
    company: "Ninjas Code",
    role: "React Native Developer",
    period: "Aug 2025 — Present",
    location: "Islamabad, Pakistan",
    summary:
      "Building a registry-driven React Native super app that hosts multiple independent mini-apps behind one shell, shared navigation, and a shared design system.",
    achievements: [
      "Architected the super-app shell so new verticals plug in without touching existing app code.",
      "Built the deliveries mini-app across three storefront modes — multi-vendor marketplace, single-vendor, and store chain — from one reusable component and hook layer, cutting duplicate code by ~40%.",
      "Improved scroll responsiveness by 25–30% on low-end devices by virtualizing discovery feeds with FlashList and removing redundant renders through memoization and stable render callbacks.",
      "Contributed NestJS feature modules, REST endpoints, TypeORM entities and migrations, and Socket.IO gateways so mobile features ship end to end.",
      "Standardized REST and GraphQL integration behind a typed service layer with centralized error handling, retries, and TanStack Query caching — reducing production API failures by 20%.",
      "Drove sprint planning and code reviews in an Agile team of 6, maintaining 100% on-time milestone delivery.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "NestJS", "Socket.IO", "TanStack Query"],
  },
  {
    company: "Intercargo Logistics",
    role: "Frontend Developer",
    period: "Aug 2024 — Aug 2025",
    location: "Islamabad, Pakistan",
    summary:
      "Built a logistics management web portal and its companion mobile app, giving customers real-time shipment visibility from any device.",
    achievements: [
      "Cut manual shipment-tracking effort by 30% through real-time data visualization in Angular and React.js.",
      "Accelerated API integration timelines by 20% with a shared service layer for REST endpoints reused across 5+ modules.",
      "Refactored legacy UI into a modular React architecture with Redux, improving page load speed by 15%.",
      "Converted 20+ Figma wireframes into pixel-perfect, accessible interfaces with Tailwind CSS and Bootstrap.",
    ],
    stack: ["React.js", "Angular", "Redux", "Tailwind CSS", "REST APIs"],
  },
  {
    company: "Admk Solutions",
    role: "React Developer",
    period: "Feb 2023 — Dec 2023",
    location: "Islamabad, Pakistan",
    summary:
      "Delivered high-performance web applications and Android apps for a fast-moving product team.",
    achievements: [
      "Improved SEO scores by 25% and cut time-to-first-byte by 40% using Next.js SSR and SSG.",
      "Shipped 2 production React Native Android apps with zero critical post-launch defects.",
      "Reduced feature delivery time by 20% through reusable custom hooks and modular component patterns adopted across the codebase.",
      "Integrated Firebase Authentication, Firestore, and Cloud Messaging for real-time sync and push notifications serving 1,000+ active users.",
    ],
    stack: ["React.js", "Next.js", "React Native", "Firebase", "Custom Hooks"],
  },
  {
    company: "Codlers Enterprises",
    role: "React Native Developer",
    period: "Jan 2022 — Jan 2023",
    location: "Islamabad, Pakistan",
    summary:
      "Led Android app development and took ownership of release engineering and app stability.",
    achievements: [
      "Cut build and release cycle time by 25% through CI/CD pipeline improvements.",
      "Increased app stability by 30% by refactoring Redux state management and eliminating memory leaks surfaced through performance profiling.",
      "Integrated 10+ third-party APIs and Expo modules while maintaining backward compatibility across Android versions.",
      "Mentored 2 junior developers on React Native best practices, reducing code review iterations by 35%.",
    ],
    stack: ["React Native CLI", "Redux", "Expo", "CI/CD", "REST APIs"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  /** Overrides the default "Live demo" label — e.g. "Google Play". */
  liveLabel?: string;
  repoUrl?: string;
  featured?: boolean;
};

/**
 * TODO: add the Google Play / App Store URLs for Lumi, Borku, and Odda as
 * `liveUrl` once you have them to hand — the cards link out automatically.
 */
export const projects: Project[] = [
  {
    title: "Enatega — Super App & Multivendor Delivery Ecosystem",
    category: "React Native · NestJS",
    description:
      "A production, open-source commerce ecosystem live on the Play Store: a customer super app, a rider app, a restaurant app, a super admin panel, and a NestJS backend.",
    highlights: [
      "Expo/React Native shell hosting independent mini-apps through a generated app registry — each vertical owns its screens, navigation, localization, and theme tokens while sharing one auth session and design system",
      "Full customer journey: discovery rails, deals, search and filters, store menus with product customization, cart, checkout, order history, wallet, coupons, reviews, and support chat",
      "Live order and rider tracking over Socket.IO with Google Maps, plus Expo and FCM push notifications",
      "Saved addresses, choose-on-map flows with delivery-zone validation, and Stripe card payments alongside cash and wallet",
      "OTP, Google Sign-In, and JWT sessions with secure token storage; EN/FR localization and OTA release via EAS Update",
      "NestJS feature modules across discovery, orders, store, wallet, and notifications — Swagger-documented REST, TypeORM/PostgreSQL, Redis caching, and BullMQ jobs",
    ],
    stack: ["React Native", "Expo", "NestJS", "Socket.IO", "Stripe", "PostgreSQL"],
    liveUrl: "https://enatega.com",
    liveLabel: "enatega.com",
    featured: true,
  },
  {
    title: "Lumi — Ride-Hailing Platform",
    category: "React Native · Real-time",
    description:
      "Two production apps on Android and iOS, comparable to Uber and inDrive — a driver app and a customer app sharing one real-time coordination layer.",
    highlights: [
      "Lumi Driver: registration, ride handling, and live status updates",
      "Lumi Customer: ride booking, fare estimates, and live tracking",
      "Real-time location tracking and navigation with Google Maps APIs and WebSockets",
      "Firebase Auth, Twilio SMS/OTP, and Expo Push Notifications",
    ],
    stack: ["React Native CLI", "Redux", "Firebase", "Google Maps", "WebSockets", "Twilio"],
    featured: true,
  },
  {
    title: "Borku — Multivendor Delivery Platform",
    category: "React Native",
    description:
      "A cross-platform multivendor delivery app for Android and iOS covering vendor browsing, ordering, and real-time delivery tracking.",
    highlights: [
      "Modular, reusable component architecture for multi-vendor catalog browsing",
      "Cart management and full order lifecycle tracking",
      "Secure authentication, push notifications, and real-time order status updates",
    ],
    stack: ["React Native CLI", "Redux", "Firebase", "REST APIs", "Google Maps"],
  },
  {
    title: "Intercargo — Web Portal & Odda Mobile App",
    category: "Angular · React Native",
    description:
      "An end-to-end logistics platform pairing a responsive Angular portal with the Odda mobile app, giving customers real-time shipment visibility from any device.",
    highlights: [
      "Real-time shipment tracking for flight and sailing schedules with live load data and dynamic quotes",
      "Google Maps route visualization across web and mobile",
      "Shared authentication and API service layers keeping data in sync across platforms",
      "Push notifications for shipment status, delivery milestones, and quote updates",
    ],
    stack: ["Angular", "React Native CLI", "Redux", "JWT Auth", "REST APIs"],
    liveUrl: "https://intercargo.com",
    liveLabel: "intercargo.com",
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
      "End-to-end cross-platform apps — from Expo setup through to Play Store and App Store release.",
    icon: "smartphone",
    points: ["Expo & bare CLI", "EAS Build / OTA updates", "Store submission"],
  },
  {
    title: "React & Next.js Web Apps",
    description:
      "Responsive, accessible interfaces built on a reusable component system, with SSR and SSG where they earn their keep.",
    icon: "layout",
    points: ["Component systems", "SSR & SEO", "Figma to pixel-perfect UI"],
  },
  {
    title: "End-to-End Feature Delivery",
    description:
      "I contribute to the NestJS backend as well as the client, so a feature ships without waiting on an API handoff.",
    icon: "server",
    points: ["NestJS modules", "REST & GraphQL", "TypeORM / PostgreSQL"],
  },
  {
    title: "Real-Time & Location Features",
    description:
      "Live order, rider, and shipment tracking built on Socket.IO, Google Maps, and push notification pipelines.",
    icon: "workflow",
    points: ["Socket.IO", "Google Maps & Places", "Expo & FCM push"],
  },
  {
    title: "Performance Optimisation",
    description:
      "Profiling and fixing slow screens, dropped frames, and heavy bundles in large, data-heavy apps.",
    icon: "gauge",
    points: ["FlashList virtualization", "Render profiling", "Caching strategies"],
  },
  {
    title: "Code Review & Mentoring",
    description:
      "Raising code quality through reviews, TypeScript standards, and bringing junior developers up to speed.",
    icon: "users",
    points: ["TypeScript standards", "Agile / Scrum", "CI/CD pipelines"],
  },
];

export const stats = [
  { value: "4+", label: "Years building products" },
  { value: "8+", label: "Apps live on Play Store & App Store" },
  { value: "4", label: "Companies shipped across" },
  { value: "25–30%", label: "Scroll performance gained" },
] as const;

export const education = {
  degree: "BS in Software Engineering",
  institution: "Riphah International University",
  location: "Islamabad, Pakistan",
  period: "2018 — 2023",
} as const;

export const certifications = [
  "Introduction to Scrum Master Training — Coursera (2023)",
  "ITIL 4 Exam Preparation — Coursera (2023)",
  "Programming for Everybody (Python) — Coursera (2022)",
  "Introduction to Google SEO — Coursera (2022)",
  "Introduction to Cybersecurity — CISCO Networking Academy (2022)",
  "Project Management: Creating the WBS — Coursera (2021)",
] as const;
