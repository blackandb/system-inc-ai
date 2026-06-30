import { PageContainer } from "@/components/layout/page-container";
import { Network } from "./network";

export function AIAgents() {
  return (
    <section className="py-40">

      <PageContainer>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            AI AGENTS
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
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

        <div className="mt-24">

          <Network />

        </div>

      </PageContainer>

    </section>
  );
}