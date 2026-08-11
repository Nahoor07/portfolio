import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/BrandIcons";
import { navLinks, profile, socials } from "@/data/site";

const socialLinks = [
  { href: socials.github, label: "GitHub", icon: GithubIcon },
  { href: socials.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: socials.twitter, label: "X", icon: XIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight">
              {profile.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.role} building cross-platform apps with React Native, Expo, React,
              and TypeScript.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <link.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript &
            Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
