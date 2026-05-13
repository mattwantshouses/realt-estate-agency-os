export type FlowStep = {
  specialistSlug: string
  thought: string
  handoffCard: {
    from: string
    to: string
    case_name: string
    agent: string
    confidence: string
    summary: string
    nextAction: string
  }
}

// --- BUYER FLOW (Sara M.) ---

const saraFlow: FlowStep[] = [
  {
    specialistSlug: "orchestrator",
    thought: "New Zillow lead. Mentions 78704, has budget + kids. Clear buy intent. Route to Lead Qualifier first — always qualify before researching.",
    handoffCard: {
      from: "Orchestrator",
      to: "Lead Qualifier",
      case_name: "Sara M. — Zillow inquiry, 78704",
      agent: "TBD",
      confidence: "High",
      summary: "New Zillow lead with specific property interest, stated budget, timeline, and family constraints. Needs qualification before research.",
      nextAction: "Qualify this lead — capture missing fields, rate temperature, assign team member.",
    },
  },
  {
    specialistSlug: "lead-qualifier",
    thought: "Buy intent, $550K budget, end of summer, schools matter, two kids. That's Jess — family + schools specialist. Temperature: Hot. 78704 under $600K = flag for multiple offers.",
    handoffCard: {
      from: "Lead Qualifier",
      to: "Property Research",
      case_name: "Sara M. — qualified buyer, 78704",
      agent: "Jess",
      confidence: "High",
      summary: "Warm-Hot buyer lead. Family with school-age kids. Assigned to Jess. Needs property research + alternatives before first response.",
      nextAction: "Research 1845 Westwood Dr: comps, condition, school zone. Pull 2-3 alternatives under $550K.",
    },
  },
  {
    specialistSlug: "property-research",
    thought: "1845 Westwood: $575K listed, $25K over budget. Built 1965 — foundation risk. Zilker Elementary zone is strong. Comps say $545-610K. Two alternatives found in budget and same zone.",
    handoffCard: {
      from: "Property Research",
      to: "Client Communication",
      case_name: "Sara M. — research complete",
      agent: "Jess",
      confidence: "High",
      summary: "1845 Westwood is $25K over budget. Foundation risk flagged. School zone is strong. Two alternatives in budget. Ready for first response.",
      nextAction: "Draft first-touch email in Jess's voice. Lead with school zone. Be honest about the gap. Present alternatives.",
    },
  },
  {
    specialistSlug: "client-communication",
    thought: "Jess's voice: energetic, proactive, bullet points. Lead with Zilker Elementary — Sara's #1 priority. Honest about $575K vs $550K. Two alternatives. Pre-approval ask embedded naturally.",
    handoffCard: {
      from: "Client Communication",
      to: "Jess (agent review)",
      case_name: "Sara M. — first response draft",
      agent: "Jess",
      confidence: "High",
      summary: "First-touch email drafted in Jess's voice. Covers school zone, honest pricing, alternatives, pre-approval ask, showing invitation.",
      nextAction: "Jess reviews, edits if needed, sends. Nothing goes to Sara without Jess's eyes on it.",
    },
  },
]

// --- SELLER FLOW (Patterson) ---

const pattersonFlow: FlowStep[] = [
  {
    specialistSlug: "orchestrator",
    thought: "Existing client. Wants to know what their home is worth — that's a seller lead. No active deal. Route to Lead Qualifier to capture the details.",
    handoffCard: {
      from: "Orchestrator",
      to: "Lead Qualifier",
      case_name: "Patterson — seller inquiry, 78702 bungalow",
      agent: "Diana",
      confidence: "High",
      summary: "Existing client wants to know what their 78702 bungalow is worth. 12 years owned, empty nesters downsizing. Not in a rush. Diana handles the relationship.",
      nextAction: "Qualify as seller lead. Capture property details, timeline, motivation.",
    },
  },
  {
    specialistSlug: "lead-qualifier",
    thought: "Sell intent. 78702 bungalow, 12 years owned. Empty nesters downsizing — also likely buying something smaller. Temperature: Warm. Existing client = Diana handles personally. Route to Market Intel for CMA, not Property Research.",
    handoffCard: {
      from: "Lead Qualifier",
      to: "Market Intel",
      case_name: "Patterson — qualified seller, 78702",
      agent: "Diana",
      confidence: "High",
      summary: "Existing client, 12-year homeowner in 78702. Wants CMA-grade market data for a low-pressure listing conversation. Likely dual engagement — selling and buying to downsize.",
      nextAction: "Pull 78702 bungalow market snapshot. Recent comps, pricing analysis, market timing advice.",
    },
  },
  {
    specialistSlug: "market-intel",
    thought: "78702 bungalows, last 90 days. Median $520K, up 12% YoY. 1.1 months inventory — seller's market. Bungalow segment: $485-575K depending on condition. If they bought in 2014, they're sitting on 2-3x appreciation. Spring is ideal listing timing.",
    handoffCard: {
      from: "Market Intel",
      to: "Client Communication",
      case_name: "Patterson — CMA data ready",
      agent: "Diana",
      confidence: "High",
      summary: "78702 bungalow market snapshot ready. Range: $485-575K by condition. 12% YoY appreciation, 1.1 months inventory. Pattersons likely sitting on 2-3x their 2014 purchase price. Spring timing is ideal.",
      nextAction: "Draft a warm, low-pressure email in Diana's voice. Share the market context. Invite them for a walk-through to refine the estimate. No hard sell — they're not in a rush.",
    },
  },
  {
    specialistSlug: "client-communication",
    thought: "Diana's voice: confident, warm, personal. These are existing clients — she knows them. Low-pressure, relationship-first. Share the market strength without pushing. Invite a walk-through as a natural next step. Mention the downsizing angle — show she listened.",
    handoffCard: {
      from: "Client Communication",
      to: "Diana (agent review)",
      case_name: "Patterson — first response draft",
      agent: "Diana",
      confidence: "High",
      summary: "Warm email drafted in Diana's voice. Shares 78702 market strength, hints at strong equity position, invites walk-through to refine estimate. No pressure. Acknowledges downsizing plans.",
      nextAction: "Diana reviews, edits if needed, sends. When Pattersons are ready, Property Research does the full CMA on their specific address.",
    },
  },
]

// --- SCENARIOS ---

export type DemoScenario = {
  id: string
  label: string
  description: string
  request: string
  requestMeta: string
  flow: FlowStep[]
  flowSlugs: string[]
}

export const scenarios: DemoScenario[] = [
  {
    id: "buyer",
    label: "Buyer Lead",
    description: "New Zillow inquiry",
    request: 'Hi! Saw a house on Zillow I love at 1845 Westwood Dr 78704. Wondering if it\'s still available and what comparable homes have sold for nearby? Budget around 550k. Need to move by end of summer. Have two kids, so schools matter. Thanks! - Sara M.',
    requestMeta: "Zillow · 9:14 AM",
    flow: saraFlow,
    flowSlugs: ["orchestrator", "lead-qualifier", "property-research", "client-communication"],
  },
  {
    id: "seller",
    label: "Seller Lead",
    description: "Existing client wants to list",
    request: 'Diana — we\'ve been in our 78702 bungalow for 12 years. The kids are gone and we\'re thinking about downsizing. Not in a rush, but curious what our place might be worth. Can you take a look?',
    requestMeta: "Email · 2:30 PM",
    flow: pattersonFlow,
    flowSlugs: ["orchestrator", "lead-qualifier", "market-intel", "client-communication"],
  },
]
