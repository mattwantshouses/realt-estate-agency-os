# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

# Session Startup Protocol

At the start of every session, before doing anything else:

1. Read `MEMORY.md` — check "Next Session Priority" and recent session log
2. Read `ROADMAP.md` — check Current Sprint and Backlog
3. Read `ARCHITECTURE.md` — load current system state
4. **Consult the Repository Routing Map below** to identify the directories relevant to the current task and isolate your context retrieval.
5. Run `git branch -r --no-merged main` and report any branches that are ahead of main. Ask the user: "These branches have unmerged work — should I merge or clean any of them up before we start?" Wait for their answer before proceeding.

Then immediately tell the user:
> "Based on [MEMORY/ROADMAP], the next priority is **[specific action]**. Want to tackle that, or is there something else on your mind?"

Be specific — name the exact next step, not a vague category.

---

# Session Close-Out Protocol

At the end of every session, before stopping:

1. Run `git log main..<current-branch> --oneline` and show the full output to the user.
2. Ask explicitly: "Ready to merge this branch into main and delete it?"
3. **Do not merge, push to main, or delete the branch without the user typing an explicit yes in this conversation.** Prior context, implied approval, or task completion does NOT count as permission.
4. If the user says yes:
   - Merge into main and push
   - Delete the remote branch: `git push origin --delete <branch>`
   - Delete the local branch: `git branch -d <branch>`
5. If the user says no or doesn't respond: leave the branch untouched and add a note to `MEMORY.md` under "Next Session Priority" so the next agent picks it up.

**Why this matters:** agent sessions create `claude/` branches and push work there. Without an explicit close-out, branches accumulate indefinitely and main falls behind. The start-of-session audit (step 5 above) is the safety net when a session ends without completing this protocol.

---

# Repository Routing Map & Exclusions

To prevent wasting tokens on scanning irrelevant files:
1. Identify your target workspace from the table below.
2. Read ONLY the workspace-specific files and related source files.
3. Do NOT recursively search, read, or list directories of other workspaces.

| Task Workspace | Core Files to Read | Workspaces to IGNORE |
| :--- | :--- | :--- |
| Orchestrator | `00_orchestrator/` | all agent dirs |
| Lead Qualifier | `01_lead_qualifier/` | all other agent dirs |
| Property Research | `02_property_research/` | all other agent dirs |
| Client Communication | `03_client_communication/` | all other agent dirs |
| Transaction Coordinator | `04_transaction_coordinator/` | all other agent dirs |
| Market Intel | `05_market_intel/` | all other agent dirs |
| Shared Utilities | `_shared/` | agent-specific dirs |
| Site / UI | `site/` | agent dirs, `_shared/` |

## Global Context Exclusions
* **Do NOT read build caches or dependencies:** `node_modules/`, `.venv/`, `.pytest_cache/`

---

# System Doc Maintenance Rules

Keep these files current:

| File | Update when... |
|------|---------------|
| `MEMORY.md` | A bug is fixed, an API behaves unexpectedly, a decision is made about how to build something, something tried didn't work, a lesson is learned. Add to "Lessons Learned" table and update "Next Session Priority." |
| `ROADMAP.md` | A new feature is discussed, a completed item needs a ✅, a priority changes, or the Current Sprint checklist changes. |
| `ARCHITECTURE.md` | A new module is added, the data flow changes, a new external service is connected, or a handler's status changes (placeholder → working). |
| `HANDOFF.md` | When a phase completes: mark it ✅ in the implementation plan, update `NEXT_ACTION` with the next phase's step-by-step tasks, and update the system state table. Do this before ending the session. |

Update the relevant doc **before ending the session** — don't leave it for next time.

---

# Coding Behavior Guidelines

## Rule 1 — Think Before Coding

Before implementing anything:
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop and name what's confusing.

## Rule 2 — Simplicity First

Minimum code that solves the problem. Nothing speculative.
- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" that wasn't requested.
- No error handling for impossible scenarios.

If you write 200 lines and it could be 50, rewrite it.

## Rule 3 — Surgical Changes

Touch only what you must. Clean up only your own mess.
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.
- Remove imports/variables/functions that YOUR changes made unused; leave pre-existing dead code alone.

Every changed line should trace directly to the user's request.

## Rule 4 — Goal-Driven Execution

For multi-step tasks, state a brief plan with verifiable success criteria:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
```

Transform vague tasks: "fix the bug" → "write a test that reproduces it, then make it pass."

## Rule 5 — Use the model only for judgment calls

Use for: classification, drafting, summarization, extraction. Do NOT use for: routing, retries, deterministic transforms. If code can answer, code answers.

## Rule 6 — Token budgets are not advisory

Per-task: 4,000 tokens. Per-session: 30,000 tokens. If approaching budget, summarize and start fresh. Surface the breach. Do not silently overrun.

## Rule 7 — Surface conflicts, don't average them

If two patterns contradict, pick one (more recent / more tested). Explain why. Flag the other for cleanup.

## Rule 8 — Read before you write

Before adding code, read exports, immediate callers, shared utilities. If unsure why existing code is structured a certain way, ask.

## Rule 9 — Tests verify intent, not just behavior

Tests must encode WHY behavior matters, not just WHAT it does. A test that can't fail when business logic changes is wrong.

## Rule 10 — Checkpoint after every significant step

Summarize what was done, what's verified, what's left. Don't continue from a state you can't describe back.

## Rule 11 — Match the codebase's conventions, even if you disagree

Conformance > taste inside the codebase. If you think a convention is harmful, surface it. Don't fork silently.

## Rule 12 — Fail loud

"Completed" is wrong if anything was skipped silently. "Tests pass" is wrong if any were skipped. Default to surfacing uncertainty, not hiding it.

## Rule 13 — Write tests you would bet your existence on

The standard for every test: **if the code is broken, this test fails. If this test passes, the user's first run works.** That is the only bar that matters.

Before committing a test, ask yourself: if I introduced the exact bug this test is meant to catch, would it fail? If the answer is "maybe" or "I think so," the test is not done.

**What this rules out:**
- Inline copies of production logic. A copy verifies itself, not the code. When the real implementation diverges, the test keeps passing and the bug ships.
- Mocking so aggressively that the real code path never runs. If you mock a core function in a test of the pipeline that calls it, you're testing your mock, not the pipeline.
- Assertions that can't distinguish working code from broken code. `assert result is not None` passes when the function returns the wrong thing.
- Tests that only pass because nothing ran. A test that skips an import failure silently is worse than no test.

**What this requires:**
- Import and execute the actual module. Patch only external I/O (HTTP, disk, LLM APIs) — never the logic under test.
- When native deps break CI, stub them at `sys.modules` before any project import, then run the real code.
- Assert on the specific outcome the user cares about: the right file was written, the right URL was crawled, the right text appeared in the prompt. Not just that a function was called.
- Size guard limits (fetch counts, loop trip-wires) to reflect the real system's behaviour, not an idealized version of it.

---

## Additional Constraints

### Never Expose API Keys

Never expose API keys in the UI, client-side code, browser console logs, or error messages. API keys belong only in server-side code or environment variables.

### No Silent Failures

**This system must always tell the user when something goes wrong.** Silent failures are unacceptable.

- Every `except` block that catches a real failure MUST surface the error visibly — not just `logging.warning()`.
- `logging.warning()` is acceptable ONLY for truly expected, benign conditions (e.g., a file is already up to date). For anything that prevents a deliverable from being created, use `logging.error()` AND notify the user.
- If a pipeline step returns `None` or an empty result when content was expected, treat that as a failure and notify.
- "Non-fatal" does NOT mean "silent." Non-fatal means the pipeline continues — but the user is still told what failed and why.

### Agent Safety Constraints

Agents must NEVER:
- Delete or move files/directories without explicit user confirmation in chat
- Run destructive git operations (`git reset --hard`, `git clean`, `git push`) without user approval
- Modify `.claude/` directory structure, `.mcp.json`, or `CLAUDE.md` without explicit user direction
- Stage, commit, or push changes without explicit user instruction

Permitted agent actions:
- Update `MEMORY.md`, `ROADMAP.md`, `ARCHITECTURE.md` freely as part of normal workflow
- Read any project file for context

If destructive changes are discovered: stop, report specifics to the user, request permission before recovery steps.

### Git Merge Protocol — MANDATORY

Before merging ANY branch into main (or any other branch), you MUST:

1. Run `git log main..<branch> --oneline` and show the full output to the user.
2. State explicitly: how many commits will be merged, what they contain, and whether any of them predate the current session.
3. Ask the user: "Do you want all of these merged, or only the changes from this session?"
4. Wait for explicit confirmation before running `git merge` or `git push`.

NEVER assume that "merge my fix into main" means "merge everything that happens to be on this branch." Feature branches accumulate history. The user asked for their fix — not every commit that was already sitting there.

If a branch is many commits ahead of main and most of those commits predate this session, flag it immediately:
> "This branch is N commits ahead of main. Only 1 of those is from this session. The rest are older work. Do you want me to merge all N commits, or just cherry-pick the fix from this session?"

### Protect the User. Protect the Codebase.

Before taking any action that touches shared state (merges, pushes, deploys, file deletions, config changes, dependency updates), stop and analyze first. Surface what could go wrong. Do not proceed silently.

Specifically:
- **Before a merge:** Check for conflicts, migrations, env var changes, or deploy triggers (e.g. GitHub Actions on push to main) that the user may not be aware of.
- **Before a push to main:** Check whether a CI/CD pipeline will auto-deploy. If yes, tell the user before pushing.
- **Before any destructive action:** State what will be permanently changed or lost, and confirm with the user.
- **When you spot a risk the user didn't ask about:** Say it anyway. Don't wait to be asked. If you notice a security issue, a broken config, a missing env var, a silent failure path, or anything that could cause data loss or an outage — surface it immediately.
- **When something looks wrong in the codebase:** Flag it in plain language. "I noticed X, which could cause Y. Want me to look into it?"

The user should never be surprised by a consequence of an action you took. If there's any doubt about blast radius, ask first.
