import Image from "next/image";
import { Mail } from "lucide-react";
import { emailLink, personalInfo } from "@/data/portfolio";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Mail, href: emailLink, label: "Email" },
  { icon: GithubMark, href: personalInfo.github, label: "GitHub" },
  { icon: LinkedinMark, href: personalInfo.linkedin, label: "LinkedIn" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[min(760px,100svh)] items-center border-b border-white/10 pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_280px] lg:gap-20">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Software Engineer · Web & AI
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Building thoughtful, reliable software.
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            I enjoy crafting innovative solutions and delivering clear,
            dependable user experiences through clean, efficient, and elegant
            code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-foreground transition-colors md:border-0"
            >
              Let&apos;s talk
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-white/30 hover:bg-white/5"
            >
              View experience
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[280px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-card">
            <Image
              src={personalInfo.photo}
              alt={`${personalInfo.name} — ${personalInfo.title}`}
              fill
              sizes="(max-width: 768px) 256px, 280px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-card p-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
