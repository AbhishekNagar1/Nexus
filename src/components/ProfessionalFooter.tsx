import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NexusLogo from "@/assets/nexus_logo.svg";
import FooterBg from "@/assets/professional_footer_bg.svg";

const ProfessionalFooter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubscribe = () => {
    if (email.trim()) {
      toast({
        title: "Coming Soon! 📧",
        description: "Newsletter subscription feature is currently in development. We'll notify you when it's ready!",
        duration: 4000,
      });
      setEmail("");
    } else {
      toast({
        title: "Please enter your email",
        description: "Enter a valid email address to subscribe to our newsletter.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleSocialClick = (platform: string) => {
    toast({
      title: "Coming Soon! 🚀",
      description: `${platform} integration is currently in development. Follow us soon!`,
      duration: 3000,
    });
  };
  return (
    <footer 
      className="relative text-white mt-20 overflow-hidden min-h-screen md:h-screen w-full"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Large NEXUS watermark - Black weight 900, only top half visible */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-0 hidden md:block">
        <div 
          className="select-none"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: '370px',
            color: '#555555',
            lineHeight: 1,
            textAlign: 'center',
            transform: 'translateY(50%)',
            width: '100%'
          }}
        >
          NEXUS
        </div>
      </div>
      
      <div className="relative z-10 min-h-screen md:h-full flex flex-col justify-center px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="mb-8">
                <div className="flex items-center gap-3 md:block">
                  <img 
                    src={NexusLogo} 
                    alt="Nexus Logo" 
                    className="w-16 h-16 object-contain no-select"
                  />
                  <span className="text-white text-4xl font-bold md:hidden">Nexus</span>
                </div>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed max-w-[300px]">
                Connecting minds for academic excellence. The premier platform for researchers, students, and institutions worldwide.
              </p>
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => handleSocialClick('Facebook')}
                >
                  <Facebook size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => handleSocialClick('Twitter')}
                >
                  <Twitter size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => handleSocialClick('LinkedIn')}
                >
                  <Linkedin size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => handleSocialClick('YouTube')}
                >
                  <Youtube size={18} />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Opportunities", href: "/opportunities" },
                  { name: "Researchers", href: "/researchers" },
                  { name: "Community", href: "/community" },
                  { name: "Success Stories", href: "/404" },
                  { name: "Help Center", href: "/help" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-200 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      {link.name}
                      <ExternalLink size={12} className="text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-4">
                {[
                  { name: "Research Positions", href: "/research-positions" },
                  { name: "PhD Programs", href: "/phd-programs" },
                  { name: "Fellowships", href: "/fellowships" },
                  { name: "Internships", href: "/internships" },
                  { name: "Academic Jobs", href: "/academic-jobs" },
                  { name: "Mentorship", href: "/mentorship" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-200 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      {link.name}
                      <ExternalLink size={12} className="text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Subscribe to our newsletter for the latest opportunities and updates.
              </p>
              <div className="space-y-4">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 h-11 rounded-lg backdrop-blur-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSubscribe()}
                />
                <Button 
                  className="w-full h-11 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-lg transition-all duration-200" 
                  onClick={handleNewsletterSubscribe}
                >
                  Subscribe Now
                </Button>
              </div>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <Mail size={16} className="flex-shrink-0" />
                  <span>contact@nexus.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+1 (555) 1234567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>Palo Alto, California</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-white/20 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative z-10">
            <div className="text-sm text-gray-300 text-center md:text-left">
              © 2025 Nexus. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/accessibility" className="text-gray-300 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;