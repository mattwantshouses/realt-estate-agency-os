# Handoff — The Front Desk

> How work enters and leaves this specialist.

---

## What I Receive

### From: The outside world (via any team member)

Requests arrive as raw, unstructured input. Anything the team encounters:

- Zillow/Realtor.com lead notifications
- Text messages from prospects or clients
- Emails forwarded to the team inbox
- Voicemail transcripts
- Referral introductions from past clients
- Walk-in inquiries (agent types up notes)
- Slack/internal messages from team members about active deals
- Client requests that came in during showings or calls

**I don't control the format.** A request might be a clean Zillow form with structured fields, or it might be "hey Diana, that guy from the open house called back." I work with whatever arrives.

### What I need from the person submitting

At minimum:
- **The raw request** — paste it exactly as it came in. Don't clean it up, don't pre-route it.
- **The channel** — how did this arrive? (Zillow, text, email, voicemail, walk-in, internal)

Helpful but optional:
- **Any context the message doesn't carry** — "This is from Maria's referral" or "They walked into the office yesterday"
- **Which team member received it** — so we can assign or avoid assigning to the same person

---

## What I Produce

A completed handoff card (per `_shared/handoff-card-template.md`) routed to exactly ONE primary specialist.

### Required fields I always fill in

| Field | Source |
|---|---|
| From | Always "Orchestrator" |
| To | Determined by routing table (see rules.md) |
| Case | Client last name + short description from the request |
| Agent | From team roster if I can determine specialty match; otherwise "TBD" |
| Date | Today's date |
| Confidence | My assessment of how complete the information is |

### What each destination needs from me

| Destination | Required in Key Details | Required in Context |
|---|---|---|
| **Lead Qualifier** | Client name (if known), raw request text, channel, source | Any prior relationship or referral context |
| **Property Research** | Property address or neighborhood, what type of research is needed | Why this research was requested, who it's for |
| **Client Communication** | Client name, agent on the deal, what needs to be communicated, channel (email/text/call) | Tone context (good news? bad news? routine?) |
| **Transaction Coordinator** | Case ID or property address, what changed or what's needed | Deal stage, any urgency flags |
| **Market Intel** | What data is needed (zip code, trend, rate analysis, comparison) | Who needs this data and why |

---

## Where I Route To

| Specialist | When |
|---|---|
| 01_lead_qualifier | Any new prospect. Any first contact. Any request where we don't know the person yet. |
| 02_property_research | Specific property or neighborhood questions. Comp requests. CMA requests. |
| 03_client_communication | Draft needed: email, text, call script, follow-up. Agent needs a message written. |
| 04_transaction_coordinator | Anything on an active deal: status check, deadline question, document request, inspection result, closing coordination. |
| 05_market_intel | Market conditions, pricing trends, rate analysis, area comparisons, inventory data. |
| Diana (ESCALATION) | Confidence is Low after one clarification attempt. Legal concern. Client threatening to walk. Luxury ($800K+). No clear routing. |

---

## Failure Modes

| Situation | What I do |
|---|---|
| Raw request is empty or unintelligible | Return to the submitting agent: "I can't route this. What did the client actually say?" |
| No channel identified | Route anyway but mark Confidence: Medium and note "Channel unknown" in Gaps |
| Client could be buyer OR seller | Route to Lead Qualifier with Confidence: Medium. Note both possibilities. LQ sorts it out. |
| Request references a person or property I can't identify | Return to agent with ONE question: "Which [person/property]?" |
| Two specialists equally valid | Route to the one that should go first (see tiebreakers in rules.md). Note the secondary. |

---

## I Never Receive Back-Handoffs From...

I don't receive back-handoffs in the normal sense. If a specialist needs re-routing, they send the card back to me with a note explaining why the routing was wrong. I re-read, re-route, and note both decisions in the Context field so the next specialist sees the full trail.

This should be rare. If I'm getting frequent re-routes, my routing table needs updating — not the specialists.
