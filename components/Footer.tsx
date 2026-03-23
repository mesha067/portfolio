import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const navItems = [
    { label: "Home",     href: "#home" },
    { label: "About",    href: "#about" },
    { label: "Skills",   href: "#skills" },
    { label: "Evidence", href: "#evidence" },
    { label: "Contact",  href: "#contact" },
  ];

  type SocialIcon = { label: string; href: string; icon: React.ReactNode };

  const socials: SocialIcon[] = [
    {
      label: "GitHub",
      href: personalInfo.github,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: personalInfo.linkedin,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: personalInfo.facebook,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-400 overflow-hidden">
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-primary" />
      {/* Background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl opacity-10" style={{ background: "var(--primary)" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center text-white text-sm font-bold shadow-md">A</span>
              <span className="font-extrabold text-white text-lg">
                <span className="gradient-text">{personalInfo.firstName}</span>
                {" "}{personalInfo.lastName.split(" ").slice(-1)[0]}
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-[200px]">{personalInfo.title}</p>
            <p className="text-xs mt-2 text-slate-500 break-all">{personalInfo.email}</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Navigation</p>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Find Me Online</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:gradient-primary text-slate-400 hover:text-white border border-slate-700 hover:border-transparent flex items-center justify-center transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {year} <span className="text-white font-semibold">{personalInfo.name}</span>. All rights reserved.</p>
          <p className="text-slate-600">Built with <span className="text-slate-400">Next.js & Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  );
}
