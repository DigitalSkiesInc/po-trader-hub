import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                PO Signal Trader
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Automate your Pocket Option trades with smart signal execution. 
              Join thousands of traders worldwide.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <nav className="space-y-2">
              <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#premium" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Premium
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Download App
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tutorials
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <nav className="space-y-2">
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="https://t.me/yourgroup" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Telegram Group
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Bug Reports
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Disclaimer
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 PO Signal Trader. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:support@example.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                support@example.com
              </a>
              <a href="https://t.me/yourgroup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;