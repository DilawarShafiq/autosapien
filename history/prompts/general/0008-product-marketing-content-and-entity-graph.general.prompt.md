---
id: 0008
title: Product marketing content and entity graph
stage: general
date: 2026-07-29
surface: agent
model: claude-opus-5
feature: none
branch: main
user: Dilawar Shafiq
command: general
labels: ["seo", "content", "structured-data", "internal-linking", "branding"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/data/pageContent.json
 - src/components/PageContent.tsx
 - src/components/Footer.tsx
 - src/components/Services.tsx
 - src/pages/HealthcareIT.tsx
 - src/pages/AgenticAI.tsx
 - src/pages/RCMAutomation.tsx
 - src/pages/MedicalCoding.tsx
 - src/pages/SmartScheduling.tsx
 - scripts/postbuild.cjs
tests:
 - npm run build -> 17 prerendered routes, sitemap, robots
 - All 17 sitemap URLs verified live -> 17 OK, 0 failing
 - FAQPage schema live on /projects/rcm-automation/
 - Service schema "RCM Employee" live on /projects/agentic-ai/
 - Codename leak check across src/ and scripts/ -> CLEAN
---

## Prompt

Why my website not tell alot about US Healthcare Workflows automation, Medical Billing Automation, Medical Billing and Coding Automation with Agentic AI, Revenue Cycle Management Automation with Agentic AI? Patient Scheduling and Intake Automation with Agentic AI. We automate US Healthcare Admnistrative workflows (learn what they could be enhance my website SEO

does google see xEHR, RCM Employee and other things like that are in my projects?

Google Should focus more on my products and academy is last thats fine

Great you were doing all great: Just learn what we have already done so you market our products

Remove only Serving USA from my website. it is in footer

Agent SMITH shall not appeal but say: Custom AI Agent Developed and completed the project, as we have alreayd shipped. It automates Active Campaign for patient leads

deploye all live now

## Response snapshot

**Keyword audit.** Every target phrase returned zero occurrences across all pages and
components: "medical billing automation", "revenue cycle management automation",
"medical billing and coding", "patient intake", "prior authorization",
"eligibility verification", "patient scheduling" — all 0. The RCM page's H1 was
the abbreviation "RCM Automation", which nobody searches for. Page prose was
roughly 300 words against competitors running 1,500-3,000.

**Content.** Added `src/data/pageContent.json` (long-form copy plus six FAQs per
page) and `src/components/PageContent.tsx` rendering it in the existing design
system. Each of the five healthcare pages gained two to four prose sections and
an FAQ block, appended below existing sections — 15 insertions total across the
five page files, zero deletions. First draft was generically accurate about US
healthcare but never named a product; after reading Products.tsx, Services.tsx,
Capabilities.tsx and the portfolio memory, each page gained a "What We Built"
section naming RCM Employee, xEHR.io, the X12 EDI integration service, and
migration from Athena/eCW/Kareo/NextGen/Practice Fusion.

**Entity graph.** Organization node with `@id`, `knowsAbout` topics and an
OfferCatalog naming xEHR.io, RCM Employee, BetterCompliant and Thales, plus
per-page Service/SoftwareApplication schema whose `provider` points at that node
— so the external product domains are attributed to Autosapien rather than
reading as unrelated third parties. FAQPage schema is generated from the same
JSON the components render, so copy and schema cannot drift.

**Orphan pages.** rcm-automation, medical-coding and smart-scheduling had zero
internal links from anywhere on the site, reachable only via sitemap. Added
sitewide footer links under Services. Products cards still link outward to
product domains rather than inward to the /projects/ pages — flagged, not
changed, because the user is protective of that section.

**Branding changes.** Removed "Serving USA" from the footer location line. The
formerly-NDA engagement is now shipped and publicly describable as a custom AI
agent automating ActiveCampaign for patient lead capture, routing and follow-up;
the case study label moved from "Under NDA" to "Shipped" and the status dot from
pulsing `developing` to green `active`. The internal codename remains banned from
all public surfaces and a leak check confirms it is absent.

**Search result diagnosis.** The user's screenshot showed all three brand
sitelinks pointing at Academy pages, including a "Sign Up" form. Cause: until
today autosapien.com had exactly one indexable page, so Google reached into the
subdomain for candidates. Sitelinks are algorithmic and cannot be set directly.

**Incidental finding.** A `git push` failed with `Could not resolve host:
github.com` and succeeded immediately on retry — the third DNS resolution failure
of the session after www.autosapien.com and academy.autosapien.com. This is the
likely explanation for the user's earlier report that the site "went down", and
matches the pre-existing note in the hosting memory.

## Outcome

- ✅ Impact: five healthcare pages carry ~900 words plus six FAQs each with product-anchored positioning; products are attributed to the organization in structured data; three orphan pages now have sitewide internal links; all 17 URLs verified 200.
- 🧪 Tests: full sitemap sweep returned 17 OK / 0 failing; FAQPage and Service schema confirmed live; codename leak check clean.
- 📁 Files: 2 new, 8 modified. Commits 6fb0167, 765829c, 2b5b68d.
- 🔁 Next prompts: add "Learn more" internal links from Products cards to /projects/ pages; consider a blog for informational-intent content; substantiate or soften the published performance metrics.
- 🧠 Reflection: the first content draft was accurate and useless — generic industry education any competitor could publish. Reading the repo's own product data before writing marketing copy was the step that made it specific.

## Evaluation notes (flywheel)

- Failure modes observed: wrote domain-generic copy before learning the portfolio, requiring a second pass; also phrased a fixed problem in the past tense ambiguously enough that the user asked whether 404s were still outstanding.
- Graders run and results (PASS/FAIL): PASS — 17/17 live URLs, schema present, no codename leak.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): assert in postbuild that every route in ROUTES has at least one internal link from src/components, failing the build on new orphans.
