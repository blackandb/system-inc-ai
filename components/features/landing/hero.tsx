import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { CompanyVisualization } from "@/components/visualizations/company-visualization";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden py-8">
      <PageContainer>
        <div className="grid min-h-[560px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              The AI Company Operating System
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-white md:text-6xl lg:text-[5.2rem]">
              Build an AI Company.
              <span className="block text-zinc-500">
                Not just a business.
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-5 text-xl font-medium text-white">
              <span>Build.</span>
              <span className="text-violet-400">•</span>
              <span>Launch.</span>
              <span className="text-violet-400">•</span>
              <span>Operate.</span>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300">
              Every company begins with an idea.
              SYSTEM INC AI transforms that idea into a complete
              AI-powered company by creating its brand,
              structure, departments, documents and intelligent workforce.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <Link
                href="/onboarding"
                className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Start Building →
              </Link>

              <a
                href="#platform"
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm text-white transition hover:border-white/30"
              >
                Watch Demo
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hidden lg:block">
            <CompanyVisualization />
          </div>

        </div>

        {/* STATS */}

        <div className="mt-24 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl md:grid-cols-4">

          {[
            [
              "Trusted by founders",
              "Building the future of business with AI",
            ],
            [
              "100+",
              "AI Business Functions",
            ],
            [
              "20+",
              "AI Departments",
            ],
            [
              "1000+",
              "Document Templates",
            ],
          ].map(([title, subtitle]) => (

            <div
              key={title}
              className="border-white/10 p-8 md:border-r last:border-r-0"
            >

              <p className="text-3xl font-semibold text-white">
                {title}
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {subtitle}
              </p>

            </div>

          ))}

        </div>

      </PageContainer>
    </section>
  );
}
