---
id: "0002"
title: Research Panaversity Agent Factory Site
stage: general
date: 2026-05-30
surface: agent
model: claude-sonnet-4-6
feature: none
branch: main
user: Dilawar Shafiq
command: /sp.phr
labels: ["research", "competitive-analysis", "panaversity", "agent-factory", "ui-ux", "learning-platform"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - none
tests:
  - none
---

## Prompt

Use WebSearch and WebFetch to research the Panaversity "Agent Factory" book / course. I need:
1. What does the site look like? (URL, layout, navigation style)
2. How is content structured? (chapters, lessons, sidebar style)
3. What tone and depth does the content have? (beginner-friendly? deep technical? both?)
4. Any notable UI/UX patterns they use for free learning content
5. The actual URL if you can find it (try searching "panaversity agent factory book" or "panaversity.io agent factory")

Search and fetch what you find. Return specific observations about their content style, UI approach, and what makes it feel like a quality free learning resource.

## Response snapshot

Researched the Panaversity Agent Factory site at https://agentfactory.panaversity.org/ via WebSearch and multiple WebFetch calls across the homepage, about page, getting-started, Part 1, preface, study guide, a deep lesson page, and the changelog. Compiled detailed findings across URL/layout, sidebar navigation structure, content tone/depth, and notable UI/UX patterns including flashcard system, leaderboard, AI tutor widget, and spaced repetition study guide.

## Outcome

- ✅ Impact: Delivered a comprehensive research brief on Panaversity Agent Factory covering URL, visual layout, sidebar hierarchy, tone (hybrid manifesto/documentation), depth (intermediate-to-advanced with beginner fast-tracks), and all notable UI/UX patterns (AI copilot widget, flashcard/spaced-repetition system, leaderboard, prerequisite chains, duration indicators, changelog).
- 🧪 Tests: none
- 📁 Files: none
- 🔁 Next prompts: Use findings to design an AutoSAP learning hub or free resource section; compare against competitor learning portals; apply sidebar + spaced-repetition patterns to a proposed AutoSAP docs site.
- 🧠 Reflection: Panaversity's strongest differentiator is the layered learning pathway — crash courses for urgency, deep parts for mastery — combined with gamification (leaderboard) and an AI tutor (TutorClaw via WhatsApp), making free content feel higher-value than a typical docs site.

## Evaluation notes (flywheel)

- Failure modes observed: None significant. All WebFetch calls returned rich content. The preface page had no code blocks (expected given its narrative nature).
- Graders run and results (PASS/FAIL): PASS — full prompt preserved, stage correctly routed to general, all metadata populated.
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Add a structured output format request (e.g., "return findings as a table") to make competitive research prompts easier to compare side-by-side.
