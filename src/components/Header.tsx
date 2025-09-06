import { User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100]">
      <nav className="glass px-8 py-4 rounded-full flex items-center gap-8">
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
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
          <span className="text-xl font-bold text-foreground">ResearchNet</span>
        </a>
        
        <div className="flex items-center gap-6">
          <a href="/opportunities" className="text-foreground/80 hover:text-foreground transition-colors">
            Opportunities
          </a>
          <a href="/researchers" className="text-foreground/80 hover:text-foreground transition-colors">
            Researchers
          </a>
          <a href="/community" className="text-foreground/80 hover:text-foreground transition-colors">
            Community
          </a>
          
          {isAuthenticated && (
            <>
              <a href="/messages" className="text-foreground/80 hover:text-foreground transition-colors p-2 rounded-full hover:bg-white/10">
                <MessageSquare size={20} />
              </a>
            </>
          )}
        </div>
      </nav>
      
      {isAuthenticated && <UserDropdown />}
    </header>
  );
};

export default Header;