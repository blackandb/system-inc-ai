import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/layout/navbar";

import { Hero } from "@/components/features/landing/hero";
import { CompanyFactory } from "@/components/features/landing/company-factory";

export default function HomePage() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <CompanyFactory />
    </Background>
  );
}
