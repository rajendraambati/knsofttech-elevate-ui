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
    <section 
      id="capabilities" 
      className="py-20 relative"
      data-background-color="#0033cc"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Core Capabilities
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business 
            operations and drive sustainable growth.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="glass-card card-hover p-8"
            >
              <div className="mb-6">
                <img 
                  src={capability.image} 
                  alt={capability.title} 
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {capability.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;