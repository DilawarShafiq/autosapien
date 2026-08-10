---
id: 0012
title: Zara AI launch — projects section update
stage: general
date: 2026-08-10
surface: agent
model: claude-opus-5
feature: none
branch: main
user: Dilawar Shafiq
command: (direct request)
labels: ["zara-ai", "projects", "branding", "launch"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/components/Projects.tsx
 - src/pages/FilmStudio.tsx
 - public/logos/zaraai-mark.png
tests:
 - npx tsc --noEmit (PASS)
 - npm run build (PASS, 17 prerendered routes)
 - Manual verification in Chrome against `npm run preview` on :4177
---

## Prompt

I have lauched [Image #1] at zaraai.autosapien.com, Can you update projects page

(Attached image: `C:\Users\TechTiesIbrahim\Downloads\Zara AI logo.jpeg` — the stacked
Zara AI logo, "Z▶" symbol above the "Zara AI" wordmark.)

## Response snapshot

Zara AI was already present across the site (Products, Projects, Footer, Capabilities,
FilmStudio) from the earlier `461cef7` commit, and `public/logos/zaraai.png` already held
the horizontal lockup of the same mark. The gap was in the projects section, where the
card still behaved like an unshipped project.

Changes made:

1. **`src/components/Projects.tsx`** — the Zara card now carries `externalUrl:
   'https://zaraai.autosapien.com'`, matching how xEHR.io (the other shipped product) is
   treated: live products link to the product, not the internal capability page. The
   `/projects/film-studio` page remains reachable via `Capabilities.tsx`.
   The secondary-card icon tile now renders `project.mark` when present and falls back to
   the lucide category icon otherwise.

2. **`public/logos/zaraai-mark.png`** — new symbol-only mark, cropped from the existing
   lockup (alpha bbox `0,0,505,448`), squared, padded, and downscaled to 256×256 so it
   centers in the 36px icon tile.

3. **`src/pages/FilmStudio.tsx`** — the "View Demo Reel" CTA was an inert `<button>`; it is
   now an anchor to zaraai.autosapien.com ("Make a film with Zara AI"), and the supporting
   copy notes the free tier.

Verified in the browser: the Zara card resolves to `https://zaraai.autosapien.com/`
(`target="_blank"`) with `/logos/zaraai-mark.png` in the icon tile, and the film-studio CTA
resolves to the same URL.

## Outcome

- ✅ Impact: Zara AI reads as a shipped product in the projects section — own brand mark, direct link to the live site — and the film-studio detail page no longer has a dead CTA.
- 🧪 Tests: `npx tsc --noEmit` clean; `npm run build` clean; visual + DOM check in Chrome against the preview build.
- 📁 Files: 2 components edited, 1 logo asset added.
- 🔁 Next prompts: none pending; deploy happens on push to `main` via `.github/workflows/deploy.yml`.
- 🧠 Reflection: The site already had a convention for this (`externalUrl` on live products, `mark` vs. lockup in `Products.tsx`); following it was better than inventing a new treatment for one card.

## Evaluation notes (flywheel)

- Failure modes observed: first commit used PowerShell here-string syntax (`@'…'@`) inside the Bash tool, which leaked literal `@` characters into the message; amended with `-F`.
- Graders run and results (PASS/FAIL): typecheck PASS, build PASS, browser verification PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
