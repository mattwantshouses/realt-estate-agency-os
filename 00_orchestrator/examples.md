# Examples — The Front Desk

---

## Example 1: Cold Outreach Response — Motivated Seller

**Incoming request:**
> "Yeah I might be interested. We've had the house for about 12 years. It needs some work. What do you pay?"

**Channel:** Text reply to RMD outreach list, 2:18 PM  
**Agent context:** Matt ran a direct mail campaign to absentee owners in 32210 (Ortega/Murray Hill area).  
**Mode:** Investor (responding to RMD Home Buyers outreach)

**Routing decision:** → **01_lead_qualifier**

This is a new lead response. Even though we know the mode (investor), this person hasn't been qualified yet — no name, no address, no timeline, no financial situation. Lead Qualifier goes first.

**Handoff card produced:**

```
From:        Orchestrator
To:          Lead Qualifier
Case:        Unknown — text response, 32210 outreach list
Mode:        Investor
Date:        2026-05-26
Confidence:  High

SUMMARY
Inbound text from RMD direct mail outreach. May be open to
selling. Needs qualification before any offer conversation.

KEY DETAILS
- Client: Unknown name (text only)
- Property: Unknown — somewhere in 32210 (outreach zone)
- Intent: Sell (investor mode — cash offer interest)
- Timeline: Unknown
- Budget: Unknown ("what do you pay?" = price-curious, not committed)
- Source: RMD direct mail — 32210 absentee owner list

CONTEXT
"We've had the house about 12 years" + "needs some work" +
"might be interested" = open but not urgent. Absentee owner
who's been sitting on a property. Classic investor-mode profile.

GAPS
- Name and contact info
- Property address
- Reason considering selling
- Mortgage/lien status
- Extent of needed work

NEXT ACTION
Lead Qualifier: Classify as motivated seller (investor mode).
Rate temperature. Note gaps for Matt to fill in first response.
```

---

## Example 2: Referral — Buyer Client

**Incoming request:**
> "Matt — my sister-in-law is moving from Atlanta to Jacksonville for a new job. She's been pre-approved up to $425K and needs to be in by mid-August. Thought of you. Her name is Rachel Torres. Reach her at 904-555-0192."

**Channel:** Text from past client (Brian Clark)  
**Agent context:** Brian closed with Matt in 2025. Matt knows him well.  
**Mode:** Agent (buyer representation)

**Routing decision:** → **01_lead_qualifier**

New lead, even though intent and temperature are already clear. Lead Qualifier logs the qualification, captures all six fields, and produces the handoff for Client Communication (first outreach).

**Handoff card produced:**

```
From:        Orchestrator
To:          Lead Qualifier
Case:        Rachel Torres — referral from Brian Clark
Mode:        Agent
Date:        2026-05-26
Confidence:  High

SUMMARY
Pre-approved buyer, $425K ceiling, mid-August close deadline.
Referral from past client Brian Clark. Matt knows Brian
personally.

KEY DETAILS
- Client: Rachel Torres, 904-555-0192
- Intent: Buy
- Budget: Pre-approved up to $425K
- Timeline: Must close by mid-August (~11 weeks)
- Location: Jacksonville — new to area, no neighborhood pref yet
- Source: Referral — Brian Clark (past client, closed 2025)

CONTEXT
Relocation from Atlanta. Pre-approved = financially ready.
Mid-August = hard deadline. Matt should acknowledge Brian in
first message.

⚡ Timeline alert: ~11 weeks to close. With FL closing times
(30–45 days for financed), needs to be under contract by early
July at the latest.

GAPS
- Neighborhood preferences
- Bed/bath, size requirements
- Kids / school district priority?
- Partner/co-buyer?

NEXT ACTION
Lead Qualifier: Capture all six fields, rate temperature,
produce handoff for Client Communication (first outreach).
```

---

## Example 3: Active Deal — Inspection Results

**Incoming request:**
> "Inspection on the Garcia deal is back. Roof needs full replacement (est. $14-18K), A/C is 2007 but functional. Inspection period runs out Friday. What do we do?"

**Channel:** Note from TC support  
**Agent context:** Garcia deal — 2847 Longleaf Pine Dr, 32223 (Mandarin). Matt is buyer's agent.  
**Mode:** Agent

**Routing decision:** → **04_transaction_coordinator** (primary), **03_client_communication** secondary

Active deal with a live deadline. TC goes first — they know the deal timeline and confirm when the inspection period expires. Client Communication is secondary — Matt will need a message to the buyers once he decides on the approach.

**Handoff card produced:**

```
From:        Orchestrator
To:          Transaction Coordinator
Case:        Garcia — inspection results, deadline approaching
Mode:        Agent
Date:        2026-05-26
Confidence:  High

SUMMARY
Inspection on 2847 Longleaf Pine Dr (Garcia deal) found roof
needing full replacement ($14–18K) and older A/C (2007).
FL inspection period expires Friday. Matt needs options
framework.

KEY DETAILS
- Client: Garcia (buyers, Matt representing)
- Property: 2847 Longleaf Pine Dr, 32223 (Mandarin)
- Deal status: Under contract, in inspection period
- Issue: Roof replacement ($14–18K), A/C 2007
- Deadline: Inspection period expires Friday (3 days)

CONTEXT
TC support flagged this. Roof is the big issue. A/C at 2007
has life left but is a secondary leverage point.

Secondary: 03_client_communication will need a message to
the Garcias once Matt decides approach.

GAPS
- Full inspection report
- Matt's preferred approach at this price point

NEXT ACTION
TC: Confirm Friday deadline time (FL — must be in writing
before period expires). Frame three options with timeline
and dollar implications. Hand to Client Communication for
buyer-facing message.
```
