# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## What This Is
You are helping Matt run an AI-powered real estate business based in Jacksonville, FL (Duval, Clay, St Johns counties — expanding to all of FL in stages). This repo is the **operating system** for the business. AI agents handle lead qualification, transaction coordination, client communication, market intelligence, voice calls, marketing, and public records monitoring.

---

## Session Startup Protocol

1. Read `MEMORY.md` — check "Next Session Priority" and recent log
2. Read `ROADMAP.md` — check current sprint and what's in progress
3. Read `ARCHITECTURE.md` — check what's built vs stubbed
4. Identify which workspace this task belongs to (routing table below)
5. Read ONLY that folder's `CONTEXT.md` before starting work
6. Run `git branch -r --no-merged main` and report any branches ahead of main. Ask: "These branches have unmerged work — should I merge or clean any of them up before we start?" Wait for answer.
7. State immediately: "Next priority is **[specific task]**. Tackle that, or something else?"

---

## Session Close-Out Protocol

1. Update `MEMORY.md` — add session log entry, any decisions made, lessons learned
2. Update `ROADMAP.md` — mark completed items ✅, add newly discovered tasks
3. Update `ARCHITECTURE.md` — if any new files created or integrations changed
4. Run `git log main..<current-branch> --oneline` and show full output to user
5. Ask: "Ready to merge into main?" — **do not merge, push to main, or delete the branch without the user typing an explicit yes in this conversation.** Prior context, implied approval, or task completion does NOT count as permission.
6. If yes: merge into main, push, delete remote branch (`git push origin --delete <branch>`), delete local branch (`git branch -d <branch>`)
7. If no: leave branch untouched and note in `MEMORY.md` under "Next Session Priority"

---

## 3-Layer Architecture (Clief 3.1)

| Layer | File | Role |
|-------|------|------|
| 1 — The Map | `CLAUDE.md` | Session routing, naming rules, session protocols |
| 2 — The Rooms | `{workspace}/CONTEXT.md` | Workspace-level context, which files to load, which skills are active |
| 3 — The Tools | `{workspace}/skills/` | Packaged, reusable processes wired to specific workspaces |

**Agent 4-file blueprint** — every agent workspace has exactly these files:

| File | Purpose |
|------|---------|
| `identity.md` | Who the agent is, what it cares about, how it sounds |
| `rules.md` | Decision logic, constraints, routing rules |
| `examples.md` | Sample inputs → correct outputs |
| `handoff.md` | What this agent accepts as input and where it routes output |

**Inter-agent communication unit:** Handoff Cards. Agents pass structured Handoff Cards (see `_shared/handoff-card-template.md`) rather than raw text. The orchestrator creates them; specialist agents receive them.

**Agent status:** All agents are currently STUB. Check `ARCHITECTURE.md` for current status before assuming any agent is functional.

---

## Workspace Routing Table (Layer 2)

| Task | Folder | Read First |
|------|--------|------------|
| New lead / inbound message | `00_orchestrator` | `00_orchestrator/CONTEXT.md` |
| Lead qualification | `01_lead_qualifier` | `01_lead_qualifier/CONTEXT.md` |
| Property research | `02_property_research` | `02_property_research/CONTEXT.md` |
| Drafting emails / texts / scripts | `03_client_communication` | `03_client_communication/CONTEXT.md` |
| Transaction paperwork / milestones | `04_transaction_coordinator` | `04_transaction_coordinator/CONTEXT.md` |
| Market data / neighborhood intel | `05_market_intel` | `05_market_intel/CONTEXT.md` |
| Phone calls / voice agent | `06_voice_agent` | `06_voice_agent/CONTEXT.md` |
| List building / outreach | `07_marketing` | `07_marketing/CONTEXT.md` |
| Public records / motivated sellers | `08_public_records` | `08_public_records/CONTEXT.md` |
| Adding a team member | `09_agent_onboarding` | `09_agent_onboarding/CONTEXT.md` |
| Identity, voice, shared resources | `_shared` | `_shared/CONTEXT.md` |
| Integrations (Google Sheets, DocuSign) | `_infrastructure` | `_infrastructure/CONTEXT.md` |

**Do NOT load all agent folders at once.** Load only the relevant workspace's CONTEXT.md + files needed for the task.

---

## Skills (Layer 3)

Skills are packaged processes wired into specific workspaces — not loaded globally. Each workspace's `CONTEXT.md` lists which skills are active there. New skills are added to the workspace's `skills/` folder and registered in that workspace's `CONTEXT.md`.

---

## File Naming Conventions

| File Type | Convention | Example |
|-----------|-----------|---------|
| Agent files | Fixed names | `identity.md`, `rules.md`, `examples.md`, `handoff.md` |
| Market intel | `markets/{county}/_overview.md` | `markets/duval/_overview.md` |
| Zip profiles | `markets/{county}/zip_profiles/zip_{zip}.md` | `zip_profiles/zip_32224.md` |
| Handoff cards | `HANDOFF_{address}_{YYYY-MM-DD}.md` | `HANDOFF_123MainSt_2026-05-25.md` |
| Drafts | `{client-name}_{type}_draft.md` | `johnson_intro-email_draft.md` |
| Skill files | `{verb}-{noun}_skill.md` | `create-docusign-package_skill.md` |

---

## Coding Rules

These apply when writing automation scripts, n8n flows, or any code in this repo.

### Rule 1 — Think before coding

Before implementing anything:
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop and name what's confusing.

### Rule 2 — Simplicity first

Minimum that solves the problem. Nothing speculative.
- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" that wasn't requested.
- No error handling for impossible scenarios.

If you write 200 lines and it could be 50, rewrite it.

### Rule 3 — Touch only what you must

Don't improve adjacent files or refactor things that aren't broken. Match existing style. Mention unrelated dead code — don't delete it. Remove only what YOUR changes made unused. Every changed line should trace to the user's request.

### Rule 4 — Goal-driven execution

For multi-step tasks, state a brief plan with verifiable success criteria:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
```
Transform vague tasks: "fix the bug" → "write a test that reproduces it, then make it pass."

### Rule 5 — Use the model only for judgment calls

Use for: classification, drafting, summarization, extraction. Do NOT use for: routing, retries, deterministic transforms. If code can answer, code answers.

### Rule 6 — Token budgets are not advisory

Per-task: 4,000 tokens. Per-session: 30,000 tokens. If approaching budget, summarize and start fresh. Surface the breach. Do not silently overrun.

### Rule 7 — Surface conflicts, don't average them

If two patterns contradict, pick one (more recent / more tested). Explain why. Flag the other for cleanup.

### Rule 8 — Read before you write

Before adding code, read exports, immediate callers, shared utilities. If unsure why existing code is structured a certain way, ask.

### Rule 9 — Tests verify intent, not just behavior

Tests must encode WHY behavior matters, not just WHAT it does. A test that can't fail when business logic changes is wrong.

### Rule 10 — Checkpoint after every significant step

Summarize what was done, what's verified, what's left. Don't continue from a state you can't describe back.

### Rule 11 — Match the codebase's conventions, even if you disagree

Conformance > taste inside the codebase. If you think a convention is harmful, surface it. Don't fork silently.

### Rule 12 — Fail loud

"Completed" is wrong if anything was skipped silently. "Tests pass" is wrong if any were skipped. Default to surfacing uncertainty, not hiding it.

### Rule 13 — Write tests you would bet your existence on

The standard: **if the code is broken, this test fails. If this test passes, the user's first run works.** That is the only bar.

Before committing a test: if I introduced the exact bug this test is meant to catch, would it fail? If the answer is "maybe," the test is not done.

- No inline copies of production logic — a copy verifies itself, not the code.
- No over-mocking — if you mock the function under test, you're testing your mock.
- No assertions that can't distinguish working from broken code.
- No tests that only pass because nothing ran.
- Patch only external I/O (HTTP, disk, LLM APIs) — never the logic under test.
- Assert on the specific outcome that matters: right file written, right URL crawled, right text in prompt.

### Rule 14 — No `identity.md` in data/knowledge folders

`05_market_intel` and `_shared` data files are knowledge bases, not personas. Do not create `identity.md` files there.

---

## Client Communication Rules

These apply whenever drafting anything that will be sent to a client or prospect.

- **Load `_shared/identity.md` first** — every draft must match Matt's voice and frame. No exceptions.
- **CC `transactions@rmdhomebuyers.com`** on all client email — put it in the draft, not just the instructions.
- **One call to action per communication.** No fluff, no filler.
- Mark all output as `DRAFT` — Matt reviews before anything goes out.

---

## Compliance Rules

- **DNC gate is mandatory.** Any lead sourced from public records or marketing lists MUST pass a DNC (Do Not Call) check before entering any outreach sequence. Scraped lead → DNC check → `01_lead_qualifier`. Never skip this step (TCPA exposure).
- **Voice agent transparency.** The voice agent must identify itself as a virtual assistant on every call — never claim to be Matt.
- **No pricing commitments.** The voice agent may never negotiate pricing or make commitments. Escalate to Matt.

---

## Integration Notes

- **Google Sheets → Drive automation already exists** (Apps Script, set up by Matt). It auto-creates a Google Drive folder when a new transaction row is added. Document it and connect to it — **do not rebuild it**.
- When adding a new external service, create a file in `_infrastructure/` documenting: what it does, how it connects, which workspace uses it, and credential storage notes.
- Business policy is kept **outside** agent prompts — policy changes should not require rebuilding an agent.

---

## Token Budget

- Per task: **4,000 tokens**
- Per session: **30,000 tokens**
- If approaching budget: summarize what's done, what's left, and stop cleanly

Load only what's needed. Do not read entire folder trees speculatively.

---

## No Silent Failures

**This system must always tell the user when something goes wrong.** Silent failures are unacceptable.

- Every `except` block that catches a real failure MUST surface the error visibly — not just log a warning.
- If a pipeline step returns `None` or an empty result when content was expected, treat that as a failure and notify.
- "Non-fatal" does NOT mean "silent." Non-fatal means the pipeline continues — but the user is still told what failed and why.
- Never expose API keys in the UI, client-side code, browser console logs, or error messages. API keys belong only in server-side code or environment variables.

---

## Agent Safety

- Never delete or move files/directories without explicit user confirmation in chat
- Never run destructive git operations (`git reset --hard`, `git clean`, `git push --force`) without user approval
- Never push to main without user typing an explicit yes
- Never send client-facing communications — DRAFT only
- Never modify `.claude/` directory structure, `.mcp.json`, or `CLAUDE.md` without explicit user direction
- Never stage, commit, or push changes without explicit user instruction
- Default automation level: **"on the loop"** — AI acts within guardrails, Matt reviews outcomes
- If unsure about scope: stop and ask

Permitted without asking: update `MEMORY.md`, `ROADMAP.md`, `ARCHITECTURE.md` as part of normal workflow; read any project file for context.

If destructive changes are discovered: stop, report specifics, request permission before recovery steps.

---

## Git Merge Protocol — MANDATORY

Before merging ANY branch into main:

1. Run `git log main..<branch> --oneline` and show full output
2. State: how many commits, what they contain, whether any predate this session
3. Ask: "Do you want all of these merged, or only this session's changes?"
4. Wait for explicit confirmation before running `git merge` or `git push`

NEVER assume "merge my fix into main" means merge everything on the branch. Feature branches accumulate history.

If a branch is many commits ahead and most predate this session, flag it:
> "This branch is N commits ahead of main. Only 1 of those is from this session. The rest are older work. Do you want me to merge all N commits, or just cherry-pick the fix from this session?"

---

## Protect the User. Protect the Codebase.

Before any action touching shared state (merges, pushes, deploys, file deletions, config changes, dependency updates): stop, analyze, surface what could go wrong. Do not proceed silently.

- **Before a merge:** Check for conflicts, migrations, env var changes, or deploy triggers the user may not be aware of.
- **Before a push to main:** Check whether CI/CD will auto-deploy. If yes, tell the user first.
- **Before any destructive action:** State what will be permanently changed or lost, and confirm.
- **When you spot a risk the user didn't ask about:** Say it anyway — security issues, broken configs, missing env vars, silent failure paths.
- **When something looks wrong:** "I noticed X, which could cause Y. Want me to look into it?"

The user should never be surprised by a consequence of an action you took. If there's any doubt about blast radius, ask first.
