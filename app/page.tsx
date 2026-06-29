import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/features/landing/hero";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <Footer />
    </Background>
  );
}
