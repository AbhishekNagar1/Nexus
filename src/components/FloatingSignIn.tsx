import { LogIn } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const FloatingSignIn = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <a 
        href="/signup" 
        className="glass p-3 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
        title="Sign Up"
      >
        <LogIn size={20} className="text-foreground group-hover:text-primary transition-colors" />
      </a>
    </div>
  );
};

export default FloatingSignIn;