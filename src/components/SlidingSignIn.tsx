import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Github, Chrome, X, UserPlus, Mail, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface SlidingSignInProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlidingSignIn = ({ isOpen, onClose }: SlidingSignInProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isRecoveryDialogOpen, setIsRecoveryDialogOpen] = useState(false);
  const [isRecoverySent, setIsRecoverySent] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const { login } = useAuth();
  
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: ""
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", signInData);
    login();
    onClose();
  };

  const handlePasswordRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password recovery for:", recoveryEmail);
    // Here you would integrate with Supabase auth recovery
    setIsRecoverySent(true);
    setTimeout(() => {
      setIsRecoveryDialogOpen(false);
      setIsRecoverySent(false);
      setRecoveryEmail("");
    }, 3000);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", signUpData);
    login();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sliding Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-full sm:w-4/5 md:w-3/4 lg:w-1/2 bg-background z-[210] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-4 sm:p-6 md:p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={20} className="text-foreground md:w-6 md:h-6" />
          </button>

          {/* Header */}
          <div className="mb-6 md:mb-8 pt-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
              {isSignUp ? "Join Nexus" : "Welcome Back"}
            </h1>
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
              {isSignUp 
                ? "Connect with the global academic community" 
                : "Sign in to your Nexus account"
              }
            </p>
          </div>

          <Card className="glass border-white/10">
            <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Social Sign In */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full glass-button">
                  <Chrome className="mr-2 h-4 w-4" />
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full glass-button">
                  <Github className="mr-2 h-4 w-4" />
                  Continue with GitHub
                </Button>
              </div>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-background px-2 text-sm text-foreground/60">
                    or continue with email
                  </span>
                </div>
              </div>

              {/* Sign In Form */}
              {!isSignUp ? (
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={signInData.email}
                      onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                      className="bg-background/50 border-white/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                        className="bg-background/50 border-white/20 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60 hover:text-foreground"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-white/20" />
                      <span className="text-foreground/70">Remember me</span>
                    </label>
                    <Dialog open={isRecoveryDialogOpen} onOpenChange={setIsRecoveryDialogOpen}>
                      <DialogTrigger asChild>
                        <button type="button" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md z-[250]" style={{zIndex: '250'}}>
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Mail size={20} />
                            Password Recovery
                          </DialogTitle>
                          <DialogDescription>
                            {!isRecoverySent ? (
                              "Enter your email address and we'll send you a link to reset your password."
                            ) : (
                              "Recovery email sent! Check your inbox for further instructions."
                            )}
                          </DialogDescription>
                        </DialogHeader>
                        
                        {!isRecoverySent ? (
                          <form onSubmit={handlePasswordRecovery} className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="recoveryEmail">Email Address</Label>
                              <Input
                                id="recoveryEmail"
                                type="email"
                                placeholder="Enter your email"
                                value={recoveryEmail}
                                onChange={(e) => setRecoveryEmail(e.target.value)}
                                className="bg-background/50 border-white/20"
                                required
                              />
                            </div>
                            <div className="flex gap-3">
                              <Button type="submit" className="flex-1">
                                Send Recovery Email
                              </Button>
                              <Button 
                                type="button" 
                                variant="outline" 
                                onClick={() => setIsRecoveryDialogOpen(false)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </form>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-6 space-y-4">
                            <CheckCircle size={48} className="text-green-500" />
                            <p className="text-center text-foreground/80">
                              A password recovery email has been sent to <strong>{recoveryEmail}</strong>
                            </p>
                            <p className="text-sm text-foreground/60 text-center">
                              This dialog will close automatically in a few seconds.
                            </p>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>

                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
              ) : (
                /* Sign Up Form */
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={signUpData.firstName}
                        onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })}
                        className="bg-background/50 border-white/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={signUpData.lastName}
                        onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })}
                        className="bg-background/50 border-white/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signupEmail">Email</Label>
                    <Input
                      id="signupEmail"
                      type="email"
                      placeholder="john@university.edu"
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                      className="bg-background/50 border-white/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Select Role</Label>
                    <Select onValueChange={(value) => setSignUpData({ ...signUpData, role: value })} required>
                      <SelectTrigger className="bg-background/50 border-white/20">
                        <SelectValue placeholder="Choose your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="institution">Institution</SelectItem>
                        <SelectItem value="professor">Professor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signupPassword">Password</Label>
                    <div className="relative">
                      <Input
                        id="signupPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={signUpData.password}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                        className="bg-background/50 border-white/20 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60 hover:text-foreground"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              )}

              {/* Toggle between Sign In and Sign Up */}
              <div className="text-center text-sm text-foreground/70">
                {!isSignUp ? (
                  <>
                    Don't have an account?{" "}
                    <button 
                      onClick={() => setIsSignUp(true)}
                      className="text-primary hover:underline font-medium"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button 
                      onClick={() => setIsSignUp(false)}
                      className="text-primary hover:underline font-medium"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SlidingSignIn;