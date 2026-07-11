"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "work", label: "work" },
  { id: "contact", label: "contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      {open ? (
        <path
          d="M4 4L14 14M14 4L4 14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M3 5H15M3 9H15M3 13H15"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu whenever the active section changes (i.e. a link was followed)
  useEffect(() => {
    setMenuOpen(false);
  }, [active]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-line-bright bg-[rgba(6,8,15,0.92)] shadow-[0_1px_0_0_rgba(0,229,255,0.15),0_8px_24px_-12px_rgba(0,0,0,0.6)]"
          : "border-transparent bg-[rgba(6,8,15,0.55)]"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 whitespace-nowrap font-display text-[15px] font-medium text-ink"
        >
          <Logo />
          <span className="sm:hidden">AJ</span>
          <span className="hidden sm:inline">Aakash Jain</span>
          <span className="glow-cyan text-cyan">.</span>
        </a>

        <div className="hidden items-center gap-7 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-active={active === l.id}
              className="nav-link font-mono text-[12px] text-ink-soft transition-colors hover:text-ink"
            >
              /{l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-cyan/40 bg-[rgba(0,229,255,0.08)] px-3 py-1.5 font-mono text-[11px] text-cyan transition-colors hover:bg-[rgba(0,229,255,0.16)]"
          >
            resume
          </a>
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-cyan/40 bg-[rgba(0,229,255,0.08)] px-2.5 py-1.5 font-mono text-[11px] text-cyan transition-colors hover:bg-[rgba(0,229,255,0.16)]"
          >
            resume
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-8 w-8 items-center justify-center text-ink-soft transition-colors hover:text-cyan"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-[rgba(6,8,15,0.97)] px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-active={active === l.id}
                className="nav-link font-mono text-sm text-ink-soft transition-colors hover:text-ink"
              >
                /{l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
