interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  level: number;
}

const barColors = [
  "from-indigo-500 to-cyan-400",
  "from-violet-500 to-indigo-400",
  "from-cyan-500 to-sky-400",
];

export default function SkillCard({ icon, title, description, level }: SkillCardProps) {
  // Pick bar gradient based on first char
  const colorIdx = title.charCodeAt(0) % 3;

  return (
    <div className="group relative bg-white rounded-3xl p-7 border border-border shadow-sm card-hover card-glow flex flex-col gap-5 overflow-hidden">
      {/* Subtle gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-cyan-50/0 group-hover:from-indigo-50/60 group-hover:to-cyan-50/40 transition-all duration-500 rounded-3xl" />

      {/* Icon with gradient backdrop */}
      <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${barColors[colorIdx]} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>

      {/* Proficiency bar */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Proficiency</span>
          <span className="text-sm font-extrabold text-primary tabular-nums">{level}%</span>
        </div>
        <div className="h-2 w-full bg-surface-alt rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${barColors[colorIdx]} skill-bar-fill`}
            style={{ "--target-width": `${level}%`, width: `${level}%` } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
}
