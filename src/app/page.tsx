import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Services } from "@/components/sections/Services";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <CaseStudy />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
