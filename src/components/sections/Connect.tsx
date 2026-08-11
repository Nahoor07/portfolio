import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/BrandIcons";
import { socials } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

const links = [
  {
    label: "GitHub",
    handle: socials.github.replace("https://github.com/", "@"),
    description: "Open-source work, React Native experiments, and side projects.",
    href: socials.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    handle: socials.linkedin.replace("https://www.linkedin.com/in/", "in/"),
    description: "Full work history, recommendations, and the fastest way to reach me.",
    href: socials.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "X / Twitter",
    handle: socials.twitter.replace("https://x.com/", "@"),
    description: "Notes on mobile performance, TypeScript, and shipping products.",
    href: socials.twitter,
    icon: XIcon,
  },
];

export function Connect() {
  return (
    <Section id="connect">
      <SectionHeading
        eyebrow="Elsewhere"
        title="Find me online"
        description="Code, career history, and the occasional thread about React Native internals."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link, index) => (
          <Reveal key={link.label} delay={index * 0.08}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Card interactive className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <link.icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight">
                  {link.label}
                </h3>
                <p className="mt-1 font-mono text-xs text-accent">{link.handle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {link.description}
                </p>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
