---
id: 0010
title: Delete Academy Auth And Chat Stack
stage: general
date: 2026-08-03
surface: agent
model: claude-opus-5
feature: none
branch: main
user: dilawar.gopang@gmail.com
command: (chat) delete remaining Academy sign in/sign up code
labels: ["academy", "docusaurus", "auth", "cleanup", "dead-code"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - C:\Users\TechTiesIbrahim\physicalaibook (commit 91a3532 — 34 files, +13/-4848)
 - deleted src/components/Auth/{LoginModal,ProfileForm,ProtectedRoute,UserMenu,client}
 - deleted src/contexts/{AuthContext,ChatContext}.tsx
 - deleted src/components/ChatBot/**, TextSelectionHandler.{js,tsx}
 - deleted src/components/ChapterTools/** + orphaned duplicate at components root
 - deleted src/api/client.ts, src/lib/{auth-client,auth,db}.ts, src/types/index.ts
 - deleted src/theme/UserMenu.js
 - deleted server.ts, init-db.ts, src/{auth,database,schema}.ts
 - deleted .env.local.example, .env.production
 - modified src/theme/Root.js, src/theme/MDXComponents.js, src/css/custom.css, package.json
tests:
 - npm run build (docusaurus) — exit 0
 - grep build/ for "sign up|signup|please sign in|chat-widget-container|localhost:8000" — 0 matches
 - build/signup, build/signin — absent
 - build/sitemap.xml — 0 signup/signin entries
 - npm run typecheck — 4 errors, all pre-existing and unrelated (JSX namespace in
   BooksBar.tsx + pages/index.tsx; stale ../../autosapien path in scripts/gen-books.new.ts)
---

## Prompt

yes delete it

[follow-up, mid-turn] there should be no sign in sign up

## Response snapshot

Discovery changed the scope. `/signup` and `/signin` were already 404 (PHR 0009), but the **deployed
bundle still shipped a live sign-in prompt**: `ChatBot.tsx` rendered a fixed 🤖 button on every page
whose only behavior when logged out was `alert("Please sign in to use the AI Assistant")`. Confirmed
by grepping the live bundle `main.d1319a62.js` — 1 hit for that string, plus `localhost:8000`.

Two facts made full deletion the right call rather than ungating:
- `src/api/client.ts` resolves to `http://localhost:8000/api/v1`; academy.autosapien.com is static
  GitHub Pages with no deployed backend, so ChatBot/ChapterTools could never work in production.
- The `<chapter-tools>` MDX tag was referenced in **0** book files.

Asked the user to choose (delete / ungate / stop-rendering); they chose delete.

Also found and removed a second, separate auth backend not mentioned in PHR 0005: `server.ts`
(Better Auth + Express, `/api/auth/*` and progress endpoints) with `src/{auth,database,schema}.ts`
(Drizzle + SQLite) and `init-db.ts`. Not deployed, but it is the sign-up server.

Dependency removal: better-auth, better-sqlite3, drizzle-orm, express, cors, concurrently,
@tanstack/react-query, react-markdown + their @types — 92 packages gone from the lockfile.
`backend/` (FastAPI) left untouched. `tsx` kept (used by `scripts/gen-books.ts`).

Committed 91a3532 on main. NOT pushed — awaiting user confirmation, since push triggers
.github/workflows/deploy.yml and auto-deploys to academy.autosapien.com.

## Outcome

- ✅ Impact: Zero sign-in/sign-up code remains in the Academy source or build output; the last live
  sign-in prompt (the ChatBot alert) is gone.
- 🧪 Tests: build exit 0; 5 grep/route/sitemap assertions on `build/` all clean.
- 📁 Files: 34 changed (+13 / −4848).
- 🔁 Next prompts: (1) push to deploy; (2) Search Console removal for the cached /signup URL;
  (3) fix the 4 pre-existing typecheck errors (JSX namespace + stale gen-books.new.ts path).
- 🧠 Reflection: "Remove the sign-up page" and "remove sign-up" are different scopes. Deleting the
  routes in PHR 0005 left the auth *runtime* shipping to production. Grepping the **deployed bundle**,
  not just the source tree, is what surfaced it.

## Evaluation notes (flywheel)

- Failure modes observed: the naive fix (delete `components/Auth/**` + `AuthContext`) would have broken
  the build — `ChatBot.tsx` and `ChapterTools.tsx` both import `useAuth`, and both are reachable from
  `Root.js` / `MDXComponents.js`. Import-graph tracing before deletion was necessary.
- Graders run and results (PASS/FAIL): build PASS; build-output grep PASS; typecheck PRE-EXISTING FAIL
  (unrelated, verified by file — no error references a deleted module).
- Prompt variant (if applicable): used AskUserQuestion for the ChatBot fork rather than assuming.
- Next experiment (smallest change to try): after any "remove feature X" task, grep the *live*
  deployed bundle for X's strings as the acceptance check, not the source tree.
