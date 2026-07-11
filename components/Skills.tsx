import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    name: "product",
    items: [
      "Platform PM",
      "B2B SaaS",
      "Product Strategy & Roadmapping",
      "Stakeholder Management",
      "GTM",
      "Pricing",
      "0→1 Product Launch",
      "OKRs & Quarterly Planning",
      "Cross-functional Leadership",
      "Partner & Vendor Management",
      "Marketplace Products",
      "Global Rollouts",
      "AI-adjacent Roadmaps",
    ],
  },
  {
    name: "ai-and-data",
    items: [
      "Intelligent Automation",
      "Rule-based Decisioning",
      "LLM Integration",
      "Prompt Caching",
      "Claude Code",
      "Codex",
      "Next.js",
      "Supabase",
      "MySQL",
      "PostgreSQL",
      "Google Analytics",
      "FullStory",
      "Full-stack Ownership",
      "Auth Engineering",
      "Production Reliability",
      "Rules-engine Design",
    ],
  },
  {
    name: "delivery",
    items: [
      "Agile",
      "SAFe",
      "Sprint Planning",
      "Backlog Management",
      "Jira",
      "Asana",
      "PRDs",
      "Release Notes",
    ],
  },
  {
    name: "design",
    items: [
      "UX Wireframing",
      "Prototyping",
      "Design Systems",
      "Design-to-Code",
      "Figma",
      "Adobe XD",
      "User Research",
      "Usability Testing",
      "Component Architecture",
      "Token-based Theming",
      "Data-informed UX",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading path="/skills" title="The stack" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {GROUPS.map((g, i) => (
          <Reveal key={g.name} delay={i * 80} className="h-full">
            <div className="h-full rounded-md border border-line bg-surface p-6">
              <p className="font-mono text-xs text-cyan">
                ./{g.name}
                <span className="ml-2 text-ink-faint">
                  [{g.items.length}]
                </span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-line-bright bg-void-2 px-2.5 py-1.5 font-mono text-[12px] leading-none text-ink-soft transition-colors duration-150 hover:border-cyan hover:text-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
