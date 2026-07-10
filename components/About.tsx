import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "10", label: "years in product" },
  {
    value: "10+",
    label:
      "Build and ship — 6 major platforms (career + side project), plus many small tools",
  },
  { value: "40%+", label: "support ticket reduction" },
];

const DOMAINS = [
  {
    company: "Vinculum",
    domain: "SaaS order & inventory management for eCommerce sellers",
  },
  {
    company: "Jiffyship",
    domain: "freight marketplace across customer, vendor, and ops surfaces",
  },
  {
    company: "Akamai",
    domain: "internal logistics and field-support platforms for the partner network",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading path="/about" title="Systems thinker, hands-on builder" />
      <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <Reveal delay={100}>
          <div className="space-y-5 leading-relaxed text-ink-soft">
            <p>
              I started in mechanical engineering, picked up a PGDM, and found
              my way into product — across three very different domains:
            </p>
            <ul className="space-y-2 text-[15px]">
              {DOMAINS.map((d) => (
                <li key={d.company} className="flex gap-3">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  <span>
                    <span className="font-mono text-cyan">{d.company}</span>
                    <span className="text-ink-faint"> — </span>
                    {d.domain}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              The common thread has been the same throughout: taking messy,
              multi-stakeholder workflows and turning them into systems that
              measurably work better.
            </p>
            <p>
              The other thread: I build my own products — full stack, end to
              end. Not to become an engineer, but because owning architecture
              and AI-integration decisions firsthand makes me a sharper PM.
              When I discuss trade-offs with engineering teams, I&apos;ve
              usually felt those trade-offs myself.
            </p>
          </div>
        </Reveal>
        <div className="grid content-start gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={150 + i * 100}>
              <div className="neon-card rounded-md px-5 py-4">
                <div className="font-mono text-2xl font-medium text-cyan">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-ink-soft">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
