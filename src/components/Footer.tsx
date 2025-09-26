import { Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Cloud Solutions",
        "Data & AI",
        "Cybersecurity",
        "Digital Transformation",
        "Consulting",
        "Managed Services"
      ]
    },
    {
      title: "Industries",
      links: [
        "Financial Services",
        "Healthcare",
        "Manufacturing",
        "Retail & E-commerce",
        "Government",
        "Education"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Leadership",
        "Careers",
        "News & Press",
        "Partners",
        "Contact Us"
      ]
    },
    {
      title: "Resources",
      links: [
        "Insights & Research",
        "Case Studies",
        "Whitepapers",
        "Webinars",
        "Documentation",
        "Support"
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer 
      className="relative py-12 border-t border-white/10"
      data-background-color="#333"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">MCODE</h3>
            <p className="text-white/70 max-w-sm">
              Transforming businesses through innovative AI solutions 
              and expert digital transformation services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">AI & Data Analytics</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">White Papers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; 2024 MCODE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;