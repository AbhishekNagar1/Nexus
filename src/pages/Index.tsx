import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Github, Mail } from "lucide-react";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import Beams from "@/components/Beams";
import AuthControls from "@/components/AuthControls";
import SlidingSignIn from "@/components/SlidingSignIn";

// Import university logos
import HarvardLogo from "@/assets/Harvard University.svg";
import MITLogo from "@/assets/MIT University.svg";
import OxfordLogo from "@/assets/Oxford University.svg";
import StanfordLogo from "@/assets/Stanford University.svg";
import FloridaLogo from "@/assets/Florida University.svg";
import NTLogo from "@/assets/NT University.svg";
import USLogo from "@/assets/US University.svg";

const Index = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  // Handle Get Started button click (same as sign in)
  const handleGetStarted = () => {
    setIsSignInOpen(true);
  };

  // Handle Explore Opportunities button click (redirect to opportunities page)
  const handleExploreOpportunities = () => {
    window.location.href = '/opportunities';
  };

  // Handle GitHub redirect
  const handleGitHubClick = () => {
    window.open('https://github.com/AbhishekNagar1/Nexus.git', '_blank');
  };

  // Handle Connect Me email
  const handleConnectMe = () => {
    const subject = encodeURIComponent('Nexus - Connection Request');
    const body = encodeURIComponent('Hi Abhishek,\n\nI found your Nexus project and would like to connect with you.\n\nBest regards');
    window.location.href = `mailto:abhisheknagar679@gmail.com?subject=${subject}&body=${body}`;
  };

  const opportunities = [
    { id: 1, title: "PhD in Quantum Computing", institution: "MIT", type: "PhD", deadline: "Mar 15" },
    { id: 2, title: "AI Research Assistant", institution: "Stanford", type: "RA", deadline: "Feb 28" },
    { id: 3, title: "Climate Science JRF", institution: "Oxford", type: "JRF", deadline: "Apr 10" },
    { id: 4, title: "Data Science Fellowship", institution: "Harvard", type: "Fellowship", deadline: "Mar 30" },
    { id: 5, title: "Biotech Research Position", institution: "Cambridge", type: "Research", deadline: "Apr 15" },
    { id: 6, title: "Machine Learning Internship", institution: "Google AI", type: "Internship", deadline: "May 20" },
    { id: 7, title: "Neuroscience PostDoc", institution: "Yale", type: "PostDoc", deadline: "Jun 1" },
    { id: 8, title: "Robotics PhD Program", institution: "Carnegie Mellon", type: "PhD", deadline: "Apr 25" },
  ];

  // University logos data
  const universityLogos = [
    { name: "Harvard University", logo: HarvardLogo },
    { name: "MIT", logo: MITLogo },
    { name: "Oxford University", logo: OxfordLogo },
    { name: "Stanford University", logo: StanfordLogo },
    { name: "Florida University", logo: FloridaLogo },
    { name: "NT University", logo: NTLogo },
    { name: "US University", logo: USLogo },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Professor at MIT",
      text: "ResearchNet connected me with brilliant students who became integral to my quantum computing research.",
      avatar: "SC"
    },
    {
      name: "Alex Rodriguez",
      role: "PhD Student",
      text: "Found my dream research position through ResearchNet. The platform made the application process seamless.",
      avatar: "AR"
    },
    {
      name: "Prof. Michael Johnson",
      role: "Oxford University",
      text: "The quality of candidates we find through ResearchNet is exceptional. Highly recommended for academic recruitment.",
      avatar: "MJ"
    }
  ];

  const faqs = [
    {
      question: "How do I apply for research positions?",
      answer: "Browse opportunities, click on positions that interest you, and submit your application through our streamlined form with your CV and research interests."
    },
    {
      question: "Is ResearchNet free to use?",
      answer: "Yes, ResearchNet is completely free for students and researchers. We believe in democratizing access to academic opportunities."
    },
    {
      question: "How are opportunities verified?",
      answer: "All opportunities are verified by our team and come directly from accredited institutions and verified research supervisors."
    },
    {
      question: "Can I save opportunities for later?",
      answer: "Yes, create a profile to save opportunities, track applications, and receive personalized recommendations based on your research interests."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <Header />
      
      {/* Auth Controls */}
      <AuthControls />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-50 text-center max-w-4xl mx-auto px-4 md:px-6">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-black mb-6 md:mb-8 leading-[0.8] w-full flex items-center justify-center">
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent relative z-50 text-center mx-auto">
                Connecting Minds
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-foreground/70 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-center px-4">
              The premier platform connecting professors, universities, and research institutes with talented students worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4 max-w-md sm:max-w-none mx-auto">
              <Button 
                variant="default" 
                size="lg"
                className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg animate-glow w-full sm:w-auto min-h-[44px]"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg glass-button w-full sm:w-auto min-h-[44px]"
                onClick={handleExploreOpportunities}
              >
                Explore Opportunities
              </Button>
            </div>
            
            {/* Open Source Section */}
            <div className="mt-8 flex flex-col items-center space-y-4">
              <div className="glass rounded-lg px-4 py-3 sm:px-5 sm:py-3 max-w-sm mx-auto">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10 transition-colors h-8 w-8 sm:h-9 sm:w-9"
                    onClick={handleGitHubClick}
                  >
                    <Github size={18} className="text-foreground sm:w-5 sm:h-5" />
                  </Button>
                  <div className="text-center">
                    <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                      This is <span className="font-semibold text-foreground">open source</span>! 
                      For more info,{" "}
                      <button 
                        onClick={handleConnectMe}
                        className="text-primary hover:text-primary/80 underline transition-colors font-medium"
                      >
                        connect with me
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 relative z-10 bg-background border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by ambitious students & professionals worldwide
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-8 md:mb-12">
            Featuring top universities like Harvard, MIT, Oxford, Stanford & more.
          </p>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth edge effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex animate-scroll space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20">
              {/* First set of logos */}
              <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 shrink-0">
                {universityLogos.map((university, index) => (
                  <div key={`first-${index}`} className="flex items-center justify-center min-w-[80px] sm:min-w-[100px] hover:scale-105 transition-transform duration-300">
                    <img 
                      src={university.logo} 
                      alt={university.name}
                      className="h-12 sm:h-16 md:h-16 lg:h-20 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300 no-select"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 shrink-0">
                {universityLogos.map((university, index) => (
                  <div key={`second-${index}`} className="flex items-center justify-center min-w-[80px] sm:min-w-[100px] hover:scale-105 transition-transform duration-300">
                    <img 
                      src={university.logo} 
                      alt={university.name}
                      className="h-12 sm:h-16 md:h-16 lg:h-20 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300 no-select"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Latest Opportunities
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70">
              Discover your next research adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 md:mb-8">
            {opportunities.slice(0, 8).map((opp, index) => (
              <a href="/opportunities" key={opp.id} className="block">
                <Card className="glass hover:bg-white/5 transition-all duration-300 cursor-pointer hover:scale-105" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="p-4 sm:p-5 md:p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg md:text-xl text-foreground mb-2 line-clamp-2">
                          {opp.title}
                        </CardTitle>
                        <CardDescription className="text-foreground/80 text-sm md:text-base">
                          {opp.institution}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2 ml-2">
                        <Badge variant="secondary" className="text-xs">{opp.type}</Badge>
                        <Badge variant="outline" className="text-xs">{opp.deadline}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <a href="/opportunities">
              <Button variant="outline" size="lg" className="glass-button px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                View All Opportunities
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70">
              Success stories from researchers and students
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass hover:bg-white/5 transition-all duration-300" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-background font-bold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70">
              Everything you need to know about ResearchNet
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-foreground hover:text-foreground/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      {/* Footer */}
      <ProfessionalFooter />
      
      {/* Sliding Sign In Panel */}
      <SlidingSignIn 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
      />
    </div>
  );
};

export default Index;