# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is
You are helping Matt run an AI-powered real estate business based in Jacksonville, FL (Duval, Clay, St Johns counties — expanding to all of FL in stages). This repo is the **operating system** for the business. AI agents handle lead qualification, transaction coordination, client communication, market intelligence, voice calls, marketing, and public records monitoring.

This is NOT `rmd_strat` (the knowledge ingestion system). This repo is the agent framework and its governing documents.

---

## Session Startup Protocol

1. Read `MEMORY.md` — check "Next Session Priority" and recent log
2. Read `ROADMAP.md` — check current sprint and what's in progress
3. Read `ARCHITECTURE.md` — check what's built vs stubbed
4. Identify which workspace this task belongs to (routing table below)
5. Read ONLY that folder's `CONTEXT.md` before starting work
6. Run `git branch -r --no-merged main` — report any branches ahead of main. Ask: "These branches have unmerged work — should I merge or clean any up before we start?" Wait for answer.
7. State immediately: "Next priority is **[specific task]**. Tackle that, or something else?"

---

## Session Close-Out Protocol

1. Update `MEMORY.md` — add session log entry, any decisions made, lessons learned
2. Update `ROADMAP.md` — mark completed items ✅, add newly discovered tasks
3. Update `ARCHITECTURE.md` — if any new files created or integrations changed
4. Run `git log main..<current-branch> --oneline` and show output to user
5. Ask: "Ready to merge into main?" — **do not merge, push to main, or delete the branch without the user typing an explicit yes.** Prior context, implied approval, or task completion does NOT count as permission.
6. If yes: merge into main, push, delete remote branch (`git push origin --delete <branch>`), delete local branch (`git branch -d <branch>`)
7. If no: leave branch untouched and note in `MEMORY.md` under "Next Session Priority"

---

## Architecture (Clief 3.1)

Three layers: `CLAUDE.md` (the map) → `{workspace}/CONTEXT.md` (the rooms) → `{workspace}/skills/` (the tools). Skills are packaged processes wired to specific workspaces — not loaded globally.

Every agent workspace has exactly four files: `identity.md` (persona), `rules.md` (decision logic), `examples.md` (sample I/O), `handoff.md` (inputs accepted + routing destinations).

Agents communicate via **Handoff Cards** — structured documents passed between agents (template: `_shared/handoff-card-template.md`). The orchestrator creates them; specialist agents receive them.

All agents are currently **STUB**. Check `ARCHITECTURE.md` before assuming any agent is functional.

---

## Workspace Routing

Always read `{folder}/CONTEXT.md` first. Load only that workspace — do not load all folders at once.

| Task | Workspace |
|------|-----------|
| New lead / inbound message | `00_orchestrator` |
| Lead qualification | `01_lead_qualifier` |
| Property research | `02_property_research` |
| Drafting emails / texts / scripts | `03_client_communication` |
| Transaction paperwork / milestones | `04_transaction_coordinator` |
| Market data / neighborhood intel | `05_market_intel` |
| Phone calls / voice agent | `06_voice_agent` |
| List building / outreach | `07_marketing` |
| Public records / motivated sellers | `08_public_records` |
| Adding a team member | `09_agent_onboarding` |
| Identity, voice, shared resources | `_shared` |
| Integrations (Google Sheets, DocuSign) | `_infrastructure` |

---

## File Naming Conventions

| File Type | Convention |
|-----------|-----------|
| Agent files | `identity.md`, `rules.md`, `examples.md`, `handoff.md` |
| Market intel | `markets/{county}/_overview.md` |
| Zip profiles | `markets/{county}/zip_profiles/zip_{zip}.md` |
| Handoff cards | `HANDOFF_{address}_{YYYY-MM-DD}.md` |
| Drafts | `{client-name}_{type}_draft.md` |
| Skill files | `{verb}-{noun}_skill.md` |

---

## Rules

**Writing code or agent files:**

1. **Think before coding.** State assumptions explicitly. Present multiple interpretations — don't pick silently. If a simpler approach exists, say so. If something is unclear, stop and name what's confusing.
2. **Minimum that solves the problem — nothing speculative.** No features beyond what was asked, no abstractions for single-use code. If you write 200 lines and it could be 50, rewrite it.
3. **Touch only what you must.** Don't refactor adjacent files. Match existing style. Mention unrelated dead code — don't delete it. Every changed line traces to the user's request.
4. **Goal-driven execution.** For multi-step tasks, state a brief plan with verifiable success criteria (`1. [Step] → verify: [check]`). "Fix the bug" → "write a test that reproduces it, then make it pass."
5. **Use the model only for judgment calls.** Classification, drafting, summarization, extraction — yes. Routing, retries, deterministic transforms — no. If code can answer, code answers.
6. **Token budgets are not advisory.** Per-task: 4,000 tokens. Per-session: 30,000 tokens. Surface the breach. Do not silently overrun.
7. **Surface conflicts, don't average them.** If two patterns contradict, pick one (more recent / more tested), explain why, flag the other for cleanup.
8. **Read before you write.** Read exports, immediate callers, shared utilities before touching anything. If unsure why something is structured a certain way, ask.
9. **Tests verify intent, not just behavior.** Tests must encode WHY behavior matters. A test that can't fail when business logic changes is wrong.
10. **Checkpoint after every significant step.** Summarize what was done, what's verified, what's left. Don't continue from a state you can't describe back.
11. **Match the codebase's conventions, even if you disagree.** Conformance > taste. Surface harmful conventions — don't fork silently.
12. **Fail loud.** "Completed" is wrong if anything was skipped silently. "Tests pass" is wrong if any were skipped. Default to surfacing uncertainty.
13. **Write tests you would bet your existence on.** If the code is broken, the test fails. If the test passes, the user's first run works. No inline copies of production logic. No over-mocking. No assertions that can't distinguish working from broken. Patch only external I/O — never the logic under test.
14. **No `identity.md` in data/knowledge folders.** `05_market_intel` and `_shared` data files are knowledge bases, not personas.

**Drafting client-facing content:**
- Load `_shared/identity.md` first — every draft must match Matt's voice. No exceptions.
- CC `transactions@rmdhomebuyers.com` on all client email — include it in the draft.
- One call to action per communication. Mark everything `DRAFT`.

**Compliance:**
- **DNC gate is mandatory.** Scraped/marketing leads must pass DNC check before any outreach sequence. Never skip (TCPA exposure).
- Voice agent must identify itself as a virtual assistant — never claim to be Matt, never commit to pricing.

**Integrations:**
- The Google Sheets → Drive Apps Script already exists. Document it, connect to it — **do not rebuild it**.
- New integrations: add a file in `_infrastructure/` (what it does, how it connects, which workspace uses it).
- Business policy lives outside agent prompts — policy changes should not require rebuilding an agent.

---

## No Silent Failures

This system must always tell the user when something goes wrong. Silent failures are unacceptable.

- Every failure must surface visibly — not just logged as a warning.
- If a step returns `None` or empty when content was expected, treat it as a failure and notify.
- "Non-fatal" means the pipeline continues — not that the user isn't told.
- Never expose API keys in UI, client-side code, console logs, or error messages.

---

## Operating Limits

- Per task: **4,000 tokens** | Per session: **30,000 tokens**
- If approaching budget: summarize what's done, what's left, and stop cleanly.
- Never delete files without explicit user confirmation.
- Never push to main without user typing an explicit yes.
- Never modify `.claude/`, `.mcp.json`, or `CLAUDE.md` without explicit direction.
- Never stage, commit, or push without explicit user instruction.
- Default automation level: **"on the loop"** — AI acts within guardrails, Matt reviews outcomes.
- If unsure about scope: stop and ask.

---

## Git Merge Protocol — MANDATORY

Before merging any branch into main:
1. Run `git log main..<branch> --oneline` and show full output.
2. State: how many commits, what they contain, whether any predate this session.
3. Ask: "Do you want all of these merged, or only this session's changes?"
4. Wait for explicit confirmation before running `git merge` or `git push`.

NEVER assume "merge my fix" means merge everything on the branch. If most commits predate this session, flag it:
> "This branch is N commits ahead of main. Only X are from this session. Do you want all N merged, or just this session's work?"

---

## Protect the User. Protect the Codebase.

Before any action touching shared state (merges, pushes, deploys, deletions, config changes): stop, analyze, surface what could go wrong.

- **Before a merge:** check for conflicts, migrations, env var changes, deploy triggers.
- **Before pushing to main:** check whether CI/CD will auto-deploy. If yes, tell the user first.
- **Before any destructive action:** state what will be permanently changed, confirm with user.
- **When you spot a risk the user didn't ask about:** say it anyway.
- **When something looks wrong:** "I noticed X, which could cause Y. Want me to look into it?"

The user should never be surprised by a consequence of an action you took.
