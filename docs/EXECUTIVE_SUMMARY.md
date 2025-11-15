# Two Wings – Executive Summary

## Product Goal
- **Source design**: Figma home page frame `Two Wings / Frame 1984080878` (`node-id=687:57794`).
- **Key variations to match**: hero illustration (`687:57889`), multi-device project mockups (`687:60478` – `687:60483`), mid-page education/why sections, working process timeline, about/crystal block, checklist CTA, final CTA + contact modal, footer.
- **Delivery requirements**: Next.js 16 App Router, TypeScript strict, Tailwind CSS v4 tokens defined in `src/app/globals.css`, SVGs imported by SVGR, responsive mobile-first layout.

## Tech Stack Snapshot
- Next.js 16 (`app/` router) + React 19 RC APIs disabled.
- TypeScript strict mode (configured in `tsconfig.json`).
- Tailwind CSS v4 via `@tailwind` + `@theme` tokens in `src/app/globals.css`.
- SVG icons handled through webpack/SVGR config (`next.config.ts`).
- Assets: all raster files should live under `public/assets`, SVG icons under `src/assets/icons`.

## Current Implementation Status (branch `feature/figma-full-fix`)
- Containers implemented: `HeroSection`, `StatsBar`, `ServicesSection`, `ProjectsSection` (2 cards only), `CTASection`.
- Layouts implemented: `Navigation`, `Footer`, `NavLink`.
- UI kit components: Button, Badge, IconWrapper, Container, Logo, StatItem, ServiceCard, ProjectCard, ScrollToTop.
- **Figma coverage**: only ~40% of the full frame. Major mid/late-page sections are missing entirely.
- **Asset gaps**:
  - `hero-3d.png` placeholder (needs export from node `687:57889` at 2x ~1200×1316, save to `public/assets/hero-3d.png`).
  - Projects require multi-device mockups (nodes `687:60478`–`687:60483`) for all cards; currently only two PNGs exist.
  - Upcoming sections need illustrations (blue crystal, checklist graphic, process icons, etc.).

## Immediate Priorities
1. **Figma audit** – enumerate every section + asset from the frame to remove assumptions.
2. **Asset export plan** – list node IDs, formats, destinations (`public/assets/...` or `src/assets/icons/...`).
3. **Implement missing containers** following Figma order:
   - Why Choose Us / “Why Go Digital” section.
   - Working Process timeline/cards.
   - About Us block with crystal illustration + metrics.
   - Checklist CTA (form or link) with supporting graphic.
   - Final CTA + contact modal interactions.
   - Footer polish to align with latest copy.
4. **Replace placeholders** – hero illustration + all project images must reflect the design.
5. **Verification** – run `pnpm lint`, `pnpm typecheck`, `pnpm build`, and visual QA after each major commit.

Stay focused on the real Figma frame and update this document only when scope changes.
