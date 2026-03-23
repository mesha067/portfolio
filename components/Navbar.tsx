"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Evidence", href: "#evidence" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("home");

  /* ── Scroll + active-section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Smooth Scroll Handler ── */
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      // Offset by navbar height (approx 80px)
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${
          scrolled
            ? "shadow-xl shadow-indigo-900/10 py-0"
            : "py-1"
        }`}
      >
        {/* Prismatic top shimmer strip */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-2.5 group"
              aria-label="Go to top"
            >
              {/* Icon badge */}
              <span className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                A
              </span>
              {/* Name */}
              <span className="font-extrabold text-base sm:text-lg leading-tight">
                <span className="gradient-text">{personalInfo.firstName}</span>
                <span className="text-foreground">
                  {" "}{personalInfo.lastName.split(" ").slice(-1)[0]}
                </span>
              </span>
            </a>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleScroll}
                  className={`nav-link ${active === link.href.replace("#", "") ? "active" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* ── CTA + hamburger ── */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={handleScroll}
                className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
              >
                Hire Me ✨
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="md:hidden relative w-10 h-10 rounded-xl border border-border bg-white/80 flex flex-col items-center justify-center gap-1.5 hover:border-primary transition-all"
              >
                <span
                  className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass border-t border-border/60 px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === link.href.replace("#", "")
                    ? "text-primary bg-indigo-50 border border-indigo-100"
                    : "text-muted hover:text-primary hover:bg-surface-alt"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleScroll}
              className="mt-3 btn-primary justify-center text-sm"
            >
              Hire Me ✨
            </a>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
