import type { Metadata } from "next";
import Link from "next/link";
import BackgroundFX from "@/components/BackgroundFX";
import Logo from "@/components/Logo";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const title = "Netarch 2.0 SQL Console — Case Study — Aakash Jain";
const description =
  "Query-module UI for Akamai's Netarch portal modernization: prototyped in Figma Make, refined on user feedback, then integrated end-to-end with Claude Code — shipping roughly a quarter's worth of planned work in about a month.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const PROCESS = [
  {
    step: "01",
    title: "Prototype — Figma Make (solo)",
    body: "Prototyped the full query-module UI: editor, results grid, saved-work panel, toolbar, navigation, and three modal flows (save query, impersonate user, email bookmark scheduling).",
  },
  {
    step: "02",
    title: "User feedback → design iteration",
    body: "Put the interactive prototype in front of users before writing any code, gathered feedback, and iterated the design against it — so the build phase started from a validated design, not a guess.",
  },
  {
    step: "03",
    title: "Integrate — end-to-end with Claude Code",
    body: "Translated the validated design into production Next.js/React/TypeScript, June 2026 — a container/flow layer, 3 modals, 12 reusable UI primitives, and 4 custom hooks (useColumnResize, useQueryTimer, useResultPanels, useThemeMode), all on a token-based theming architecture (CSS custom properties, light/dark mode). Planned for a full quarter; most of it landed within about a month.",
  },
];

const ARCHITECTURE = [
  {
    title: "Container / flow",
    body: "QueryModule, QueryEditor, TopNav, SavedWork, SqlHighlight, ResultWidget, ResultTabStrip, ResultWindowOverlay, Footer.",
  },
  {
    title: "Modals",
    body: "SaveQueryModal, ImpersonateModal, EmailBookmarkModal.",
  },
  {
    title: "12 reusable UI primitives",
    body: "Breadcrumb, Buttons, Modal, Pagination, PopoverMenu, SearchableSelect, Toggle, VariablePanel, QueryToolbar, SaveToast, LintErrorPanel, ImpersonationBanner.",
  },
  {
    title: "4 custom hooks",
    body: "useColumnResize, useQueryTimer, useResultPanels, useThemeMode — column resize, query execution timing, multi-panel result state, theme switching.",
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

export default function NetarchCaseStudy() {
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
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pt-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="cyan">at Akamai</Badge>
              <Badge tone="faint">internal tool</Badge>
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
              Netarch 2.0 SQL Console
            </h1>
            <div className="scanline mt-5 h-px w-40" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Query-module UI for Akamai&apos;s Netarch portal modernization —
              migrating the legacy PHP/Zend Framework 2 SQL console to a
              FastAPI + Next.js 16 stack. Drove the full migration scope (PRD
              + 16 JIRA-ready feature docs, data-verified) with this module as
              the flagship interactive surface: editor, results grid,
              saved-work panel, and three modal workflows.
            </p>
            <p className="mt-4 max-w-2xl font-mono text-sm text-lime">
              Prototype → user feedback → Claude Code integration: planned
              for a full quarter, most of it shipped within a month.
            </p>
          </Reveal>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading
            path="/process"
            title="Prototype → feedback → integrate"
          />
          <div className="mt-8 space-y-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="neon-card rounded-md p-6 sm:p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-cyan">
                      {p.step}
                    </span>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading
            path="/architecture"
            title="~30 files, four clean layers"
          />
          <Reveal>
            <p className="mt-8 max-w-2xl leading-relaxed text-ink-soft">
              Organized as container → modals → hooks → ui-primitives →
              utils, so the reusable pieces stayed decoupled from the one
              screen they were built for.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {ARCHITECTURE.map((item) => (
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

        {/* Metrics */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading path="/metrics" title="The numbers" />
          <div className="mt-8 space-y-10">
            <StatGroup
              path="./speed"
              stats={[
                {
                  value: "1 quarter → 1 mo",
                  label: "planned timeline vs. actual — most of the work shipped within a month",
                },
              ]}
            />
            <StatGroup
              path="./build"
              stats={[
                { value: "~30", label: "component/hook/util files" },
                { value: "12", label: "reusable UI primitives" },
                { value: "4", label: "custom hooks" },
                { value: "3", label: "modal flows" },
              ]}
            />
          </div>
        </section>

        {/* Skills */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading path="/skills" title="What this proved out" />
          <Reveal>
            <p className="mt-8 max-w-2xl leading-relaxed text-ink-soft">
              As a PM, this is where I did the design and integration myself
              — not just wrote the spec — proving:
            </p>
          </Reveal>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Design-to-code pipeline",
              "Design systems & token-based theming",
              "AI-augmented workflow (Claude Code)",
              "Component architecture & custom hooks",
              "Data-informed UX",
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
