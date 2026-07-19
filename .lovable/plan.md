## Why images break on Vercel

Every image on the site (logo, team portraits, backgrounds) is served from Lovable's CDN via URLs like `/__l5e/assets-v1/<id>/<filename>`. That `/__l5e/...` path is a Lovable-only route — it's handled by Lovable's hosting infra, not by the built app. When you deploy the same build to Vercel, nothing serves that path, so every `<img>` 404s.

The `.asset.json` files in `src/assets/` are just pointers to that CDN — they don't ship the actual binary in the Vercel bundle.

## Fix: bring the images back into the repo so any host can serve them

I'll re-download each asset from the Lovable CDN, drop the real file into `src/assets/`, and switch every import from the `.asset.json` pointer to a normal Vite image import. Vite will then fingerprint and bundle them, and they'll work on Vercel, Netlify, Cloudflare Pages, Lovable — anywhere.

### Files to re-localise

- `nexus-logo.png` (logo mark — used in header, footer, hero)
- `dipo-abgoola.jpg`, `kaspa-abah.jpg`, `musab-ibrahim.jpg`, `greenwill-kanu.jpg` (team portraits)
- `bg-abuja.jpg`, `bg-warm.jpg` (backgrounds)

### Code changes

- Replace `import xAsset from "@/assets/x.jpg.asset.json"` + `xAsset.url` with `import x from "@/assets/x.jpg"` + `src={x}` in:
  - `src/components/site/HeroAnimated.tsx`
  - `src/components/site/PageHeader.tsx`
  - `src/components/site/SiteHeader.tsx`
  - `src/components/site/SiteFooter.tsx`
  - `src/routes/team.tsx`
- Delete the 7 `*.asset.json` pointer files after the imports are switched.
- Keep everything else (layout, motion, SEO) as is.

### Verify

- Run `bun run build` and confirm the images appear in `dist/` with hashed filenames.
- Spot-check the preview to make sure the logo, portraits and backgrounds still render.

### Note on Vercel + TanStack Start

The site is a TanStack Start app configured for Cloudflare Workers by default. That build output doesn't run natively on Vercel's Node/Edge runtime — you may see other 500s beyond the images (SSR entry, sitemap route). If you want, I can also swap the deploy target to Vercel's adapter in the same pass — say the word and I'll fold it into the plan.
