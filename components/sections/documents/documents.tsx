import { PageContainer } from "@/components/layout/page-container";
import { DocumentCard } from "./document-card";

const documents = [
  { title: "Business Plan", category: "Strategy" },
  { title: "Pitch Deck", category: "Investors" },
  { title: "Company Profile", category: "Brand" },
  { title: "Sales Proposal", category: "Sales" },
  { title: "Client Contract", category: "Legal" },
  { title: "Privacy Policy", category: "Compliance" },
  { title: "SOP Manual", category: "Operations" },
  { title: "Investor Memo", category: "Capital" },
  { title: "Invoice Template", category: "Finance" },
];

export function Documents() {
  return (
    <section className="py-40">

      <PageContainer>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          <div className="max-w-xl">

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              DOCUMENT HUB
            </p>

            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
              Thousands of business documents.
              <span className="block text-zinc-500">
                Generated instantly.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              SYSTEM INC AI automatically creates every document your company
              needs—from incorporation and branding to sales, HR, finance,
              operations and fundraising.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {documents.map((document) => (

              <DocumentCard
                key={document.title}
                title={document.title}
                category={document.category}
              />

            ))}

          </div>

        </div>

      </PageContainer>

    </section>
  );
}
