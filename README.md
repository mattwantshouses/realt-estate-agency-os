# The Agency OS

> A multi-specialist AI system for a 4-person real estate team.
> Learned in one week. Operational in one day.

Diana runs a four-person boutique real estate team in Austin. Eight years, 60-80 transactions a year, mostly residential. Everything lives in her head and three Google Docs. When a lead comes in, who responds first depends on who saw the notification. When a deal hits contract, her newest agent Slacks her at 11pm asking which document goes where.

This system fixes that. Six AI specialists, each owning one part of the workflow, passing structured handoff cards between them. Drop the folders into a Claude project and your team has an operating system that routes, qualifies, researches, drafts, tracks, and analyzes — with the agent always in control.

---

## What's Inside

```
agency-os/
│
├── 00_orchestrator/          The Front Desk — reads every request, routes to the right specialist
├── 01_lead_qualifier/        First Contact — qualifies new prospects, assigns team members
├── 02_property_research/     The Researcher — deep property and neighborhood analysis
├── 03_client_communication/  The Voice — drafts emails, texts, and scripts in each agent's voice
├── 04_transaction_coordinator/ The Closer — manages live deals from contract to closing
├── 05_market_intel/          The Analyst — Austin market data, rate tracking, CMA foundations
│
├── _shared/
│   ├── handoff-card-template.md   The format that moves between specialists
│   ├── team-roster.md             Voice profiles for Diana, Marcus, Jess, and Alex
│   └── glossary.md                Austin TX real estate terms
│
├── README.md                 You're here
├── QUICK-START.md            5-minute paste-and-go guide
└── site/                     Interactive companion site
```

Each specialist folder contains four files:
- **identity.md** — Who they are, what they own, what they don't
- **rules.md** — How they operate. What they always do. What they never do.
- **examples.md** — 2-3 real interactions showing the specialist in action
- **handoff.md** — How work enters and leaves. What they receive, what they produce, where it goes next.

---

## How It Works

A request enters the system. Here's what happens:

**1.** A lead, question, or deal update arrives (Zillow notification, text, email, Slack message)

**2.** The **Orchestrator** reads it and routes it to the right specialist with a handoff card

**3.** The specialist does their work — qualifies the lead, researches the property, drafts the email, tracks the deadline

**4.** The specialist produces output and passes a new handoff card to the next specialist in the chain

**5.** The **agent reviews** before anything reaches the client. Every draft is a draft until the human says send.

A typical new buyer lead flows like this:

```
Zillow lead arrives
       │
       ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Orchestrator │───▶│Lead Qualifier│───▶│  Property    │───▶│   Client     │───▶ Agent
│  routes it    │    │  qualifies   │    │  Research    │    │   Comms      │    reviews
│               │    │  assigns Jess│    │  pulls comps │    │  drafts email│    & sends
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

An active deal with an inspection crisis:

```
Inspection report
       │
       ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Orchestrator │───▶│ Transaction  │───▶│   Client     │───▶ Agent
│  routes to TC │    │ Coordinator  │    │   Comms      │    reviews
│               │    │ frames options│   │ drafts call  │    & calls
└──────────────┘    └──────────────┘    │ script       │    client
                                        └──────────────┘
```

Not every flow is forward. Real deals loop back — an inspection result triggers Property Research for context, then Client Communication for the message, then the agent makes the call. The handoff cards track the full history.

---

## The Handoff Card

This is what moves between specialists. Every handoff uses the same format:

```
HANDOFF CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From:        Lead Qualifier
To:          Property Research
Case:        Sara M. — qualified buyer, 78704
Agent:       Jess
Date:        2026-05-12
Confidence:  High
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
Warm-Hot buyer. Specific property + clear timeline + stated
budget. Family with school-age kids driving the search.
Needs research before first response.

KEY DETAILS
- Client: Sara M.
- Property: 1845 Westwood Dr, 78704
- Intent: Buy
- Budget: ~$550K (firmness unknown)
- Timeline: End of summer (~3 months)
- Temperature: Hot
- Constraints: Schools (2 kids), prefers 78704

CONTEXT
Zillow lead, no prior relationship. Assigned to Jess because
family/school focus is her strength. Sara named a specific
address — she's been actively browsing, which signals
seriousness. 78704 under $600K = expect multiple offers.

GAPS
- Pre-approval status (ask in first response)
- Budget firmness (she said "around")
- Currently renting or selling?

NEXT ACTION
Research 1845 Westwood Dr: comps, condition, school zone.
Pull 2-3 alternatives under $550K in the same school zone.
```

**Why this format instead of a typed schema?** Because Diana's team can read it. On day one. No training on field definitions. No JSON. The "Gaps" field acknowledges what's unknown — which typed schemas can't do gracefully. The "Context" field captures the messy human stuff that doesn't fit in structured fields.

Full format spec: `_shared/handoff-card-template.md`

---

## Your First Day

Five steps. Ten minutes. You're using the system.

**Step 1:** Read this README. (Done — you're almost there.)

**Step 2:** Open `_shared/team-roster.md`. Find your team's equivalent. Swap in your people's names, specialties, and voice samples.

**Step 3:** Read `00_orchestrator/rules.md`. This is the routing table — how the system decides where work goes.

**Step 4:** Try it. Open Claude with the orchestrator's identity and rules loaded. Paste this:

> "Hi! Saw a house on Zillow at 1845 Westwood Dr 78704. Budget around 550k. Need to move by end of summer. Schools matter, two kids. - Sara M."

Read the handoff card it produces. Compare it to the example in `00_orchestrator/examples.md`.

**Step 5:** Follow the handoff. The orchestrator routed to Lead Qualifier. Open `01_lead_qualifier/` and load its identity and rules. Feed it the orchestrator's handoff card. Watch it qualify the lead and route to the next specialist.

You just used the system. Everything else is repeating this pattern with different inputs.

---

## Meet the Specialists

| # | Name | What they do | Key output |
|---|---|---|---|
| 00 | **The Front Desk** | Routes every request to the right specialist | Handoff card with routing + context |
| 01 | **First Contact** | Qualifies new leads: intent, budget, timeline, temperature | Qualified lead profile + team assignment |
| 02 | **The Researcher** | Deep property and neighborhood analysis | Research brief with comps, red flags, alternatives |
| 03 | **The Voice** | Drafts all client-facing and agent-to-agent messages | Email/text/call script drafts in the agent's voice |
| 04 | **The Closer** | Manages deals from contract to closing across three tracks | Deal timeline + lender tracker + document checklist |
| 05 | **The Analyst** | Austin market data, rate tracking, CMA foundations | Market snapshots, rate alerts, pricing analysis |

---

## Customize for Your Team

Three files to edit. Everything else works out of the box.

**1. `_shared/team-roster.md`** — Replace Diana, Marcus, Jess, and Alex with your team. Include each person's specialties, communication style, quirks, and a sample message. The Client Communication specialist reads this before every draft.

**2. `_shared/glossary.md`** — Replace Austin zip codes and Texas-specific terms with your market. Option periods are Texas-specific. Your state has different contingency structures.

**3. `05_market_intel/rules.md`** — Replace the Austin zip code personality profiles with your market's neighborhoods. Update the rate impact table with current numbers.

That's it. The architecture, handoff format, specialist roles, and routing logic are market-agnostic. The content is what you make local.

---

## The Companion Site

**[View the interactive onboarding experience →]()**

Walk through the system visually. Upload your existing SOPs to see where they map. Watch a lead flow through the folders. Click each folder open to explore what's inside.

---

## Design Decisions

**1. Human-readable handoff cards instead of typed schemas.**
Other approaches use 17-field typed envelopes with JSON-like structure. We use a markdown card with seven sections that Diana's newest agent can read on day one. The trade-off: less machine-parseable, more human-usable. For a 4-person team, usability wins.

**2. Voice profiles shipped with the system.**
Most AI writing tools produce generic output. We ship four fully realized team members — communication style, quirks, sample messages — so the Client Communication specialist drafts in each agent's actual voice. A draft Jess doesn't have to rewrite is worth 10 drafts she throws away.

**3. Market Intelligence as its own specialist.**
Not just a reference folder. An active specialist that other specialists request data from and that self-triggers rate alerts and market shift notifications. Keeps the entire system grounded in current Austin-specific data instead of generic real estate advice.

---

## FAQ

**Do I need Claude Code for this?**
No. This works with Claude.ai Projects, Claude Desktop, or Claude Code. Drop the folders into a project and the context is loaded.

**What if my team is bigger or smaller?**
Add or remove profiles in `team-roster.md`. Update the Lead Qualifier's assignment table in `01_lead_qualifier/rules.md`. The architecture handles any team size.

**What if I'm not in Austin?**
Swap `05_market_intel/rules.md` zip code profiles and `_shared/glossary.md` for your market. The specialists, handoff format, and routing logic are the same everywhere.

**What if I want to add a specialist?**
Copy any folder. Edit the four files. Add a row to the orchestrator's routing table. Update the relevant handoff.md files to include the new specialist as a destination. Done.

**What about deals that aren't residential?**
This system is built for residential real estate (Diana's focus). Commercial, land, and new construction have different workflows, timelines, and specialists. You'd need to adapt significantly — the architecture transfers, but the content doesn't.

---

## Built By

**Ruby Sparks** — I run a 4-person service team. Everything in this system comes from the experience of taking a business that lived in my head and three Google Docs and turning it into documented SOPs, handoff protocols, and AI-assisted operations. Diana's problem is my problem. This system is what I wish I had on day one.

Built for Clief Notes Weekly Competition #4.

[GitHub Repo](https://github.com/sparkles-inc/agency-os) · [Companion Site](https://agency-os-tan-five.vercel.app) · [Clief Notes Community]()
