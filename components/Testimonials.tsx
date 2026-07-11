import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const LINKEDIN_URL = "https://www.linkedin.com/in/aakashjain1992";

const TESTIMONIALS = [
  {
    name: "Maheshwari Kulkarni",
    role: "Software Engineer @ H&M Group",
    context: "worked with Aakash on the same team at Akamai · 2023",
    quote:
      "He is an outstanding product manager with a proven ability to turn ideas into successful products. Aakash combines strategic vision with strong leadership skills to drive product development and foster collaboration. He consistently delivers results on time.",
  },
  {
    name: "Sunny Khanduja",
    role: "Product Leader — E-commerce, SaaS & Supply Chain",
    context: "managed Aakash directly · 2021",
    quote:
      "You discuss anything with him, he will always try to think from a different angle and with such discussion we often created good user friendly solutions. He will always think ahead and plan to make things simple and intuitive for great user experience.",
  },
  {
    name: "Vinit Dubey",
    role: "Product Management — E-commerce & Supply Chain",
    context: "managed Aakash directly · 2017",
    quote:
      "Aakash is an amazing team member to have, super motivated and self propelled. When any task is assigned to Aakash the manager doesn't have to follow up — rather Aakash follows up with manager until the product has gone live.",
  },
  {
    name: "Pradeep Sharma",
    role: "Founding Member & Head of Technology, FreightMango",
    context: "senior to Aakash at FreightMango · 2022",
    quote:
      "A very fast learner, a key contributor and a very hard working team player. He is quite proactive in his approach and instrumental in problem solving.",
  },
  {
    name: "Priyankar Samal",
    role: "Group Product Manager — Fintech & ERP Platforms",
    context: "worked with Aakash on the same team · 2021",
    quote:
      "As product manager he takes complete ownership of the product and always ready for any task to give a better experience to customers. The UI/UX knowledge and eye for detailing is praise worthy. Last but not least he is always high on energy and passionate about the product.",
  },
];

export default function Testimonials() {
  return (
    <section id="recommendations" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading path="/recommendations" title="What colleagues say" />
      <Reveal>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-mono text-[11px] text-ink-faint transition-colors hover:text-cyan"
        >
          all verifiable on LinkedIn ↗
        </a>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 100}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <article className="neon-card h-full rounded-md p-6 sm:p-7">
              <p className="leading-relaxed text-ink-soft">
                <span aria-hidden className="mr-1 font-display text-cyan">
                  &ldquo;
                </span>
                {t.quote}
                <span aria-hidden className="ml-1 font-display text-cyan">
                  &rdquo;
                </span>
              </p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-display text-[15px] font-medium text-ink">
                  {t.name}
                </p>
                <p className="mt-0.5 text-sm text-ink-soft">{t.role}</p>
                <p className="mt-1 font-mono text-[11px] text-ink-faint">
                  {t.context}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
