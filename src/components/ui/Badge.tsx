import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  /** Emphasised styling for the headline technologies. */
  accent?: boolean;
};

export function Badge({ children, className, accent }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap",
        accent
          ? "border-accent/30 bg-accent-soft text-accent"
          : "border-border bg-background text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
