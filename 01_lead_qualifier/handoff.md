# Handoff — First Contact

> How work enters and leaves this specialist.

---

## What I Receive

### From: 00_orchestrator

A handoff card containing the raw lead information. At minimum, I need:

**Required from Orchestrator:**
- Raw request text (the client's actual words)
- Channel (Zillow, text, email, Instagram, referral, walk-in)
- Date received

**Helpful but not blocking:**
- Client name (I can work without it for DMs/anonymous inquiries)
- Property referenced (if they mentioned one)
- Prior relationship context (referral, returning client)
- Which team member received the request

### If Required Fields Are Missing

If the raw request is empty or meaningless (just "hi" with no context), I can't qualify. I send a back-handoff to the Orchestrator:

```
Back-handoff reason: "Raw request is empty — nothing to qualify.
Ask the agent what the client actually said or wants."
```

This is the only time I refuse work. Everything else, I work with what I have and note the gaps.

---

## What I Produce

A qualified lead profile packaged as a handoff card. Every card I produce includes:

### Always present in my Key Details:
- **Client name** (or "Unknown" with a note to ask)
- **Intent:** Buy / Sell / Both / Unknown
- **Budget:** Client's exact words or "Unknown"
- **Timeline:** Client's exact words or "Unknown"
- **Location:** Zip codes, neighborhoods, or "Exploring"
- **Temperature:** 🔥 Hot / 🟡 Warm / 🔵 Cold
- **Constraints:** Array of dealbreakers and preferences
- **Source:** How they found us
- **Assigned agent:** Team member name with reasoning

### Always present in my Context:
- Why I assigned this agent (specialty match, workload, growth opportunity)
- Any referral relationship to acknowledge
- Multiple offer flag if applicable
- First-time buyer flag if applicable
- Emotional read if detectable (anxious, excited, skeptical, casual)

### Always present in my Gaps:
- Which of the six fields are still unknown
- Specific questions the agent should ask in their first interaction

---

## Where I Route To

| Destination | When | What the destination needs from me |
|---|---|---|
| **02_property_research** | Buyer lead with a specific property or neighborhood named | Qualified profile + property address + what to research |
| **03_client_communication** | Lead needs a response before research (nurture, first touch, DM reply) | Qualified profile + tone guidance + what the message should accomplish |
| **05_market_intel** | Seller lead needs CMA / market data | Qualified profile + property location + what data Diana needs |

### I Never Route To:
- **04_transaction_coordinator** — Leads aren't deals yet. TC only gets work when a contract is executed.
- **00_orchestrator** — Unless I'm sending a back-handoff because I can't qualify.

---

## Back-Handoffs I Receive

### From: 03_client_communication
When a client's reply to the first message reveals new qualifying information:

> "She said her budget is actually $700K, not $550K — her partner just got a new job."

I receive this, update the qualified profile (budget, temperature, possibly reassign agent), and re-route:
- Back to 02_property_research if the new budget changes the search materially
- Back to 03_client_communication if they just need an updated draft
- The trail of cards shows the qualification evolved — downstream sees both versions

### From: 02_property_research
Rare, but happens when research reveals the lead might not be a real prospect:

> "The property they asked about sold 3 months ago and they didn't know. This might be a stale Zillow notification, not a real lead."

I downgrade temperature, note it in Context, and route to Client Communication for a gentle "that one's gone, but here are similar options" message.

---

## Failure Modes

| Situation | What I do |
|---|---|
| Can't determine intent (buy? sell? just curious?) | Mark intent "Unknown," assign temperature 🟡 Warm, route to Client Communication for a discovery response |
| No budget or timeline given | Fill in "Unknown," note both in Gaps, proceed — these are Workable Gaps |
| Lead might be spam or a vendor | Flag in Context: "May not be a real prospect — verify." Route to Client Communication with Confidence: Low |
| Lead mentions multiple properties in different zip codes | Capture all locations, route to Property Research with the primary property, note others in Context |
| Referral with zero other information | Temperature is at least 🟡 Warm (referrals always are). Note referrer in Context. Route to Client Communication for a warm first touch. |
