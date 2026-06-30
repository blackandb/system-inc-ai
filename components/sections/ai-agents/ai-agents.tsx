import { PageContainer } from "@/components/layout/page-container";
import { Network } from "./network";

const mobileAgents = [
  "CEO AI",
  "Strategy",
  "Finance",
  "Legal",
  "Marketing",
  "Sales",
  "HR",
  "Operations",
];

export function AIAgents() {
  return (
    <section className="py-40">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            AI AGENTS
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            One AI Core.
            <br />
            Infinite Intelligence.
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            Every department is powered by a specialized AI agent.
            Together they form a coordinated intelligence layer that
            operates your business continuously.
          </p>
        </div>

        {/* Desktop */}

        <div className="mt-24 hidden lg:block">
          <Network />
        </div>

        {/* Mobile */}

        <div className="mt-14 grid gap-4 lg:hidden">
          {mobileAgents.map((agent) => (
            <div
              key={agent}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-violet-400" />

                <span className="text-base font-medium text-white">
                  {agent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
