import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-app-mockup.jpg";

const Hero = () => {
  return (
    <section id="home" className="py-20 lg:py-32 bg-gradient-to-br from-primary-light to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Automate your{" "}
                <span className="text-primary">Pocket Option</span> trades with{" "}
                <span className="text-primary">smart signal execution</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Execute Telegram trade signals automatically, customize trading settings per channel, 
                and track your performance with advanced analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Download on Google Play
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary-light px-8 py-6 text-lg"
              >
                View Features
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">
                Trusted by traders worldwide
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  Active users: 10,000+
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  Success rate: 85%+
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="PO Signal Trader App Interface"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-4 left-4 w-48 h-48 bg-success/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;