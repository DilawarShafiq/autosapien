# Ready-to-use outbound sequences

_Referenced by `growth/GTM-STRATEGY.md` Move 2. Copy into ActiveCampaign. Merge
fields in `{{...}}`. Keep sends ≤50/day/inbox; send from a real person._

## Sequence A — Medical Billing wedge (the free denial audit)

**Target:** practice owner / office manager, 1–15 providers, starter specialties.
**Goal of the sequence:** book a free 20-claim denial audit. Nothing else.

**Email 1 — Day 0 — subject: `{{practice_specialty}} claims — quick question`**
> Hi {{first_name}},
>
> I run billing for {{specialty}} practices and I keep seeing the same thing:
> 8–15% of clean-looking claims get denied for reasons the practice never sees.
>
> Would you be open to a free audit of your last 20 claims? No commitment — I'll
> show you exactly where money is leaking and you keep the findings whether or not
> we ever work together.
>
> Worth 20 minutes?
> — Dilawar

**Email 2 — Day 3 — subject: `re: {{practice_specialty}} claims`**
> Quick follow-up, {{first_name}} — the audit takes me about a day and costs you
> nothing. Last {{specialty}} practice I did this for was losing ~$4k/month to two
> fixable denial codes. Happy to just send you the checklist I use if you'd rather
> DIY it. Which is more useful?

**Email 3 — Day 7 — subject: `the 3 denial codes that hit {{specialty}} hardest`**
> Value-only email. List the 3 most common denial reasons for that specialty +
> how to fix each. Soft CTA at the end: "want me to check these against your actual
> claims? Reply 'audit'."

**LinkedIn — Day 8:** connect with a one-line note referencing the audit offer.

**Email 4 — Day 14 — subject: `closing the loop`**
> Breakup email. "I'll stop here — if denials ever become a fire, the audit offer
> stands. Reply and I'll jump on it." Breakup emails get the highest reply rate of
> the sequence; keep it genuinely low-pressure.

---

## Sequence B — RCM Employee (backlog-clearing, augmentation framing)

**Target:** billing-company owner / RCM director / practice CFO.
**Lead offer:** clear a denial backlog as a paid pilot, not "replace your team."

**Email 1 — subject: `your denial backlog`**
> Hi {{first_name}}, most {{org_type}} teams I talk to have a denial backlog they
> can never fully catch up on because live claims always come first. We run an
> autonomous RCM agent that works the backlog 24/7 and shows its work in plain
> English — so your people stay on the live queue. Open to a pilot on one payer?

Follow the same 4-touch cadence. **Never** lead with headcount reduction — lead
with backlog and overtime. Replacement is a conclusion the buyer reaches
themselves after the pilot.

---

## Sequence C — BetterCompliant (the "someone asked for a SOC 2" trigger)

**Target:** founder / compliance lead at healthcare SaaS or DME provider.
**Lead magnet:** free HIPAA readiness self-assessment (30 questions → gap list).

**Email 1 — subject: `HIPAA readiness — 30-question check`**
> Hi {{first_name}}, if a customer or investor has asked you for HIPAA/SOC 2
> evidence lately, here's a free 30-question self-assessment that scores your
> current posture and lists the gaps. No signup wall. If the gaps look scary, we
> fix them continuously so audits stop being fire drills. Want the link?

Trigger this sequence off intent signals where possible: recent funding, a
"security" or "compliance" job posting, a DME/health-tech launch.

---

## Deliverability guardrails (do not skip)

- Separate cold-outbound domain (e.g. `try-autosapien.com`), not the primary.
- Warm it for 2–3 weeks before volume; SPF/DKIM/DMARC set.
- Plain-text look, one link max, real signature, easy opt-out.
- ≤50/day/inbox; scale by adding inboxes, not by raising per-inbox volume.
- CAN-SPAM: physical address + opt-out in every email. We are B2B, but comply anyway.
