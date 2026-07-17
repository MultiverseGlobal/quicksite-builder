## Nexus Learning Hub — Refresh Plan

Refine the current site: tighten layouts, adopt the logo's color system, add motion (medium) plus a signature hero animation, wire up the real logo from the letterhead, and clean up routing/details. Team role changes will come in a follow-up round.

### 1. Brand + color system (from the logo)

Rewrite the design tokens in `src/styles.css` around the logo palette:

- Background: `#FFFFFF` (page) / `#F5EFE6` (warm ivory sections)
- Foreground / ink: `#0E0E10`
- Primary accent (brand orange): `#EE7A2C`
- Muted ink for body copy, hairline borders in a warm neutral
- Preserve shadcn `@theme inline` mapping; no hardcoded color utilities

Typography stays Playfair Display (headings) + Inter (body).

### 2. Real logo asset

- Extract the NL monogram from `NEXUS_LEARNING_LETTERHEAD_1_043715.pdf` page 1 and upload it via `lovable-assets` as `nexus-logo.png` (transparent).
- Replace the placeholder "N" tile in `SiteHeader` and `SiteFooter` with the real mark + wordmark "Nexus Learning Hub Ltd".
- Use it as the favicon.

### 3. Signature hero animation (Home)

- Kinetic hero: the NL monogram draws in (SVG stroke), the headline "Building Capacity. Driving Excellence." stagger-fades word by word, a soft orange radial glow pulses behind the mark.
- Built with `framer-motion` (install if not present). GPU-friendly, respects `prefers-reduced-motion`.

### 4. Motion pass (medium, site-wide)

- Section reveal on scroll (fade + 12px rise, once, staggered children) via a small `Reveal` wrapper using `framer-motion` + IntersectionObserver.
- Hover lifts on service cards and team cards (translate-y + shadow).
- Animated underline on nav links (already have `story-link` utility — extend for active state).
- Page transition: fade/slide between routes at the `<Outlet />` level.
- Contact form: field focus ring animates, submit button has a subtle press + loading spinner.

### 5. Tighten every page (same content, cleaner)

Keep density, improve hierarchy and breathing room:

- **Home**: shrink hero to one screen, three concise value pills, one services teaser row (icons + one-liners), one about strip, single CTA band. Remove duplicate CTAs.
- **About**: two-column intro (mission / vision), N.E.X.U.S values as a compact 5-up grid instead of long cards, Nexus Model diagram as a clean 4-node graphic (Government · Academia · Private Sector · Development Partners) connected to a central node.
- **Services**: 5 service cards in a 2-col grid with expandable "Key expertise" chips row below — no more wall of paragraphs.
- **Team**: leave copy/photos as-is for now (roles update comes next round). Just tighten the grid and card frame.
- **Contact**: two-column layout — details/map card on the left, form on the right. Trim helper copy.

### 6. Routing + polish

- Verify each route file's `createFileRoute` path matches its filename (Home, About, Services, Team, Contact — all already separate routes).
- Per-route `head()`: unique title + description + og:title/og:description already in place; audit and tighten copy.
- Add active-state styling to nav (bolder, orange underline).
- Mobile menu: animate open/close (height + fade).
- 404 page: match the new brand look.

### 7. Contact details

Pulled from the letterhead — surface these everywhere (footer + `/contact`):
- No. 7 Valentino Echesi Street, Lugbe, Abuja
- +234 803 492 8531, +234 806 421 3392
- nexuslearninghublimited@gmail.com

### 8. Team roles

Deferred per your note — I'll ship the visual refresh first, then you send the final Name — Role list and I'll swap them in.

### Out of scope this round

- Team role/name updates (next round)
- Blog / insights
- Email notifications on contact form submit
- New photography

### Technical notes

- Install: `framer-motion`.
- New file: `src/components/motion/Reveal.tsx` (scroll-reveal wrapper).
- New file: `src/components/site/HeroAnimated.tsx` (hero animation).
- Update: `src/styles.css` (palette), `SiteHeader.tsx`, `SiteFooter.tsx`, all 5 route files, `__root.tsx` (page transition + favicon + og updates).
- Add: `src/assets/nexus-logo.png.asset.json` via `lovable-assets`.
- Respect `prefers-reduced-motion` in every animation.
