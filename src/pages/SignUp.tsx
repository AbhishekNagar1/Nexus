import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Github, Chrome } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import ForgotPasswordDialog from "@/components/ForgotPasswordDialog";
import authImage from "@/assets/auth-illustration.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");
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
  const [signInData, setSignInData] = useState({
    email: "john.doe@university.edu", // Demo credentials
    password: "demo123"
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpData.acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }
    console.log("Sign up:", signUpData);
    login();
    navigate('/');
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", signInData);
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Half - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 z-10"></div>
        <img 
          src={authImage}
          alt="Research collaboration illustration" 
          className="w-full h-screen object-cover"
          style={{ height: '100vh' }}
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome to ResearchNet</h2>
            <p className="text-xl opacity-90">Connect with researchers, discover opportunities, and advance your academic career</p>
          </div>
        </div>
      </div>

      {/* Right Half - Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background min-h-screen">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">ResearchNet</h1>
            <p className="text-foreground/70">Join the academic community</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="signin">Sign In</TabsTrigger>
            </TabsList>

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
                          type={showSignInPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={signInData.password}
                          onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                          className="pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowSignInPassword(!showSignInPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60 hover:text-foreground"
                        >
                          {showSignInPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                       <ForgotPasswordDialog>
                         <button type="button" className="text-sm text-primary hover:underline">
                           Forgot password?
                         </button>
                       </ForgotPasswordDialog>
                    </div>

                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SignUp;