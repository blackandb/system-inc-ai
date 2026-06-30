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
        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              DOCUMENT HUB
            </p>

            <h2 className="mt-6 max-w-xl text-5xl font-semibold tracking-[-0.05em] text-white">
              Thousands of business documents. Generated instantly.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
              SYSTEM INC AI creates the documents your company needs to launch,
              operate, sell, hire, raise capital and stay compliant.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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