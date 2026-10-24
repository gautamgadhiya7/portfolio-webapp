"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#151515]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("#home");
            }}
            className="flex cursor-pointer flex-col items-start gap-0 text-left sm:flex-row sm:items-baseline sm:gap-3"
          >
            <span className="text-sm font-semibold tracking-tight text-foreground  sm:text-base">
              {personalInfo.name}
            </span>
            <span className="text-[11px] leading-tight text-muted-foreground transition-colors duration-200 hover:text-foreground sm:text-xs">
              {personalInfo.title.trim()}
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <li key={href}>
                    <button
                      type="button"
                      onClick={() => scrollTo(href)}
                      className={`cursor-pointer rounded-lg border-0 bg-transparent px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
            {/* Resume Button (desktop) */}
            <a
              href={personalInfo.resumeUrl}
              download="Gautam_Gadhiya_Resume.pdf"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-white/15 text-foreground hover:bg-white/5 transition-colors"
            >
              Download CV
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-muted-foreground transition-colors hover:text-foreground md:hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 border-b border-white/10 bg-[#151515] py-4 px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <li key={href}>
                    <button
                      type="button"
                      onClick={() => scrollTo(href)}
                      className={`w-full cursor-pointer rounded-lg border-0 px-4 py-3 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/5 text-foreground"
                          : "bg-transparent text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Gautam_Gadhiya_Resume.pdf"
                  className="flex items-center justify-center px-4 py-3 rounded-full text-sm font-medium border border-white/15 text-foreground"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
