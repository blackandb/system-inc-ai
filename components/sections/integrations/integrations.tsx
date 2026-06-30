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
];

export function Integrations() {
  return (
    <section className="py-40">

      <PageContainer>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <div className="max-w-xl">

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              INTEGRATIONS
            </p>

            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
              Connect your entire
              <span className="block text-zinc-500">
                business ecosystem.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              SYSTEM INC AI integrates with your existing software stack,
              allowing every AI department to exchange information,
              automate workflows and operate from one unified
              intelligence layer.
            </p>

            <div className="mt-14 space-y-8">

              <div>
                <p className="text-4xl font-semibold text-white">
                  100+
                </p>

                <p className="mt-2 text-zinc-400">
                  Enterprise integrations
                </p>
              </div>

              <div>
                <p className="text-4xl font-semibold text-white">
                  Real-time
                </p>

                <p className="mt-2 text-zinc-400">
                  Data synchronization
                </p>
              </div>

              <div>
                <p className="text-4xl font-semibold text-white">
                  API First
                </p>

                <p className="mt-2 text-zinc-400">
                  Built for developers
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {integrations.map((integration) => (

              <IntegrationCard
                key={integration.name}
                name={integration.name}
                category={integration.category}
              />

            ))}

          </div>

        </div>

      </PageContainer>

    </section>
  );
}
