# Autosapien Go-To-Market & Lead-Generation Strategy

_Owner: Dilawar. Drafted by Mulazim, 2026-08-13. This is the first written strategy — until now we had products and a website, but no documented demand-gen plan._

## The honest starting point

We sell four things and they are **not four separate businesses** — they are one
healthcare-revenue story sold to overlapping buyers:

| Offering | Site | Who buys | Core promise (from the live site) |
|---|---|---|---|
| **xEHR.io** | xehr.io | Independent / small-group US practices | AI clinical documentation + autonomous RCM + FHIR R4, "replaces the legacy stack, pays for itself" |
| **RCM Employee** | rcmemployee.com | Billing companies, RCM depts, practices with in-house billing | An autonomous AI FTE for eligibility→coding→claims→denials→posting, "productivity without headcount" |
| **BetterCompliant** | bettercompliant.com | Healthcare orgs + regulated SaaS, DME providers | Continuous HIPAA/SOC2/ISO compliance as a living dashboard, "audit-ready every day" |
| **Medical Billing (service)** | (service, delivered) | Practices wanting outsourced billing | Done-for-you billing — this is **cash now** and the **wedge** for the three products |

The strategic insight that shapes everything below: **the Medical Billing service
is the wedge, and the three SaaS products are the expansion.** One practice that
trusts us with their billing is a warm buyer for xEHR (the EHR under the billing),
RCM Employee (automating the billing they already outsourced to us), and
BetterCompliant (the HIPAA posture they must maintain). We should stop marketing
four things to four cold audiences and instead **land billing, then expand.**

---

## Part 1 — The three highest-leverage moves (do these first)

Dilawar's scarce resource is time, not skill. So this is not a 40-item menu at the
top — it is the three moves with the best return per hour, in order. The full menu
is Part 3.

### Move 1 — Programmatic specialty×state SEO (highest leverage, lowest ongoing time)

The commit log already shows 8 specialty billing pages shipped (behavioral health,
PT, hospital, DME, home health, urgent care, lab, ambulance). That was the right
instinct — **now industrialize it.**

- Generate a page per **(specialty × state)** for medical billing: e.g.
  "Behavioral Health Medical Billing in Texas", "PT Billing in Florida". ~30
  specialties × 10 priority states = 300 long-tail pages that each rank for a
  buyer typing exactly that.
- Each page: local pain (state Medicaid quirks, top payers), our denial-rate
  claim, a specialty ROI number, one CTA → book a billing audit.
- **Why it fits us:** we own content-generation compute (zara_ai, local RTX). The
  marginal cost of page #300 is near zero. This is the one channel where our
  AI stack is a genuine unfair advantage over billing competitors who hand-write
  pages.
- **Guardrail:** thin/duplicate programmatic pages get penalized. Each page needs
  ≥1 genuinely local fact and a unique ROI figure. Generate, then have a human
  (or a second model as reviewer) reject near-duplicates before publishing.
- **Effort:** one build sprint to template it; then near-passive. **This is the
  compounding asset.**

### Move 2 — Outbound to a tightly-defined list, run through ActiveCampaign

We already have ActiveCampaign as the CRM. It is under-used as an outbound engine.

- **List:** US practices in 3 starter specialties where billing pain is worst and
  our proof is strongest (suggest: **behavioral health, PT, urgent care**). Source
  from NPI registry (public, free) filtered by taxonomy + state; enrich with
  practice email/site.
- **Sequence (billing wedge, not SaaS):** 4-touch email + 1 LinkedIn. The offer is
  a **free 20-claim denial audit**, not "buy our EHR." Low commitment, high signal.
- **Sender:** warm the domain, send from a person, ≤50/day/inbox to protect
  deliverability. This is a marathon, not a blast.
- **Effort:** I (Mulazim) can build the NPI-sourced list and draft the whole
  sequence; Dilawar decides send volume and does the calls that get booked.

_Ready-to-use sequence copy is in `growth/outbound-sequences.md`._

### Move 3 — Turn the billing service into an expansion machine

Every billing client is a captive audience for the three products. Build the
**cross-sell path** as an operational default, not an afterthought:

1. Land billing client → run their claims for 60 days → produce a **savings +
   denial-rate report** (proof).
2. That report is the sales asset: "We recovered $X. Here is where the leak was."
3. Then the natural next questions sell themselves:
   - "Your EHR is the leak" → **xEHR.io**
   - "You still pay 3 billers for what we automate" → **RCM Employee**
   - "Your last HIPAA risk assessment was 2 years ago" → **BetterCompliant**
- **Effort:** near-zero new marketing — it is a playbook applied to clients we
  already have. Highest conversion rate of anything here because it is warm.

---

## Part 2 — Positioning & ICP, per offering

Cold outreach fails when the message is generic. One sentence of who + one of pain,
per product. Use these verbatim as email subject-line and ad-headline seeds.

**xEHR.io** — _For the independent US practice that hates its EHR._
Buyer: physician-owner or practice manager, 1–15 providers, currently on
eClinicalWorks / Athena / Kareo / Epic-lite. Pain: 2+ hours/day of documentation,
RCM leakage they can't see, per-provider EHR fees. Wedge line: "The EHR that
documents the visit and files the claim while you see the next patient."

**RCM Employee** — _For the billing manager drowning in denials._
Buyer: RCM director / billing-company owner / practice CFO. Pain: can't hire fast
enough, denial backlog, overtime, staff turnover. Wedge line: "A billing FTE that
works 24/7, never quits, and shows its work in plain English." Sell **augmentation
first** ("clear your denial backlog"), not replacement — replacement scares the
person who has to approve it.

**BetterCompliant** — _For the health-tech founder who just got asked for a SOC 2._
Buyer: founder/CISO/compliance lead at a healthcare SaaS or DME provider. Pain: a
customer or investor demanded HIPAA/SOC2/ISO evidence and they have a spreadsheet
and dread. Wedge line: "Audit-ready every day — not a 6-week fire drill at renewal."
Lead magnet: free **HIPAA readiness self-assessment** (30 questions → score → gap
list → CTA).

**Medical Billing service** — _For the practice tired of surprise write-offs._
Buyer: practice owner. Pain: they don't trust their current biller and can't tell
if money is being left on the table. Wedge line/offer: **free denial audit on your
last 20 claims** — the single best top-of-funnel offer we have because it costs the
prospect nothing and shows them cash they're losing.

---

## Part 3 — The full channel menu (breadth, prioritized)

Ranked roughly by leverage. Green = do now, the rest as capacity allows.

**Tier A — do now (in Part 1 above):** programmatic SEO · targeted outbound ·
billing→SaaS expansion.

**Tier B — high value, moderate effort**
- **Comparison / alternative pages:** "xEHR vs eClinicalWorks", "RCM Employee vs
  hiring an in-house biller", "BetterCompliant vs Vanta for healthcare." Buyers in
  evaluation mode search these exact strings.
- **ROI calculators as lead magnets:** documentation-time calculator (xEHR),
  denial-cost calculator (RCM), compliance-fine-exposure calculator
  (BetterCompliant). Gated by email → straight into ActiveCampaign.
- **LinkedIn founder-led content:** Dilawar posts the real numbers ("we cut a PT
  clinic's denial rate from 12% to 4%"). Healthcare buyers trust a named operator
  over a brand. 2 posts/week, I can draft from client data.
- **Directory / marketplace presence:** Capterra, G2, Software Advice for the
  three SaaS; medical-billing directories for the service. Reviews from billing
  clients feed all four.

**Tier C — channel & partnership (higher effort, compounding)**
- **MSO / DSO / billing-company partnerships:** they have the practices; we have
  the automation. Revenue-share or white-label RCM Employee.
- **Specialty-association sponsorships / webinars:** APTA (PT), behavioral-health
  associations, etc. One webinar → a warm list.
- **Consultant / MSP referral network:** healthcare-IT consultants who implement
  EHRs can resell BetterCompliant + xEHR.
- **Existing-repo credibility:** the `redteam-arena` / CHIMERA security work is a
  trust asset for BetterCompliant — "the company that builds compliance also
  builds the tools that test it."

**Tier D — paid, only after a channel above converts organically**
- Google Search ads on high-intent terms ("[specialty] billing service"), retarget
  site visitors, LinkedIn ads to job-title × industry. Do **not** start paid until
  one organic channel proves the funnel converts — otherwise we're buying clicks
  into a leaky funnel.

---

## Part 4 — Funnel, metrics, and a 90-day sequence

**Funnel we're building:** SEO page / cold email / referral → free audit or
calculator → discovery call → billing client → (60-day proof) → SaaS expansion.

**Numbers to track (weekly, in ActiveCampaign):** new leads by source · audits
booked · audits→clients · billing MRR · SaaS demos from billing base · SaaS MRR.
If we can't see source attribution, we're flying blind — instrument first.

**90-day sequence**
- **Days 1–15:** instrument attribution; finalize ICP + offers (this doc); build
  the NPI list for 3 specialties; template the programmatic SEO page.
- **Days 16–45:** launch outbound (50/day); publish first 50 SEO pages + 3
  comparison pages; ship the HIPAA self-assessment + one ROI calculator.
- **Days 46–90:** first billing clients closing → start the 60-day proof clock;
  first SEO pages indexing; begin LinkedIn cadence; measure which channel has the
  lowest cost-per-booked-audit and double down there.

**What I need a decision on from Dilawar** (I can't guess these):
1. Which 3 starter specialties for outbound (my pick: behavioral health, PT,
   urgent care — override if you have better proof elsewhere).
2. Outbound send volume / whether to use a dedicated cold-email domain.
3. Any paid-channel budget, or organic-only for the first 90 days.
4. Who takes the discovery calls the audits generate (you, or a hire).

---

## What this strategy deliberately does _not_ do

- It does not try to make robotics/humanoid pages generate leads — those are on the
  site for vision, not pipeline. Healthcare revenue is where the buyers and proof
  are.
- It does not start with paid ads. Every dollar there is wasted until the funnel
  converts organically once.
- It does not sell "AI replaces your staff" as the lead message. In healthcare that
  triggers the objection before the value. We sell backlog-clearing and
  found-money; automation is how, not the pitch.
