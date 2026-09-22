import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { WhyVoice } from "@/components/WhyVoice";
import { Advantage } from "@/components/Advantage";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-bg__base" />
        <div className="mesh-bg__blob mesh-bg__blob--a" />
        <div className="mesh-bg__blob mesh-bg__blob--b" />
      </div>

      <main className="content">
        <Nav />
        <Hero />
        <Intro />
        <Mission />
        <Services />
        <WhyVoice />
        <Advantage />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
