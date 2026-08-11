import { Award, Code2, GraduationCap, Radio, Smartphone } from "lucide-react";
import { certifications, education, profile } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

const principles = [
  {
    icon: Smartphone,
    title: "Mobile-first thinking",
    body: "Screens designed for touch, tested on real devices, and tuned to stay smooth on low-end hardware.",
  },
  {
    icon: Code2,
    title: "Reusable by default",
    body: "One component and hook layer serving several storefront modes — less duplicate code to keep in sync.",
  },
  {
    icon: Radio,
    title: "Real-time where it counts",
    body: "Live order, rider, and shipment tracking over Socket.IO, Google Maps, and push pipelines.",
  },
  {
    icon: Award,
    title: "Shipped, not shelved",
    body: "Apps live on the Play Store and App Store, released over the air with EAS Update.",
  },
];

export function About() {
  return (
    <Section id="about" muted>
      <SectionHeading
        eyebrow="About me"
        title="Full-stack developer with a mobile centre of gravity"
        description={profile.summary}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <Reveal from="left" className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            My strongest work is on the client — React Native and React.js, with TypeScript
            throughout. That&apos;s where I&apos;ve spent four years: super-app architecture
            that lets independent mini-apps share one shell, discovery feeds that stay
            smooth on large catalogs, and the payment, auth, and location flows that sit
            underneath them.
          </p>
          <p>
            I also work in the backend with NestJS and TypeORM — feature modules, REST
            endpoints, and Socket.IO gateways against an existing architecture. I&apos;d
            describe that as solid supporting knowledge rather than my specialism, and its
            real value is that mobile work never stalls waiting on an API handoff.
          </p>
          <p>
            Day to day that means Expo and EAS for delivery, Redux Toolkit or TanStack Query
            for state, and a typed service layer with centralized error handling over REST
            and GraphQL. I&apos;m comfortable owning a feature from API contract through to
            store release.
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

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <Card className="h-full bg-background">
            <div className="flex items-center gap-2 text-accent">
              <GraduationCap className="size-5" />
              <h3 className="text-sm font-semibold tracking-wide uppercase">Education</h3>
            </div>
            <p className="mt-4 text-base font-medium">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">
              {education.institution} — {education.location}
            </p>
            <p className="mt-1 font-mono text-xs text-muted">{education.period}</p>
          </Card>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="h-full bg-background">
            <div className="flex items-center gap-2 text-accent">
              <Award className="size-5" />
              <h3 className="text-sm font-semibold tracking-wide uppercase">
                Certifications
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              {certifications.map((certification) => (
                <li
                  key={certification}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {certification}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
