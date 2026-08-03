---
id: 0005
title: Remove Academy Sign In / Sign Up
stage: general
date: 2026-07-22
surface: agent
model: claude-opus-4-8
feature: none
branch: main
user: dilawar.gopang@gmail.com
command: (chat) diagnose site status + remove Academy sign in/up
labels: ["seo", "academy", "docusaurus", "sitelinks", "auth"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - C:\Users\TechTiesIbrahim\physicalaibook\docusaurus.config.js (modified — removed navbar + footer Sign In/Sign Up)
 - C:\Users\TechTiesIbrahim\physicalaibook\src\pages\signin.tsx (deleted)
 - C:\Users\TechTiesIbrahim\physicalaibook\src\pages\signup.tsx (deleted)
 - C:\Users\TechTiesIbrahim\physicalaibook\src\components\Auth\SignIn.tsx (deleted — orphaned)
 - C:\Users\TechTiesIbrahim\physicalaibook\src\components\Auth\SignUp.tsx (deleted — orphaned)
tests:
 - npm run build (docusaurus build) — exit 0, no /signin /signup routes in build output, sitemap.xml 0 matches
---

## Prompt

Why is autosapien website down is it hostinger issues?
[follow-ups] It seems the website is up and working.
[image of Google result] Remove sing in sign up. my google is showing academy but nothing about my projects why?
remove sign in sign up from academy.autosapien.com
[scope selected] Delete the signin/signup pages

## Response snapshot

Diagnosis:
- autosapien.com is hosted on GitHub Pages (185.199.108–111.153), NOT Hostinger. Local curl/DNS
  failures (CRYPT_E_REVOCATION_OFFLINE, 192.168.1.1 timeouts) were a local network hiccup; site was up.
- Google surfaces Academy but not /projects/* because the main site is a client-rendered Vite/React
  SPA: every route serves the same index.html with identical <title>/meta, and there is no sitemap.xml
  or robots.txt. The Academy is Docusaurus (static HTML per page + sitemap), so it indexes cleanly and
  gets promoted as a sitelink. Fix for projects = per-route meta + sitemap (SPA prerender) — separate task.

Action (Academy repo physicalaibook):
- Removed Sign In / Sign Up from navbar and footer in docusaurus.config.js.
- Verified dependencies: ProtectedRoute (which redirects to /signin) is imported nowhere (dead code);
  login still available via LoginModal in the user menu. Safe to delete pages.
- Deleted src/pages/signin.tsx, signup.tsx and the exclusively-used SignIn.tsx / SignUp.tsx components.
- Build passed (exit 0); routes and sitemap entries gone.
- Committed cce1575 on main. NOT pushed — push to main auto-deploys to academy.autosapien.com.

## Outcome

- ✅ Impact: Sign In/Sign Up removed from Academy UI and routes; build verified clean. Diagnosed the
  SPA-vs-Docusaurus indexing asymmetry behind the missing project sitelinks.
- 🧪 Tests: docusaurus build exit 0; no /signin /signup in build/; sitemap.xml 0 matches.
- 📁 Files: 1 modified, 4 deleted (all in physicalaibook repo).
- 🔁 Next prompts: (1) push/deploy Academy; (2) noindex/remove-URL in Search Console to purge cached
  Sign Up result; (3) add per-route meta + sitemap.xml to main SPA so /projects/* pages get indexed.
- 🧠 Reflection: Work spanned a second repo (physicalaibook); PHR recorded in the website repo as general.

## Evaluation notes (flywheel)

- Failure modes observed: initial shell grep over physicalaibook timed out on node_modules; switched to scoped Grep tool.
- Graders run and results (PASS/FAIL): build PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): add sitemap plugin + react-helmet per-route meta to main site.
