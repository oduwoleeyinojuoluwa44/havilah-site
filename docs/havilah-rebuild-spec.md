# Havilah Development — Rebuild Spec
Companion document to `havilah-wireframe.md`. This file is the decision log and technical spec. The wireframe is the content/layout spec. An agent building this should read both before writing code.

---

## 0. Project Context

- Live site: https://havilahdevelopment.com/
- Current repo: https://github.com/oduwoleeyinojuoluwa44/havilah-site
- Current deploy: Vercel, auto-deploy on push to the connected GitHub repo (confirmed via `.vercel` in `.gitignore`)
- Current stack: two static HTML files (`index.html`, `inspection.html`), all CSS inline in one `<style>` block, all JS inline in one `<script>` block, GSAP + ScrollTrigger + CustomEase + Lenis loaded via CDN
- This rebuild happens on a **separate branch**, deployed as a **separate Vercel preview/project**, and is **not merged into the live branch**. The client will compare old vs. new side by side and choose. Do not touch or overwrite the current production deploy or its branch.

---

## 1. Decisions Log

| Area | Decision | Reasoning |
|---|---|---|
| Framework | **Next.js (React)**, not Astro, not plain HTML | Developer already knows React/Next fluently; velocity matters more than shaving framework overhead for a site this size |
| Hosting | **Vercel**, new/separate project or branch preview, no change to existing live deploy | Matches current setup; zero migration needed; enables side-by-side client comparison |
| Animation | **Motion** (formerly Framer Motion) only | Covers everything the new design needs: card hover/tap, modal open/close, filter transitions, `whileInView` reveals, auto-advancing carousels |
| GSAP / ScrollTrigger / CustomEase | **Removed entirely** | Their only real justification in the old build was pinned-scroll choreography, which is being removed as bad UX (see below). Nothing in the new design needs scroll-scrubbed timelines or element pinning. |
| Lenis (smooth scroll) | **Removed entirely** | Native scroll only. Smooth-scroll hijacking libraries commonly cause janky mobile scroll and hurt accessibility (screen readers, keyboard nav). No longer needed once pinning is gone. |
| Scroll-pinned sections | **Removed entirely, replaced with auto-advancing galleries/carousels** | Explicit UX call: pinning is bad UX for a property-discovery site where visitors want to scan and compare, not watch a scroll-driven show. Any section that was pinned in the old build (hero image sequence, Design/Build/Management statements) becomes a timed auto-advancing carousel with manual prev/next, not tied to scroll position. |
| Preloader | **Kept**, behavior not yet finalized | Client will specify desired behavior in a follow-up. Build the preloader as an isolated, swappable component so its animation logic can be replaced without touching layout/routing. Until specified, implement a minimal version: logo fade-in, fade-out on load, no scroll-lock hacks, respects `prefers-reduced-motion`. |
| Content | **No new copy, fields, or claims.** Only existing text/images from the live site and repo may be used. | Explicit client constraint — this is a structural/UX rebuild, not a copywriting or content-generation exercise. |
| Geography claim | Change "Building Across Nigeria" framing to "Where We Build" / Lagos-specific language | Current portfolio is entirely Lekki/Ikate/Agungi (all Lagos). "Nationwide" framing isn't supported by existing content — this is a factual correction using only what's already true of the existing projects, not new copy. |
| Testimonials | Deduplicate from 6 blocks (3 unique statements repeated twice) down to 3 unique blocks | Existing content only; removing exact duplication is not content invention |
| Property pages | **No dedicated per-property pages.** Use expandable card/modal on the properties grid instead. | Existing per-project content (one paragraph, one image, status/location) is too thin to justify a standalone page — confirmed against actual site content. Modal is the honest structure for the amount of real content available. |
| Inspection form | Add a "property of interest" field, pre-filled when reached via a project card's CTA, blank/general when reached via nav or final CTA | Functional change only, not a redesign of the form itself. Needs the field to exist in the current form or be added to it — check `inspection.html`'s current field set before assuming. |

---

## 2. Information Architecture

**Full canonical page order — see `havilah-wireframe.md` for section-by-section content and layout detail. Summary:**

1. Navigation (persistent — Properties / About / Management / Contact / Book an Inspection CTA button)
2. Hero (auto-crossfade carousel, existing 4 hero images, two CTAs: Explore Properties / Book an Inspection)
3. Currently Developing — Havilah Court 5 (moved up from its old position near the bottom)
4. Our Projects — filterable grid (All / Ongoing / Completed / Pipeline), all 9 existing projects, tap-to-expand modal per card
5. The Havilah Way (was 3 standalone statements — Design/Build/Management — now framed as a numbered explained sequence, delivered as an auto-advancing carousel, not scroll-pinned)
6. About Havilah (trimmed to first + last existing paragraph, rest behind "Read more")
7. More Than a Developer (was "Beyond Development" — moved up from near-bottom)
8. Where We Build (renamed from "Building Across Nigeria," geography corrected)
9. Homeowner Stories (was "Testimonials" — deduplicated to 3 unique entries)
10. Final CTA (unchanged from current — already effective)
11. Footer (unchanged)

Navigation link list is reduced from the current 7 items down to 5 — "Approach" and "Testimonials" are dropped as standalone nav items since their content now lives inside other sections (#5 and #9 above).

---

## 3. Content Inventory (source of truth — do not deviate)

### Projects (9 total, from current site)
| Project | Status | Location | Year | Image (current filename) |
|---|---|---|---|---|
| Koinonia | Completed | Agungi, Lagos | 2017 | `proj-koinonia.jpg` |
| Havilah Court 1 | Completed | Platinum Way, Ikate | 2018 | `proj-havilah-1.jpg` |
| Havilah Court 2 | Completed | The Nest Estate, Lekki | 2020 | `proj-havilah-2.jpg` |
| Havilah Court 3 | Completed | Jakande First Gate, Lekki | 2022 | `proj-havilah-3.jpg` |
| Havilah Court 4 | Completed | Jakande First Gate, Lekki | 2023 | `proj-havilah-4.jpg` |
| Homewood Residences | Completed | Lekki, Lagos | — | `completed-1.jpg` |
| Havilah Court 5 | Ongoing | Beach Resort Estate, Lekki | — | `proj-havilah-5.jpg` / `flag-01.jpg` |
| Havilah Court 5 Annex | Ongoing | Lekki, Lagos | — | `project-05.jpg` |
| Havilah Court 6 | Pipeline | Upcoming Development | — | `swap-01.jpg` (placeholder — currently reused from another section, flag to client that a dedicated image doesn't yet exist) |

Descriptions for each: pull verbatim from current `index.html` — do not paraphrase or shorten except where the wireframe explicitly calls for trimming (About section only).

### Testimonials (3 unique, currently duplicated to 6)
1. "Updates received during the building phase. Structured payment plan, flexibility and solution driven team when challenges arise." — Havilah Homeowner, June 2025
2. "Seeing that the house level was elevated and underground drainage put in place to mitigate issues around flood." — Havilah Homeowner, June 2025
3. "The personal touch in service delivery." — Havilah Homeowner, June 2025

### Track record numbers
09 Developments · 06 Completed · 02 Ongoing · 01 Pipeline

### Contact
Phone: 0816 264 9021
Email: hr.havilah@gmail.com
Location: Lekki, Lagos State, Nigeria

---

## 4. Technical Structure

### Suggested Next.js file layout
```
/app
  /layout.tsx              — root layout, fonts, global providers
  /page.tsx                — homepage, composed from section components below
  /inspection/page.tsx     — booking page (was inspection.html)
  /globals.css             — CSS reset + design tokens (see below)

/components
  /nav.tsx
  /footer.tsx
  /hero.tsx                 — auto-crossfade carousel, Motion
  /currently-developing.tsx
  /properties-grid.tsx      — filter bar + card grid
  /property-card.tsx
  /property-modal.tsx       — expandable detail view, Motion AnimatePresence
  /havilah-way.tsx           — auto-advancing carousel (Design/Build/Management)
  /about.tsx
  /more-than-developer.tsx
  /where-we-build.tsx
  /testimonials.tsx
  /final-cta.tsx
  /preloader.tsx             — isolated, swappable; minimal placeholder behavior until client specifies
  /inspection-form.tsx

/data
  /projects.ts               — the 9 projects as typed data (see table above)
  /testimonials.ts           — 3 entries

/public
  /assets/...                — existing images, carried over as-is (optimize via next/image, don't re-export/re-crop without a separate content pass)
```

### Design tokens (carry forward from current `:root` — do not redesign color/type unless separately requested)
```css
--ink: #0d0e11
--ink-soft: #191c21
--stone: #8e8b84
--paper: #f2f0ec
--paper-dim: #e7e4de
--gold: #d4a24c
--gold-deep: #85631e
--golden: #f2c250
--line: rgba(13,14,17,.2)
```
Fonts: Cormorant (headings), Jost (body), Great Vibes (script accents) — same Google Fonts imports as current site.

### Dependencies
- `next`, `react`, `react-dom`
- `motion` (npm package `motion`, formerly `framer-motion`)
- `next/image` for all imagery — no raw `<img>` tags
- No GSAP, no ScrollTrigger, no CustomEase, no Lenis

---

## 5. Explicit Non-Goals (do not do these unless separately instructed)

- Do not add a CMS (Decap, Sanity, or otherwise) — explicitly deferred, may come later
- Do not create dedicated per-property pages/routes
- Do not invent copy, testimonials, pricing, floor plans, or unit-availability data
- Do not merge this branch into the live/production branch or repo
- Do not modify the current production Vercel deployment
- Do not finalize preloader animation logic beyond a minimal placeholder — client will specify

---

## 6. Open Items (need client input before or during build)

1. **Preloader behavior** — client will describe separately; build the component to be easily swappable
2. **Havilah Court 6 image** — no dedicated image currently exists (placeholder is reused from another section); flag rather than silently reusing without a note
3. **Inspection form's current field set** — confirm what fields exist in `inspection.html` before adding "property of interest," rather than assuming
4. **Named testimonials** — current testimonials are all anonymous; strengthening this later with real names/photos would help credibility, but is out of scope for this rebuild (no new content)

---

## 7. Reference Documents

- `havilah-wireframe.md` — section-by-section content, copy, and layout detail (read alongside this file)
- Current live site: https://havilahdevelopment.com/
- Current repo: https://github.com/oduwoleeyinojuoluwa44/havilah-site
