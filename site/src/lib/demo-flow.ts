export type FlowStep = {
  specialistSlug: string
  thought: string
  output: string
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

export const saraFlow: FlowStep[] = [
  {
    specialistSlug: "orchestrator",
    thought: "New Zillow lead. Mentions 78704, has budget + kids. Clear buy intent. Route to Lead Qualifier first — always qualify before researching.",
    output: "Routed to Lead Qualifier with raw lead info, channel, and context.",
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
    output: "Qualified as Hot buyer. Assigned to Jess. Flagged: multiple offers likely in 78704.",
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
    output: "Research brief complete. Property over budget but school zone is a genuine selling point. Two alternatives found.",
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
    output: "DRAFT — Jess — Email — Sara M. Ready for agent review. Subject: 'Zilker Elementary zone + a few homes I'd love to show you'",
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
