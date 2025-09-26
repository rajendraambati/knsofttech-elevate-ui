import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";
import CyberpunkBackground from "@/components/CyberpunkBackground";
import { useScrollBackground } from "@/hooks/useScrollBackground";

const Index = () => {
  useScrollBackground();

  return (
    <div className="min-h-screen relative">
      <CyberpunkBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <CapabilitiesSection />
          <InsightsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
