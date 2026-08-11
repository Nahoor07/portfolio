import { Code2, Rocket, ShieldCheck, Smartphone } from "lucide-react";
import { profile } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

const principles = [
  {
    icon: Smartphone,
    title: "Mobile-first thinking",
    body: "Every screen designed for touch, tested on real devices, and tuned for 60fps.",
  },
  {
    icon: Code2,
    title: "Type-safe by default",
    body: "TypeScript end to end, with shared types between the client and the API.",
  },
  {
    icon: Rocket,
    title: "Ship, then iterate",
    body: "Small releases, OTA updates, and instrumentation that shows what actually works.",
  },
  {
    icon: ShieldCheck,
    title: "Production-ready",
    body: "Error boundaries, offline states, crash reporting, and tests where they matter.",
  },
];

export function About() {
  return (
    <Section id="about" muted>
      <SectionHeading
        eyebrow="About me"
        title="Engineer focused on mobile and web product quality"
        description={profile.summary}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <Reveal from="left" className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            I started out on the web with React and moved into React Native when I realised
            how much of a product&apos;s value lives on a phone. Today I work across both —
            a shared TypeScript codebase, a design system that serves web and mobile, and a
            data layer built on GraphQL or REST depending on what the team needs.
          </p>
          <p>
            My day-to-day is Expo and EAS for mobile delivery, Redux Toolkit or React Query
            for state, Apollo Client for GraphQL, and Node.js when the backend needs a hand.
            I&apos;m comfortable owning a feature from API contract through to store release.
          </p>
          <p>
            Outside of feature work I spend time on the parts teams often defer: performance
            profiling, accessibility, CI pipelines, and code review culture. Those are what
            keep a codebase pleasant to work in a year later.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} from="right" delay={index * 0.08}>
              <Card interactive className="h-full bg-background">
                <principle.icon className="size-5 text-accent" />
                <h3 className="mt-4 text-sm font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{principle.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
