import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/features/landing/hero";

import { CompanyFactory } from "@/components/sections/company-factory";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AIDepartments } from "@/components/sections/ai-departments";
import { AIAgents } from "@/components/sections/ai-agents";

import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <Background>
      <Navbar />

      <main>

        <Hero />

        <CompanyFactory />

        <HowItWorks />

        <AIDepartments />

        <AIAgents />

      </main>

      <Footer />

    </Background>
  );
}