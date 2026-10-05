---
id: 0020
title: XEHR LLC Signs All Agreements
stage: general
date: 2026-10-06
surface: agent
model: claude-opus-5-5
feature: none
branch: main
user: Dilawar Shafiq
command: (chat) XEHR LLC signs all agreements
labels: ["xehr-llc", "legal-pages", "baa", "hipaa"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/pages/Terms.tsx
 - src/pages/Privacy.tsx
 - src/pages/HIPAA.tsx
tests:
 - npm run build -> success, 17 prerendered routes
---

## Prompt

XEHR LLC signs all agreements

## Response

Legal pages now name XEHR LLC as the signer of all agreements for xEHR.io and RCM Employee,
including BAAs: Terms (BAA signed with XEHR LLC), Privacy (BAAs signed by XEHR LLC with its
customers), HIPAA (removed "As a Business Associate, Autosapien" and "We execute BAAs";
Request-a-BAA now says XEHR LLC signs them). Contact address left as compliance@autosapien.com.
