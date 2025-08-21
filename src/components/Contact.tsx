import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Users, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about PO Signal Trader? Need support or want to join our community? 
            We're here to help you succeed.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Support */}
          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Email Support
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get technical support, ask questions, or report issues. 
                Our team typically responds within 24 hours.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary-light"
                onClick={() => window.open('mailto:support@example.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                support@example.com
              </Button>
            </CardContent>
          </Card>

          {/* Telegram Support */}
          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Telegram Support
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect with us directly on Telegram for real-time support 
                and instant answers to your questions.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary-light mb-3"
                onClick={() => window.open('https://t.me/yourgroup', '_blank')}
              >
                <Send className="w-4 h-4 mr-2" />
                Contact on Telegram
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Community Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Join Our Trading Community
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect with thousands of traders using PO Signal Trader. Share strategies, 
                get tips, and stay updated with the latest features and market insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground px-8"
                  onClick={() => window.open('https://t.me/yourgroup', '_blank')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Telegram Group
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary-light px-8"
                  onClick={() => window.open('mailto:support@example.com?subject=Community Question', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Ask a Question
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Common Questions
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <h4 className="font-medium text-foreground mb-2">How does it work?</h4>
              <p className="text-sm text-muted-foreground">
                Connect your Telegram channels and the app will automatically execute signals on your account.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-foreground mb-2">Is it safe?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, the app uses secure API connections and never stores your account credentials.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-foreground mb-2">Free trial?</h4>
              <p className="text-sm text-muted-foreground">
                Free users can test on demo accounts. Premium unlocks live trading with a 7-day trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;