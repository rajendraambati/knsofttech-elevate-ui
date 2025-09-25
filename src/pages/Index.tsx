import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";
import { useScrollBackground } from "@/hooks/useScrollBackground";

const Index = () => {
  useScrollBackground();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <InsightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
