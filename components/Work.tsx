import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Badge from "./Badge";
import GithubActivity from "./GithubActivity";

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
                <Link href="/work/astrotattwa" className="hover:text-cyan">
                  Astrotattwa
                </Link>{" "}
                <Arrow />
              </h3>
              <Badge tone="magenta">solo-built · production</Badge>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <a
                href="https://astrotattwa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-ink-faint transition-colors hover:text-cyan"
              >
                astrotattwa.com ↗
              </a>
              <a
                href="https://github.com/aakashjain1992-ship-it/astrotattwa-web"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-ink-faint transition-colors hover:text-cyan"
              >
                view source ↗
              </a>
            </div>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Vedic astrology platform, solo-built — live within a month,
              then iterated continuously over 5.5 months. Live at
              astrotattwa.com with 6,400+ monthly visitors, processing real
              payments, ranking in organic search.
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
            <Link
              href="/work/astrotattwa"
              className="mt-3 inline-block font-mono text-[11px] text-cyan transition-colors hover:text-ink"
            >
              full case study →
            </Link>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "761 commits, solo",
                "live in ~1 month",
                "5.5 months of continuous shipping",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[rgba(182,255,46,0.35)] bg-[rgba(182,255,46,0.08)] px-3 py-1 font-mono text-[11px] text-lime"
                >
                  {t}
                </span>
              ))}
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

        {/* Netarch 2.0 SQL Console — query module UI */}
        <Reveal delay={100} className="md:col-span-2">
          <article className="neon-card group rounded-md p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-medium text-ink">
                <Link href="/work/netarch" className="hover:text-cyan">
                  Netarch 2.0 — Query Module UI
                </Link>{" "}
                <Arrow />
              </h3>
              <Badge tone="cyan">at Akamai</Badge>
            </div>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Prototyped the query-module UI in Figma Make, put it in front
              of users before writing any code, then integrated the
              validated design end-to-end with Claude Code — shipping
              roughly a quarter&apos;s worth of planned work in about a
              month.
            </p>
            <Link
              href="/work/netarch"
              className="mt-3 inline-block font-mono text-[11px] text-cyan transition-colors hover:text-ink"
            >
              full case study →
            </Link>
            <div className="mt-5 flex flex-wrap gap-2">
              {["1 quarter planned → shipped in 1 mo"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[rgba(182,255,46,0.35)] bg-[rgba(182,255,46,0.08)] px-3 py-1 font-mono text-[11px] text-lime"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {["~30 files", "12 reusable primitives", "token-based theming"].map(
                (t) => (
                  <span
                    key={t}
                    className="metric rounded-full px-3 py-1 font-mono text-[11px]"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </article>
        </Reveal>

        {/* Smaller builds */}
        <Reveal delay={200} className="md:col-span-2">
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

        {/* GitHub activity — live contribution graph */}
        <Reveal delay={300} className="md:col-span-2">
          <article className="neon-card group rounded-md p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-medium text-ink">
                GitHub activity <Arrow />
              </h3>
              <Badge tone="lime">live</Badge>
            </div>
            <a
              href="https://github.com/aakashjain1992-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-mono text-[11px] text-ink-faint transition-colors hover:text-cyan"
            >
              github.com/aakashjain1992-ship-it ↗
            </a>
            <div className="mt-4 rounded-md border border-line bg-void-2 p-4">
              <GithubActivity />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
