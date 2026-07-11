# Netarch 2.0 SQL Console Case Study — Design

## Goal
Add a second Akamai case study to the portfolio, replacing the terser
"Design-to-code workflow" card with a card + full write-up for the
Netarch 2.0 SQL Console query-module UI, matching the depth/pattern
already established by the Astrotattwa case study (`/work/astrotattwa`).

## Scope decisions (from user)
- Full case study page (`/work/netarch`) + summary card, not card-only.
- The new card **replaces** the existing "Design-to-code workflow" card
  in `Work.tsx` (same underlying Akamai work, this is the fuller version).
- No invented specifics for performance/responsiveness/reuse-beyond-original-screen
  — those were flagged as open placeholders by the user's source notes and
  are being deliberately omitted rather than guessed. Only verified facts
  (accessibility fix, file/component counts, architecture) are used.
- No public URL for this project (internal Akamai tool) — no "view live" link.

## Card (`components/Work.tsx`)
Replace the "Design-to-code workflow" article with:
- Title: "Netarch 2.0 — Query Module UI", `Badge tone="cyan"` "at Akamai"
- One paragraph: Figma Make design → Copilot build → Claude-paired
  optimization, headline the accessibility contrast fix
- "full case study →" link to `/work/netarch`
- Small metric-chip row: `~30 files`, `12 reusable primitives`,
  `1.1:1 → 1.75:1 contrast`

## Page (`app/work/netarch/page.tsx`)
Mirrors `app/work/astrotattwa/page.tsx` structure and visual system
(BackgroundFX, Logo header, Reveal, SectionHeading, neon-card, StatGroup).

1. **Hero** — title, badges (`internal tool · Akamai`, no live-link CTA),
   intro paragraph (migration context: legacy PHP/Zend → FastAPI + Next.js 16,
   query-module as flagship surface)
2. **`/process`** — 3 phases as short blocks: Design (Figma Make, solo) →
   Build (Copilot, Next.js/React/TypeScript, June 2026, file/component
   breakdown: container/flow, modals, 12 UI primitives, 4 custom hooks,
   token-based theming) → Optimize (Claude-paired)
3. **`/the-fix`** — accessibility deep-dive as a decision-card: user testing
   found 2/4 testers couldn't see grid lines; root cause `--nc-border-faint`
   token at ~1.1:1 contrast (WCAG floor is 3:1 for UI boundaries); fixed at
   token layer to ~1.75:1 (`#c3cad6` light / `#4c4844` dark); propagated
   automatically to 5 other components (SavedWork, QueryToolbar,
   PopoverMenu, SearchableSelect, ApiTokens) — design-system payoff angle
4. **`/metrics`** — StatGroups: `./build` (~30 files, 12 primitives, 4 hooks,
   3 modals), `./accessibility` (1.1:1 → 1.75:1, 1 fix → 6 components),
   `./scale` (845 email-scheduled reports, 57k all-time saved bookmarks —
   context for why reusability mattered)
5. Closing skills tag row (design-to-code pipeline, design systems/theming,
   accessibility engineering, AI-augmented workflow, component architecture,
   data-informed UX) — no separate CTA section, matches Astrotattwa ending

## Out of scope
- No changes to Astrotattwa page or other cards (City Watch, Smaller builds).
- No git commit of this spec or the implementation — user has other
  uncommitted work in progress in this repo; leaving commit decisions to them.

## Revision (post-implementation review)
User feedback after the first pass:
- The accessibility/contrast-token fix was too small to headline — dropped
  entirely. No `/the-fix` section, no `./accessibility` stat group, no
  "Accessibility engineering" skill tag, no mention in the card or process
  steps.
- Build/integration was done end-to-end with Claude Code, not GitHub
  Copilot — all Copilot references replaced.
- Net effect: `/process` collapsed from 3 phases to 2 (Design → Build);
  no separate "Optimize" phase since its one concrete example was removed
  and there were no other verified optimize-phase specifics on record.

## Revision 2 (real headline story)
The actual case-study spine is a speed story, not an accessibility one:
- 3-phase `/process`: Prototype (Figma Make, solo) → User feedback (shown
  to users before any code was written, design iterated against it) →
  Integrate (Claude Code, end-to-end).
- Headline stat: integration work that would normally take ~1 month landed
  in 2 weeks. Surfaced in three places — a lime highlight tag on the
  Work.tsx card (matching the Astrotattwa card's lime-tag pattern), a lime
  callout line in the page hero, and a single-stat `./speed` StatGroup in
  `/metrics` (single-stat StatGroups are an existing pattern — see
  Astrotattwa's `./payments` group).
- Card copy and metadata description rewritten around prototype → feedback
  → integration, not design-to-code-with-Copilot.
