import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Adds the lift + accent border treatment on hover. */
  interactive?: boolean;
};

export function Card({ children, className, interactive }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-6 transition-all duration-300",
        interactive &&
          "hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
