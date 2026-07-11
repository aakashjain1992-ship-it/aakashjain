import Image from "next/image";
import Reveal from "./Reveal";
import { getYearsOfExperience } from "@/lib/experience";

export default function Hero() {
  const years = getYearsOfExperience();
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pb-24 pt-28 sm:pt-36 md:flex-row md:items-center md:justify-between md:gap-8">
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
              {years} years shipping enterprise SaaS platforms — and a side
              habit of building the products myself, end to end, to stay
              technically sharp. I&apos;ve led platforms used across
              Akamai&apos;s global partner network, and solo-built a
              production app from architecture to launch. When I sit across
              from engineering on a tradeoff, I&apos;ve usually already made
              that tradeoff myself.
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
        <Reveal delay={200} className="hidden shrink-0 md:block">
          <div className="relative aspect-[4/5] w-80 overflow-hidden rounded-md">
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
