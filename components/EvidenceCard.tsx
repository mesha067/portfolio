import Image from "next/image";

interface EvidenceCardProps {
  title: string;
  description: string;
  tags: string[];
  type: string;
  role?: string;
  link?: string;
  image?: string;
}

const typeConfig: Record<string, { color: string; badge: string; gradient: string; emoji: string }> = {
  Project: {
    color: "text-indigo-700 bg-indigo-50 border-indigo-200",
    badge: "from-indigo-500 to-cyan-500",
    gradient: "from-indigo-50 via-purple-50/50 to-sky-50",
    emoji: "🚀",
  },
  Certificate: {
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badge: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-50 via-teal-50/50 to-cyan-50",
    emoji: "📜",
  },
  "Design Work": {
    color: "text-sky-700 bg-sky-50 border-sky-200",
    badge: "from-sky-500 to-blue-500",
    gradient: "from-sky-50 via-blue-50/50 to-indigo-50",
    emoji: "🎨",
  },
  Award: {
    color: "text-amber-700 bg-amber-50 border-amber-200",
    badge: "from-amber-500 to-orange-500",
    gradient: "from-amber-50 via-yellow-50/50 to-orange-50",
    emoji: "🏆",
  },
};

export default function EvidenceCard({ title, description, tags, type, role, link, image }: EvidenceCardProps) {
  const cfg = typeConfig[type] ?? {
    color: "text-slate-700 bg-slate-50 border-slate-200",
    badge: "from-slate-500 to-slate-400",
    gradient: "from-slate-50 to-slate-100",
    emoji: "📁",
  };

  return (
    <div className="group bg-white rounded-3xl border border-border shadow-sm card-hover card-glow overflow-hidden flex flex-col h-full">
      {/* Header image zone */}
      <div className={`relative h-44 sm:h-48 bg-gradient-to-br ${cfg.gradient} flex flex-col items-center justify-center gap-3 border-b border-border overflow-hidden`}>
        {image ? (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${cfg.badge} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="absolute inset-0 p-6">
              <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                <Image src={image} alt={title} fill className="object-contain drop-shadow-md rounded-sm" />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Inner glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cfg.badge} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{cfg.emoji}</span>
            <span className="text-xs text-muted font-medium px-6 text-center opacity-80">
              {type === "Project" ? "Replace with project screenshot" : "Replace with certificate image"}
            </span>
          </>
        )}
        {/* Corner badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${cfg.badge} shadow-sm z-10`}>
          {type}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
        {role && (
          <span className="text-xs text-muted font-medium italic">{role}</span>
        )}

        <h3 className="text-base sm:text-lg font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-surface-alt text-xs font-medium text-muted hover:bg-indigo-50 hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-xs font-bold text-white px-3 py-2 rounded-xl bg-gradient-to-r ${cfg.badge} shadow-sm hover:shadow-md hover:opacity-90 transition-all mt-1 self-start`}
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
