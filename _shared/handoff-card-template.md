# Handoff Card Template

> This is the single source of truth for how work moves between specialists.
> Every specialist reads this format. Every specialist produces this format.
> If it's not on the card, it didn't get handed off.

---

## The Format

```
HANDOFF CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From:        [Specialist name or "External"]
To:          [Specialist name]
Case:        [Client last name — short description]
Agent:       [Team member from roster]
Date:        [YYYY-MM-DD]
Confidence:  [High / Medium / Low]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
[2-3 sentences. What happened, what's needed, why it's going to this
specialist. A stranger should be able to read this and understand the
situation in 10 seconds.]

KEY DETAILS
[Structured fields specific to what this specialist produces.
Always includes:]
- Client: [Name, contact if new]
- Property: [Address or "TBD"]
- Intent: [Buy / Sell / Both / Research / Update]
- Timeline: [Urgency or deadline]
- Budget: [Range or "Not yet discussed"]
[Plus any specialist-specific fields — see each specialist's handoff.md]

CONTEXT
[The messy human stuff that doesn't fit in fields. Prior interactions,
client mood, relevant history, relationship dynamics, gotchas.
This is where operator judgment lives.]

GAPS
[What's missing. What the receiving specialist should ask about or
look up. Every handoff has gaps — pretending otherwise is how things
fall through the cracks.]

NEXT ACTION
[Exactly one thing. What should happen next, by whom, by when.
If you can't name one next action, the handoff isn't ready.]
```

---

## Rules

### Every Handoff Card Must Have
- All six header fields filled in (From, To, Case, Agent, Date, Confidence)
- A Summary that a stranger could understand
- At least one item in Gaps (if Gaps is empty, you're not looking hard enough)
- Exactly one Next Action

### Confidence Levels
- **High** — All critical info present. Receiving specialist can act immediately.
- **Medium** — Some info present but gaps exist. Receiving specialist should verify before acting on assumptions.
- **Low** — Significant unknowns. Receiving specialist should flag to the assigned agent or escalate to Diana before proceeding.

### What Confidence Is NOT
Confidence is not about the quality of the lead or the likelihood of closing. It's about **how complete the information is** for the receiving specialist to do their job. A cold lead with complete information is High confidence. A hot lead with missing details is Medium.

---

## Handling Missing Information

### Tier 1: Workable Gaps
Info is missing but the specialist can proceed. Note it in Gaps. The agent asks naturally in the next client interaction.

*Example: Budget stated but no pre-approval. Lead qualifier notes it, moves forward. Jess asks in her first email.*

### Tier 2: Blocking Gaps
Can't do the work without this info. Card goes back to the human agent with ONE specific question.

*Example: No property, no location, no intent. Orchestrator can't route. Returns: "I need at least one of: a property address, a zip code, or whether they're buying or selling."*

**Rule: ONE question only.** If still unclear after the answer, route to Diana.

### Tier 3: Confidence Downgrade
Info is present but ambiguous. Specialist proceeds but drops Confidence to Medium or Low. The receiving specialist sees the flag and verifies before acting.

*Example: "I might be interested in selling... or maybe renting it out?" — Lead qualifier captures both, marks Low confidence, orchestrator re-routes to Diana for a judgment call.*

---

## Back-Handoffs

Not every flow is forward. Real deals loop back. Back-handoffs are **normal operations, not failures.**

Common back-handoffs:
- **Transaction Coordinator → Client Communication:** Deadline approaching, client needs an update
- **Client Communication → Lead Qualifier:** Client reply reveals new qualifying info (budget changed, timeline shifted)
- **Property Research → Market Intel:** Need current market context to position a comp analysis
- **Any specialist → Orchestrator:** Confidence is Low, needs re-routing or Diana's input

A back-handoff uses the same card format. The From/To fields reverse. The trail of cards IS the deal history.

---

## Escalation to Diana

Any specialist can escalate directly to Diana. Triggers:
- Confidence is Low and can't be resolved with one question
- Legal question or liability concern
- Client threatening to walk on a live deal
- Pricing above $800K (Diana handles luxury personally)
- Any situation without a clear next step

Format: Standard handoff card with `To: Diana (ESCALATION)` and a one-line reason in the Summary.
