"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right" | "none";
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
};

const offsets = {
  bottom: { x: 0, y: 24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered entrance animation. Respects `prefers-reduced-motion`
 * by rendering the final state immediately.
 */
export function Reveal({
  children,
  from = "bottom",
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];
  const offset = reduceMotion ? offsets.none : offsets[from];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}
