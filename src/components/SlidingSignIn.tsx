import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Github, Chrome, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface SlidingSignInProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlidingSignIn = ({ isOpen, onClose }: SlidingSignInProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [signInData, setSignInData] = useState({
    email: "john.doe@university.edu",
    password: "demo123"
  });
  
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    role: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", signInData);
    login();
    onClose();
    navigate('/');
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpData.acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }
    console.log("Sign up:", signUpData);
    login();
    onClose();
    navigate('/');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[200] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sliding Panel */}
      <div 
        className={`fixed left-0 top-0 h-full w-full md:w-1/2 bg-background transition-transform duration-300 z-[201] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-background/80 hover:bg-background text-foreground/70 hover:text-foreground transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto p-8 pt-20">
          <div className="max-w-md mx-auto">
            <div className="text-center space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-foreground">Welcome to ResearchNet</h1>
              <p className="text-foreground/70">Join the academic community</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* Sign In Tab */}
              <TabsContent value="signin" className="space-y-6">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-6">
                    {/* Demo Credentials Info */}
                    <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                      <p className="text-sm text-primary font-medium mb-1">Demo Credentials:</p>
                      <p className="text-xs text-foreground/70">Email: john.doe@university.edu</p>
                      <p className="text-xs text-foreground/70">Password: demo123</p>
                    </div>

                    {/* Social Sign In */}
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        <Chrome className="mr-2 h-4 w-4" />
                        Continue with Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        Continue with GitHub
                      </Button>
                    </div>

                    <div className="relative">
                      <Separator />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-background px-2 text-sm text-foreground/60">or sign in with email</span>
                      </div>
                    </div>

                    {/* Email Sign In Form */}
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signin-email">Email</Label>
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="Enter your email"
                          value={signInData.email}
                          onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signin-password">Password</Label>
                        <div className="relative">
                          <Input
                            id="signin-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={signInData.password}
                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                            className="pr-10"
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
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember" />
                          <label htmlFor="remember" className="text-sm text-foreground/70">
                            Remember me
                          </label>
                        </div>
                        <a href="/forgot-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>

                      <Button type="submit" className="w-full">
                        Sign In
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Sign Up Tab */}
              <TabsContent value="signup" className="space-y-6">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-6">
                    {/* Social Sign Up */}
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        <Chrome className="mr-2 h-4 w-4" />
                        Continue with Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        Continue with GitHub
                      </Button>
                    </div>

                    <div className="relative">
                      <Separator />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-background px-2 text-sm text-foreground/60">or create with email</span>
                      </div>
                    </div>

                    {/* Email Sign Up Form */}
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={signUpData.firstName}
                            onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })}
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
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@university.edu"
                          value={signUpData.email}
                          onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution</Label>
                        <Input
                          id="institution"
                          placeholder="Your University"
                          value={signUpData.institution}
                          onChange={(e) => setSignUpData({ ...signUpData, institution: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select onValueChange={(value) => setSignUpData({ ...signUpData, role: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="phd">PhD Student</SelectItem>
                            <SelectItem value="postdoc">Postdoc</SelectItem>
                            <SelectItem value="professor">Professor</SelectItem>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="industry">Industry Professional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={signUpData.password}
                            onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                            className="pr-10"
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

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={signUpData.confirmPassword}
                            onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                            className="pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60 hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="terms"
                          checked={signUpData.acceptTerms}
                          onCheckedChange={(checked) => setSignUpData({ ...signUpData, acceptTerms: checked as boolean })}
                          className="mt-1"
                        />
                        <label htmlFor="terms" className="text-sm text-foreground/70 leading-5">
                          I agree to the{" "}
                          <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                          {" "}and{" "}
                          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                        </label>
                      </div>

                      <Button type="submit" className="w-full">
                        Create Account
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidingSignIn;