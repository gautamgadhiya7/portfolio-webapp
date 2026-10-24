
const principles = [
  {
    title: "Clarity over complexity",
    description:
      "Readable code, intuitive UI, reliable APIs.",
  },
  {
    title: "Build for reality",
    description:
      "Reliability, observability, and a clean path from commit to production.",
  },
  {
    title: "People over process",
    description:
      "Software should make someone’s day easier - not the other way around.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How I build.
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              As a Software Engineer, I believe technology should serve people,
              not the other way around. I enjoy building clean, scalable
              full-stack solutions that bridge innovation and real-world value.

            </p>
            <p>
              I build across the stack, from React and Next.js interfaces to
              Node.js services, REST APIs, and database-backed applications. I
              enjoy creating reusable components and dependable features that
              are straightforward to maintain.
            </p>
            <p>
              I value clean, efficient code and close collaboration with
              cross-functional teams. My goal is always to deliver practical
              software that works well for the people who rely on it.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-card p-6 sm:p-7">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How I think
          </p>
          <h3 className="mb-6 text-xl font-semibold text-foreground">
            Building what matters.
          </h3>
          <ul className="space-y-5">
            {principles.map((principle) => (
              <li key={principle.title}>
                <h4 className="mb-1 text-sm font-semibold text-foreground">
                  {principle.title}
                </h4>
                <p className="text-sm leading-6 text-muted-foreground">
                  {principle.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              where I lean
            </p>
            <div className="flex flex-wrap gap-2">
              {["Full-stack", "Web applications", "REST APIs", "Databases"].map(
                (area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {area}
                  </span>
                ),
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
