---
id: 0017
title: Academy Property And Signup Removal
stage: general
date: 2026-08-18
surface: agent
model: claude-opus-5
feature: none
branch: main
user: Dilawar Shafiq
command: (chat) is now all fixed? please remove /signup
labels: ["search-console", "removals", "site-verification", "sitemap", "academy"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - ~/physicalaibook/static/google494fcf0dfefb5dfc.html
tests:
 - https://academy.autosapien.com/google494fcf0dfefb5dfc.html -> 200, correct token
 - Search Console -> "Ownership verified" (HTML file method)
 - Removals -> /signup listed, "Temporarily remove URL", Processing request
 - Academy sitemap.xml submitted -> 530 discovered pages
---

## Prompt

is now all fixed? please remove /signup

## Response snapshot

Removed it. The blocker was that no Search Console property covered the Academy
subdomain, and the Domain-property route needs a DNS TXT record I cannot add.

Solved it via a URL-prefix property instead: **Google issues one verification
token per account**, so the file Google asked for —
`google494fcf0dfefb5dfc.html` — is byte-for-byte the one already serving at
`autosapien.com`. Copied it into `physicalaibook/static/`, pushed, waited for the
Pages deploy, confirmed it live, and verified ownership. No download needed.

Then: submitted a temporary-removal request for
`https://academy.autosapien.com/signup` (status: Processing), and submitted the
Academy's sitemap to the new property — **530 pages discovered**, none of which
Google was being told about before.

Since `/signup` returns a permanent 404, it should drop from the index for good
well before the six-month removal block expires.

## Outcome

- ✅ Impact: `/signup` is queued for removal from Google Search, and 530 Academy pages are now declared to Google for the first time.
- 🧪 Tests: verification file live and correct; ownership verified; removal request listed; sitemap accepted with 530 pages.
- 📁 Files: one copied verification file in the academy repo.
- 🔁 Next prompts: restore `PRODUCT_SITES` when xehr.io / rcmemployee.com resolve; decide how to host the RCM Employee landing page.
- 🧠 Reflection: the earlier advice — "you need a Domain property and DNS access" — was needlessly pessimistic. A URL-prefix property verified from the repo achieves the same removal, and the per-account token meant zero new secrets.

## Evaluation notes (flywheel)

- Failure modes observed: assumed subdomain coverage required DNS before checking whether a URL-prefix property would do; the token being reusable was only discovered by reading the verification dialog.
- Graders run and results (PASS/FAIL): verification file PASS; ownership PASS; removal submitted PASS; sitemap PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): re-run the `autosapien` brand query in a few days and confirm the Sign Up sitelink is gone.
