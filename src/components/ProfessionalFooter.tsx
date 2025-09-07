import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NexusLogo from "@/assets/nexus_logo.svg";

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
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src={NexusLogo} 
                alt="Nexus Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="text-xl sm:text-2xl font-bold text-foreground">Nexus</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Connecting minds for academic excellence. The premier platform for researchers, students, and institutions worldwide.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px]" onClick={() => handleSocialClick('Facebook')}>
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px]" onClick={() => handleSocialClick('Twitter')}>
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px]" onClick={() => handleSocialClick('LinkedIn')}>
                <Linkedin size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px]" onClick={() => handleSocialClick('YouTube')}>
                <Youtube size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
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
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
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
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-foreground/70 text-sm">
              Subscribe to our newsletter for the latest opportunities and updates.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-background border-border min-h-[44px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSubscribe()}
              />
              <Button className="w-full min-h-[44px]" onClick={handleNewsletterSubscribe}>
                Subscribe Now
              </Button>
            </div>
            <div className="space-y-2 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                <Mail size={14} className="sm:w-4 sm:h-4" />
                <span className="break-all">contact@nexus.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                <Phone size={14} className="sm:w-4 sm:h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                <MapPin size={14} className="sm:w-4 sm:h-4" />
                <span>Boston, MA, USA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 sm:mt-8 space-y-4 md:space-y-0">
          <div className="text-xs sm:text-sm text-foreground/60 text-center md:text-left">
            © 2025 Nexus. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="/privacy" className="text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-foreground/60 hover:text-foreground transition-colors">
              Cookie Policy
            </a>
            <a href="/accessibility" className="text-foreground/60 hover:text-foreground transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;