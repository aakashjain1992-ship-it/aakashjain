import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Badge({
  children,
  tone = "cyan",
}: {
  children: React.ReactNode;
  tone?: "cyan" | "magenta" | "lime" | "faint";
}) {
  const tones = {
    cyan: "border-[rgba(0,229,255,0.35)] bg-[rgba(0,229,255,0.08)] text-cyan",
    magenta:
      "border-[rgba(255,61,242,0.35)] bg-[rgba(255,61,242,0.08)] text-magenta",
    lime: "border-[rgba(182,255,46,0.35)] bg-[rgba(182,255,46,0.08)] text-lime",
    faint: "border-line-bright bg-surface-2 text-ink-faint",
  };
  return (
    <span
      className={`rounded-full border px-3 py-1 font-mono text-[11px] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <span className="text-cyan opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
      →
    </span>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading path="/featured-work" title="Proof of build" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {/* Astrotattwa — flagship, spans 2 columns */}
        <Reveal className="md:col-span-2">
          <article className="neon-card group rounded-md p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                <a
                  href="https://astrotattwa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan"
                >
                  Astrotattwa
                </a>{" "}
                <Arrow />
              </h3>
              <Badge tone="magenta">side project</Badge>
            </div>
            <a
              href="https://github.com/aakashjain1992-ship-it/astrotattwa-web"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-mono text-[11px] text-ink-faint transition-colors hover:text-cyan"
            >
              view source ↗
            </a>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              A Vedic astrology platform built solo — Next.js, Supabase, and an
              LLM pipeline — to stay hands-on with full-stack development and
              AI product integration, from architecture through deployment.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-faint">
              Deepest rabbit hole: debugging the Panchang calculation engine —
              the kind of problem you only understand by owning the code
              yourself.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-faint">
              The repo also runs its own{" "}
              <span className="font-mono text-ink-soft">
                github-automation-agent
              </span>{" "}
              — a self-built bot that does a weekly automated code review and
              writes up progress docs, no manual upkeep required.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["759 commits, solo", "0 → production in 5 months", "live"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[rgba(182,255,46,0.35)] bg-[rgba(182,255,46,0.08)] px-3 py-1 font-mono text-[11px] text-lime"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {[
                "Next.js",
                "Supabase",
                "LLM pipeline",
                "PostgreSQL",
                "automation agent",
              ].map((t) => (
                <span
                  key={t}
                  className="metric rounded-full px-3 py-1 font-mono text-[11px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        {/* Internal tool redesign */}
        <Reveal delay={100}>
          <article className="neon-card group h-full rounded-md p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-medium text-ink">
                Design-to-code workflow <Arrow />
              </h3>
              <Badge tone="cyan">at Akamai</Badge>
            </div>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Redesigned an internal tool&apos;s frontend: designed the UI in
              Figma, then used Claude Code to translate the design system
              directly into production frontend code — cutting design-to-code
              turnaround time.
            </p>
          </article>
        </Reveal>

        {/* City Watch — placeholder, content pending */}
        <Reveal delay={200}>
          <article className="group h-full rounded-md border border-dashed border-line-bright bg-transparent p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-medium text-ink-soft">
                City Watch
              </h3>
              <Badge tone="faint">team case study — coming soon</Badge>
            </div>
            <p className="mt-4 leading-relaxed text-ink-faint">
              A team case study on an AI-driven traffic incident management
              platform. Full write-up coming soon.
            </p>
          </article>
        </Reveal>

        {/* Smaller builds */}
        <Reveal delay={300} className="md:col-span-2">
          <article className="neon-card group rounded-md p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-medium text-ink">
                Smaller builds <Arrow />
              </h3>
              <Badge tone="lime">automation</Badge>
            </div>
            <div className="mt-4 max-w-md rounded-sm border border-line bg-void-2 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[13px] text-ink">job-fetcher</p>
                <a
                  href="https://github.com/aakashjain1992-ship-it/job-fetcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-ink-faint transition-colors hover:text-cyan"
                >
                  view source ↗
                </a>
              </div>
              <p className="mt-1.5 text-sm text-ink-soft">
                JobSpy scraping enriched with the Claude API to rank and
                filter listings.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
