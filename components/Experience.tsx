import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ROLES = [
  {
    title: "Senior Technical Product Manager",
    company: "Akamai Technologies",
    period: "Aug 2021 — present",
    domain:
      "Core internal logistics tooling — spanning on-ground field support and ISP traffic dashboards",
    bullets: [
      "Led product vision and roadmap for three partner-facing platforms (Logistics Portal, Field Tech Portal, Network Partner Portal) serving global tech partners, ISPs, and logistics vendors.",
      "Improved user satisfaction by 30% and reduced support tickets by 40%+ through structured research and workflow automation.",
    ],
    metrics: ["+30% CSAT", "−40% tickets"],
  },
  {
    title: "Product Owner",
    company: "Jiffyship (Freight Mango)",
    period: "Mar 2020 — Jul 2021",
    domain:
      "Marketplace model for ocean freight — built across customer, vendor, and internal-ops surfaces",
    bullets: [
      "Conceived and launched the “Less Container Load” (LCL) feature as a net-new offering — on track to contribute 30% of annual business revenue.",
      "Designed intelligent workflow automation for lead assignment, reducing turnaround time by 70%.",
    ],
    metrics: ["30% of revenue", "−70% TAT"],
  },
  {
    title: "Product Manager",
    company: "Vinculum Solutions",
    period: "Apr 2016 — Mar 2020",
    domain:
      "SaaS order & inventory management platform for eCommerce sellers",
    bullets: [
      "Launched 20+ integrations across 4 geographies (SEA, Middle East, India, US).",
      "Increased MRR by 18% through pricing redesign; reduced page load time from ~10s to ~2s through UI/UX and backend workflow redesign.",
    ],
    metrics: ["+18% MRR", "10s → 2s load"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading path="/experience" title="Where I've shipped" />
      <div className="mt-10 space-y-4">
        {ROLES.map((r, i) => (
          <Reveal key={r.company} delay={i * 100}>
            <article className="neon-card rounded-md p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-ink">
                  {r.title}{" "}
                  <span className="text-ink-soft">— {r.company}</span>
                </h3>
                <span className="font-mono text-xs text-ink-faint">
                  {r.period}
                </span>
              </div>
              <p className="mt-2 text-sm italic text-ink-faint">{r.domain}</p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-soft">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {r.metrics.map((m) => (
                  <span
                    key={m}
                    className="metric rounded-full px-3 py-1 font-mono text-[11px]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
