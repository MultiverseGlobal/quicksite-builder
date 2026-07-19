Current state
- The homepage hero (src/components/site/HeroAnimated.tsx) headline reads "Building Capacity. Driving Excellence." with a logo-mark image on the right.
- The company name "Nexus Learning Hub" only appears in the header and footer, not as the dominant homepage element.

Proposed change
1. Redesign the hero so the company name "NEXUS Learning Hub" is the bold, primary visual on the homepage.
2. Keep the existing tagline "Building Capacity. Driving Excellence." as a sub-headline.
3. Retain the Abuja background image, warm orange radial glow, grid hairlines, and scroll/motion effects.
4. Keep the logo mark but reduce its prominence (smaller, decorative) or replace the right-side logo card with a typographic lockup that includes the full name.
5. Preserve the orange-and-ink color palette, font pairing (Playfair Display + Inter), and all existing SEO metadata.
6. Ensure the change is responsive across mobile, tablet, and desktop.

Implementation notes
- Update src/components/site/HeroAnimated.tsx only.
- Use Framer Motion for word/letter stagger reveal on "NEXUS Learning Hub".
- Keep the existing CTA buttons and trust-strip section below unchanged.
- Verify the build passes and the preview renders correctly.