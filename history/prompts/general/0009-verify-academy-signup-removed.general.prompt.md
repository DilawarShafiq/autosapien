---
id: 0009
title: Verify Academy Signup URL Removed
stage: general
date: 2026-08-03
surface: agent
model: claude-opus-5
feature: none
branch: main
user: dilawar.gopang@gmail.com
command: (chat) verify academy.autosapien.com/signup no longer exists
labels: ["seo", "academy", "docusaurus", "auth", "verification"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - (none modified — verification only)
tests:
 - curl https://academy.autosapien.com/signup -> HTTP 404, body "Page Not Found"
 - curl https://academy.autosapien.com/signin -> HTTP 404
 - curl https://academy.autosapien.com/ -> HTTP 200
 - curl https://academy.autosapien.com/sitemap.xml -> 0 signup/signin entries
 - git rev-parse HEAD origin/main (physicalaibook) -> both cce1575 (removal commit is deployed)
---

## Prompt

this should not exist https://academy.autosapien.com/signup

## Response snapshot

Verified: the page is already gone and the removal is deployed. No code change needed.

Evidence:
- `physicalaibook` local HEAD == `origin/main` == `cce1575` ("Remove Sign In / Sign Up from Academy").
  PHR 0005 recorded it as "NOT pushed" — it has since been pushed and auto-deployed via GitHub Pages.
- Live checks: `/signup` and `/signin` both return **HTTP 404** with the Docusaurus "Page Not Found" body;
  `/` returns 200.
- `src/pages/` contains only `index.tsx` / `index.module.css` — no signin/signup pages.
- Live `sitemap.xml` has zero signup/signin entries (only `*design*` false positives).
- Homepage HTML contains no "Sign Up" / "Sign In" / "Login" strings — navbar and footer are clean.
- Remaining auth code (`AuthContext`, `LoginModal`, `UserMenu`, `api/client.ts`) is unreferenced by any
  navbar item in `docusaurus.config.js`; it renders nowhere. Left in place (dead code, not user-visible).
- `autosap_website` has no links to `academy.autosapien.com/signup` or `/signin`.

Conclusion: what remains is a **stale Google index entry**, not a live page. Google keeps 404'd URLs in the
index for weeks. A correct 404 is the right signal and it will drop on its own; to purge faster, use
Search Console → Removals → "Temporarily remove URL" for `https://academy.autosapien.com/signup`
(Search Console is already verified for the property per PHR 0006).

## Outcome

- ✅ Impact: Confirmed removal is live; no further code change required.
- 🧪 Tests: 5 live/repo verifications, all pass (see `tests` above).
- 📁 Files: 0 modified.
- 🔁 Next prompts: (1) submit Search Console removal for the cached /signup URL;
  (2) optionally delete the orphaned `src/components/Auth/**` + `contexts/AuthContext.tsx` dead code.
- 🧠 Reflection: PHR 0005's "NOT pushed" note was stale — always re-verify deploy state against
  `origin/main` and the live URL before assuming a prior task is incomplete.

## Evaluation notes (flywheel)

- Failure modes observed: `WebSearch` ignored the `site:` operator, returning unrelated domains —
  useless for index-status checks. Direct `curl` against the live URL was the reliable signal.
- Graders run and results (PASS/FAIL): live 404 check PASS; sitemap check PASS; deploy-parity check PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): use Search Console API / `WebFetch` on a Google cache URL
  instead of `WebSearch` when verifying index state.
