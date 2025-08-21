import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Settings, TrendingUp, BarChart3 } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Execute Telegram Signals",
    description: "Automatically execute trade signals from your favorite Telegram channels with real-time processing and instant execution."
  },
  {
    icon: Settings,
    title: "Custom Trading Settings",
    description: "Configure unique trading parameters for each signal channel, including stake amounts, martingale strategies, and risk management."
  },
  {
    icon: TrendingUp,
    title: "Advanced Money Management",
    description: "Implement sophisticated money management strategies with stop-loss, take-profit, and progressive betting systems."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your trade performance with detailed analytics, balance progression graphs, and comprehensive win/loss statistics."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Trading Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate and optimize your Pocket Option trading experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to start automated trading?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Download for Android
            </a>
            <a 
              href="#premium" 
              className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary-light px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Premium Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;