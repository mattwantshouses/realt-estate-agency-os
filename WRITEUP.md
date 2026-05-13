# Competition Writeup

**What I built:** A six-specialist AI operating system for a boutique real estate team. Each specialist owns one part of the workflow — routing, qualification, research, communication, transaction management, and market intelligence — and passes structured handoff cards to the next. One continuous story flows through all 27 files: Sara M. sends a Zillow inquiry and the system qualifies her, researches properties, drafts Jess's first email, opens the deal, handles a foundation crisis, and tracks to closing. Companion site lets you watch it flow and click each folder open.

**One design decision:** Human-readable handoff cards instead of typed schemas. Other approaches use 17-field typed envelopes. Ours has seven sections Diana's newest agent reads on day one — including a "Gaps" field that acknowledges what's unknown, which typed schemas can't do gracefully.

**One thing I'd add:** An owner setup interview. Upload your existing SOPs and intake forms, answer five questions about where deals fall apart, and the system maps your workflow into the folder architecture. The folders work out of the box — but that makes them yours.
