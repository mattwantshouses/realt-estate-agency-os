"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { specialists } from "@/lib/specialists";
import { scenarios } from "@/lib/demo-flow";

function Typewriter({ text, speed = 20 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {!done && <span className="inline-block w-0.5 h-3.5 bg-teal-400 ml-0.5 animate-pulse align-middle" />}
    </span>
  );
}

export function FlowDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const scenario = scenarios[scenarioIndex];
  const flow = scenario.flow;
  const flowSlugs = scenario.flowSlugs;

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

  const switchScenario = (index: number) => {
    reset();
    setScenarioIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (activeStep >= flow.length - 1) {
      setIsAutoPlaying(false);
      return;
    }
    const timer = setTimeout(() => setActiveStep((p) => p + 1), 7000);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, activeStep, flow.length]);

  const step = activeStep >= 0 ? flow[activeStep] : null;

  // Delay handoff card appearance until typing is roughly done
  useEffect(() => {
    setShowCard(false);
    if (activeStep < 0) return;
    const thought = flow[activeStep]?.thought || "";
    const typingTime = thought.length * 20 + 300; // match typewriter speed + buffer
    const timer = setTimeout(() => setShowCard(true), typingTime);
    return () => clearTimeout(timer);
  }, [activeStep, flow]);

  return (
    <div className="space-y-6">
      {/* Scenario tabs */}
      <div className="flex justify-center gap-2">
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            onClick={() => switchScenario(i)}
            className={`px-4 py-2 text-sm rounded-lg border transition-all cursor-pointer ${
              scenarioIndex === i
                ? "bg-teal-700 text-white border-teal-700"
                : "bg-white text-stone-600 border-stone-300 hover:border-stone-400"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Request */}
      <div className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-mono bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded uppercase tracking-wider">
            Incoming
          </span>
          <span className="text-[10px] text-stone-400">{scenario.requestMeta}</span>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed">
          &ldquo;{scenario.request}&rdquo;
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => {
            if (activeStep >= flow.length - 1) { reset(); setTimeout(() => { setActiveStep(0); setIsAutoPlaying(true); }, 100); }
            else toggleAutoPlay();
          }}
          className="px-5 py-2 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors cursor-pointer"
        >
          {isAutoPlaying ? "⏸ Pause" : activeStep >= flow.length - 1 ? "↻ Replay" : "▶ Watch It Flow"}
        </button>
        {activeStep >= 0 && !isAutoPlaying && activeStep < flow.length - 1 && (
          <button
            onClick={() => setActiveStep((p) => p + 1)}
            className="px-4 py-2 bg-white border border-stone-300 text-stone-600 text-sm rounded-lg hover:bg-stone-50 transition-colors cursor-pointer"
          >
            Next →
          </button>
        )}
      </div>

      {/* Static folder pipeline */}
      <div className="flex items-center justify-between gap-1">
        {flowSlugs.map((slug, i) => {
          const spec = specialists.find((s) => s.slug === slug)!;
          const isActive = activeStep === i;
          const isPast = activeStep > i;

          return (
            <div key={slug} className="flex items-center flex-1 min-w-0">
              <button
                onClick={() => { setIsAutoPlaying(false); setActiveStep(i); }}
                className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 rounded-lg border-2 transition-all duration-300 w-full cursor-pointer ${
                  isActive
                    ? "border-teal-500 bg-teal-50 shadow-md"
                    : isPast
                      ? "border-stone-300 bg-white"
                      : "border-stone-200 bg-white opacity-50"
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

      {/* Detail panel */}
      <div className="min-h-[260px]">
        <AnimatePresence mode="wait">
          {step && (
            <motion.div
              key={`${scenario.id}-${activeStep}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Thought — typewriter effect */}
              <div className="bg-stone-800 text-white rounded-lg px-4 py-3 shadow-lg">
                <p className="text-[10px] font-mono text-stone-400 mb-1.5 uppercase tracking-wider">
                  💭 {specialists.find(s => s.slug === flowSlugs[activeStep])?.name} is thinking...
                </p>
                <p className="text-sm leading-relaxed">
                  <Typewriter key={`${scenario.id}-${activeStep}`} text={step.thought} speed={20} />
                </p>
              </div>

              {/* Handoff card — appears after typing finishes */}
              <AnimatePresence>
              {showCard && <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-teal-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-teal-50 px-4 py-2 border-b border-teal-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-teal-700 uppercase tracking-wider">
                    📤 Passes this card to {step.handoffCard.to}
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Step {activeStep + 1} of {flow.length}
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
              </motion.div>}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {activeStep === -1 && (
          <div className="flex items-center justify-center h-[260px] text-stone-300 text-sm">
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
    "market-intel": "#0d9488",
  };
  return colors[slug] || "#0d9488";
}
