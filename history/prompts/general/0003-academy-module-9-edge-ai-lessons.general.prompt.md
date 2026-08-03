---
id: 0003
title: Academy Module 9 Edge AI Lessons
stage: general
date: 2026-05-31
surface: agent
model: claude-opus-4-8[1m]
feature: none
branch: main
user: dilawar.gopang@gmail.com
command: author-academy-lessons
labels: ["academy", "edge-ai", "content", "physical-ai"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - C:\Users\TechTiesIbrahim\physicalaibook\authored\physical-ai\9-1.md
 - C:\Users\TechTiesIbrahim\physicalaibook\authored\physical-ai\9-2.md
 - C:\Users\TechTiesIbrahim\physicalaibook\authored\physical-ai\9-3.md
tests:
 - none
---

## Prompt

You are authoring lessons for Autosapien Academy, a practical, build-to-learn robotics textbook. Write full-prose Markdown lessons for ONE module.

DATA SOURCE: Read C:\Users\TechTiesIbrahim\autosap_website\src\data\academyData.ts and find module number 9 (slug 'edge-ai-onboard-intelligence'). It has lessons 9.1 through 9.3.
STYLE EXEMPLAR: Read C:\Users\TechTiesIbrahim\physicalaibook\authored\physical-ai\2-1.md to match tone, depth, and structure exactly.

For EACH lesson in module 9, write a Markdown body and save to:
  C:\Users\TechTiesIbrahim\physicalaibook\authored\physical-ai\<slug>.md
where <slug> = lesson id lowercased with non-alphanumeric -> '-'. So '9.1' -> '9-1.md', etc.

RULES:
- GROUND everything strictly in that lesson's overview, keyInsights, lab, and papers. Do NOT invent numbers, specs, dates, or citations beyond what is given. Add explanation/reasoning, but every concrete claim must trace to the data.
- You MAY use WebSearch/WebFetch to ground references to current (2026) real edge-AI hardware/tools (e.g., NVIDIA Jetson AGX Orin, TensorRT, quantization, event cameras) — verify; never fabricate.
- Practical-guide style: SYNTHESIZE cited papers into applied guidance (do NOT say "go read the paper"). Present options, then a clear honest recommendation. End each lesson with something the reader builds/computes/decides.
- Do NOT reproduce copyrighted text; write original prose, cite papers by name only.
- STRUCTURE (Markdown, START AT LEVEL-2 HEADINGS — no H1, no frontmatter): short motivating intro (no heading); 3-5 '## ' sections; a '## Putting it into practice' section with numbered steps; a '## Key takeaways' section (4-6 bullets). 900-1200 words.

Return a one-line list of files created.

## Response snapshot

Authored three full-prose Markdown lessons for Academy Module 9 (Edge AI & On-Board Intelligence), matching the 2-1.md exemplar tone and structure. 9-1 covers NVIDIA Jetson AGX Orin specs, power modes, realistic throughput, and Isaac ROS. 9-2 covers model compression (INT4/AWQ quantization, distillation, structured pruning, TensorRT) with a stacked recommendation. 9-3 covers neuromorphic computing (Loihi 2, event cameras, SNN safety co-processor). All concrete claims traced to academyData.ts module 9; verified Orin (275 TOPS INT8, 204 GB/s, 64GB LPDDR5) and Loihi 2 (1M neurons, 0.5W, ~100x GPU efficiency) facts via WebSearch.

## Outcome

- ✅ Impact: Three lessons (9.1–9.3) authored, ~1000–1100 words each, grounded in data.
- 🧪 Tests: none (content authoring)
- 📁 Files: 9-1.md, 9-2.md, 9-3.md in physicalaibook/authored/physical-ai/
- 🔁 Next prompts: Author remaining modules (e.g., module 10 roadmap lessons).
- 🧠 Reflection: Data was internally consistent and matched verified 2026 hardware specs; no invention required.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
