import { FlowDemo } from "@/components/flow-demo";
import { AllFolders } from "@/components/all-folders";
import { HandoffCardVisual } from "@/components/handoff-card-visual";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            The Agency OS
          </h1>
          <p className="mt-3 text-base sm:text-lg text-stone-500 leading-relaxed">
            Track and automate every real estate lead from start to finish.
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/sparkles-inc/agency-os"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="border-b border-stone-100">
        <div className="max-w-2xl mx-auto px-6 py-10">
          <div className="bg-stone-900 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center px-4">
              <div className="text-3xl mb-2">▶️</div>
              <p className="text-stone-400 text-sm">90-second walkthrough</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Meet the specialists — who they are */}
      <section id="specialists" className="border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-stone-900">
              Meet the specialists
            </h2>
            <p className="mt-1.5 text-sm text-stone-500">
              Six folders. Each one owns a part of your workflow. Click to explore.
            </p>
          </div>
          <AllFolders />
        </div>
      </section>

      {/* 2. The handoff card — what moves between them */}
      <section className="border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-stone-900">
              The Handoff Card
            </h2>
            <p className="mt-1.5 text-sm text-stone-500 max-w-md mx-auto">
              When one specialist finishes, they pass this card to the next.
              Same format every time. Readable on day one.
            </p>
          </div>
          <HandoffCardVisual />
        </div>
      </section>

      {/* 3. Flow demo — now watch it all work together */}
      <section id="flow" className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-stone-900">
              Now watch it all work together
            </h2>
            <p className="mt-1.5 text-sm text-stone-500 max-w-md mx-auto">
              A real Zillow lead flows through the system. Each specialist
              thinks, then passes a handoff card to the next.
            </p>
          </div>
          <FlowDemo />
        </div>
      </section>

      {/* Make it yours */}
      <section className="border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-stone-900">
              Make it yours
            </h2>
            <p className="mt-1.5 text-sm text-stone-500">
              The system works out of the box. Upload your own docs to customize it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            <div className="bg-white border border-dashed border-stone-300 rounded-lg p-4 hover:border-teal-400 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <span className="text-xl">📄</span>
                <div>
                  <p className="text-sm font-medium text-stone-700">Your SOPs</p>
                  <p className="text-xs text-teal-600 font-mono">→ Transaction Coordinator</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-dashed border-stone-300 rounded-lg p-4 hover:border-teal-400 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <span className="text-xl">📋</span>
                <div>
                  <p className="text-sm font-medium text-stone-700">Your intake form</p>
                  <p className="text-xs text-teal-600 font-mono">→ Lead Qualifier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get the system */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-teal-700 rounded-xl px-8 py-10 text-center">
            <h2 className="text-xl font-bold text-white">Get the system</h2>
            <p className="mt-2 text-teal-100 text-sm max-w-sm mx-auto">
              Clone the repo. Drop the folders into a Claude project.
              Your team is operational.
            </p>
            <a
              href="https://github.com/sparkles-inc/agency-os"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block px-6 py-2.5 bg-white text-teal-700 text-sm font-semibold rounded-lg hover:bg-teal-50 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-6 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400">
            Built for Clief Notes Competition #4 by{" "}
            <span className="text-stone-600 font-medium">Ruby Sparks</span>
          </p>
          <div className="flex items-center gap-3 text-xs text-stone-400">
            <a
              href="https://github.com/sparkles-inc/agency-os"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-600 transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <span>Clief Notes</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
