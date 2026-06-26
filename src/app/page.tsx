import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhyItMatters } from "@/components/WhyItMatters";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhyItMatters />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
