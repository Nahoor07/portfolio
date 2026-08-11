"use client";

import { motion, useReducedMotion } from "motion/react";
import { coreStack, skillGroups } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

function SkillBar({ level, delay }: { level: number; delay: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-border">
      <motion.div
        className="h-full rounded-full bg-accent"
        initial={reduceMotion ? { width: `${level}%` } : { width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I build with every day"
        description="Depth in the React ecosystem across mobile and web, with enough backend to carry a feature over the line rather than hand it off."
      />

      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
        {coreStack.map((tech) => (
          <Badge key={tech} accent className="px-3.5 py-1.5 text-sm">
            {tech}
          </Badge>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.08}>
            <Card interactive className="h-full">
              <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{group.description}</p>

              <ul className="mt-6 space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skill.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span
                        className={
                          skill.highlight
                            ? "text-sm font-medium text-foreground"
                            : "text-sm text-muted"
                        }
                      >
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <SkillBar level={skill.level} delay={skillIndex * 0.06} />
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
