"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const steps = [
  "Idea",
  "Workspace",
  "Country",
  "Industry",
  "Company",
  "Brand",
  "Departments",
  "Review",
];

const industries = [
  "Technology",
  "AI / Software",
  "Energy",
  "Defense",
  "Construction",
  "Hospitality",
  "Finance",
  "Healthcare",
  "Other",
];

const departments = [
  "CEO AI",
  "Strategy",
  "Finance",
  "Legal",
  "Marketing",
  "Sales",
  "Operations",
  "HR",
  "Technology",
  "Investor Relations",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);

  const progress = useMemo(() => {
    return Math.round(((step + 1) / steps.length) * 100);
  }, [step]);

  const next = () => setStep((current) => Math.min(current + 1, steps.length - 1));
  const back = () => setStep((current) => Math.max(current - 1, 0));

  return (
    <main className="min-h-screen bg-[#030305] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-[0.35em] text-white">
            SYSTEM INC AI
          </Link>

          <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60 md:block">
            Company Creation Wizard
          </div>
        </header>

        <div className="mt-10 grid flex-1 gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                Onboarding
              </p>
              <h1 className="mt-3 text-2xl font-semibold">
                Build your AI company
              </h1>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Transform an idea into a structured AI-powered company.
              </p>
            </div>

            <div className="mb-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-2">
              {steps.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setStep(index)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition ${
                    index === step
                      ? "bg-white text-black"
                      : "text-white/55 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-xs">
                    {index + 1}
                  </span>
                  {item}
                </button>
              ))}
            </div>
          </aside>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-10">
            {step === 0 && (
              <WizardBlock
                label="Step 01"
                title="What company do you want to build?"
                description="Start with the raw idea. SYSTEM INC AI will transform it into a structured company."
              >
                <textarea
                  className="min-h-52 w-full rounded-2xl border border-white/10 bg-black/30 p-5 text-sm outline-none placeholder:text-white/30 focus:border-violet-400"
                  placeholder="Example: I want to build an AI platform for European energy intelligence..."
                />
              </WizardBlock>
            )}

            {step === 1 && (
              <WizardBlock
                label="Step 02"
                title="Create your workspace"
                description="This will become the command center for your AI company."
              >
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/30 p-5 text-sm outline-none placeholder:text-white/30 focus:border-violet-400"
                  placeholder="Workspace name"
                />
              </WizardBlock>
            )}

            {step === 2 && (
              <WizardBlock
                label="Step 03"
                title="Select country"
                description="The platform will later adapt legal structure, documents and setup logic by country."
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {["Romania", "United Kingdom", "United States", "UAE", "Germany", "France"].map(
                    (country) => (
                      <ChoiceCard key={country} title={country} />
                    )
                  )}
                </div>
              </WizardBlock>
            )}

            {step === 3 && (
              <WizardBlock
                label="Step 04"
                title="Choose industry"
                description="Industry selection defines departments, documents, positioning and AI agents."
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {industries.map((industry) => (
                    <ChoiceCard key={industry} title={industry} />
                  ))}
                </div>
              </WizardBlock>
            )}

            {step === 4 && (
              <WizardBlock
                label="Step 05"
                title="Company identity"
                description="Define the first version of the company name and business model."
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm outline-none placeholder:text-white/30 focus:border-violet-400"
                    placeholder="Company name"
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm outline-none placeholder:text-white/30 focus:border-violet-400"
                    placeholder="Business model"
                  />
                </div>
              </WizardBlock>
            )}

            {step === 5 && (
              <WizardBlock
                label="Step 06"
                title="Brand foundation"
                description="Set the positioning, tone and public identity of the company."
              >
                <div className="grid gap-4">
                  <input
                    className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm outline-none placeholder:text-white/30 focus:border-violet-400"
                    placeholder="Tagline"
                  />
                  <textarea
                    className="min-h-36 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm outline-none placeholder:text-white/30 focus:border-violet-400"
                    placeholder="Describe the brand in one paragraph"
                  />
                </div>
              </WizardBlock>
            )}

            {step === 6 && (
              <WizardBlock
                label="Step 07"
                title="Select AI departments"
                description="Choose the operating intelligence layer for the company."
              >
                <div className="grid gap-4 md:grid-cols-2">
                  {departments.map((department) => (
                    <ChoiceCard key={department} title={department} />
                  ))}
                </div>
              </WizardBlock>
            )}

            {step === 7 && (
              <WizardBlock
                label="Step 08"
                title="Review and build"
                description="This is the final confirmation before SYSTEM INC AI generates the company structure."
              >
                <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                  <p className="text-sm text-white/60">
                    Ready to generate: company structure, AI departments, executive team,
                    brand foundation, website blueprint and first documents.
                  </p>
                </div>
              </WizardBlock>
            )}

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <button
                onClick={back}
                disabled={step === 0}
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Back
              </button>

              {step < steps.length - 1 ? (
                <button
                  onClick={next}
                  className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-violet-200"
                >
                  Continue →
                </button>
              ) : (
                <Link
                  href="/onboarding/complete"
                  className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-violet-200"
                >
                  Build Company →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function WizardBlock({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-violet-300">{label}</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
        {description}
      </p>
      <div className="mt-10">{children}</div>
    </div>
  );
}

function ChoiceCard({ title }: { title: string }) {
  return (
    <button className="rounded-2xl border border-white/10 bg-black/30 p-5 text-left text-sm text-white/70 transition hover:border-violet-400 hover:bg-white/10 hover:text-white">
      {title}
    </button>
  );
}
