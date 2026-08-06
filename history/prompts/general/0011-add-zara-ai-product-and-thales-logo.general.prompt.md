---
id: 0011
title: Add Zara AI product and Thales logo
stage: general
date: 2026-08-06
surface: agent
model: claude-opus-5
feature: none
branch: main
user: Dilawar Shafiq
command: (direct request)
labels: ["products", "branding", "logo-assets", "seo", "schema-org"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - public/logos/zaraai.png
 - public/logos/thales.png
 - src/components/Products.tsx
 - src/components/Footer.tsx
 - src/components/Capabilities.tsx
 - src/components/Projects.tsx
 - src/components/About.tsx
 - src/pages/FilmStudio.tsx
 - scripts/postbuild.cjs
tests:
 - npx tsc --noEmit (clean)
 - npm run build + postbuild (17 prerendered routes)
 - Local vite preview visual verification of #products, /projects/film-studio
---

## Prompt

We have developed and live zaraai.autosapien.com So my website can show Zara AI logo as we have one more project live now

http://zaraai.autosapien.com/

is my google search shows Autosapien with its products in search engine? Is our website best looking and has great indexing and best SEO?

i HAVE A logo for thales but Make it transparent to be used in my website: [image attached — Thales line-art mark on white JPEG]

is all live now?

## Response snapshot

Sourced Zara AI's real positioning from the live deployment rather than inventing
copy: `zaraai.autosapien.com` is an AI film studio ("Transform your ideas into
short films using AI") with Text-to-Image, Text-to-Video (5–25s), an AI Film
Maker (DGMG) pipeline, XTTS-v2 voice synthesis, MusicGen scoring, and a free tier.

Brand assets:
- The official Zara AI file is a stacked portrait lockup (747×976). Every other
  product logo in `public/logos/` is a horizontal wordmark (2.3:1–3.3:1) and the
  product card renders into a fixed-height slot, so the stacked version would
  shrink the wordmark to noise. Re-laid the same two elements out horizontally
  (crops lifted pixel-for-pixel, nothing redrawn) → 1369×448, aspect 3.06.
- The supplied Thales mark was a JPEG on white. Keyed the background to real
  alpha via luminance (white → 0, ink → 1) and un-composited the colour off
  white, so edges stay soft and the ink keeps its hue on any background. JPEG
  ringing below 5% alpha floored to zero; cropped to content bbox → 264×343.

Site changes:
- `Products.tsx`: Zara AI added as PROD-05 with a new `emerald` accent keyed to
  the brand's `#11EEB9`. An odd product count would leave a hole in the
  two-column grid, so the trailing card now spans the full row with a 4-up
  capability strip. Added an optional `mark` field (symbol-only brand mark
  paired with a typeset wordmark) and used it for Thales, which had no lockup.
  Header copy: "Four products" → "Five products"; the "4 / 4 in production"
  counter now reads "4 live · 1 in private beta", which is accurate — Thales is
  private beta.
- Fixed the resulting self-contradiction: the AI Film Studio was still labelled
  "developing" in `Capabilities.tsx` (CAP-005), `Projects.tsx` (PRJ-003),
  `About.tsx` (FLM-05) and the `FilmStudio` page hero while the new Products
  card announced the same thing as live. All flipped to active and attributed
  to Zara AI, plus a live-product band on the FilmStudio page linking out.
- Kept `/projects/film-studio` as an internal `Link` (did not swap it for the
  external URL) so the prerendered page is not orphaned.
- `postbuild.cjs`: Zara AI added to the Organization `hasOfferCatalog`, a
  `SoftwareApplication` (MultimediaApplication) node with `sameAs` on the
  film-studio route, retitled/redescribed that route, and added generative video
  to `knowsAbout`.

## Outcome

- ✅ Impact: Zara AI is presented as the fifth shipped product across the homepage,
  footer, capability grid, project grid, film-studio page and structured data;
  Thales has a usable transparent mark.
- 🧪 Tests: `tsc --noEmit` clean; production build + postbuild succeeded (17
  routes); each changed surface verified visually in local preview.
- 📁 Files: 2 logo assets added, 6 components/pages and 1 build script edited.
- 🔁 Next prompts: push to main to trigger the Pages deploy; resubmit sitemap in
  Search Console; consider a dedicated `/projects/zara-ai` route.
- 🧠 Reflection: adding a product is never a one-file change here — status flags
  for the same capability are duplicated across four components plus the
  prerender script, so they drift silently.

## Evaluation notes (flywheel)

- Failure modes observed: `zaraai.autosapien.com` serves a TLS certificate for
  Alibaba OSS (`*.aliyuncs.com`), not the domain, so HTTPS fetches fail
  certificate validation — flagged to the user as a live issue.
- Graders run and results (PASS/FAIL): build PASS, typecheck PASS, visual PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): hoist product status into one shared
  data module so `live` is declared once instead of in five places.
