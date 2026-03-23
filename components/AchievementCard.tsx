interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
  date: string;
}

export default function AchievementCard({ icon, title, description, date }: AchievementCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-indigo-50 via-white to-sky-50 rounded-3xl p-7 border border-indigo-100 card-hover card-glow overflow-hidden">
      {/* Background glow */}
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
      <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />

      <div className="relative flex items-start gap-5">
        {/* Icon badge */}
        <div className="w-14 h-14 rounded-2xl bg-white border border-white shadow-md flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest mb-1 px-2 py-0.5 rounded-full bg-indigo-100">
            {date}
          </span>
          <h3 className="text-sm sm:text-base font-bold text-foreground mt-1 leading-snug">{title}</h3>
          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
