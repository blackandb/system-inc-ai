import { PageContainer } from "@/components/layout/page-container";
import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "AI Memory",
    description:
      "A persistent company knowledge layer shared across every department, document and workflow.",
  },
  {
    title: "Workflow Engine",
    description:
      "Connect tasks, documents, approvals and AI agents into automated business processes.",
  },
  {
    title: "Permissions",
    description:
      "Role-based access for founders, teams, consultants, investors and enterprise users.",
  },
  {
    title: "Audit Logs",
    description:
      "Track human and AI actions with full operational transparency.",
  },
];

export function Enterprise() {
  return (
    <section className="py-40">
      <PageContainer>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              ENTERPRISE PLATFORM
            </p>

            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
              Built for startups.
              <span className="block text-zinc-500">
                Designed for enterprises.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              SYSTEM INC AI is not a simple AI assistant. It is a complete
              company operating layer built with automation, permissions,
              memory, workflows and governance from day one.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-black p-10 shadow-[0_0_120px_rgba(124,92,255,.12)]">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
              OPERATING LAYER
            </p>

            <h3 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white">
              One system for intelligence, execution and control.
            </h3>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-3xl font-semibold text-white">24/7</p>
                <p className="mt-2 text-sm text-zinc-400">AI Operations</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-3xl font-semibold text-white">100+</p>
                <p className="mt-2 text-sm text-zinc-400">Workflows</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-3xl font-semibold text-white">∞</p>
                <p className="mt-2 text-sm text-zinc-400">Company Memory</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
