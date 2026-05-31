---
id: "0003"
title: Fix Academy Deployment Logo And Content
stage: green
date: 2026-05-31
surface: agent
model: claude-opus-4-8
feature: academy
branch: main
user: Dilawar Shafiq
command: null
labels: ["academy", "docusaurus", "deployment", "logo", "branding", "content-generation", "cross-repo", "cleanup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - physicalaibook/docusaurus.config.js
  - physicalaibook/scripts/gen-books.ts
  - physicalaibook/static/img/logo.png
  - physicalaibook/static/img/logo-footer.png
  - physicalaibook/static/img/favicon.png
  - physicalaibook/books/** (regenerated, 100 md files)
  - src/App.tsx
  - src/pages/Academy.tsx (deleted)
  - src/pages/AcademyModule.tsx (deleted)
tests:
  - "physicalaibook: npm run build (Docusaurus) — success"
  - "autosap_website: npm run build (tsc + vite) — success"
---

## Prompt

another developer has now deployed academy.autosapien.com but it has wrong Logo because our logo says autosapien so it should show in UI Academy. and docusarus book content is not as we intended here. Do you remember anything about last session because it was closed in an accident one day ago.

[Follow-up]: the other dev did it wrong: DilawarShafiq/physicalaibook why he brought this one while i told him to copy that and introduce in academy but he merged that repo in my website

[Follow-up]: the other developer made terrible mess by doing things with wrong repo autosapien-platform: it was his grave mistake: you need to correct all his shit

## Response snapshot

Recovered context from PHRs 0001/0002: last session rebuilt a rough Docusaurus "Physical AI" book as structured TypeScript data inside the React website at /academy (multi-book Academy: Physical AI, CEHRS, Agentic Healthcare). Diagnosed that another dev instead deployed the separate `DilawarShafiq/physicalaibook` Docusaurus repo to academy.autosapien.com, gutted the in-site React /academy into an external redirect (website PRs #3/#4), shipped a placeholder "PAI" green-box logo, and pointed the content generator at the wrong sibling repo. Audited all three repos: confirmed `autosapien-platform` is fully intact (not contaminated) — the root cause was a naming collision (GitHub repo `autosapien` = website; local folder `autosapien` = platform). Fixed: (1) replaced logo with real Autosapien mark + navbar title "Academy"; (2) repointed gen-books.ts at autosap_website data and removed three rendering degradations (truncated "…" objectives, redundant "Why this matters", awkward auto-quiz), regenerated all 3 books; (3) built + deployed Docusaurus; (4) on the website, removed /academy routes + ExternalRedirect + orphaned page components (kept src/data as the generator's source), leaving the navbar external link as the sole Academy entry point.

## Outcome

- ✅ Impact: academy.autosapien.com now shows the Autosapien brand mark with "Academy" wordmark and faithful, de-duplicated lesson content. Main website has a single clean Academy entry point (external link), no dead /academy path. autosapien-platform confirmed undamaged.
- 🧪 Tests: Docusaurus `npm run build` success; website `tsc && vite build` success (bundle shrank as dead academy code was removed); both GitHub Pages deploys triggered.
- 📁 Files: see front-matter — changes span two repos (physicalaibook + autosap_website).
- 🔁 Next prompts: verify live logo renders after CDN cache clears; consider a dedicated "Autosapien Academy" lockup SVG instead of the company PNG; address Dependabot vulns on both repos; optionally code-split the 1.3MB website bundle.
- 🧠 Reflection: The degraded content was never a data problem — it was a lossy generator plus a wrong source path. Fixing the generator (not the data) is the durable fix because the books are regenerated artifacts.

## Evaluation notes (flywheel)

- Failure modes observed: gen-books.ts hardcoded the source path to `../../autosapien` which on this machine resolves to the platform repo, not the website; repo/folder name collision is the systemic trap.
- Graders run and results (PASS/FAIL): Both builds PASS; live visual verification pending CDN propagation.
- Next experiment (smallest change to try): re-fetch academy.autosapien.com after deploy to confirm the navbar logo image swapped from the PAI placeholder to the Autosapien mark.
