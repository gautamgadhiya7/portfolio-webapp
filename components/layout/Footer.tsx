"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#151515] py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
        <p>Designed &amp; Built by Gautam Gadhiya.</p>
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
