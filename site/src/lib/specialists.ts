export type Specialist = {
  slug: string
  number: string
  name: string
  role: string
  capabilities: string[]
  color: string
  bgColor: string
  borderColor: string
  icon: string
  alwaysRules: string[]
  neverRules: string[]
  receives: string
  produces: string
  passesTo: string[]
}

export const specialists: Specialist[] = [
  {
    slug: "orchestrator",
    number: "00",
    name: "The Front Desk",
    role: "Reads every request, decides which specialist handles it, passes work along with context.",
    capabilities: [
      "Routes leads, questions, and deal updates to the right specialist",
      "Produces structured handoff cards with context and confidence levels",
      "Flags ambiguous requests instead of guessing",
    ],
    color: "text-slate-700",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-300",
    icon: "🗂️",
    alwaysRules: [
      "Read the full request before routing",
      "Fill in every field on the handoff card",
      "Check for existing case history",
      "Rate confidence honestly",
    ],
    neverRules: [
      "Never answer the client directly",
      "Never route to two specialists simultaneously",
      "Never guess at intent — ask one clarifying question",
      "Never skip the handoff card",
    ],
    receives: "Raw requests from the outside world — Zillow leads, texts, emails, Slack messages",
    produces: "A completed handoff card routed to exactly one specialist",
    passesTo: ["Lead Qualifier", "Property Research", "Client Communication", "Transaction Coordinator", "Market Intel"],
  },
  {
    slug: "lead-qualifier",
    number: "01",
    name: "First Contact",
    role: "Takes a new lead and turns it into a qualified profile — who they are, what they want, how ready they are.",
    capabilities: [
      "Captures intent, budget, timeline, location, constraints, source",
      "Rates lead temperature: Hot, Warm, or Cold",
      "Assigns team member based on specialty match",
    ],
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
    icon: "👋",
    alwaysRules: [
      "Capture all six qualification fields",
      "Rate temperature honestly — don't inflate",
      "Flag competitive signals early (78704 under $600K = multiple offers)",
      "Preserve the client's exact words for budget and timeline",
    ],
    neverRules: [
      "Never disqualify a lead — qualify and assign, agent decides",
      "Never quote prices on specific properties",
      "Never assign Alex to Hot leads without Diana's review",
      "Never assume intent when it's unclear",
    ],
    receives: "Handoff card from Orchestrator with raw lead info",
    produces: "Qualified lead profile with temperature, assignment, and gaps",
    passesTo: ["Property Research", "Client Communication", "Market Intel"],
  },
  {
    slug: "property-research",
    number: "02",
    name: "The Researcher",
    role: "Deep-dives on properties, neighborhoods, and market positioning. Translates data into stories agents present with confidence.",
    capabilities: [
      "Auto-pulls listing data, comps, school zones, flood risk, HOA, MUD status",
      "Curates 3+ comparable sales with interpretation",
      "Flags red flags Zillow won't show — foundation risk, development, noise",
    ],
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    icon: "🔍",
    alwaysRules: [
      "Auto-pull data when a property address appears — no excuses for empty briefs",
      "Include the 'one thing' the client wouldn't find on Zillow",
      "Date-stamp everything — market data has a shelf life",
      "Include alternatives when the primary property has issues",
    ],
    neverRules: [
      "Never guarantee a valuation — 'comps suggest' not 'this is worth'",
      "Never hide negative factors to make a property look better",
      "Never present raw data without interpretation",
      "Never confuse school district with school attendance zone",
    ],
    receives: "Qualified lead with property/neighborhood to research",
    produces: "Research brief with comps, red flags, alternatives, and the 'one thing'",
    passesTo: ["Client Communication", "Transaction Coordinator"],
  },
  {
    slug: "client-communication",
    number: "03",
    name: "The Voice",
    role: "Drafts all client-facing and agent-to-agent messages in the correct person's voice. Never sends — always drafts for review.",
    capabilities: [
      "Writes in each agent's voice using team roster profiles",
      "Calibrates tone to situation: celebration, bad news, routine, urgent",
      "Drafts emails, texts, call scripts, and agent-to-agent messages",
    ],
    color: "text-violet-700",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-300",
    icon: "✉️",
    alwaysRules: [
      "Read the voice profile before every draft — every time",
      "Label every draft: DRAFT — [Agent] — [Channel] — [Client]",
      "End every client message with one clear next action",
      "Include context notes for the agent below the draft",
    ],
    neverRules: [
      "Never send directly to the client — all outputs are drafts",
      "Never open with 'I hope this email finds you well'",
      "Never follow up without new value — no 'just checking in'",
      "Never include legal language without flagging for Diana",
    ],
    receives: "Research briefs, deal status updates, or lead profiles with tone guidance",
    produces: "Draft messages labeled for agent review, plus context notes",
    passesTo: ["Agent reviews and sends"],
  },
  {
    slug: "transaction-coordinator",
    number: "04",
    name: "The Closer",
    role: "Manages every active deal from contract to closing. Tracks three parallel timelines and flags risks before they become problems.",
    capabilities: [
      "Builds deal timelines with every key date from contract to closing",
      "Tracks lender milestones as a parallel timeline (rate lock → appraisal → clear to close)",
      "Flags deadlines 48 hours in advance — no exceptions",
    ],
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    icon: "📋",
    alwaysRules: [
      "Build the deal timeline within 1 hour of receiving a new deal",
      "Flag deadlines 48 hours AND 24 hours in advance",
      "Send T-7 closing status check covering all three tracks",
      "Track lender milestones as seriously as deal milestones",
    ],
    neverRules: [
      "Never sign or execute documents on behalf of anyone",
      "Never make legal interpretations",
      "Never let a deadline pass without at least two flags",
      "Never assume the lender is on track — silence is a yellow flag",
    ],
    receives: "New deals (contract executed), status checks, deal events (inspection, appraisal)",
    produces: "Deal timelines, deadline flags, status snapshots, risk escalations",
    passesTo: ["Client Communication", "Property Research", "Diana (escalation)"],
  },
  {
    slug: "market-intel",
    number: "05",
    name: "The Analyst",
    role: "Keeps the whole system grounded in real Austin market data. Every number is date-stamped, sourced, and interpreted.",
    capabilities: [
      "Maintains market snapshots by zip code — inventory, pricing, DOM, trends",
      "Tracks interest rate changes and their impact on buying power",
      "Produces CMA foundation data for seller leads",
    ],
    color: "text-teal-700",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-300",
    icon: "📊",
    alwaysRules: [
      "Date-stamp every data point",
      "Break down by zip code — citywide averages are useless",
      "Include the 'so what' — every number needs an implication",
      "Flag data older than 90 days before using",
    ],
    neverRules: [
      "Never predict future prices with certainty",
      "Never use statewide averages when Austin data exists",
      "Never present data without interpretation",
      "Never assume one zip code behaves like another",
    ],
    receives: "Requests for market context, CMA data, rate analysis, neighborhood comparisons",
    produces: "Market snapshots, rate alerts, CMA foundations, comparison analyses",
    passesTo: ["Property Research", "Client Communication", "Lead Qualifier"],
  },
]
