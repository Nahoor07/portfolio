import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/site";
import { themeScript } from "@/components/layout/ThemeToggle";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

const description = `${profile.role} specialising in React Native, Expo, React, TypeScript, Redux Toolkit, GraphQL, Apollo, Node.js, REST APIs and AI-powered app features.`;

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "React Native Developer",
    "React Developer",
    "TypeScript",
    "Expo",
    "Redux Toolkit",
    "GraphQL",
    "Apollo",
    "Node.js",
    "REST APIs",
    "AI Integration",
    "AI App Developer",
    "LLM Chat Assistant",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.role}`,
    description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sets the theme class before first paint to avoid a flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* suppressHydrationWarning: extensions (ColorZilla, Grammarly, …) inject attributes on <body> before hydration. */}
      <body
        suppressHydrationWarning
        className={`${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
