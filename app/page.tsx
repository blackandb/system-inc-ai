import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/layout/navbar";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";

export default function HomePage() {
  return (
    <Background>
      <Navbar />

      <PageContainer>
        <section className="flex min-h-[calc(100vh-80px)] items-center py-24">

          <div className="max-w-5xl">

            <PageHeader
              eyebrow="SYSTEM INC AI"
              title="The AI Company Operating System."
              description="Build, structure, launch and operate an AI-powered company from a single intelligent platform."
            />

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="/onboarding"
                className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Build Your Company
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 px-8 py-4 text-sm text-white transition hover:border-white/30"
              >
                Explore Platform
              </a>

            </div>

          </div>

        </section>
      </PageContainer>
    </Background>
  );
}
