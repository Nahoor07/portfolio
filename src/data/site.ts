/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const profile = {
  name: "Nahoor Tahir",
  firstName: "Nahoor",
  role: "React Native, Full-Stack & AI App Developer",
  tagline: "I ship production mobile and web apps end to end — including AI-powered features.",
  summary:
    "Full-stack developer with 4+ years building production mobile and web applications, shipped across four companies from concept to Play Store and App Store release. I work in React Native and React.js on the frontend and NestJS with TypeORM on the backend, which lets me own a feature end to end — API contract through shipped screen. My recent work centres on super-app architecture, real-time order and location tracking, payment integration, AI-powered product features, and performance tuning for large, data-heavy apps. On Lumi I built an AI chat assistant that books a ride for the user straight from conversation.",
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
  "AI Integration",
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
  {
    title: "AI Integration",
    description:
      "Shipping AI features that actually do something — chat assistants wired to real app actions, not just answers.",
    skills: [
      { name: "In-app AI chat assistants", level: 85, highlight: true },
      { name: "LLM APIs & prompt design", level: 82, highlight: true },
      { name: "Tool / function calling", level: 80 },
      { name: "Streaming responses in React Native", level: 78 },
      { name: "Conversational booking & task flows", level: 85 },
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

export type ProjectImage = {
  /** Path under /public. */
  src: string;
  alt: string;
  /** Short caption shown under the screenshot in the lightbox. */
  caption: string;
  /** Landscape web capture — rendered wider than the default phone-shaped tile. */
  wide?: boolean;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  /** App screenshots — first one doubles as the card thumbnail. */
  images?: ProjectImage[];
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
    title: "Lumi — AI-Powered Ride-Hailing Platform",
    category: "React Native · AI · Real-time",
    description:
      "Two production apps on Android and iOS, comparable to Uber and inDrive — a driver app and a customer app sharing one real-time coordination layer, with an AI chat assistant that books rides conversationally.",
    highlights: [
      "AI ride booking: an in-app chat assistant that turns a plain-language request into a confirmed ride — parsing pickup and drop-off, resolving places, quoting the fare, and dispatching the booking without the user touching the standard flow",
      "Wired the AI to the app's real booking actions through tool/function calling, so the assistant drives the same validated ride pipeline as the manual UI",
      "Lumi Driver: registration, ride handling, and live status updates",
      "Lumi Customer: ride booking, fare estimates, and live tracking",
      "Real-time location tracking and navigation with Google Maps APIs and WebSockets",
      "Firebase Auth, Twilio SMS/OTP, and Expo Push Notifications",
    ],
    stack: ["React Native CLI", "AI Chat Assistant", "Redux", "Firebase", "Google Maps", "WebSockets", "Twilio"],
    images: [
      {
        src: "/projects/lumi/ai-chat-booking.webp",
        alt: "Lumi AI assistant booking a ride through chat",
        caption: "AI assistant booking a ride from a plain-language request",
      },
      {
        src: "/projects/lumi/super-app-home.webp",
        alt: "Lumi super app home screen with Drive, Food, Ticket, Hotel and Hospitality services",
        caption: "Super-app home — multiple services behind one shell",
      },
      {
        src: "/projects/lumi/ride-booking.webp",
        alt: "Lumi ride booking screen with live map and pickup point",
        caption: "Ride booking with live map and pickup selection",
      },
      {
        src: "/projects/lumi/fare-selection.webp",
        alt: "Lumi fare selection screen with ride tiers and name-your-price control",
        caption: "Fare estimates and name-your-price ride tiers",
      },
      {
        src: "/projects/lumi/driver-ride-offer.webp",
        alt: "Lumi Drivers incoming ride request with route and fare offer",
        caption: "Driver app — incoming request with route and counter-offer",
      },
      {
        src: "/projects/lumi/driver-live-tracking.webp",
        alt: "Lumi Drivers live navigation and ride tracking screen",
        caption: "Driver app — live navigation and ride tracking",
      },
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.lastorder.app",
    liveLabel: "Google Play",
    featured: true,
  },
  {
    title: "Borku — Multivendor Delivery Ecosystem",
    category: "React Native · GraphQL",
    description:
      "Three production apps on the App Store and Google Play — a customer app, a rider app, and the Partner Hub store app — all driven by one GraphQL API with real-time subscriptions.",
    highlights: [
      "End-to-end order flow across three apps: the store accepts an order, riders are notified, a rider is assigned, and delivery timing updates flow back to the customer",
      "GraphQL subscriptions keep order state live on every device, so no app polls for status changes",
      "Customer app: multi-vendor catalog browsing, categories, offers and credit, cart, and doorstep delivery tracking",
      "Partner Hub: taking-order toggle, daily and weekly earnings, ratings, and menu/stock management",
      "Rider app: assignment flow, live order progress, earnings dashboard, and withdrawals",
      "Modular, reusable component architecture shared across all three apps",
    ],
    stack: ["React Native CLI", "GraphQL", "Apollo", "Subscriptions", "Redux", "Google Maps"],
    images: [
      {
        src: "/projects/borku/order-progress.webp",
        alt: "Borku order in progress showing rider assigned, rider at restaurant, and delivered steps",
        caption: "Live order lifecycle — rider assigned through delivered",
      },
      {
        src: "/projects/borku/partner-hub-dashboard.webp",
        alt: "Borku Partner Hub dashboard with taking-order toggle, earnings, and rating",
        caption: "Partner Hub — taking-order toggle, earnings, and ratings",
      },
      {
        src: "/projects/borku/order-online.webp",
        alt: "Borku customer app store selection screen",
        caption: "Customer app — pick a store and order for doorstep delivery",
      },
      {
        src: "/projects/borku/customer-offers.webp",
        alt: "Borku customer app offers, categories, and recommended items",
        caption: "Offers, categories, and recommendations",
      },
      {
        src: "/projects/borku/rider-earnings.webp",
        alt: "Borku rider earnings screen with balance and withdraw action",
        caption: "Rider app — earnings and withdrawals",
      },
    ],
    liveUrl: "https://apps.apple.com/us/app/borku/id6642702509",
    liveLabel: "App Store",
    featured: true,
  },
  {
    title: "Intercargo & Odda — Freight Portal + Same-Day Courier App",
    category: "Angular · React Native · SignalR",
    description:
      "A logistics platform pairing the Intercargo freight portal with Odda, an on-demand same-day courier app for the UK — book a parcel, collect live quotes from nearby drivers, and follow it door to door.",
    highlights: [
      "Real-time delivery tracking driven by SignalR, pushing driver location, ETAs, and status changes to the app as they happen",
      "Live quotes: a booking fans out to nearby drivers and returns competing vehicle offers with prices, ETAs, and ratings within seconds",
      "Booking flow covering pickup and destination, detour stops, cargo details, and ASAP / at / by / between scheduling windows",
      "Booking management across active, completed, and cancelled deliveries, with share-location and follow for consignors and consignees",
      "Intercargo portal: shipment tracking, flight and sailing schedules, and dynamic freight quotes across air, sea, and road",
      "Push notifications and in-app activity for quotes, confirmations, driver assignment, and delivery milestones",
    ],
    stack: ["Angular", "React Native CLI", "SignalR", "Redux", "JWT Auth", "REST APIs"],
    images: [
      {
        src: "/projects/odda/live-tracking.webp",
        alt: "Odda live vehicle tracking screen with route across the UK",
        caption: "Odda — live vehicle tracking over SignalR",
      },
      {
        src: "/projects/odda/live-quotes.webp",
        alt: "Odda live quotes screen showing competing driver offers",
        caption: "Live quotes from nearby drivers, with ETA and price",
      },
      {
        src: "/projects/odda/deliveries-list.webp",
        alt: "Odda bookings list with in-progress deliveries and job details",
        caption: "Bookings — active, completed, and cancelled deliveries",
      },
      {
        src: "/projects/odda/activity-updates.webp",
        alt: "Odda notifications screen with booking and payment updates",
        caption: "Live activity — quotes, confirmations, and milestones",
      },
      {
        src: "/projects/intercargo/web-hero-tracking.webp",
        alt: "Intercargo website homepage with shipment tracking and schedules widget",
        caption: "Intercargo portal — shipment tracking and schedules",
        wide: true,
      },
      {
        src: "/projects/intercargo/web-solutions.webp",
        alt: "Intercargo website section describing real-time order tracking solutions",
        caption: "Real-time order tracking across air, sea, and road",
        wide: true,
      },
      {
        src: "/projects/intercargo/web-freight-platform.webp",
        alt: "Intercargo digital freight platform section with shipment dashboard mockup",
        caption: "The digital freight platform dashboard",
        wide: true,
      },
    ],
    liveUrl: "https://www.intercargo.com/",
    liveLabel: "intercargo.com",
    featured: true,
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
    title: "AI-Powered App Features",
    description:
      "Adding AI where it removes steps — like Lumi's chat assistant, where a user books a ride by describing the trip instead of filling a form.",
    icon: "workflow",
    points: ["Conversational booking flows", "LLM tool calling", "Chat UI & streaming"],
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
