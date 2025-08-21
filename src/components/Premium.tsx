import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Zap } from "lucide-react";

const Premium = () => {
  const features = [
    "Trade on live accounts with real money",
    "Advanced configuration options",
    "Priority signal processing",
    "Custom martingale strategies",
    "Advanced risk management tools",
    "Detailed analytics and reporting",
    "Priority customer support",
    "Exclusive trading signals"
  ];

  return (
    <section id="premium" className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Features</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Unlock Premium Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take your trading to the next level with advanced features, 
            live account integration, and priority support.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-primary shadow-2xl relative overflow-hidden">
            {/* Premium Badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Most Popular
              </div>
            </div>

            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Premium</CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">$5</div>
                <div className="text-muted-foreground">/month</div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-6 text-lg"
              >
                <Crown className="w-5 h-5 mr-2" />
                Upgrade to Premium
              </Button>

              {/* Additional Info */}
              <div className="text-center space-y-2 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  7-day free trial • Cancel anytime
                </p>
                <p className="text-xs text-muted-foreground">
                  Premium subscription includes all current and future features
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Why Upgrade to Premium?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-semibold text-foreground">Live Trading</h4>
              <p className="text-sm text-muted-foreground">
                Execute signals on your live Pocket Option account with real money and advanced configurations.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Priority Support</h4>
              <p className="text-sm text-muted-foreground">
                Get priority customer support and access to exclusive trading strategies and signals.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-semibold text-foreground">Advanced Features</h4>
              <p className="text-sm text-muted-foreground">
                Unlock advanced money management, custom strategies, and detailed performance analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;