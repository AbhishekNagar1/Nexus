import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import { Eye, EyeOff, Github, Chrome } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    role: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", formData);
  };

  return (
    <Layout showFloatingSignIn={false}>
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Card className="glass border-white/10">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Join ResearchNet</CardTitle>
              <CardDescription className="text-foreground/70">
                Create your account to start connecting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Sign Up */}
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
                  <span className="bg-background px-2 text-sm text-foreground/60">or create with email</span>
                </div>
              </div>

              {/* Email Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="bg-background/50 border-white/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="bg-background/50 border-white/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-white/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-foreground">Institution</Label>
                  <Input
                    id="institution"
                    placeholder="Your University"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="bg-background/50 border-white/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-foreground">Role</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, role: value })}>
                    <SelectTrigger className="bg-background/50 border-white/20">
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
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="bg-background/50 border-white/20 pr-10"
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

                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-white/20" required />
                  <span className="text-sm text-foreground/70">
                    I agree to the{" "}
                    <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                    {" "}and{" "}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  </span>
                </div>

                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>

              <div className="text-center text-sm text-foreground/70">
                Already have an account?{" "}
                <a href="/signin" className="text-primary hover:underline font-medium">
                  Sign in
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;