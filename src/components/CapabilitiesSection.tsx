import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import cloudIcon from "@/assets/cloud-icon.jpg";
import aiDataIcon from "@/assets/ai-data-icon.jpg";
import securityIcon from "@/assets/security-icon.jpg";
import digitalTransformIcon from "@/assets/digital-transform-icon.jpg";
import consultingIcon from "@/assets/consulting-icon.jpg";
import managedServicesIcon from "@/assets/managed-services-icon.jpg";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Cloud Solutions",
      description: "Accelerate innovation with scalable cloud infrastructure and migration services.",
      image: cloudIcon,
      link: "/services/cloud"
    },
    {
      title: "Data & AI",
      description: "Transform decision-making with advanced analytics and artificial intelligence.",
      image: aiDataIcon,
      link: "/services/data-ai"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions.",
      image: securityIcon,
      link: "/services/cybersecurity"
    },
    {
      title: "Digital Transformation",
      description: "Modernize operations and drive growth through digital innovation.",
      image: digitalTransformIcon,
      link: "/services/digital-transformation"
    },
    {
      title: "Consulting",
      description: "Strategic guidance to optimize technology investments and outcomes.",
      image: consultingIcon,
      link: "/services/consulting"
    },
    {
      title: "Managed Services",
      description: "24/7 support and management to keep your systems running smoothly.",
      image: managedServicesIcon,
      link: "/services/managed"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Our Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive measurable business outcomes.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card 
              key={capability.title}
              className="card-hover group cursor-pointer border-0 shadow-medium bg-card"
            >
              <CardContent className="p-8">
                {/* Service Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={capability.image} 
                    alt={capability.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to transform your business with our comprehensive solutions?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;