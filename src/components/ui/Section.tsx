import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Adds the muted surface background used to alternate sections. */
  muted?: boolean;
};

export function Section({ id, children, className, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-border py-20 sm:py-28",
        muted && "bg-surface",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
