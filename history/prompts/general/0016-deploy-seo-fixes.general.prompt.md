---
id: 0016
title: Deploy SEO Fixes And Search Console Actions
stage: general
date: 2026-08-18
surface: agent
model: claude-opus-5
feature: none
branch: main
user: Dilawar Shafiq
command: (chat) deploy all and fix all
labels: ["deploy", "seo", "search-console", "github-pages", "robots"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - (merge only) growth/gtm-strategy -> main, 6 commits
 - ~/physicalaibook/static/robots.txt
tests:
 - gh run watch (autosapien) -> exit 0
 - gh run watch (physicalaibook) -> exit 0
 - https://autosapien.com/{about,services,projects}/ -> 200 with meta refresh to the matching anchor (were 404)
 - https://autosapien.com/hipaa-ai -> serves <meta name="robots" content="noindex, nofollow">
 - homepage JSON-LD -> 0 occurrences of xehr.io / rcmemployee.com; catalog url is /projects/healthcare-it/
 - https://academy.autosapien.com/robots.txt -> 200 text/plain (was 404)
 - URL inspection: /projects/healthcare-it/ reported "URL is on Google / Page is indexed"
---

## Prompt

deploy all and fix all

## Response snapshot

Merged `growth/gtm-strategy` into `main` (fast-forward, 6 commits) and pushed;
GitHub Pages deploy succeeded. Added `static/robots.txt` to `physicalaibook` and
pushed; that deploy succeeded too. Verified every change against the live sites.

Search Console actions taken on `https://autosapien.com/`:
- Submitted `sitemap.xml` (first ever — the property had `0-0 of 0`).
- Requested indexing for `/` and `/projects/healthcare-it/`.
- Started "Validate fix" on the **Not found (404)** issue, which recrawls all five
  reported URLs. Three now return 200; the two `page-*` builder artifacts still
  404 by design, so the overall validation is expected to report failed while the
  three that matter drop out.

Notable: URL inspection shows `/projects/healthcare-it/` **is** already indexed.
So xEHR was never missing from the index — it simply had no internal links and
therefore never won a sitelink slot. That is what the previous commits changed.

Not done, needs the user: a Search Console **Domain property** (DNS TXT record).
The current property is URL-prefix `https://autosapien.com/` only, so
`academy.autosapien.com` is out of scope and the stale `/signup` sitelink cannot
be removed via Removals. It will drop on its own as Google recrawls the 404.

## Outcome

- ✅ Impact: every fix is live and verified on both domains. Google has a sitemap, a priority recrawl of the homepage and the xEHR page, and a validation run on the 404 issue.
- 🧪 Tests: both deploy workflows exit 0; eight live-URL assertions pass.
- 📁 Files: merge to main; one new file in the academy repo.
- 🔁 Next prompts: add a Domain property via DNS TXT; restore both `PRODUCT_SITES` entries when xehr.io and rcmemployee.com resolve; recheck the brand SERP in ~1–2 weeks.
- 🧠 Reflection: the Search Console URL-inspection box repeatedly stole focus back to the previous result, causing two accidental duplicate index requests (harmless — Google states resubmission does not change queue position). Switching to "Validate fix", a single-click affordance covering all five URLs, was both safer and more complete than inspecting each URL by hand.

## Evaluation notes (flywheel)

- Failure modes observed: browser automation against a single-page console UI — a click that looks like it dismisses a dialog can leave focus on a button, so a following Return re-fires that button. Verify focus with a screenshot before sending Return, or prefer a distinct navigation.
- Graders run and results (PASS/FAIL): deploy workflows PASS; live redirect check PASS; 404 noindex PASS; schema dead-host check PASS; academy robots PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): re-run `site:autosapien.com` and the `autosapien` brand query in ~2 weeks; check whether xEHR appears as a sitelink and `/signup` has dropped.
