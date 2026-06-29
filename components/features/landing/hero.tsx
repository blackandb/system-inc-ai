import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";

const nodes = [
  { title: "CEO AI", subtitle: "Strategic Intelligence", className: "left-[42%] top-[0%]" },
  { title: "Strategy", subtitle: "Market & Growth", className: "left-[8%] top-[23%]" },
  { title: "Finance", subtitle: "Planning & Control", className: "right-[4%] top-[24%]" },
  { title: "Marketing", subtitle: "Brand & Demand", className: "left-[0%] top-[47%]" },
  { title: "Legal", subtitle: "Compliance & Risk", className: "right-[0%] top-[47%]" },
  { title: "Sales", subtitle: "Pipeline & Revenue", className: "left-[10%] bottom-[12%]" },
  { title: "Operations", subtitle: "Processes & Systems", className: "right-[14%] bottom-[12%]" },
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden py-12">
      <PageContainer>
        <div className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">

          {/* LEFT */}

          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              The AI Company Operating System
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-7xl leading-[0.95]">
              Build an AI Company.
              <span className="block text-zinc-500">
                Not just a business.
              </span>
            </h1>

            <div className="mt-7 flex items-center gap-5 text-xl font-medium text-white">
              <span>Build.</span>
              <span className="text-violet-400">•</span>
              <span>Launch.</span>
              <span className="text-violet-400">•</span>
              <span>Operate.</span>
            </div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
              Every company begins with an idea.
              SYSTEM INC AI transforms that idea into a complete
              AI-powered company by creating its brand, structure,
              departments, documents and intelligent workforce.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

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

          <div className="relative hidden h-[620px] lg:block">

            <div className="absolute inset-0 rounded-full border border-violet-400/20" />
            <div className="absolute inset-[9%] rounded-full border border-violet-400/15" />
            <div className="absolute inset-[18%] rounded-full border border-violet-400/10" />

            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/30 bg-violet-500/10 blur-sm" />

            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-[0_0_80px_rgba(124,92,255,.45)]">

              <div className="text-center">

                <div className="mx-auto mb-3 h-16 w-16 rounded-full border border-violet-300/50 bg-violet-500/20" />

                <p className="text-sm font-semibold uppercase tracking-wide">
                  Company Brain
                </p>

                <p className="mt-1 text-xs text-zinc-400">
                  AI Orchestration Engine
                </p>

              </div>

            </div>

            {nodes.map((node) => (
              <div
                key={node.title}
                className={`absolute ${node.className} w-56 rounded-2xl border border-white/10 bg-black/70 p-5 shadow-[0_0_50px_rgba(124,92,255,.18)] backdrop-blur-xl`}
              >
                <p className="text-sm font-semibold uppercase text-white">
                  {node.title}
                </p>

                <p className="mt-1 text-xs text-zinc-400">
                  {node.subtitle}
                </p>
              </div>
            ))}

          </div>

        </div>

        <div className="mt-6 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl md:grid-cols-4">

          {[
            ["Trusted by founders", "Building the future of business with AI"],
            ["100+", "AI Business Functions"],
            ["20+", "AI Departments"],
            ["1000+", "Document Templates"],
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
