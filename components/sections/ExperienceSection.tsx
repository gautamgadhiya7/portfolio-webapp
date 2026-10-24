import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Where I&apos;ve worked.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
            Working with teams to take good ideas from the first commit through
            to production.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.duration}`}
              className="rounded-3xl border border-white/10 bg-card p-5 sm:p-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-[104px] w-[104px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white text-lg font-semibold text-neutral-800">
                    {experience.logo ? (
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={87}
                        height={87}
                        className="h-[86.69px] w-[86.69px] object-contain"
                      />
                    ) : (
                      <span aria-label={`${experience.company} logo placeholder`}>
                        {experience.company
                          .split(/\s+/)
                          .map((word) => word[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {experience.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {experience.role}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground sm:justify-end">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {experience.duration}
                  </span>
                  {experience.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {experience.location}
                    </span>
                  )}
                  <span className="rounded-full border border-white/10 px-2.5 py-1">
                    {experience.type}
                  </span>
                </div>
              </div>

              <div className="my-6 border-t border-white/10" />
              <p className="mb-4 text-sm leading-6 text-muted-foreground">
                {experience.description}
              </p>
              <ul className="space-y-2">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                    {highlight}
                  </li>
                ))}
              </ul>
         
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
