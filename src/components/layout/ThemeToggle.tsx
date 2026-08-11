"use client";

import { Moon, Sun } from "lucide-react";

/** Applied before paint by the inline script in `layout.tsx` to avoid a flash. */
export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

/**
 * The active theme lives on `<html class="dark">`, so the icons swap purely in
 * CSS. That keeps the component stateless and free of hydration mismatches.
 */
export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Moon className="size-4 dark:hidden" />
      <Sun className="hidden size-4 dark:block" />
    </button>
  );
}
