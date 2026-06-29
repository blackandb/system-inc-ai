import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Workflow } from "./workflow";

export function CompanyFactory() {
  return (
    <section className="py-40">

      <PageContainer>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              COMPANY FACTORY
            </p>

            <h2 className="mt-6 max-w-xl text-5xl font-semibold tracking-[-0.05em] text-white">
              From idea to company in minutes.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
              SYSTEM INC AI transforms a business idea into a fully operational
              AI-powered company by generating the brand, organizational
              structure, AI departments, business documents and operating
              processes automatically.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/onboarding"
                className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Start Building →
              </Link>

            </div>

          </div>

          <Workflow />

        </div>

      </PageContainer>

    </section>
  );
}