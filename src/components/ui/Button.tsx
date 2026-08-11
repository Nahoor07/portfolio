import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-border bg-background text-foreground hover:border-accent/50 hover:text-accent hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-muted hover:text-foreground",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm sm:text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
