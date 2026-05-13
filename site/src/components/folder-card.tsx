"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Specialist } from "@/lib/specialists";

export function FolderCard({
  specialist,
  isActive,
  thought,
  output,
  compact,
}: {
  specialist: Specialist;
  isActive?: boolean;
  thought?: string;
  output?: string;
  compact?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-stretch gap-1.5">
      {/* Thought bubble — only in flow mode */}
      <AnimatePresence>
        {isActive && thought && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-stone-800 text-white rounded-lg px-3 py-2.5 text-xs leading-relaxed relative shadow-lg"
          >
            <p>{thought}</p>
            <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-stone-800 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The folder card */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`relative text-left rounded-lg border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
          isActive
            ? `${specialist.borderColor} shadow-md ring-1 ring-offset-1 ring-teal-400/30`
            : isOpen
              ? `${specialist.borderColor} shadow-md`
              : "border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300"
        } ${compact ? "p-3" : "p-4"}`}
        style={{ background: "white" }}
      >
        {/* Colored accent bar */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-1 ${specialist.bgColor}`}
          style={{
            background:
              specialist.slug === "orchestrator" ? "#64748b" :
              specialist.slug === "lead-qualifier" ? "#059669" :
              specialist.slug === "property-research" ? "#2563eb" :
              specialist.slug === "client-communication" ? "#7c3aed" :
              specialist.slug === "transaction-coordinator" ? "#d97706" :
              "#0d9488",
          }}
        />

        <div className="flex items-center gap-3 pl-2">
          <span className={compact ? "text-lg" : "text-xl"}>{specialist.icon}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-stone-400">{specialist.number}</span>
              <span className={`${compact ? "text-xs" : "text-sm"} font-semibold text-stone-800 truncate`}>
                {specialist.name}
              </span>
            </div>
            {!compact && (
              <p className="text-xs text-stone-500 mt-0.5 line-clamp-2 leading-relaxed">
                {specialist.role}
              </p>
            )}
          </div>
          <span className="ml-auto text-stone-300 text-xs shrink-0">
            {isOpen ? "▲" : "▼"}
          </span>
        </div>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.08, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background:
                specialist.slug === "orchestrator" ? "#64748b" :
                specialist.slug === "lead-qualifier" ? "#059669" :
                specialist.slug === "property-research" ? "#2563eb" :
                specialist.slug === "client-communication" ? "#7c3aed" :
                specialist.slug === "transaction-coordinator" ? "#d97706" :
                "#0d9488",
            }}
          />
        )}
      </motion.button>

      {/* Output below — only in flow mode */}
      <AnimatePresence>
        {isActive && output && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-stone-400 px-3 leading-relaxed"
          >
            → {output}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="text-xs font-semibold text-stone-900 mb-1.5">What they do</h4>
                <ul className="space-y-1">
                  {specialist.capabilities.map((c, i) => (
                    <li key={i} className="text-xs text-stone-600 flex gap-2 leading-relaxed">
                      <span className="text-teal-600 shrink-0 mt-0.5">→</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-200">
                <div>
                  <h4 className="text-xs font-semibold text-emerald-700 mb-1">Always</h4>
                  <ul className="space-y-0.5">
                    {specialist.alwaysRules.map((r, i) => (
                      <li key={i} className="text-xs text-stone-500 leading-relaxed">✓ {r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-red-600 mb-1">Never</h4>
                  <ul className="space-y-0.5">
                    {specialist.neverRules.map((r, i) => (
                      <li key={i} className="text-xs text-stone-500 leading-relaxed">✗ {r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 space-y-1">
                <p className="text-xs text-stone-500">
                  <span className="font-semibold text-stone-700">Receives:</span> {specialist.receives}
                </p>
                <p className="text-xs text-stone-500">
                  <span className="font-semibold text-stone-700">Produces:</span> {specialist.produces}
                </p>
                <p className="text-xs text-stone-500">
                  <span className="font-semibold text-stone-700">Passes to:</span> {specialist.passesTo.join(" · ")}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
