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
      "Own product vision and roadmap for three partner-facing platforms — Logistics Portal, Field Tech Portal, Network Partner Portal — used by tech partners, ISPs, and logistics vendors across Akamai's global CDN and operations network.",
      "Drove CSAT up 30% and cut support tickets 40%+ by rebuilding workflows around real user research across all three platforms.",
      "Launched new ISP and Field Tech platform versions end-to-end — partnering with engineering, UX, and operations across multiple geographies, delivered on time without quality compromise.",
      "Established quarterly planning and OKR-aligned prioritization under SAFe; led cross-functional delivery across engineering, UX, operations, and senior leadership on parallel high-impact initiatives.",
      "Drove AI-adjacent roadmap initiatives and data-driven operational tooling to cut overhead and improve platform reliability at scale.",
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
      "Conceived, built, and launched Less Container Load (LCL) as a net-new revenue line — now on track to drive 30% of annual business revenue.",
      "Engineered intelligent lead-assignment automation that cut turnaround time 70% and improved lead-to-booking conversion 10%.",
      "Automated a multi-stakeholder notification engine — contextual updates to shippers, vendors, sales, and ops across the quote-to-booking lifecycle — eliminating manual follow-up.",
      "Improved user activation 10% and engagement 8% through a full UI/UX revamp focused on learnability and task efficiency.",
    ],
    metrics: ["30% of revenue", "−70% TAT", "+10% conversion", "+10% activation"],
  },
  {
    title: "Product Manager",
    company: "Vinculum Solutions",
    period: "Apr 2016 — Mar 2020",
    domain:
      "SaaS order & inventory management platform for eCommerce sellers",
    bullets: [
      "Launched 20+ integrations across 4 geographies — SEA, Middle East, India, US — enabling market entry and revenue growth.",
      "Redesigned pricing to include a monthly minimum commitment, growing MRR 18% and improving revenue predictability for enterprise accounts.",
      "Launched one-click Tally ERP 9 integration, driving a 10–20% MRR increase per client and becoming a key purchase driver in the India market.",
      "Rebuilt UI/UX, backend workflows, and SQL queries to cut page load from ~10s to ~2s and core workflow clicks by 40% — a major boost to agent throughput.",
      "Aligned business leaders and engineering stakeholders around a single roadmap, consistently hitting delivery timelines.",
    ],
    metrics: ["+18% MRR", "10s → 2s load", "Tally ERP driver"],
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
