# Quick Start — The Agency OS

> From zero to using the system in 5 minutes.

---

## Step 1: Load the Orchestrator

Open Claude (any interface). Create a new conversation or project.

Paste the contents of these two files:
- `00_orchestrator/identity.md`
- `00_orchestrator/rules.md`

That's your routing engine.

---

## Step 2: Give It a Request

Paste this sample lead:

> Hi! Saw a house on Zillow I love at 1845 Westwood Dr 78704. Wondering if it's still available and what comparable homes have sold for nearby? Budget around 550k. Need to move by end of summer. Have two kids, so schools matter. Thanks! - Sara M.

Claude will produce a handoff card routing this to the Lead Qualifier.

---

## Step 3: Follow the Handoff

Open a new conversation. Load:
- `01_lead_qualifier/identity.md`
- `01_lead_qualifier/rules.md`
- `_shared/team-roster.md`

Paste the handoff card from Step 2. Claude qualifies the lead, assigns a team member, and produces a new handoff card for the next specialist.

---

## Step 4: Keep Going

Follow the chain. Each specialist takes the previous specialist's handoff card, does their work, and produces the next card. Load the relevant identity + rules files, paste the card, get the output.

The full chain for a new buyer lead:
```
Orchestrator → Lead Qualifier → Property Research → Client Communication → Agent Reviews
```

---

## Step 5: Customize

When you're ready to make this your own:
1. Edit `_shared/team-roster.md` with your team's profiles
2. Edit `_shared/glossary.md` with your market's terms
3. Edit `05_market_intel/rules.md` with your zip codes

That's it. You're running.

---

## Want More?

- Read the full [README.md](README.md) for architecture details, design decisions, and FAQ
- Explore the [companion site]() for an interactive walkthrough
- Open any specialist's `examples.md` to see how they handle real scenarios
