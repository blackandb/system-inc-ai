import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/layout/navbar";

import { Hero } from "@/components/features/landing/hero";

export default function HomePage() {
  return (
    <Background>
      <Navbar />
      <Hero />
    </Background>
  );
}
