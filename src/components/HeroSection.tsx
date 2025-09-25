import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      data-background-color="hsl(var(--scroll-bg-hero))"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Innovate, Transform,{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-accent">
                Accelerate
              </span>{" "}
              with KN Softtech
            </h1>
            
            {/* Sub-headline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering enterprises across industries to scale at speed with cutting-edge 
              technology solutions, driving agility, resilience, and efficiency.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="btn-primary px-8 py-3 text-base font-semibold"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline px-8 py-3 text-base font-semibold border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16">
            <p className="text-sm text-gray-400 mb-6">Trusted by industry leaders worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="h-12 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-white font-semibold">Fortune 500</span>
              </div>
              <div className="h-12 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-white font-semibold">Enterprise</span>
              </div>
              <div className="h-12 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-white font-semibold">Global</span>
              </div>
              <div className="h-12 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-white font-semibold">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;