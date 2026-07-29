---
id: 0007
title: Fix indexing with prerendered routes and sitemap
stage: general
date: 2026-07-29
surface: agent
model: claude-opus-5
feature: none
branch: main
user: Dilawar Shafiq
command: general
labels: ["seo", "indexing", "prerender", "sitemap", "github-pages", "spa"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - scripts/postbuild.cjs
 - package.json
tests:
 - npm run build -> "postbuild: wrote 17 prerendered routes, sitemap.xml, robots.txt"
 - GET https://autosapien.com/projects/thales/ -> HTTP 200, unique <title>
 - GET https://autosapien.com/projects/healthcare-it/ -> HTTP 200, unique <title>
 - GET https://autosapien.com/sitemap.xml -> HTTP 200
 - GET https://autosapien.com/robots.txt -> HTTP 200
 - GET https://autosapien.com/projects/thales -> HTTP 301 -> trailing-slash URL
---

## Prompt

Done, So How would google show my website? does it show my products we developed?

I want my website to be best indexed. Why my website footer says serving US.

## Response snapshot

**Footer question:** "Lahore, Pakistan · Serving USA" is hardcoded brand copy at
`src/components/Footer.tsx:82` — not injected by Google or the host. Left
unchanged; wording is a positioning decision for the user.

**Indexing diagnosis.** The site could not show product pages in Google at all,
for a reason more severe than thin metadata: all 12 `/projects/*` routes
returned **HTTP 404**. As a client-rendered SPA, no file existed at those paths,
so GitHub Pages served `404.html` with a 404 status. Users saw the page (React
routed client-side); Googlebot saw "Not Found" and would not index. Compounding
issues: one shared `<title>`/description across every route, no `sitemap.xml`,
no `robots.txt` (both 404), and no structured data.

**Fix.** Rewrote `scripts/postbuild.cjs` to emit a real `dist/<route>/index.html`
for all 17 routes with per-route title, description, canonical, OG and Twitter
tags, and to generate `sitemap.xml`, `robots.txt`, and Organization JSON-LD on
the homepage. Copy was taken from each page's existing hero props rather than
invented. `404.html` is still written from the untouched template as the SPA
fallback for genuinely unknown URLs. Canonical origin is the apex
`https://autosapien.com` to match the CNAME (the source `index.html` had
pointed OG tags at `www`).

**Deploy trap.** The first deploy succeeded but published nothing new. The
committed `package.json` still ran `postbuild: cp dist/index.html dist/404.html`
— the local edit to `node scripts/postbuild.cjs` had never been committed, and
`scripts/` was untracked. Committing `package.json` fixed it; all routes then
returned 200 with distinct titles.

## Outcome

- ✅ Impact: all 17 routes now return HTTP 200 with unique titles/descriptions and are crawlable; sitemap and robots live; homepage carries Organization schema.
- 🧪 Tests: build output verified locally, then live HTTP checks on 5 URLs plus redirect behavior on the non-slash form.
- 📁 Files: `scripts/postbuild.cjs` (rewritten, 256 lines), `package.json` (postbuild hook). Commits 9bb9d27, 60fafbb.
- 🔁 Next prompts: submit sitemap.xml in Search Console; consider per-product Product/SoftwareApplication JSON-LD; `dist/index.html` is still tracked in git despite `dist/` being gitignored — worth untracking.
- 🧠 Reflection: the visible symptom (missing sitelinks) pointed at metadata, but the actual blocker was an HTTP status code. Checking the status code before the markup would have found it immediately.

## Evaluation notes (flywheel)

- Failure modes observed: assumed CI ran the same postbuild as local; a green build masked a no-op step. Root cause was an uncommitted `package.json` scripts entry.
- Graders run and results (PASS/FAIL): PASS — live 200s with unique titles on all sampled routes.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): add a build assertion that fails if `dist/sitemap.xml` is missing, so a silently skipped postbuild breaks CI instead of shipping.
