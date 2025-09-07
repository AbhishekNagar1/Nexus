import { useState } from "react";
import { User, LogIn } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import UserDropdown from "@/components/UserDropdown";
import SlidingSignIn from "@/components/SlidingSignIn";

const AuthControls = () => {
  const { isAuthenticated } = useAuth();
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <>
      <div className="fixed top-6 md:top-6 right-3 md:right-6 z-[150]">
        {isAuthenticated ? (
          <UserDropdown />
        ) : (
          <button
            onClick={() => setIsSignInOpen(true)}
            className="flex items-center gap-1 sm:gap-2 glass p-2 sm:p-3 rounded-full hover:bg-white/10 transition-colors group min-h-[44px] min-w-[44px]"
          >
            <LogIn size={16} className="text-foreground sm:w-5 sm:h-5" />
            <span className="text-foreground text-xs sm:text-sm font-medium hidden sm:block">Sign In</span>
          </button>
        )}
      </div>

      <SlidingSignIn 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
      />
    </>
  );
};

export default AuthControls;