import { PageContainer } from "@/components/layout/page-container";
import { IntegrationCard } from "./integration-card";

const integrations = [
  { name: "Google Workspace", category: "Productivity" },
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Slack", category: "Communication" },
  { name: "Notion", category: "Knowledge" },
  { name: "HubSpot", category: "CRM" },
  { name: "Stripe", category: "Payments" },
  { name: "GitHub", category: "Development" },
  { name: "OpenAI", category: "AI Provider" },
  { name: "Anthropic", category: "AI Provider" },
  { name: "QuickBooks", category: "Accounting" },
  { name: "Xero", category: "Accounting" },
  { name: "Zapier", category: "Automation" },
];

export function Integrations() {
  return (
    <section className="py-40">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            INTEGRATIONS
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
            Connect your company to the tools you already use.
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            SYSTEM INC AI connects with productivity, finance, CRM, AI and
            automation tools to turn your company into an intelligent operating
            system.
          </p>
        </div>

        <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {integrations.map((integration) => (
            <IntegrationCard
              key={integration.name}
              name={integration.name}
              category={integration.category}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
