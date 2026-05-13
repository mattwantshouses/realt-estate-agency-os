# Examples — The Front Desk

---

## Example 1: New Zillow Lead (Clear Routing)

**Incoming request:**
> Hi! Saw a house on Zillow I love at 1845 Westwood Dr 78704. Wondering if it's still available and what comparable homes have sold for nearby? Budget around 550k. Need to move by end of summer. Have two kids, so schools matter. Thanks! - Sara M.

**Channel:** Zillow lead form
**Received by:** Auto-forwarded to team inbox, 9:14 AM
**Agent context:** None — no prior relationship.

**Routing decision:** → **01_lead_qualifier**

Even though Sara asks about comps (Property Research territory) and a specific property, she's a **new lead** who hasn't been qualified yet. Lead Qualifier goes first. Always. The research happens after we know who she is and what she actually needs.

**Handoff card produced:**

```
From:        Orchestrator
To:          Lead Qualifier
Case:        Sara M. — Zillow inquiry, 78704
Agent:       TBD (Lead Qualifier assigns)
Date:        2026-05-12
Confidence:  High

SUMMARY
New Zillow lead with specific property interest, stated budget,
timeline, and family constraints. Clear buy intent. Needs
qualification before research.

KEY DETAILS
- Client: Sara M. (no prior contact info beyond Zillow)
- Property: 1845 Westwood Dr, 78704
- Intent: Buy
- Timeline: End of summer (~3 months)
- Budget: ~$550K
- Source: Zillow listing page, 9:14 AM

CONTEXT
First contact. No prior relationship. She mentioned schools and
two kids — this is family-driven, not investment. She named a
specific address, which means she's been actively browsing.

GAPS
- Pre-approval status
- Currently renting or selling?
- Partner involved in decision?
- How firm is $550K? ("around" could mean flexible)

NEXT ACTION
Qualify this lead — capture missing fields, rate temperature,
assign team member from roster.
```

---

## Example 2: Active Deal Update (Urgent Routing)

**Incoming request:**
> Diana, the inspection on the Johnson deal came back and it's not great. Foundation cracks on the east wall, inspector estimates $12-18K. Option period ends Thursday. What should we tell the buyers?

**Channel:** Slack DM from Jess, 4:45 PM
**Agent context:** Jess is the agent on the Johnson deal. Under contract on 2204 Del Curto Rd.

**Routing decision:** → **04_transaction_coordinator** (primary), flag **03_client_communication** as secondary

This is an active deal with a ticking deadline. Transaction Coordinator goes first — they track the option period, know the deal timeline, and will produce the framework for the decision. Client Communication is secondary — Jess will need a carefully drafted message to the buyers once the team decides on approach.

**Handoff card produced:**

```
From:        Orchestrator
To:          Transaction Coordinator
Case:        Johnson — inspection results, option period decision
Agent:       Jess
Date:        2026-06-03
Confidence:  High

SUMMARY
Inspection on 2204 Del Curto Rd (Johnson deal) found foundation
settlement. Est. $12-18K repair. Option period expires Thursday
5 PM. Jess needs decision framework: repair, credit, or terminate.

KEY DETAILS
- Client: Johnson (buyers)
- Property: 2204 Del Curto Rd, 78704
- Intent: Active deal — under contract
- Timeline: Option period expires Thursday 5:00 PM (2 days)
- Issue: Foundation cracks, east wall, est. $12-18K

CONTEXT
This came from Jess directly. She's asking Diana for direction,
which means she doesn't feel confident handling the negotiation
strategy alone on this one. The dollar amount and tight timeline
are why.

Secondary: 03_client_communication will need this after TC
frames the options. Jess needs a client-facing message.

GAPS
- Full inspection report (request from Jess)
- Seller's likely response to repair vs. credit request
- Diana's preferred negotiation strategy at this price point

NEXT ACTION
TC: Frame the three options (repair, credit, terminate) with
timeline implications. Flag the Thursday 5 PM deadline. Then
hand to Client Communication for Jess's client message.
```

---

## Example 3: Ambiguous Request (Needs Clarification)

**Incoming request:**
> Hey, this is Tom. Maria referred me. I've been thinking about the Wendover place. Can you help?

**Channel:** Text message to Diana's cell, forwarded to inbox
**Agent context:** Diana notes: "Maria Chen is a past client. Don't know which Wendover property."

**Routing decision:** → **Back to the agent** with one question.

This is ambiguous in two ways: (1) is Tom looking to buy, sell, or something else? (2) "the Wendover place" could be an address, a development, or a nickname for a property Maria told him about. I can infer he's likely a buyer (Maria referred him and he mentions a property), but I don't have enough to route confidently.

**Response to agent:**

```
ROUTING HOLD — Need one clarification.

Tom texted about "the Wendover place" via Maria Chen's referral.
I think he's a buyer interested in a specific property, but I need
the address or enough context to confirm.

Can you reply to Tom or check with Maria:
"Which property on Wendover — do you have the address?"

Once I have the address, I'll route to Lead Qualifier with
Maria's referral context.
```

**Why not just route to Lead Qualifier anyway?** Because without knowing the property or even the intent, the Lead Qualifier would produce a half-empty qualification with Low confidence. One text back to Tom gets us the info we need to route properly. The 30 seconds it takes to clarify saves 10 minutes of back-and-forth downstream.
