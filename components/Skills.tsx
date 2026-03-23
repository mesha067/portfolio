import { skills, achievements, coreSkills, programmingTools } from "@/lib/data";
import SkillCard from "./SkillCard";
import AchievementCard from "./AchievementCard";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-alt relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 -translate-x-1/2 translate-y-1/4" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.18em] bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            What I Bring
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-foreground">
            Top Skills &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <span className="section-line" />
        </div>

        {/* Main skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>

        {/* Core skills + Tools */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {/* Core Skills */}
          <div className="group bg-white rounded-3xl p-7 border border-border shadow-sm card-hover relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-lg shadow-sm">🛠️</div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">Technical &amp; Core Work Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium text-primary bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Programming Languages & Tools */}
          <div className="group bg-white rounded-3xl p-7 border border-border shadow-sm card-hover relative overflow-hidden">
            <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-lg shadow-sm">💻</div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">Programming Languages &amp; Tools</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {programmingTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-surface-alt border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-indigo-50/70 hover:text-primary transition-all cursor-default"
                  >
                    <span className="text-base">{tool.icon}</span>
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-sm text-white">
              🏅
            </div>
            <h3 className="text-xl font-bold text-foreground">Notable Achievements</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {achievements.map((ach) => (
              <AchievementCard key={ach.id} {...ach} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
