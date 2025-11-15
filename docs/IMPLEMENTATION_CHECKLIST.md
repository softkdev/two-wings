# Two Wings – Implementation Checklist

## 1. Figma Audit
- [ ] Load frame `687:57794` (desktop layout) and document every section (node id, name, height).
- [ ] Capture supporting frames for zoomed assets (e.g., hero `687:57889`, project mockups `687:60474`+, process icons, crystal illustration).
- [ ] Confirm copy, typography scale, spacing, and breakpoints per section (mobile/tablet/desktop notes).

## 2. Asset Exports
- [ ] Hero illustration – node `687:57889`, PNG @2x → `public/assets/hero-3d.png`.
- [ ] Project mockups + phone overlays – nodes `687:60474`–`687:60532`, PNG/WebP @2x → `public/assets/projects/`.
- [ ] Why/Process icons & background blurs – export as SVG if vector, PNG if raster → `src/assets/icons/` or `public/assets/sections/`.
- [ ] Blue crystal illustration – export PNG @2x → `public/assets/about-crystal.png`.
- [ ] Checklist CTA artwork – export PNG/SVG → `public/assets/checklist.png`.
- [ ] Final CTA/contact modal icons – SVGs → `src/assets/icons/`.

## 3. Section Implementation Order
1. [ ] Replace hero placeholder with exported PNG + confirm badge icon.
2. [ ] Update `ProjectsSection` data/images to match all Figma cards.
3. [ ] Build `WhyChooseUsSection` (copy, icon rows, supporting image).
4. [ ] Build `WorkingProcessSection` (steps/timeline, desktop vs mobile layout).
5. [ ] Build `AboutUsSection` (crystal illustration, stats, copy).
6. [ ] Build `ChecklistSection` (CTA copy, checklist graphic, button/link behavior).
7. [ ] Build `FinalCTASection` + `ContactModal` (modal trigger, overlay, form/contact items).
8. [ ] Polish `Footer` content order + links per latest design.
9. [ ] Update `src/app/page.tsx` to render sections in exact Figma order.

## 4. Verification Per Commit
- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm dev` – manual visual check of affected section.
- [ ] Ensure all new assets resolve (no 404) and include descriptive alt text.
- [ ] After final section: `pnpm build` + smoke test `pnpm start`.
