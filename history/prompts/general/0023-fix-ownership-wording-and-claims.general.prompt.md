---
id: 0023
title: Fix Ownership Wording And Claims
stage: general
date: 2026-10-06
surface: agent
model: claude-opus-5-5
feature: none
branch: main
user: Dilawar Shafiq
command: (chat) fix it all
labels: ["xehr-llc", "copy", "legal-pages", "compliance-claims", "deploy"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/components/About.tsx
 - src/components/Capabilities.tsx
 - src/data/pageContent.json
 - src/pages/Terms.tsx
 - src/pages/HIPAA.tsx
 - src/pages/HealthcareIT.tsx
 - src/pages/Security.tsx
 - src/pages/Privacy.tsx
tests:
 - npm run build -> success
 - grep "Type II|Certified" -> only Google Cloud data-centre lines remain
---

## Prompt

fix it all

## Response

Replaced every "our xEHR / our flagship RCM Employee" phrasing with "built for XEHR LLC";
Terms section 5 now defers rights in the three products to Autosapien's agreement with XEHR LLC;
HIPAA page drops "As a Business Associate" and "we execute BAAs with all covered entities"
(now: wherever we handle PHI, under a BAA); removed unverified SOC 2 Type II, SOC 2 Certified,
ONC Certified and "millions of patients" claims. Deployed to GitHub Pages.
