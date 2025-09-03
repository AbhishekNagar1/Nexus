import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Beams from "@/components/Beams";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-tight">
              Connect minds for
              <br />
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                academic excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              The premier platform connecting professors, universities, and research institutes with talented students worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                className="px-12 py-6 text-lg animate-glow"
              >
                Get Started
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className="px-12 py-6 text-lg"
              >
                Explore Opportunities
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Academic Stats */}
        <div className="absolute top-1/4 left-12 animate-float">
          <div className="glass p-6 rounded-2xl">
            <div className="text-2xl font-bold text-foreground">15,000+</div>
            <div className="text-sm text-foreground/60">Research Positions</div>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-12 animate-float" style={{ animationDelay: '2s' }}>
          <div className="glass p-6 rounded-2xl">
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-foreground/60">Universities</div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="glass p-6 rounded-2xl">
            <div className="text-2xl font-bold text-foreground">50,000+</div>
            <div className="text-sm text-foreground/60">Researchers</div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;