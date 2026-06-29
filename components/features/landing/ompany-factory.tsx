import { PageContainer } from "@/components/layout/page-container";

export function CompanyFactory() {
  return (
    <section className="border-t border-white/5 py-32">
      <PageContainer>
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
            COMPANY FACTORY
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Build an entire company.
            <br />
            Not just another startup.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            SYSTEM INC AI transforms a business idea into a fully operational
            company by generating departments, AI executives, workflows,
            documents and operational intelligence from a single onboarding
            experience.
          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
            <p className="text-2xl font-semibold text-white">
              Create
            </p>

            <p className="mt-4 text-zinc-400 leading-8">
              Build your company through an AI-guided onboarding experience
              that generates the foundation of your business.
            </p>
          </div>

          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
            <p className="text-2xl font-semibold text-white">
              Operate
            </p>

            <p className="mt-4 text-zinc-400 leading-8">
              Replace traditional departments with specialized AI agents that
              manage operations, documents and business processes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
            <p className="text-2xl font-semibold text-white">
              Scale
            </p>

            <p className="mt-4 text-zinc-400 leading-8">
              Expand your company using an intelligent operating system built
              to support founders, startups and enterprises.
            </p>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}