import { Button } from "@/components/ui/button";
import { Smartphone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-auto rounded-lg flex items-center justify-center">
              <img
                src="/app_logo.png"
                alt="Trading Dashboard Preview"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <span className="text-xl font-semibold text-foreground">
              PO Signal Trader
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#premium" className="text-muted-foreground hover:text-foreground transition-colors">
              Premium Upgrade
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-primary hover:bg-primary-dark">
              <a href="https://play.google.com/store/apps/details?id=com.digitalskies.testapp" target="_blank" rel="noopener noreferrer">
              Download App
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#premium" className="text-muted-foreground hover:text-foreground transition-colors">
                Premium Upgrade
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Button variant="default" className="bg-primary hover:bg-primary-dark w-fit">
                Download App
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;