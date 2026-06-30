import { PageContainer } from "@/components/layout/page-container";
import { StepCard } from "./step-card";

const steps = [
  {
    number: "01",
    title: "Choose Your Country",
    description:
      "Select where you want to establish your company. SYSTEM INC AI automatically adapts the entire setup to local regulations.",
  },
  {
    number: "02",
    title: "Build Your Brand",
    description:
      "Generate your company name, identity, positioning, messaging and visual brand with AI.",
  },
  {
    number: "03",
    title: "Generate AI Departments",
    description:
      "Instantly create executive, finance, legal, marketing, operations and every other department required.",
  },
  {
    number: "04",
    title: "Launch Your Company",
    description:
      "Generate documents, workflows, knowledge base and operational processes automatically.",
  },
  {
    number: "05",
    title: "Operate with AI",
    description:
      "Your AI workforce manages the business while you focus on growth, strategy and decision making.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-40">

      <PageContainer>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            HOW IT WORKS
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
            Building a company has never been simpler.
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            SYSTEM INC AI guides founders through every stage of creating,
            launching and operating a modern AI-powered business.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-5">

          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </PageContainer>

    </section>
  );
}