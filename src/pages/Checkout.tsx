import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Crown, Check, Shield, Bitcoin, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [user, setUser] = useState<{ name: string; email: string; phone: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const onSubmit = async () => {
  if (!user) {
    toast({
      title: "Error",
      description: "User details not found.",
      variant: "destructive",
    });
    return;
  }

  setIsProcessing(true);

  try {
    const response = await fetch("https://payment-backend-nqln.onrender.com/create-invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });

    if (response.status === 401) {
      navigate("/session-expired");
      return;
    }

    if (!response.ok) {
      throw new Error("Checkout failed");
    }

    const data = await response.json();

    if (data.invoice_url) {
      window.location.href = data.invoice_url;
    } else {
      throw new Error("No payment URL received");
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
    setIsProcessing(false);
  }
};


  const cryptoOptions = [
    { name: "Bitcoin", symbol: "BTC", icon: Bitcoin },
    { name: "Ethereum", symbol: "ETH", icon: Zap },
    { name: "Tether", symbol: "USDT", icon: Shield },
  ];



  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Premium Upgrade Checkout</h1>
          <p className="text-muted-foreground">Complete your premium upgrade to unlock live trading</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="w-5 h-5 text-primary" />
                  <span>Order Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Premium Upgrade</span>
                  <span className="text-2xl font-bold text-primary">$4.99</span>
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <h4 className="font-semibold text-sm">Included Features:</h4>
                  <div className="space-y-2">
                    {[
                      "Live account trading",
                      "Advanced configurations",
                      "Priority support",
                      "Custom strategies",
                      "Detailed analytics"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-success" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 px-4 pt-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Account Activation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You'll be notified via the PO Signal Trader app once your premium account is activated. This typically takes 2-5 minutes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}  className="space-y-6">
                    <div className="space-y-4 mb-10">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="text-lg font-medium">{user?.name || "N/A"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-lg font-medium">{user?.email || "N/A"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-lg font-medium">{user?.phone || "N/A"}</p>
                      </div>
                    </div>



                    {/* Crypto Payment Info */}
                    <div className="border-t border-border pt-10">
                      <h3 className="font-semibold mb-1 flex items-center space-x-2">
                        <Bitcoin className="w-5 h-5 text-primary" />
                        <span>Cryptocurrency Payment</span>
                      </h3>

                      <div className="bg-muted/30 p-2 rounded-lg mb-1">
                        <p className="text-sm text-muted-foreground">
                          Payment is via crypto. Please prepare any of your crypto including Bitcoin, Etherium, Litecoin e.t.c:
                        </p>
                        {/* <div className="grid grid-cols-3 gap-3">
                          {cryptoOptions.map((crypto, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2 p-3 bg-background rounded-lg border">
                              <crypto.icon className="w-6 h-6 text-primary" />
                              <div className="text-center">
                                <div className="font-medium text-sm">{crypto.name}</div>
                                <div className="text-xs text-muted-foreground">{crypto.symbol}</div>
                              </div>
                            </div>
                          ))}
                        </div> */}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Complete Premium Upgrade"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Secure checkout • Your data is protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;