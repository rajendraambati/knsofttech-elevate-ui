import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white tracking-wide">MCODE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#company" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  COMPANY
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  FEATURES
                </a>
              </li>
              <li>
                <a href="#resources" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  RESOURCES
                </a>
              </li>
              <li>
                <a href="#docs" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  DOCS
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white hover:bg-white/30 transition-all duration-300">
              SIGNING
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <ul className="space-y-4">
              <li>
                <a href="#company" className="block text-white/80 hover:text-white">
                  COMPANY
                </a>
              </li>
              <li>
                <a href="#features" className="block text-white/80 hover:text-white">
                  FEATURES
                </a>
              </li>
              <li>
                <a href="#resources" className="block text-white/80 hover:text-white">
                  RESOURCES
                </a>
              </li>
              <li>
                <a href="#docs" className="block text-white/80 hover:text-white">
                  DOCS
                </a>
              </li>
              <li className="pt-2">
                <button className="w-full px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white">
                  SIGNING
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;