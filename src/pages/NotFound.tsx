import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Home, ArrowLeft, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import AuthControls from "@/components/AuthControls";

const NotFound = () => {
  const { toast } = useToast();

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSearchOpportunities = () => {
    window.location.href = '/opportunities';
  };

  const handleContactSupport = () => {
    toast({
      title: "Coming Soon! 📞",
      description: "Customer support system is currently in development. Please check back soon or contact us via email.",
      duration: 4000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AuthControls />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Hero Section */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <AlertTriangle size={64} className="text-red-500 md:w-20 md:h-20" />
                </div>
              </div>
            </div>
            
            <h1 className="text-8xl md:text-9xl font-black text-foreground mb-4 leading-none">
              404
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have gone on its own research expedition. 
              Let's get you back on track to discover amazing academic opportunities.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="glass hover:bg-white/5 transition-all duration-300 cursor-pointer" onClick={handleGoHome}>
              <CardContent className="p-6 text-center">
                <Home size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Go Home</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Return to our homepage and start fresh
                </p>
                <Button variant="outline" className="w-full">
                  Take Me Home
                </Button>
              </CardContent>
            </Card>

            <Card className="glass hover:bg-white/5 transition-all duration-300 cursor-pointer" onClick={handleSearchOpportunities}>
              <CardContent className="p-6 text-center">
                <Search size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Browse Opportunities</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Explore research positions and academic opportunities
                </p>
                <Button variant="outline" className="w-full">
                  Find Opportunities
                </Button>
              </CardContent>
            </Card>

            <Card className="glass hover:bg-white/5 transition-all duration-300 cursor-pointer" onClick={handleGoBack}>
              <CardContent className="p-6 text-center">
                <ArrowLeft size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Go Back</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Return to the previous page you were viewing
                </p>
                <Button variant="outline" className="w-full">
                  Go Back
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Help Section */}
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Need Help?
              </h3>
              <p className="text-foreground/70 mb-6">
                If you believe this is an error or you're looking for something specific, 
                our support team is here to help you navigate the academic world.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="default" className="px-6 py-3" onClick={handleContactSupport}>
                  Contact Support
                </Button>
                <Button variant="outline" className="px-6 py-3" onClick={() => window.location.href = '/community'}>
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-lg font-semibold text-foreground mb-4">Popular Pages</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/researchers" className="text-foreground/70 hover:text-foreground transition-colors">
                Researchers
              </a>
              <a href="/community" className="text-foreground/70 hover:text-foreground transition-colors">
                Community
              </a>
              <a href="/about" className="text-foreground/70 hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="/privacy" className="text-foreground/70 hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-foreground/70 hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </main>

      <ProfessionalFooter />
    </div>
  );
};

export default NotFound;