---
id: 0013
title: Zara live link in Capabilities and domain health audit
stage: general
date: 2026-08-10
surface: agent
model: claude-opus-5
feature: none
branch: main
user: Dilawar Shafiq
command: (direct request)
labels: ["zara-ai", "capabilities", "tls", "domain-health"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/components/Capabilities.tsx
tests:
 - npx tsc --noEmit (PASS)
 - npm run build (PASS, 17 prerendered routes)
 - Manual verification in Chrome against `npm run preview` on :4178
---

## Prompt

do it all

## Response snapshot

Follow-up to PHR 0012. Two outstanding items were named there: the site-wide sweep
(actionable in this repo) and the TLS certificate on zaraai.autosapien.com (not actionable —
it lives in the Alibaba Cloud console).

**Code change — `src/components/Capabilities.tsx`**

The CAP-005 panel named `zaraai.autosapien.com` in prose and in a feature chip, but neither
was clickable; the only CTA went to the internal `/projects/film-studio` page. Added optional
`liveUrl` / `liveLabel` fields to the capability records and a conditional outbound link
beside the primary CTA. Only CAP-005 carries them today, so the other five panels render
exactly as before (verified: Home Robotics shows the Explore button alone).

xEHR.io and RCM Employee were deliberately left without `liveUrl` — see the domain findings
below; linking to a 503 or a non-resolving host would be worse than not linking.

**Domain health measured this session**

| Domain | Result |
| --- | --- |
| zaraai.autosapien.com | App serves (GET 200, `<title>ZaraAI by Autosapien</title>`) but presents `CN=ap-southeast-1.oss.aliyuncs.com` — cert does not match, browsers show an interstitial |
| xehr.io | HTTP 503 |
| rcmemployee.com | Does not connect (curl exit 000) |
| bettercompliant.com | HTTP 200 |

DNS for the Zara subdomain: `zaraai.autosapien.com` → CNAME
`zara-web-4608.ap-southeast-1.thepacificphs.com` → `47.79.48.157` (Alibaba Cloud, Singapore).
Cert presented is issued by GlobalSign to Alibaba's OSS wildcard endpoint, valid
2026-07-28 → 2027-02-12 — i.e. the bucket's default cert, not one bound to the custom domain.
A bare `HEAD` also returns `403 AccessDenied / "The bucket you access does not belong to you"`,
which points at the custom domain not being bound to the bucket.

## Outcome

- ✅ Impact: The Capabilities panel now links out to the live Zara AI product; the branding sweep is complete on the repo side.
- 🧪 Tests: typecheck PASS, build PASS, browser verification of both the present and absent cases.
- 📁 Files: 1 component edited.
- 🔁 Next prompts: bind a cert for zaraai.autosapien.com in the Alibaba console; investigate xehr.io 503 and rcmemployee.com DNS; then add `liveUrl` for CAP-002 / CAP-006.
- 🧠 Reflection: The user's "do it all" spanned work I could do and infrastructure I have no credentials for. Splitting it explicitly — ship the code, hand back precise console steps — beat either guessing at the console or stalling on the whole request.

## Evaluation notes (flywheel)

- Failure modes observed: several DOM assertions raced framer-motion's `AnimatePresence` exit animation and read stale panel contents; re-reading after the swap (or screenshotting) resolved it. Also, `window.scrollTo` without `behavior:'instant'` is swallowed by the page's CSS smooth-scroll.
- Graders run and results (PASS/FAIL): typecheck PASS, build PASS, browser verification PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
