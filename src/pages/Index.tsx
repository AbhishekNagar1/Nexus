import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import FloatingSignIn from "@/components/FloatingSignIn";
import Beams from "@/components/Beams";

const Index = () => {
  const opportunities = [
    { id: 1, title: "PhD in Quantum Computing", institution: "MIT", type: "PhD", deadline: "Mar 15" },
    { id: 2, title: "AI Research Assistant", institution: "Stanford", type: "RA", deadline: "Feb 28" },
    { id: 3, title: "Climate Science JRF", institution: "Oxford", type: "JRF", deadline: "Apr 10" },
    { id: 4, title: "Data Science Fellowship", institution: "Harvard", type: "Fellowship", deadline: "Mar 30" },
    { id: 5, title: "Biotech Research Position", institution: "Cambridge", type: "Research", deadline: "Apr 15" },
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
      <FloatingSignIn />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-foreground mb-8 leading-[0.8] text-center w-full">
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent block text-center">
                Connecting Minds
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed text-center">
              The premier platform connecting professors, universities, and research institutes with talented students worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="default" 
                size="lg"
                className="px-12 py-6 text-lg animate-glow"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-12 py-6 text-lg glass-button"
              >
                Explore Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest Opportunities
            </h2>
            <p className="text-xl text-foreground/70">
              Discover your next research adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {opportunities.slice(0, 4).map((opp, index) => (
              <Card key={opp.id} className="glass hover:bg-white/5 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {opp.title}
                      </CardTitle>
                      <CardDescription className="text-foreground/80">
                        {opp.institution}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{opp.type}</Badge>
                      <Badge variant="outline">{opp.deadline}</Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="glass-button">
              View All Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-foreground/70">
              Success stories from researchers and students
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass hover:bg-white/5 transition-all duration-300" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground/70">
              Everything you need to know about ResearchNet
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass rounded-lg px-6">
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
    </div>
  );
};

export default Index;