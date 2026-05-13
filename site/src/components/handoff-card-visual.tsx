"use client";

export function HandoffCardVisual() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border-2 border-stone-300 rounded-xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-stone-50 border-b border-stone-200 px-5 py-3">
          <span className="text-xs font-mono font-bold text-stone-500 tracking-wider">
            HANDOFF CARD
          </span>
        </div>

        {/* Fields */}
        <div className="px-5 py-4 space-y-4">
          {/* Top fields */}
          <div className="grid grid-cols-3 gap-3 text-xs font-mono">
            {[
              { label: "From", value: "Lead Qualifier", note: "Who did the work" },
              { label: "To", value: "Property Research", note: "Who does it next" },
              { label: "Confidence", value: "High", note: "How complete is the info?" },
            ].map((field) => (
              <div key={field.label} className="group relative">
                <span className="text-stone-400">{field.label}:</span>
                <br />
                <span className="text-stone-700 font-semibold">{field.value}</span>
                <div className="absolute -top-8 left-0 bg-stone-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  {field.note}
                </div>
              </div>
            ))}
          </div>

          <hr className="border-stone-100" />

          {/* Summary */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                Summary
              </span>
              <span className="text-xs text-stone-300">
                — A stranger should understand in 10 seconds
              </span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Warm-Hot buyer lead. Specific property interest at 1845 Westwood
              Dr plus general 78704 interest. Family with school-age kids
              driving the search.
            </p>
          </div>

          {/* Key Details */}
          <div>
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
              Key Details
            </span>
            <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-stone-600">
              <div>
                <span className="text-stone-400">Client:</span> Sara M.
              </div>
              <div>
                <span className="text-stone-400">Property:</span> 1845 Westwood
                Dr
              </div>
              <div>
                <span className="text-stone-400">Intent:</span> Buy
              </div>
              <div>
                <span className="text-stone-400">Budget:</span> ~$550K
              </div>
              <div>
                <span className="text-stone-400">Timeline:</span> End of summer
              </div>
              <div>
                <span className="text-stone-400">Temperature:</span>{" "}
                <span className="text-amber-600">🔥 Hot</span>
              </div>
            </div>
          </div>

          {/* Context */}
          <div className="bg-amber-50/50 border border-amber-100 rounded-lg px-3 py-2">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
              Context
            </span>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Zillow lead, no prior relationship. Assigned to Jess because
              family/school focus is her strength. 78704 under $600K = expect
              multiple offers.
            </p>
          </div>

          {/* Gaps */}
          <div className="bg-red-50/50 border border-red-100 rounded-lg px-3 py-2">
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
              Gaps
            </span>
            <p className="text-xs text-stone-600 mt-1">
              Pre-approval status · Budget firmness · Currently renting or
              selling?
            </p>
          </div>

          {/* Next Action */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg px-3 py-2">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Next Action
            </span>
            <p className="text-xs text-stone-700 mt-1 font-medium">
              Research 1845 Westwood Dr: comps, condition, school zone. Pull 2-3
              alternatives under $550K in the same school zone.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-stone-400 mt-4">
        Human-readable. No JSON. No schema training required.
        <br />
        Your newest agent reads this on day one.
      </p>
    </div>
  );
}
