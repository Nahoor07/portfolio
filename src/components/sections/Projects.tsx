import { ArrowUpRight } from "lucide-react";
import { projects, socials } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured projects"
        title="Selected work"
        description="Mobile apps live on the Play Store and App Store, plus the Next.js websites and admin dashboards behind them. Each one covers a different part of the stack: super-app architecture, real-time tracking, back-office operations, payments, and performance."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.08}
            className={project.featured ? "lg:col-span-2" : undefined}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 flex justify-center">
        <ButtonLink href={socials.github} target="_blank" rel="noreferrer" variant="secondary">
          See more on GitHub
          <ArrowUpRight className="size-4" />
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
