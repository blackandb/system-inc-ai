import { PageContainer } from "@/components/layout/page-container";
import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "Automation",
    description:
      "Automate repetitive workflows across every AI department without writing code.",
  },
  {
    title: "AI Memory",
    description:
      "Persistent company knowledge shared across every AI agent and workflow.",
  },
  {
    title: "Workflow Engine",
    description:
      "Visual business processes connecting documents, departments and AI agents.",
  },
  {
    title: "Permissions",
    description:
      "Enterprise-grade role-based access control for teams and organizations.",
  },
  {
    title: "Audit Logs",
    description:
      "Track every action performed by users and AI agents with complete transparency.",
  },
  {
    title: "Multi-Company Workspace",
    description:
      "Manage multiple companies from one intelligent operating platform.",
  },
];

export function Enterprise() {
  return (
    <section className="py-40">

      <PageContainer>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            ENTERPRISE PLATFORM
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
            Built for startups.
            <br />
            Designed for enterprises.
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            SYSTEM INC AI combines enterprise architecture,
            AI orchestration and automation into a single
            operating platform for modern organizations.
          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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