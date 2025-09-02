import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, AlertTriangle, Smartphone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SessionExpired = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="border-2 border-destructive/20">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-destructive" />
            </div>
            <CardTitle className="text-xl font-bold text-destructive">Session Expired/Invalid</CardTitle>
            <p className="text-muted-foreground text-sm">
              Your session is expired or invalid
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">What to do next</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Please return to the PO Signal Trader app and get redirected to this website again to continue with your premium upgrade.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-center">Don't have the app?</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.digitalskies.testapp"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full" variant="default">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download PO Signal Trader App
                </Button>
              </a>
            </div>

            <div className="border-t border-border pt-4">
              <Link to="/">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SessionExpired;