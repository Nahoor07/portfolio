import { Briefcase, Download } from "lucide-react";
import { experience, profile } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export function Experience() {
  return (
    <Section id="experience" muted>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped"
          description="Roles building and leading mobile and web product work, with the outcomes that mattered."
        />
        <Reveal delay={0.1}>
          <ButtonLink href={profile.resumeUrl} variant="secondary" download>
            <Download className="size-4" />
            Download resume
          </ButtonLink>
        </Reveal>
      </div>

      <ol className="relative mt-14 border-l border-border pl-8 sm:pl-12">
        {experience.map((role, index) => (
          <Reveal
            as="li"
            key={`${role.company}-${role.period}`}
            delay={index * 0.08}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute top-1 -left-[2.3125rem] flex size-6 items-center justify-center rounded-full border border-border bg-background sm:-left-[3.3125rem]">
              <Briefcase className="size-3 text-accent" />
            </span>

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight">{role.role}</h3>
              <span className="text-accent">·</span>
              <span className="text-base font-medium text-muted">{role.company}</span>
            </div>
            <p className="mt-1 font-mono text-xs tracking-wide text-muted">
              {role.period} · {role.location}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              {role.summary}
            </p>

            <ul className="mt-4 space-y-2">
              {role.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {achievement}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {role.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
