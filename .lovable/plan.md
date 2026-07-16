## Nexus Learning Hub — Website Plan

Build a polished, multi-page marketing website for Nexus Learning Hub using content extracted from the uploaded company profile, with dedicated routes and a working contact form.

### Pages (separate routes for SEO)

- `/` — Home: hero ("Building Capacity. Driving Excellence."), tagline, brief about, service highlights, Nexus Model teaser, CTA to Contact.
- `/about` — About: full About Us copy, Vision, Mission, N.E.X.U.S core values, "Why Partner With Us", the Nexus Model diagram (Government + Academia + Private Sector + Development Partners).
- `/services` — Services: all 5 core services with detail cards + Key Expertise Areas.
- `/team` — Team: leadership grid using the uploaded photos:
  - Mr Dipo Abgoola — Director, Programme
  - Kaspa Abah (Ph.D) — Lead Consultant
  - Mus'ab Ibrahim — Director, Policy and Strategy
  - Fourth portrait (blue kaftan) — listed as team member; I'll leave name/title editable placeholders for you to fill in.
  Also a brief note about Associate Consultants pool (former BPP Directors, professors, etc.).
- `/contact` — Contact: address, phone, email, embedded map link, and a working contact form.

### Shared chrome (in `__root.tsx`)

- Sticky header with Nexus wordmark logo + nav (Home, About, Services, Team, Contact) and a "Get in touch" CTA.
- Footer with contact details, tagline, quick links.
- Per-route `head()` metadata (unique title / description / og tags per page).

### Design direction

- Professional, institutional consulting aesthetic — think World Bank / BPP / policy-think-tank sites, not startup-y.
- Palette: deep navy primary + gold/amber accent + warm neutral background (evokes Nigerian government/academic partnership feel).
- Typography: serif display headings (authority) paired with a clean sans body (Playfair Display + Inter or similar).
- Composition: generous whitespace, subtle dividers, restrained iconography for services, elegant team cards.
- All colors as HSL design tokens in `src/styles.css` — no hardcoded Tailwind color utilities in components.

### Assets

- Upload the 4 team portraits via `lovable-assets` (CDN pointers in `src/assets/`), not committed binaries.
- Extract/upload the Nexus Learning Hub logo from the parsed DOCX for the header.

### Contact form (requires Lovable Cloud)

- Enable Lovable Cloud.
- Migration creates `public.contact_submissions` (id, name, email, phone, organization, subject, message, created_at) with GRANTs, RLS enabled, and an `anon` INSERT-only policy (public can submit; only admins/service_role can read).
- Client validates with Zod (name/email/message required, max lengths) before insert via the browser Supabase client.
- Toast confirmation on success; graceful error handling.
- (Email notification to your inbox is out of scope for v1 — submissions will land in the database. Say the word and I'll add a Resend-powered notification later.)

### Technical details

- TanStack Start file-based routes under `src/routes/` (`index.tsx`, `about.tsx`, `services.tsx`, `team.tsx`, `contact.tsx`).
- Replace the placeholder `src/routes/index.tsx`.
- Update `__root.tsx` head() with real title/description/og for the site.
- shadcn/ui components for buttons, cards, form inputs, toast.
- Fully responsive (mobile-first).
- Real footer + header on every page via `__root.tsx` around `<Outlet />`.

### Out of scope for v1 (say the word to add)

- Blog / Insights section.
- Email notification when someone submits the contact form.
- Admin dashboard to view submissions in-app (they'll be visible in the Cloud database view).
- CMS / editable content — copy is hardcoded and I'll edit it on request.
