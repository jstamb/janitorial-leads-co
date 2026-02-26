import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TheMath } from "@/components/sections/TheMath";
import { WhatWeTarget } from "@/components/sections/WhatWeTarget";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <TheMath />
        <WhatWeTarget />
        <CaseStudy />
        <Pricing />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
