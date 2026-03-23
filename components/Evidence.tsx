import { evidence, personalInfo } from "@/lib/data";
import EvidenceCard from "./EvidenceCard";

export default function Evidence() {
  return (
    <section id="evidence" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Proof of Work
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground">
            Supporting <span className="gradient-text">Evidence</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full gradient-primary" />
          <p className="mt-5 max-w-xl mx-auto text-muted text-sm sm:text-base">
            A curated collection of my projects, certifications, and creative
            works that demonstrate my skills in action.
          </p>
        </div>

        {/* Evidence grid — 2-column on md+, single on mobile */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto lg:max-w-full">
          {evidence.map((item) => (
            <EvidenceCard key={item.id} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted text-sm mb-4">
            Want to see more? Visit my GitHub profile for all my open-source
            work.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-primary hover:opacity-90 transition-opacity shadow-md"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
