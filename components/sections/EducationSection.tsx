"use client";

import { education } from "@/data/portfolio";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium glass border border-primary/20 text-primary mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            My academic foundation that shaped my engineering mindset and
            problem-solving skills.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 rounded-xl glass border border-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <h3 className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors leading-snug">
                      {edu.degree}
                    </h3>
                    <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold glass border border-primary/20 text-primary self-start">
                      {edu.grade}
                    </span>
                  </div>

                  {/* Institution */}
                  <p className="text-primary/80 font-medium text-sm mb-3">
                    {edu.institution}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
