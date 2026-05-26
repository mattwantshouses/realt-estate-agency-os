# Examples — The Closer

---

## Example 1: New Deal Intake — Agent Mode, Financed Buyer

**Handoff from Client Communication:**
> Rachel Torres (buyer, Matt's client) just went under contract on 94 Conservation Creek Dr, Nocatee (32081). Purchase price: $419,900. FAR/BAR AS IS + financing rider. Inspection period: 10 days. Earnest money: $4,200. Conventional loan, pre-approved through AmeriFirst Financial. Title: Heritage Title of NE Florida. Closing target: June 30.

**Action taken:**

```
DEAL INTAKE — Rachel Torres / 94 Conservation Creek Dr, 32081
Mode:       Agent (Matt representing buyer)
Contract:   FAR/BAR AS IS + Financing Rider
Effective:  May 20, 2026 (Day 0)
Type:       Track 1 (Financed buyer)
Routing:    Confirmed via routing_guide.md — Track 1 applies

DEAL TIMELINE:
Day 0:    Contract effective (May 20)
Day 3:    EMD due at Heritage Title ($4,200) → Confirm by May 23
Day 10:   Inspection period expires (May 30, 5:00 PM)
          → Flag May 28 (48 hrs) + May 29 (24 hrs)
Day 10:   Written inspection notice deadline if repairs/credit needed
Day 10:   Appraisal order flag — if AmeriFirst hasn't ordered by May 27, flag
Day 25:   Title commitment expected → Flag June 14 if not received
Day 31:   Financing contingency expires (June 20) → Flag June 18 (48 hrs)
Day 30:   Survey expected → Flag June 19 if not received
T-3:      Closing Disclosure due (June 27) → Flag June 26 if not received
T-1:      Final walkthrough (June 29)
Day 41:   Closing (June 30)

LENDER TRACK:
- Lender: AmeriFirst Financial — contact TBD (Matt to provide)
- Pre-approval: ✅ On file
- Rate lock: Pending → Flag May 24 if not confirmed
- Appraisal: Flag May 27 if not ordered

DOCUMENT STATUS:
✅ Executed contract
⏳ EMD receipt (due May 23)
⏳ Seller's Property Disclosure (due within inspection period)
⏳ Home inspection (schedule by May 23)

KEY CONTACTS:
- Title: Heritage Title of NE Florida — [contact TBD]
- Lender: AmeriFirst Financial — [contact TBD]

RISK STATUS: 🟢 Green — All tracks on schedule.
```

---

## Example 2: Inspection Period Decision — Written Notice and Credit Request

**Status update (Day 8 flag):**
> Inspection on 94 Conservation Creek Dr completed. Two items: (1) attic insulation below code — est. $1,800; (2) deck fascia wood rot — est. $400–$600. Inspection period expires May 30, 5:00 PM. Matt has decided to request a $2,200 closing credit. Written notice needed.

**Action taken:**

```
DEAL UPDATE — Rachel Torres / 94 Conservation Creek Dr
Date:     May 28, 2026 (Day 8 — 48-hour flag)

INSPECTION RESULTS:
- Item 1: Attic insulation supplement — est. $1,800
- Item 2: Deck fascia rot — est. $400–$600
- Matt's decision: Request $2,200 closing credit

⚠️ Written notice must be delivered to seller's agent before
May 30, 5:00 PM.

Routing: → Client Communication
Request: Draft Matt's notice to listing agent — agent-to-agent
message, professional, concise. Two items listed, $2,200
credit amount, request seller's response before Thursday EOD.
⚠️ Flag for Matt: legal language — review before sending.

NEXT:
- Track seller's response (target within 48 hours)
- If no response by May 29 PM, flag to Matt
- If accepted: ✅ update deal status, move to post-inspection
- If declined: Matt + client decide to terminate or proceed as-is

RISK STATUS: 🟡 Yellow — Deadline in 48 hours. Awaiting written
notice + seller response.
```

---

## Example 3: Investor Cash Close — Expedited Timeline

**Handoff from Lead Qualifier:**
> Matt (RMD Home Buyers) agreed to terms with Linda Okafor on 4217 Ramona Blvd, Jacksonville 32205. Cash purchase. Price: $175,000. PSA to be executed. Target close: 14 days. Linda needs to be out by end of month.

**Action taken:**

```
DEAL INTAKE — RMD Investor Purchase / 4217 Ramona Blvd, 32205
Mode:       Investor (RMD buying directly)
Contract:   FAR/BAR AS IS or custom PSA — Matt to confirm
Effective:  May 26, 2026 (Day 0)
Type:       Investor Cash — Routing confirmed via routing_guide.md

INVESTOR TIMELINE:
Day 0:    PSA executed (May 26)
Day 3:    EMD due → Confirm by May 29 (amount TBD from PSA)
Day 1:    Title search must start TODAY — 14-day close requires
          immediate title work. Flag if not initiated by EOD.
Day 7:    Due diligence period expires (June 2, 5:00 PM)
          → Flag June 1 (48 hrs) + June 2 AM (24 hrs)
Day 7:    Walk-through + contractor scope completed
          → Flag June 1 if not done
Day 14:   Title commitment expected (June 9) → Flag June 8
Day 14:   Target closing (June 9) → T-3 check June 6

DOCUMENT STATUS:
⏳ PSA / AS IS contract — executed version needed
⏳ RMD proof of funds — confirm on file
⏳ EMD receipt from title (by May 29)
⏳ Title commitment (by June 9)
⏳ HUD-1 / settlement statement (T-1)
⏳ Deed (title prepares, signed at closing)

KEY CONTACTS:
- Title: TBD — Matt to confirm which title company
- Seller: Linda Okafor — Matt has contact

⚠️ 14-day close is aggressive. Title search must start Day 1.
Any title issues (liens, encumbrances) will blow the timeline.
Flag immediately if title finds anything.

RISK STATUS: 🟡 Yellow — Fast timeline. Title work is on the
critical path. No margin for delay.
```
