import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Card className="glass border-white/10">
            <CardHeader className="space-y-1 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                {isSubmitted ? "Check Your Email" : "Forgot Password?"}
              </CardTitle>
              <CardDescription className="text-foreground/70">
                {isSubmitted 
                  ? "We've sent a password reset link to your email address."
                  : "No worries! Enter your email and we'll send you a reset link."
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50 border-white/20"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Reset Link
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="text-center text-sm text-foreground/70">
                    <p>We sent a password reset link to:</p>
                    <p className="font-medium text-foreground mt-1">{email}</p>
                  </div>
                  
                  <div className="text-center text-sm text-foreground/60">
                    <p>Didn't receive the email? Check your spam folder or</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary hover:underline font-medium"
                    >
                      try again
                    </button>
                  </div>
                </div>
              )}

              <div className="text-center">
                <a 
                  href="/signin" 
                  className="inline-flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to sign in
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;