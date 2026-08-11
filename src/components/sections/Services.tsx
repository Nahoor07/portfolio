import { Gauge, LayoutGrid, Server, Smartphone, Users, Workflow } from "lucide-react";
import type { Service } from "@/data/site";
import { services } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

const icons: Record<Service["icon"], typeof Smartphone> = {
  smartphone: Smartphone,
  layout: LayoutGrid,
  server: Server,
  gauge: Gauge,
  workflow: Workflow,
  users: Users,
};

export function Services() {
  return (
    <Section id="services" muted>
      <SectionHeading
        eyebrow="Services"
        title="How I can help your team"
        description="Whether you need a full app built or an existing codebase brought up to standard, here's where I add the most value."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <Reveal key={service.title} delay={index * 0.06}>
              <Card interactive className="h-full">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {service.points.map((point) => (
                    <li key={point} className="font-mono text-xs text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
