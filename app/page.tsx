import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import MarketProof from "@/components/sections/MarketProof";
import DataValidation from "@/components/sections/DataValidation";
import Provenance from "@/components/sections/Provenance";
import UseCases from "@/components/sections/UseCases";
import TrustProcess from "@/components/sections/TrustProcess";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";
import SocialShare from "@/components/sections/SocialShare";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen">
        <HeroSection />
        <ValueProposition />
        <MarketProof />
        <DataValidation />
        <Provenance />
        <UseCases />
        <TrustProcess />
        <FAQ />
        <ContactSection />
        <SocialShare />
        <Footer />
      </main>
      <FloatingCTA />
    </>
  );
}

