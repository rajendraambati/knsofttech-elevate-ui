import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

const Index = () => {
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
