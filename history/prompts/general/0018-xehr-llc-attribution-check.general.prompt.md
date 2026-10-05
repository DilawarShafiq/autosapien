---
id: 0018
title: XEHR LLC Attribution Check
stage: general
date: 2026-10-06
surface: agent
model: claude-opus-5-5
feature: none
branch: main
user: Dilawar Shafiq
command: (chat) Autosapien developed xehr, rcmemployee and better complain for XEHR LLC: does it show it or no?
labels: ["attribution", "xehr-llc", "products", "legal-pages"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - none (read-only audit)
tests:
 - grep "XEHR LLC" across src -> 0 matches
---

## Prompt

Autosapien developed xehr, rcmemployee and better complain for XEHR LLC: does it show it or no?

## Response

No. XEHR LLC is not named anywhere on the site. xEHR.io, RCM Employee and BetterCompliant
are presented as Autosapien's own products ("Our Products", "our flagship", "our AI-native EHR"),
and Terms.tsx / Privacy.tsx state that Autosapien (Pvt) Ltd provides xehr.io and rcmemployee.com
and processes PHI for them — which contradicts XEHR LLC owning the products. Offered to add
"built by Autosapien for XEHR LLC" attribution and correct the legal pages; no edits made.
