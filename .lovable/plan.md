## Final polish before ship

A short, focused pass to finish the site.

### 1. SEO plumbing

- Add `src/routes/sitemap[.]xml.ts` server route listing `/`, `/about`, `/services`, `/team`, `/contact`.
- Add `public/robots.txt` with `Allow: /` and a `Sitemap:` directive (once you confirm the production URL — Lovable subdomain vs custom domain).
- Add `<link rel="canonical">` per route in each route's `head()`.
- Add JSON-LD `Organization` schema on the home route (name, logo, address from the letterhead, phones, email, sameAs socials if any).
- Tighten each page's title/description to stay under 60/160 chars.

### 2. Images "deploy-ready"

Note: the site runs on TanStack Start on Cloudflare Workers via Lovable, not Vercel — but the same principles apply. Right now the team portraits and background are full-size JPEGs served from the CDN. I'll:

- Re-encode the four team portraits + the Abuja background to properly sized, web-optimized JPEGs (max ~1200px on the long edge for portraits, ~1920px for the hero background) and re-upload as fresh assets, replacing the current pointers.
- Add `width`, `height`, and `loading="lazy"` attributes on every `<img>` except the hero LCP image (which gets `fetchpriority="high"`).
- Add `decoding="async"` on all images.
- Give the logo an explicit `width`/`height` in the header to prevent CLS.

### 3. Favicon + social preview

- Wire the Nexus logo mark as the favicon in `__root.tsx` (currently generic).
- Add per-route `og:image` on Home pointing to the logo (absolute URL). Leave other pages without og:image so Lovable's auto-screenshot fills in.

### 4. Small QA fixes

- Verify every route's metadata is unique (no duplicates from the earlier refactor).
- Confirm the contact form's success/error toasts still render and the Supabase insert works after the recent edits.
- Check mobile menu closes on route change.
- Add a simple 404 page styled to match the brand.

### Out of scope

- Blog / insights section
- Multi-language
- Email notifications on contact submit (still just DB insert)
- Custom domain setup — you'll do that from Project Settings after publishing.

### One question before I start

What URL should I bake into the sitemap and canonical tags? Options:
- **A.** Use the Lovable subdomain for now (e.g. `nexus-learning-hub.lovable.app`) and swap later when you connect a custom domain.
- **B.** You already have a custom domain in mind — tell me and I'll use it.
- **C.** Leave `BASE_URL` empty with a TODO and fill it in when you publish.