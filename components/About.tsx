import { aboutMe } from "@/lib/data";

const levelColors = [
  "text-rose-500 bg-rose-50 border-rose-200",
  "text-sky-600 bg-sky-50 border-sky-200",
  "text-violet-600 bg-violet-50 border-violet-200",
  "text-indigo-600 bg-indigo-50 border-indigo-100",
];
const dotsColors = [
  "from-rose-400 to-pink-500",
  "from-sky-400 to-cyan-500",
  "from-violet-400 to-purple-500",
  "from-indigo-400 to-blue-500",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.18em] bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            Get To Know Me
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-foreground">
            About <span className="gradient-text">Me</span>
          </h2>
          <span className="section-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-7">
          {/* Left */}
          <div className="space-y-5">
            {/* Bio */}
            <div className="group bg-surface-alt rounded-3xl p-7 border border-border card-hover overflow-hidden relative">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-lg shadow-sm">📖</div>
                  <h3 className="text-base font-bold text-foreground">Profile Summary</h3>
                </div>
                <p className="text-muted leading-relaxed text-sm sm:text-base">{aboutMe.bio}</p>
              </div>
            </div>

            {/* Career Goals */}
            <div className="group bg-gradient-to-br from-indigo-50 via-white to-sky-50 rounded-3xl p-7 border border-indigo-100 card-hover relative overflow-hidden">
              <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-lg shadow-sm">🎯</div>
                  <h3 className="text-base font-bold text-foreground">Career Goals</h3>
                </div>
                <p className="text-muted leading-relaxed text-sm sm:text-base">{aboutMe.careerGoals}</p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-3xl p-7 border border-border shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-lg shadow-sm">✨</div>
                <h3 className="text-base font-bold text-foreground">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutMe.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium text-primary bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 hover:border-indigo-200 transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education timeline */}
          <div className="bg-white rounded-3xl p-7 border border-border shadow-sm card-hover">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-lg shadow-sm">🎓</div>
              <h3 className="text-base font-bold text-foreground">Education Timeline</h3>
            </div>

            <div className="relative space-y-0">
              {/* Vertical track */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-300 via-sky-200 to-violet-200 rounded-full" />

              {aboutMe.education.map((edu, i) => (
                <div key={i} className="relative flex gap-5 pb-8 last:pb-0 group/item">
                  {/* Dot */}
                  <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${dotsColors[i]} flex items-center justify-center shadow-md mt-0.5 group-hover/item:scale-110 transition-transform`}>
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 min-w-0 bg-surface-alt rounded-2xl p-4 border border-border group-hover/item:border-primary/20 group-hover/item:bg-indigo-50/40 transition-all">
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${levelColors[i]} mb-2`}>
                      {edu.level}
                    </span>
                    <p className="font-semibold text-foreground text-sm leading-snug">{edu.school}</p>
                    <p className="text-xs text-muted mt-1 font-medium">{edu.years}</p>
                    {edu.track && (
                      <p className="text-xs text-primary/80 mt-1.5 italic leading-snug">{edu.track}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
