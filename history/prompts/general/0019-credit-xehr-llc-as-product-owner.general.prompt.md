---
id: 0019
title: Credit XEHR LLC As Product Owner
stage: general
date: 2026-10-06
surface: agent
model: claude-opus-5-5
feature: none
branch: main
user: Dilawar Shafiq
command: (chat) we developed them for XEHR LLC
labels: ["attribution", "xehr-llc", "legal-pages", "structured-data"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/components/Products.tsx
 - src/pages/Terms.tsx
 - src/pages/Privacy.tsx
 - src/pages/HIPAA.tsx
 - src/pages/HealthcareIT.tsx
 - src/pages/AgenticAI.tsx
 - scripts/postbuild.cjs
tests:
 - npm run build -> success, 17 prerendered routes
 - dist/projects/healthcare-it JSON-LD provider -> XEHR LLC
---

## Prompt

we developed them for XEHR LLC

## Response

Credited XEHR LLC as owner/operator of xEHR.io, RCM Employee and BetterCompliant: a
"Built by Autosapien for XEHR LLC" line on the three product cards, plus intro copy;
Terms/Privacy/HIPAA now say XEHR LLC operates those products under its own terms and
privacy policy; the xEHR and RCM Employee page heroes carry the credit; JSON-LD now sets
provider = XEHR LLC and creator = Autosapien. Not deployed yet.
