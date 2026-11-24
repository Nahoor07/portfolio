import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Platform, Project } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { ProjectGallery } from "./ProjectGallery";

const platformStyles: Record<Platform, string> = {
  "Mobile app": "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  Website: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  "Admin panel": "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300",
  Backend: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
};

export function ProjectCard({ project }: { project: Project }) {
  const hasImages = Boolean(project.images?.length);
  // Side-by-side only when screenshots fill the copy column; otherwise the left column sits empty.
  const sideBySide = project.featured && hasImages;

  return (
    <Card
      interactive
      className={cn("group flex h-full flex-col", project.featured && "lg:col-span-2")}
    >
      <div className={cn("flex flex-1 flex-col", sideBySide && "lg:flex-row lg:gap-8")}>
        <div className={cn("flex min-w-0 flex-col", sideBySide && "lg:flex-1")}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-wide text-accent">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>
            </div>
            {project.featured ? <Badge accent>Featured</Badge> : null}
          </div>

          {project.platforms?.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.platforms.map((platform) => (
                <span
                  key={platform}
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide uppercase",
                    platformStyles[platform],
                  )}
                >
                  {platform}
                </span>
              ))}
            </div>
          ) : null}

          <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

          {project.images?.length ? (
            <ProjectGallery images={project.images} className="mt-6" />
          ) : null}

          {/* With screenshots the links follow the grid directly; without them they anchor to the card's base. */}
          <div
            className={cn(
              "flex flex-wrap gap-3",
              hasImages ? "mt-6" : "mt-4",
            )}
          >
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
              >
                {project.liveLabel ?? "Live demo"}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <GithubIcon className="size-4" />
                Source
              </a>
            ) : null}
          </div>
        </div>

        <div
          className={cn(
            "mt-6 border-t border-border pt-6",
            sideBySide &&
              "lg:mt-0 lg:w-72 lg:shrink-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8",
          )}
        >
          <ul
            className={cn(
              "space-y-2",
              project.featured && !hasImages && "md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-2 md:space-y-0",
            )}
          >
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
