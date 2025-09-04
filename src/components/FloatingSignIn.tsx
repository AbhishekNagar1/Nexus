import { LogIn } from "lucide-react";
import { useState } from "react";

const FloatingSignIn = () => {
  // TODO: Replace with actual auth state
  const [isSignedIn, setIsSignedIn] = useState(false);

  if (isSignedIn) return null;

  return (
    <div className="fixed top-6 right-6 z-50 animate-fade-in-up">
      <a 
        href="/auth" 
        className="glass p-3 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
        title="Sign In"
      >
        <LogIn size={20} className="text-foreground group-hover:text-primary transition-colors" />
      </a>
    </div>
  );
};

export default FloatingSignIn;