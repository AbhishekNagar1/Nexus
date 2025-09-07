import { MessageSquare, Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import NexusLogo from "@/assets/nexus_logo.svg";

const Header = () => {
  const { isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 md:top-6 left-3 md:left-1/2 md:transform md:-translate-x-1/2 z-[100] w-[calc(100%-6rem)] md:w-auto">
      <nav className="glass px-4 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-between gap-4 md:gap-8">
        <a href="/" className="flex items-center gap-2 md:gap-3">
          <img 
            src={NexusLogo} 
            alt="Nexus Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-lg md:text-xl font-bold text-foreground"> </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 md:gap-6">
          <a href="/opportunities" className="text-foreground/80 hover:text-foreground transition-colors text-sm md:text-base">
            Opportunities
          </a>
          <a href="/researchers" className="text-foreground/80 hover:text-foreground transition-colors text-sm md:text-base">
            Researchers
          </a>
          <a href="/community" className="text-foreground/80 hover:text-foreground transition-colors text-sm md:text-base">
            Community
          </a>
          
          {isAuthenticated && (
            <a href="/messages" className="text-foreground/80 hover:text-foreground transition-colors p-2 rounded-full hover:bg-white/10">
              <MessageSquare size={18} className="md:w-5 md:h-5" />
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-4 space-y-3">
          <a 
            href="/opportunities" 
            className="block text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Opportunities
          </a>
          <a 
            href="/researchers" 
            className="block text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Researchers
          </a>
          <a 
            href="/community" 
            className="block text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Community
          </a>
          
          {isAuthenticated && (
            <a 
              href="/messages" 
              className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageSquare size={18} />
              Messages
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;