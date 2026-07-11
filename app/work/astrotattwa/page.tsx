import type { Metadata } from "next";
import Link from "next/link";
import BackgroundFX from "@/components/BackgroundFX";
import Logo from "@/components/Logo";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const title = "Astrotattwa — Case Study — Aakash Jain";
const description =
  "Vedic astrology platform, solo-built — live within a month, then iterated continuously over 5.5 months. Live at astrotattwa.com with 6,400+ monthly visitors, processing real payments, ranking in organic search.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const CONSTRAINTS = [
  "Solo builder — one person across product, architecture, backend, frontend, and DevOps.",
  "No local dev environment — built and iterated directly against a constrained production setup.",
  "4GB RAM production VPS — every architecture decision had to work within that ceiling.",
  "No team to hand off to — every tradeoff had to be one this one person could own and operate long-term.",
];

const DECISIONS = [
  {
    title: "LLM model-tiered content pipeline",
    body: "Automated bilingual (EN/HI) content generation using the Claude API, routing high-frequency content to a lightweight model and analytical content to a higher-capability model, with prompt caching to control cost-per-generation.",
    tradeoff:
      "Tradeoff: model-tiering adds routing complexity, but a single high-capability model for every request would have made per-generation cost unworkable at scale.",
  },
  {
    title: "3-tier caching + atomic rate-limiting",
    body: "A 3-tier cache (in-memory → database → compute) cut repeat-computation latency to sub-millisecond, deployed across a 4-worker clustered environment with shared cross-process state. Rate-limiting is enforced atomically via Redis + Lua scripting for cross-process consistency, with a fail-open design so availability survives infrastructure degradation.",
    tradeoff:
      "Tradeoff: fail-open means rate-limits can be bypassed during a Redis outage — a deliberate choice to protect availability over strict enforcement.",
  },
  {
    title: "Custom OAuth 2.0 + Google One Tap",
    body: "Built the auth flow from primitives — CSRF state validation, nonce verification, session cookie exchange — instead of a default provider-hosted redirect.",
    tradeoff:
      "Tradeoff: more surface area to get right on security, in exchange for a login experience that doesn't bounce users through a third-party-hosted page.",
  },
];

const INCIDENTS = [
  {
    label: "Production OOM under build load",
    body: "The 4GB RAM VPS ran out of memory during builds. Diagnosed and resolved with build-memory tuning rather than upsizing infrastructure.",
  },
  {
    label: "Cache-staleness bugs",
    body: "The 3-tier cache occasionally served stale data across layers — required tightening invalidation logic between the in-memory, database, and compute tiers.",
  },
];

function StatGroup({
  path,
  stats,
}: {
  path: string;
  stats: { value: string; label: string }[];
}) {
  return (
    <div>
      <p className="path-label font-mono text-xs">{path}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="neon-card rounded-md px-4 py-3">
            <div className="font-mono text-lg font-medium text-cyan sm:text-xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs leading-snug text-ink-soft">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AstrotattwaCaseStudy() {
  return (
    <>
      <BackgroundFX />
      <header className="sticky top-0 z-50 border-b border-line bg-[rgba(6,8,15,0.85)] backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-[15px] font-medium text-ink"
          >
            <Logo />
            Aakash Jain
          </Link>
          <Link
            href="/#work"
            className="font-mono text-[12px] text-ink-soft transition-colors hover:text-cyan"
          >
            ← back to portfolio
          </Link>
        </div>
      </header>

      <main>
        {/* Outcome-first hero */}
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pt-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="magenta">solo-built · production</Badge>
              <Badge tone="lime">live</Badge>
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
              Astrotattwa
            </h1>
            <div className="scanline mt-5 h-px w-40" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Vedic astrology platform, solo-built — live within a month,
              then iterated continuously over 5.5 months. Live at
              astrotattwa.com with 6,400+ monthly visitors, processing real
              payments, ranking in organic search.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://astrotattwa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-cyan px-5 py-2.5 font-mono text-[13px] font-medium text-void shadow-[0_0_24px_rgba(0,229,255,0.35)] transition-shadow hover:shadow-[0_0_36px_rgba(0,229,255,0.55)]"
              >
                astrotattwa.com ↗
              </a>
              <a
                href="https://github.com/aakashjain1992-ship-it/astrotattwa-web"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-line-bright px-5 py-2.5 font-mono text-[13px] text-ink transition-colors hover:border-cyan hover:text-cyan"
              >
                view source ↗
              </a>
            </div>
          </Reveal>
        </section>

        {/* Problem / constraints */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading path="/constraints" title="Solo, with no safety net" />
          <Reveal>
            <p className="mt-8 max-w-2xl leading-relaxed text-ink-soft">
              The first version went live about a month in. The remaining
              4.5 months were spent iterating — layering in more advanced
              features against a live product, not a green-field one.
            </p>
          </Reveal>
          <ul className="mt-6 max-w-2xl space-y-3">
            {CONSTRAINTS.map((c) => (
              <Reveal key={c}>
                <li className="flex gap-3 leading-relaxed text-ink-soft">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  {c}
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Key decisions */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading
            path="/key-decisions"
            title="Decisions that mattered"
          />
          <div className="mt-8 space-y-4">
            {DECISIONS.map((d, i) => (
              <Reveal key={d.title} delay={i * 100}>
                <article className="neon-card rounded-md p-6 sm:p-7">
                  <h3 className="font-display text-lg font-medium text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {d.body}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-faint">
                    {d.tradeoff}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* What broke */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading path="/incidents" title="What broke, and how" />
          <div className="mt-8 space-y-4">
            {INCIDENTS.map((inc, i) => (
              <Reveal key={inc.label} delay={i * 100}>
                <article className="rounded-md border border-line bg-surface p-6">
                  <p className="font-mono text-xs text-magenta">
                    {inc.label}
                  </p>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {inc.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Domain engine deep-dive */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading
            path="/domain-engine"
            title="The deepest part: the astrology engine"
          />
          <Reveal>
            <p className="mt-8 max-w-2xl leading-relaxed text-ink-soft">
              The calculation core is an isolated subsystem — 21,122 lines
              across 80 files — that turns raw astronomical positions into
              structured astrological readings.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "34-pattern rules engine",
                body: "26 yoga (positive-pattern) detectors + 8 dosha (risk-pattern) classifiers across 9 detector modules, each scored 0–100 with conflict-resolution and dedup logic between overlapping matches.",
              },
              {
                title: "20 divisional chart calculators",
                body: "Full D1–D60 divisional chart coverage.",
              },
              {
                title: "13-module Panchang engine",
                body: "A parallel-orchestrated daily astronomical almanac engine — the deepest rabbit hole in the build.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="neon-card h-full rounded-md p-6">
                  <p className="font-mono text-sm text-cyan">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Metrics footer */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading path="/metrics" title="The numbers" />
          <div className="mt-8 space-y-10">
            <StatGroup
              path="./build"
              stats={[
                { value: "761", label: "commits, solo" },
                { value: "~1 mo", label: "0 → live" },
                {
                  value: "5.5 mo",
                  label: "Jan 22 → Jul 11, 2026 — continuous shipping since launch",
                },
                { value: "80,768", label: "lines of code, 453 TS/TSX files" },
                { value: "55", label: "REST API endpoints" },
                { value: "143", label: "React components" },
                { value: "45", label: "page routes" },
                { value: "21", label: "database tables (Postgres/Supabase)" },
              ]}
            />
            <StatGroup
              path="./domain-engine"
              stats={[
                { value: "21,122", label: "lines across 80 files" },
                { value: "34", label: "rule patterns (26 yoga + 8 dosha) / 9 modules" },
                { value: "20", label: "divisional chart calculators (D1–D60)" },
                { value: "13", label: "module Panchang engine, parallel-orchestrated" },
              ]}
            />
            <div>
              <StatGroup
                path="./traffic (30-day trailing, Jun 11 – Jul 11, 2026)"
                stats={[
                  { value: "6,440", label: "unique visitors" },
                  { value: "85,060", label: "total requests" },
                  { value: "1 GB", label: "data served" },
                  { value: "17.15%", label: "edge cache hit rate" },
                ]}
              />
              <Reveal>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-faint">
                  Honest caveat on the 17.15% figure: optimization effort went
                  into app-layer caching (the Redis/Supabase 3-tier setup
                  above), not Cloudflare edge tuning. Daily unique visitors
                  trended upward across the window — roughly a 300/day
                  baseline in mid-June rising to 450–500+/day by early July.
                </p>
              </Reveal>
            </div>
            <StatGroup
              path="./payments"
              stats={[
                {
                  value: "PhonePe",
                  label: "production integration, live transactions",
                },
              ]}
            />
          </div>
        </section>

        {/* Skills */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading path="/skills" title="What this proved out" />
          <Reveal>
            <p className="mt-8 max-w-2xl leading-relaxed text-ink-soft">
              As a PM, this is where I did the engineering myself — not just
              wrote the spec — proving:
            </p>
          </Reveal>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "LLM integration & prompt caching",
              "Full-stack ownership (architecture → ops)",
              "Custom auth engineering (OAuth 2.0)",
              "Production reliability (caching, rate-limiting)",
              "0→1 product launch",
              "Domain / rules-engine design",
            ].map((t) => (
              <Reveal key={t}>
                <Link
                  href="/#skills"
                  className="metric inline-block rounded-full px-3 py-1 font-mono text-[11px] transition-opacity hover:opacity-75"
                >
                  {t}
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
