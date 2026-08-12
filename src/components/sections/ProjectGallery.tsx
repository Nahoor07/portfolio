"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Screenshot strip for a project card. Clicking a shot opens a lightbox with
 * keyboard navigation (arrows to move, Escape to close).
 */
export function ProjectGallery({
  images,
  className,
}: {
  images: ProjectImage[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    // Stop the page scrolling behind the lightbox.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, step]);

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      {/* auto-fill adapts to the card's own width, so half-width cards don't get postage-stamp tiles. */}
      <div
        className={cn(
          "grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-3",
          className,
        )}
      >
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View screenshot: ${image.caption}`}
            className={cn(
              "group/shot relative w-full overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-accent focus-visible:border-accent focus-visible:outline-none",
              // Web captures are landscape, so they take two columns instead of one.
              image.wide ? "col-span-2 aspect-16/10" : "aspect-9/16",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 22rem, (min-width: 640px) 30vw, 60vw"
              className="object-cover transition-transform duration-300 group-hover/shot:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label="Project screenshot"
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" />
            </button>

            {images.length > 1 ? (
              <>
                <LightboxArrow side="left" onClick={() => step(-1)} />
                <LightboxArrow side="right" onClick={() => step(1)} />
              </>
            ) : null}

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-full flex-col items-center gap-4"
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={active.wide ? 1400 : 900}
                height={active.wide ? 880 : 1600}
                sizes={active.wide ? "(min-width: 640px) 70rem, 92vw" : "(min-width: 640px) 24rem, 80vw"}
                priority
                className="max-h-[75vh] w-auto rounded-2xl shadow-2xl"
              />
              <figcaption className="max-w-md text-center text-sm text-white/70">
                {active.caption}
                {images.length > 1 ? (
                  <span className="mt-1 block font-mono text-xs text-white/40">
                    {(openIndex ?? 0) + 1} / {images.length}
                  </span>
                ) : null}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function LightboxArrow({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label={side === "left" ? "Previous screenshot" : "Next screenshot"}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white",
        side === "left" ? "left-3 sm:left-6" : "right-3 sm:right-6",
      )}
    >
      <Icon className="size-5" />
    </button>
  );
}
