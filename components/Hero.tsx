import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-28 sm:pt-36 md:flex-row md:items-center md:justify-between md:gap-8">
        <div>
          <Reveal delay={100}>
            <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.08] text-ink sm:text-6xl">
              Product management,{" "}
              <span className="glow-cyan text-cyan">built</span> the way I
              build things.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="scanline mt-6 h-px w-40" />
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              10 years shipping enterprise SaaS platforms — and a side habit
              of building the products myself, end to end, to stay
              technically sharp.
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
        <Reveal delay={200} className="shrink-0">
          <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-md sm:w-80">
            <Image
              src="/image.png"
              alt="Aakash Jain"
              fill
              sizes="320px"
              priority
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </header>
  );
}
