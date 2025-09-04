import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const ProfessionalFooter = () => {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-background"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-foreground">ResearchNet</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Connecting minds for academic excellence. The premier platform for researchers, students, and institutions worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Opportunities", href: "/opportunities" },
                { name: "Researchers", href: "/researchers" },
                { name: "Community", href: "/community" },
                { name: "Success Stories", href: "/success-stories" },
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
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
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
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-foreground/70 text-sm">
              Subscribe to our newsletter for the latest opportunities and updates.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-background border-border"
              />
              <Button className="w-full">
                Subscribe Now
              </Button>
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Mail size={16} />
                <span>contact@researchnet.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <MapPin size={16} />
                <span>Boston, MA, USA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
          <div className="text-sm text-foreground/60">
            © 2024 ResearchNet. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
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