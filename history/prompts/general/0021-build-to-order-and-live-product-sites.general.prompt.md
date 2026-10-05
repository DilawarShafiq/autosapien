---
id: 0021
title: Build To Order And Live Product Sites
stage: general
date: 2026-10-06
surface: agent
model: claude-opus-5-5
feature: none
branch: main
user: Dilawar Shafiq
command: (chat) no I mean autosapien got order from xehr llc ... / xehr has its own website ... / autosapien serves as bpo for XEHR llc: Is it clear?
labels: ["xehr-llc", "legal-pages", "structured-data", "product-domains", "bpo"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/pages/Terms.tsx
 - src/pages/Privacy.tsx
 - src/components/Products.tsx
 - src/components/Footer.tsx
 - scripts/postbuild.cjs
tests:
 - curl xehr.io, rcmemployee.com, bettercompliant.com -> 200
 - npm run build -> success; sameAs = xehr.io / rcmemployee.com on product pages
---

## Prompt

no I mean autosapien got order from xehr llc: so autosapien developed: XEHR, BETTERCOMPLAINT AND RCM EMPLOYEE FOR THEM

xehr has its own website so is bettercomplain xehr and rcmemployee

autosapien serves as bpo for XEHR llc: Is it clear?

## Response

Reverted the BAA-signer commit (misread). Trimmed Terms/Privacy/Products copy to the stated
fact: developed by Autosapien for XEHR LLC, on order — dropped claims about who operates the
products or whose terms apply. Verified all three product sites are live and restored
PRODUCT_SITES so structured data points at them. Answered: the BPO relationship is not stated
anywhere on the site; asked for its scope before adding copy.
