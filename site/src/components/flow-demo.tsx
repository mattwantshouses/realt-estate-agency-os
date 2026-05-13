"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { specialists } from "@/lib/specialists";
import { saraFlow } from "@/lib/demo-flow";

const SAMPLE_REQUEST =
  'Hi! Saw a house on Zillow I love at 1845 Westwood Dr 78704. Wondering if it\'s still available and what comparable homes have sold for nearby? Budget around 550k. Need to move by end of summer. Have two kids, so schools matter. Thanks! - Sara M.';

const flowSlugs = ["orchestrator", "lead-qualifier", "property-research", "client-communication"];

export function FlowDemo() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    } else {
      setActiveStep(0);
      setIsAutoPlaying(true);
    }
  };

  const reset = () => {
    setActiveStep(-1);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (activeStep >= saraFlow.length - 1) {
      setIsAutoPlaying(false);
      return;
    }
    const timer = setTimeout(() => setActiveStep((p) => p + 1), 10000);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, activeStep]);

  const step = activeStep >= 0 ? saraFlow[activeStep] : null;

  return (
    <div className="space-y-6">
      {/* Request */}
      <div className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-mono bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded uppercase tracking-wider">
            Incoming
          </span>
          <span className="text-[10px] text-stone-400">Zillow · 9:14 AM</span>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed">
          &ldquo;{SAMPLE_REQUEST}&rdquo;
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => {
            if (activeStep >= saraFlow.length - 1) { reset(); setTimeout(() => { setActiveStep(0); setIsAutoPlaying(true); }, 100); }
            else toggleAutoPlay();
          }}
          className="px-5 py-2 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors cursor-pointer"
        >
          {isAutoPlaying ? "⏸ Pause" : activeStep >= saraFlow.length - 1 ? "↻ Replay" : "▶ Watch It Flow"}
        </button>
        {activeStep >= 0 && !isAutoPlaying && activeStep < saraFlow.length - 1 && (
          <button
            onClick={() => setActiveStep((p) => p + 1)}
            className="px-4 py-2 bg-white border border-stone-300 text-stone-600 text-sm rounded-lg hover:bg-stone-50 transition-colors cursor-pointer"
          >
            Next →
          </button>
        )}
      </div>

      {/* Static folder pipeline — never moves */}
      <div className="flex items-center justify-between gap-1">
        {flowSlugs.map((slug, i) => {
          const spec = specialists.find((s) => s.slug === slug)!;
          const isActive = activeStep === i;
          const isPast = activeStep > i;

          return (
            <div key={slug} className="flex items-center flex-1 min-w-0">
              {/* Folder chip */}
              <button
                onClick={() => { setIsAutoPlaying(false); setActiveStep(i); }}
                className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 rounded-lg border-2 transition-all duration-300 w-full cursor-pointer ${
                  isActive
                    ? `border-teal-500 bg-teal-50 shadow-md`
                    : isPast
                      ? `border-stone-300 bg-white`
                      : `border-stone-200 bg-white opacity-50`
                }`}
                style={isActive ? { borderColor: getColor(slug) } : undefined}
              >
                <span className="text-base sm:text-lg shrink-0">{spec.icon}</span>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-stone-400 leading-none">{spec.number}</p>
                  <p className={`text-xs font-semibold truncate leading-tight mt-0.5 ${
                    isActive ? "text-stone-900" : "text-stone-600"
                  }`}>
                    {spec.name}
                  </p>
                </div>
              </button>

              {/* Connector arrow */}
              {i < flowSlugs.length - 1 && (
                <div className={`mx-1 text-xs transition-colors duration-300 shrink-0 ${
                  isPast || isActive ? "text-teal-400" : "text-stone-200"
                }`}>
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail panel — single area, content swaps smoothly */}
      <div className="min-h-[280px]">
        <AnimatePresence mode="wait">
          {step && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Thought */}
              <div className="bg-stone-800 text-white rounded-lg px-4 py-3 shadow-lg">
                <p className="text-[10px] font-mono text-stone-400 mb-1.5 uppercase tracking-wider">
                  💭 {specialists.find(s => s.slug === flowSlugs[activeStep])?.name} is thinking...
                </p>
                <p className="text-sm leading-relaxed">{step.thought}</p>
              </div>

              {/* Handoff card — what gets passed to the next specialist */}
              <div className="bg-white border border-teal-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-teal-50 px-4 py-2 border-b border-teal-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-teal-700 uppercase tracking-wider">
                    📤 Passes this card to {step.handoffCard.to}
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Step {activeStep + 1} of {saraFlow.length}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-stone-500">
                    <span><span className="text-stone-400">From:</span> {step.handoffCard.from}</span>
                    <span><span className="text-stone-400">To:</span> {step.handoffCard.to}</span>
                    <span>
                      <span className="text-stone-400">Confidence:</span>{" "}
                      <span className="text-emerald-600 font-semibold">{step.handoffCard.confidence}</span>
                    </span>
                  </div>
                  <p className="text-xs font-mono text-stone-400">{step.handoffCard.case_name}</p>
                  <p className="text-sm text-stone-700 leading-relaxed">{step.handoffCard.summary}</p>
                  <div className="bg-teal-50 rounded px-3 py-2">
                    <p className="text-xs text-stone-600">
                      <span className="font-semibold text-teal-700">Next:</span>{" "}
                      {step.handoffCard.nextAction}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {activeStep === -1 && (
          <div className="flex items-center justify-center h-[280px] text-stone-300 text-sm">
            Press &ldquo;Watch It Flow&rdquo; to see the handoff in action
          </div>
        )}
      </div>
    </div>
  );
}

function getColor(slug: string) {
  const colors: Record<string, string> = {
    orchestrator: "#64748b",
    "lead-qualifier": "#059669",
    "property-research": "#2563eb",
    "client-communication": "#7c3aed",
  };
  return colors[slug] || "#0d9488";
}
