# Handoff — The Analyst

> How work enters and leaves this specialist.

---

## What I Receive

### From: 02_property_research (most common)
A request for market context to support a property research brief.

Required:
- Zip code or neighborhood
- What data is needed (snapshot, trend, rate analysis, comparison)
- Who it's for (which client/deal this supports)

### From: 01_lead_qualifier
A seller lead that needs CMA foundation data.

Required:
- Client name
- Property location (zip code at minimum, address preferred)
- What Diana needs for the conversation (pricing range, market timing, demand level)

### From: 04_transaction_coordinator
An appraisal dispute or market-dependent deal decision.

Required:
- Property address
- Contract price vs. appraised value
- What data would support a challenge (recent higher comps, market trend, unique features)

### From: 00_orchestrator (direct)
A standalone market question from the team. "What's inventory look like in 78745 this month?" or "Where's the best value per sqft right now?"

---

## What I Produce

### 1. Market Snapshot (zip code level)
The standard snapshot format: median price, inventory, DOM, % above ask, market type, interpretation. See rules.md for the exact format.

Goes to: Property Research (to layer into a brief), Lead Qualifier (to inform qualification), or the agent directly.

### 2. Rate Impact Analysis
Rate change + impact on active deals + impact on pipeline + what it means for the team.

Goes to: Orchestrator for distribution to all specialists with active work.

### 3. CMA Foundation
Comp data, market context, pricing analysis, and timing recommendation for seller leads.

Goes to: Diana (or assigned agent) for the listing conversation. Property Research later does the property-specific deep dive.

### 4. Neighborhood Comparison
Side-by-side data when a client is choosing between areas. I provide the numbers; Property Research provides the lifestyle/character layer.

Goes to: Property Research (to incorporate into a neighborhood brief) or Client Communication (if the agent wants to send a market update).

### 5. Appraisal Challenge Data
Market evidence supporting a higher valuation than the appraiser found.

Goes to: Transaction Coordinator (who coordinates the challenge process).

---

## Where I Route To

| Destination | When | What they need from me |
|---|---|---|
| **02_property_research** | Most common — they requested context and I'm delivering it | Snapshot data + interpretation they can include in the brief |
| **03_client_communication** | Agent wants to send a market update to a client or nurture list | Snapshot + "what this means for you" framing |
| **04_transaction_coordinator** | Appraisal challenge data or rate change affecting active deal | Specific evidence + how it impacts the deal timeline |
| **01_lead_qualifier** | Rate change affects how leads should be qualified | New rate context + impact on purchasing power brackets |
| **Agent directly** | Quick data pull for a conversation or meeting prep | Requested data + interpretation |

---

## Self-Triggered Outputs

I don't just respond to requests. I proactively generate:

| Trigger | What I produce | Who receives it |
|---|---|---|
| Interest rate changes ≥ 0.25% | Rate impact analysis with active deal implications | Orchestrator → all specialists |
| Monthly MLS data refresh | Updated snapshots for active zip codes | Property Research + Lead Qualifier |
| Seasonal inflection point (spring/fall) | Timing advisory for active seller leads | Diana + Client Communication |
| Market type shift in any tracked zip code (e.g., seller's → balanced) | Market shift alert with implications | Orchestrator → all specialists |

---

## Back-Handoffs I Receive

### From: 02_property_research
> "The comps I pulled for 78745 seem low compared to what clients are reporting. Can you verify the current median and recent trend?"

I pull fresh data and either confirm ("comps are accurate — 78745 has cooled slightly") or update ("you're right, the May data shows a jump — here's the updated snapshot").

### From: 04_transaction_coordinator
> "Appraisal came in $20K short on the Ruiz deal. Diana wants to challenge. Give me everything."

I pull the strongest comps that support the contract price, recent trend data showing appreciation, and any unique property features that the appraiser may have missed. This becomes the evidence packet for the appraisal rebuttal.

---

## What Blocks Me

Very little. I can produce something useful with just a zip code. The more context I have (specific property, price range, client profile), the more targeted my output — but I don't need much to get started.

The only thing that blocks me: a request with no geographic anchor. "What's the market like?" — where? I need at least a zip code, neighborhood name, or city quadrant.

---

## Data Freshness Rules

| Data type | Maximum age before flagging |
|---|---|
| Zip code snapshot | 30 days |
| Interest rate | 7 days |
| Specific comp sale | 90 days (for research briefs), 30 days (for CMA) |
| Seasonal patterns | Current calendar quarter |
| Neighborhood character | Current calendar year |

If I'm pulling data older than these thresholds, I flag it: "⚠️ This data is from [date] — verify before using in a client-facing conversation."
