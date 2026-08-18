---
id: 0014
title: Search Console Indexing Audit And 404 Redirects
stage: general
date: 2026-08-18
surface: agent
model: claude-opus-5
feature: none
branch: growth/gtm-strategy
user: Dilawar Shafiq
command: (chat) fix indexing; remove academy /signup; investigate crawler 404s
labels: ["seo", "search-console", "sitemap", "404", "redirects", "indexing"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - scripts/postbuild.cjs
tests:
 - npm run build (vite + postbuild) -> "wrote 17 prerendered routes, 3 legacy redirects, sitemap.xml, robots.txt"
 - curl https://autosapien.com/hipaa-ai -> HTTP 404 (correct; /hipaa is the real page)
 - curl https://autosapien.com/hipaa -> HTTP 200
 - curl https://academy.autosapien.com/signup -> HTTP 404
 - curl https://academy.autosapien.com/robots.txt -> HTTP 404 (gap, other repo)
 - google "site:autosapien.com" -> /signup still shown from stale index
 - google '"hipaa-ai" site:autosapien.com' -> no results (never indexed)
---

## Prompt

this link should never exist: https://academy.autosapien.com/signup

Why this link exists without anything? google crawler is getting worried: Can you open your browser tab with claude extension so that you can open google search and see my indexing is working best: there is something like these that are opening https://autosapien.com/hipaa-ai

open this link https://search.google.com/search-console/index?resource_id=https%3A%2F%2Fautosapien.com%2F in google and fix it all for indexing of my website please

## Response snapshot

Audited the live site, the Google index, and Search Console (URL-prefix property
`https://autosapien.com/`, reachable under dilawar.gopang@gmail.com; there is no
sc-domain property, so academy.autosapien.com is not covered).

Findings:
1. **No sitemap has ever been submitted** — Sitemaps page reads `0-0 of 0`. The
   site ships a valid 17-URL sitemap.xml and robots.txt points at it, but Google
   was never told. 5 indexed / 6 not indexed follows directly from this.
2. **`/hipaa-ai` does not exist and never did** — not in the repo, not in git
   history, not in Google's index. The real page is `/hipaa` (HTTP 200).
   Search Console's actual "Not found (404)" list is: `/services` (Aug 5),
   `/projects` (Jul 29), `/about` (May 12), `/page-zJiHuV`, `/page-z6rdBM`
   (both Mar 9, legacy site-builder artifacts).
3. **`academy.autosapien.com/signup` is a stale index entry, not a live page** —
   it 404s; Google is serving a cached snippet until it recrawls.
4. `academy.autosapien.com` has **no robots.txt** (404) — its sitemap.xml is
   fine but undeclared. Fix belongs in the physicalaibook repo.

Fixed in this repo (commit 6a729f8):
- `postbuild.cjs` now emits static redirect stubs for `/about`, `/services`,
  `/projects` — meta refresh to the matching homepage anchor plus a canonical to
  `/`, since GitHub Pages cannot issue a 301. Kept out of the sitemap.
- Generated `404.html` now carries `<meta name="robots" content="noindex,
  nofollow">`.

Left for the user: sitemap submission (browser extension disconnected mid-click).

## Outcome

- ✅ Impact: three of the five reported 404s now redirect to live content instead of dying; 404.html can no longer be indexed by status-ignoring crawlers. Root cause of low index coverage identified as an unsubmitted sitemap.
- 🧪 Tests: clean `npm run build`; verified stub contents, that `/projects/humanoid` survives the `/projects` stub, and that no redirect path leaked into sitemap.xml.
- 📁 Files: scripts/postbuild.cjs
- 🔁 Next prompts: submit `sitemap.xml` in Search Console; add robots.txt to the academy (physicalaibook) repo; consider a real `/projects` hub page instead of an anchor redirect; add a Domain property to cover subdomains.
- 🧠 Reflection: the reported symptom (`/hipaa-ai`, `/signup`) was not the problem. Reading Search Console's actual 404 list replaced two guessed URLs with three real ones.

## Evaluation notes (flywheel)

- Failure modes observed: user-reported URL was from memory and wrong; a repo-only grep would have found nothing and concluded "no issue".
- Graders run and results (PASS/FAIL): build PASS; sitemap-exclusion check PASS; route-collision check PASS; eslint on postbuild.cjs FAIL (pre-existing no-undef on CJS globals, unrelated to this diff).
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): after the sitemap is submitted, re-read Page indexing in ~1 week to confirm indexed count moves from 5 toward 17.
