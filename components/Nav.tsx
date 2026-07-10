"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "work", label: "work" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = [...LINKS.map((l) => l.id), "top"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            setActive(entry.target.id === "top" ? "" : entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-[rgba(6,8,15,0.82)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="whitespace-nowrap font-display text-[15px] font-medium text-ink"
        >
          <span className="sm:hidden">AJ</span>
          <span className="hidden sm:inline">Aakash Jain</span>
          <span className="glow-cyan text-cyan">.</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-7">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-active={active === l.id}
              className="nav-link font-mono text-[11px] text-ink-soft transition-colors hover:text-ink sm:text-[12px]"
            >
              /{l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
