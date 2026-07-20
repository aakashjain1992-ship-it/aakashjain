import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const CERTS = [
  "Certified SAFe® 5 Product Owner / Product Manager — Scaled Agile, Inc.",
  "Diploma in Product Management — Pragmatic Leaders (2020–21)",
  "PGDM, International Business (Marketing) — BIMTECH, Greater Noida (2014–16) · exchange at Kozminski University, Warsaw",
  "B.Tech, Mechanical Engineering — Sharda University (2009–13)",
];

// Stylized (schematic, not geographically precise) continent silhouettes
// in a 200x100 equirectangular viewBox — used as a clip-path so the dot
// grid only renders over landmass and reads as a recognizable world map.
const CONTINENTS = [
  "25,18 48,14 58,22 56,32 46,40 36,44 26,40 16,30 18,22", // North America
  "48,48 60,46 66,58 62,78 52,84 44,68 45,54", // South America
  "94,16 108,13 113,20 108,28 98,26 93,20", // Europe
  "96,30 116,28 122,45 114,72 100,76 90,55 92,40", // Africa
  "110,12 135,8 165,14 175,28 168,42 148,55 128,48 113,32 108,20", // Asia
  "153,62 176,60 182,70 172,80 156,77 150,68", // Australia
];

// Pin positions matched to the continent shapes above
const PINS = [
  { x: 108, y: 18, label: "Scandinavia" },
  { x: 100, y: 22, label: "Warsaw" },
  { x: 146, y: 33, label: "Himalayas" },
  { x: 141, y: 40, label: "India" },
  { x: 156, y: 43, label: "Southeast Asia" },
];

const TRIPS = [
  { stat: "3,300 km", label: "self-driven road trip to Ladakh and back" },
  { stat: "95 km", label: "high-altitude trek across Sikkim" },
  { stat: "Delhi → Kathmandu", label: "self-driven through Nepal" },
  { stat: "5 months", label: "lived in Warsaw, Poland, on academic exchange" },
  { stat: "13 countries", label: "explored, and counting" },
];

const MENTORING = [
  {
    stat: "resume + interview prep",
    label: "helped my cousin land her first job",
  },
  {
    stat: "BIMTECH alumni portal",
    label: "career guidance for students who reach out for mentorship",
  },
  {
    stat: "5 people",
    label: "casually mentoring toward product management roles",
  },
];

function WorldDots() {
  return (
    <svg
      viewBox="0 0 200 100"
      className="h-auto w-full max-w-md"
      aria-hidden
      role="presentation"
    >
      <defs>
        <clipPath id="landmass">
          {CONTINENTS.map((points) => (
            <polygon key={points} points={points} />
          ))}
        </clipPath>
      </defs>

      <g clipPath="url(#landmass)">
        {Array.from({ length: 22 }).map((_, row) =>
          Array.from({ length: 44 }).map((__, col) => {
            const x = col * 4.5 + (row % 2 === 0 ? 0 : 2.25);
            const y = row * 4.5;
            return (
              <circle
                key={`${row}-${col}`}
                cx={x}
                cy={y}
                r={0.7}
                fill="rgba(0,229,255,0.3)"
              />
            );
          })
        )}
      </g>

      {PINS.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r={1.5} fill="var(--magenta)" />
          <circle
            cx={p.x}
            cy={p.y}
            r={3.2}
            fill="none"
            stroke="rgba(255,61,242,0.35)"
            strokeWidth={0.5}
          />
        </g>
      ))}
    </svg>
  );
}

export default function Closing() {
  return (
    <>
      {/* Certifications & education — compact row */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="path-label font-mono text-xs">/credentials</p>
          <ul className="mt-5 grid gap-x-10 gap-y-2 text-sm text-ink-soft sm:grid-cols-2">
            {CERTS.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Beyond work */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="path-label font-mono text-xs">/beyond-work</p>
              <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                When the roadmap allows, I go looking for the next mountain
                pass.
              </p>
              <ul className="mt-5 max-w-md space-y-2.5">
                {TRIPS.map((t) => (
                  <li key={t.label} className="flex gap-3 text-sm">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    <span>
                      <span className="font-mono text-cyan">{t.stat}</span>{" "}
                      <span className="text-ink-soft">{t.label}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                And when someone reaches out for guidance, I try to pay it
                forward:
              </p>
              <ul className="mt-3 max-w-md space-y-2.5">
                {MENTORING.map((m) => (
                  <li key={m.label} className="flex gap-3 text-sm">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    <span>
                      <span className="font-mono text-cyan">{m.stat}</span>{" "}
                      <span className="text-ink-soft">{m.label}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <WorldDots />
          </div>
        </Reveal>
      </section>

      {/* Contact / footer */}
      <footer
        id="contact"
        className="border-t border-line bg-[rgba(10,13,24,0.6)]"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <p className="path-label font-mono text-xs">/contact</p>
            <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
              Let&apos;s build something that ships.
            </h2>
            <div className="mt-7">
              <ContactForm />
            </div>
            <a
              href="https://www.linkedin.com/in/aakashjain1992"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-sm border border-line-bright px-5 py-2.5 font-mono text-[13px] text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              linkedin ↗
            </a>
            <p className="mt-12 font-mono text-[11px] text-ink-faint">
              © {new Date().getFullYear()} Aakash Jain · designed as a system,
              built by hand
            </p>
          </Reveal>
        </div>
      </footer>
    </>
  );
}
