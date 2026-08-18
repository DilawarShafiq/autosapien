---
id: 0015
title: Product Sitelinks And Internal Linking Fix
stage: general
date: 2026-08-18
surface: agent
model: claude-opus-5
feature: none
branch: growth/gtm-strategy
user: Dilawar Shafiq
command: (chat) submit sitemap; get xEHR and products into Google with an enterprise look
labels: ["seo", "sitelinks", "internal-linking", "schema-org", "dns", "search-console"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/components/Products.tsx
 - src/components/Projects.tsx
 - src/components/Footer.tsx
 - src/components/Hero.tsx
 - scripts/postbuild.cjs
tests:
 - npx tsc --noEmit -> clean
 - npx eslint on all four components -> clean
 - npm run build -> 17 routes, 3 legacy redirects, sitemap.xml, robots.txt
 - vite preview + browser: xEHR card resolves to /projects/healthcare-it; hero unchanged visually
 - grep dist for xehr.io / rcmemployee.com in JSON-LD -> 0 hits
 - nslookup xehr.io 8.8.8.8 -> SERVFAIL; rcmemployee.com -> no A/AAAA; bettercompliant.com -> 200
---

## Prompt

also I opened a tab and you can see there is sitemaps and also how my website looks in google search see both and fix all

I want my xEHR, and other products to be showing there in good enterprise look

yes xehr and rcmemployee live correctly: I have to pay their hosting in  afew days

## Response snapshot

Submitted `sitemap.xml` in Search Console (first ever submission; the property had
`0-0 of 0`).

Read the live brand SERP. `autosapien.com` has six sitelinks: Autosapien Academy,
AI Healthcare Employees, RCM Automation, Agentic AI Workforce, **Sign Up** (the
deleted academy page), Thales. **xEHR is absent.** Diagnosed why:

1. **The product pages were orphans.** `Products.tsx` linked all five cards straight
   out to their own domains. `Projects.tsx:207` overrode the internal `<Link>` with an
   external `<a>` for `healthcare-it` and `film-studio`. `Hero.tsx` stat tiles and the
   sitewide `Footer.tsx` product column did the same. So `/projects/healthcare-it` —
   sitemap priority 0.9, full Product JSON-LD — had **no inbound link anywhere on the
   site**. Google had no reason to surface it.
2. **Two product domains do not resolve.** Verified against 8.8.8.8: `xehr.io` returns
   SERVFAIL, `rcmemployee.com` has no A/AAAA records. The Organization schema's
   `sameAs` and offer-catalog `url` pointed Googlebot at hosts that do not answer.
   User confirmed both are real products with lapsed hosting, being restored in days.

Changes: product cards, project cards, hero tiles and footer product links all resolve
to the product's page on this site (which already carries the outbound CTA). Dead hosts
moved behind a `PRODUCT_SITES` map in `postbuild.cjs` so restoring them is one line each.

## Outcome

- ✅ Impact: `/projects/healthcare-it` and the other product pages now have inbound links from the homepage hero, the Products grid, the Projects grid and every page's footer — the signal Google uses to pick sitelinks. No page links to a non-resolving host, and the structured data no longer asserts one.
- 🧪 Tests: tsc clean, eslint clean, build clean, browser-verified card href and unchanged hero rendering, JSON-LD grepped for dead hosts.
- 📁 Files: Products.tsx, Projects.tsx, Footer.tsx, Hero.tsx, postbuild.cjs
- 🔁 Next prompts: merge to `main` to deploy; restore both `PRODUCT_SITES` entries once DNS answers; add a Search Console Domain property so academy `/signup` can be removed; add robots.txt to `physicalaibook`.
- 🧠 Reflection: "products aren't showing in Google" was an internal-linking problem, not a content problem. The site described its products thoroughly and then pointed every link away from the pages doing the describing.

## Evaluation notes (flywheel)

- Failure modes observed: nearly recorded the two domains as permanently dead before asking — the user's correction (hosting lapsed, not abandoned) changed the fix from removal to a reversible switch.
- Graders run and results (PASS/FAIL): tsc PASS; eslint PASS; build PASS; dead-host grep PASS; visual regression check PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): after deploy + reindex, re-run the `autosapien` brand query and check whether xEHR displaces the `/signup` sitelink.
