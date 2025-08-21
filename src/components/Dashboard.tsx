import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Track Performance & Stay Ahead
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Monitor your trading performance with comprehensive analytics, 
                analyze signal effectiveness, and stay ahead of the market with 
                real-time insights.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">+24.5%</p>
                      <p className="text-sm text-muted-foreground">Monthly Return</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">87.2%</p>
                      <p className="text-sm text-muted-foreground">Win Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">$4,872</p>
                      <p className="text-sm text-muted-foreground">Total Profit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">156</p>
                      <p className="text-sm text-muted-foreground">Active Signals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Dashboard Features</h3>
              <ul className="space-y-3">
                {[
                  "Real-time balance tracking and progression graphs",
                  "Detailed trade history with signal source tracking", 
                  "Win/loss ratio analytics by signal provider",
                  "Performance metrics and profitability reports"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={dashboardImage}
                alt="Trading Dashboard Preview"
                className="w-full rounded-2xl shadow-2xl border border-border"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;