import { PageContainer } from "@/components/layout/page-container";
import { DepartmentCard } from "./department-card";

const departments = [
  {
    title: "CEO AI",
    description: "Coordinates every AI department and executes strategic decisions.",
  },
  {
    title: "Strategy",
    description: "Business planning, growth initiatives and competitive intelligence.",
  },
  {
    title: "Finance",
    description: "Budgets, forecasting, financial reporting and cash flow.",
  },
  {
    title: "Legal",
    description: "Contracts, compliance, governance and legal documentation.",
  },
  {
    title: "Sales",
    description: "Lead generation, CRM, proposals and revenue operations.",
  },
  {
    title: "Marketing",
    description: "Brand strategy, campaigns, content and digital growth.",
  },
  {
    title: "Operations",
    description: "Processes, workflows, SOPs and execution management.",
  },
  {
    title: "HR",
    description: "Hiring, policies, organizational structure and talent.",
  },
  {
    title: "Technology",
    description: "Software architecture, integrations and automation.",
  },
  {
    title: "Accounting",
    description: "Invoices, bookkeeping and financial compliance.",
  },
  {
    title: "Customer Support",
    description: "Knowledge base, ticketing and customer success.",
  },
  {
    title: "Investor Relations",
    description: "Fundraising, reporting and shareholder communication.",
  },
];

export function AIDepartments() {
  return (
    <section className="py-40">

      <PageContainer>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            AI DEPARTMENTS
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
            Every department. Powered by AI.
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            SYSTEM INC AI replaces traditional departments with intelligent AI
            agents capable of planning, executing and continuously improving
            business operations.
          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {departments.map((department) => (

            <DepartmentCard
              key={department.title}
              title={department.title}
              description={department.description}
            />

          ))}

        </div>

      </PageContainer>

    </section>
  );
}