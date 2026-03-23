"use client";

import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* ── Decorative background shapes ── */}
      <div
        className="animate-blob absolute -top-32 -left-32 w-[500px] h-[500px] opacity-30 rounded-full"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />
      <div
        className="animate-blob absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-25 rounded-full"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", animationDelay: "4s" }}
      />
      <div
        className="animate-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 rounded-full"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", animationDelay: "2s" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 py-28 lg:py-0 lg:min-h-screen">

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left fade-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-200 bg-white/70 backdrop-blur-sm text-sm font-medium text-primary mb-7 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              <span className="block text-foreground/80 text-2xl sm:text-3xl font-semibold mb-1">Hi, I&apos;m</span>
              <span className="shimmer-text">
                {personalInfo.name}
              </span>
            </h1>

            {/* Title chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-5">
              {["Front-End Developer", "UI/UX Designer"].map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalInfo.intro}
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-muted mb-9">
              {[
                { icon: "📧", text: personalInfo.email },
                { icon: "📞", text: personalInfo.phone },
                { icon: "📍", text: personalInfo.location },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-border text-xs sm:text-sm shadow-sm"
                >
                  {icon} <span className="truncate max-w-[200px]">{text}</span>
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#evidence" className="btn-primary">
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* ── Profile image ── */}
          <div className="flex-shrink-0 fade-up" style={{ animationDelay: "0.25s" }}>
            <div className="relative animate-float">
              {/* Outer glow rings */}
              <div className="absolute -inset-4 rounded-full opacity-20 gradient-primary blur-xl" />
              <div className="absolute -inset-1 rounded-full gradient-primary opacity-40 blur-sm" />

              {/* Avatar */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-indigo-100 via-purple-50 to-sky-100 flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 shadow-lg text-xs font-semibold text-foreground flex items-center gap-1.5">
                <span className="text-green-500">●</span> Available
              </div>
              <div className="absolute -top-3 -right-3 glass rounded-2xl px-3 py-2 shadow-lg text-xs font-semibold text-foreground">
                4th Year 🎓
              </div>
            </div>
          </div>

        </div>

        {/* Scroll cue */}
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const elem = document.getElementById("about");
            if (elem) {
              const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
          }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-muted/70 text-xs animate-bounce hover:text-primary transition-colors focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="tracking-widest uppercase text-[10px] font-medium">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
