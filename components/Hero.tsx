import Reveal from "./Reveal";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:pt-36">
        <Reveal>
          <p className="mb-5 flex items-center gap-2.5 font-mono text-xs text-lime">
            <span className="status-dot" />
            available — open to senior PM roles
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.08] text-ink sm:text-6xl">
            Product management,{" "}
            <span className="glow-cyan text-cyan">built</span> the way I build
            things.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="scanline mt-6 h-px w-40" />
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            10 years shipping enterprise SaaS platforms — and a side habit of
            building the products myself, end to end, to stay technically
            sharp.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              className="rounded-sm bg-cyan px-5 py-2.5 font-mono text-[13px] font-medium text-void shadow-[0_0_24px_rgba(0,229,255,0.35)] transition-shadow hover:shadow-[0_0_36px_rgba(0,229,255,0.55)]"
            >
              view resume
            </a>
            <a
              href="#work"
              className="rounded-sm border border-line-bright px-5 py-2.5 font-mono text-[13px] text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              see the work ↓
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
