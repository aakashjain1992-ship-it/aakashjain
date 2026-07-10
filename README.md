# Aakash Jain — Portfolio

Dark-neon "night schematic" portfolio, built per `../PORTFOLIO_BRIEF.md` with a
dark theme + neon accent + animated background variation of the brief's
blueprint aesthetic.

## Run

```bash
npm install   # already done if node_modules exists
npm run dev   # http://localhost:3000
npm run build # production build
```

## Design system

- Background `#06080f`, surfaces `#0d1120`, hairlines `#1c2336`
- Neon accents: cyan `#00e5ff` (primary), magenta `#ff3df2` (sparing),
  lime `#b6ff2e` (status only)
- Fonts: Space Grotesk (display) · IBM Plex Sans (body) · JetBrains Mono (labels)
- Animated background: canvas node/connector network (`components/BackgroundFX.tsx`),
  mouse-reactive, honors `prefers-reduced-motion`

## Deployment

Deployed via Vercel (connected to this repo's `main` branch). Set
`NEXT_PUBLIC_SITE_URL` in Vercel's project env vars to the live domain once
one is attached, so Open Graph/Twitter image URLs resolve correctly.

## TODO before publishing

- [x] Resume PDF at `public/resume.pdf`
- [x] Confirm the LinkedIn URL in `components/Closing.tsx`
- [ ] City Watch card is a placeholder by design — do not add ownership details
      until individual contribution is confirmed (see brief, Section 6)
- [ ] Optional: Astrotattwa screenshots for the flagship card
