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
    ],
  },
  {
    name: "ai-and-data",
    items: [
      "Intelligent Automation",
      "Rule-based Decisioning",
      "AI-adjacent Roadmaps",
      "MySQL",
      "PostgreSQL",
      "Google Analytics",
      "FullStory",
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
      "Figma",
      "Adobe XD",
      "User Research",
      "Usability Testing",
    ],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
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
