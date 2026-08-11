"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { EASE } from "@/lib/motion";
import { coreStack, profile, socials, stats } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? undefined : item;

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute top-[-10rem] left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          className="max-w-3xl"
        >
          <motion.div variants={variants} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={variants}
            className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {profile.role.split(" & ")[0]} &{" "}
            <span className="text-accent">{profile.role.split(" & ")[1]}</span>
          </motion.h1>

          <motion.p
            variants={variants}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl"
          >
            {profile.tagline} I ship production apps with{" "}
            <span className="font-medium text-foreground">React Native</span>,{" "}
            <span className="font-medium text-foreground">React</span>, and{" "}
            <span className="font-medium text-foreground">TypeScript</span> — from Expo
            builds to GraphQL and Node.js services behind them.
          </motion.p>

          <motion.div variants={variants} className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" size="lg">
              View my work
              <ArrowUpRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" size="lg">
              Get in touch
            </ButtonLink>
            <div className="flex items-center gap-2">
              <ButtonLink
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                aria-label="GitHub profile"
                className="size-11 !px-0"
              >
                <GithubIcon className="size-4" />
              </ButtonLink>
              <ButtonLink
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                aria-label="LinkedIn profile"
                className="size-11 !px-0"
              >
                <LinkedinIcon className="size-4" />
              </ButtonLink>
            </div>
          </motion.div>
        </motion.div>

        {/* Headline stack marquee */}
        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee-track flex w-max gap-3">
            {[...coreStack, ...coreStack].map((tech, index) => (
              <Badge key={`${tech}-${index}`} accent className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <a
          href="#about"
          className="mt-14 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowDown className="size-4 animate-bounce" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
