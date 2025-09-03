import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms and Conditions
            </h1>
            <p className="text-foreground/70">
              Last updated: January 2024
            </p>
          </div>

          <div className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  By accessing and using ResearchNet, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">2. Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Permission is granted to temporarily access ResearchNet for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title, and 
                  under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">3. User Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, 
                  complete, and current at all times. You are responsible for safeguarding the password 
                  and for maintaining the confidentiality of your account.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">4. Academic Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Users must maintain the highest standards of academic integrity. Any form of academic 
                  misconduct, including but not limited to plagiarism, falsification of credentials, or 
                  misrepresentation of qualifications, will result in immediate account termination.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">5. Content Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Users are responsible for all content they post. Content must be:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Accurate and truthful</li>
                  <li>Relevant to academic and research purposes</li>
                  <li>Respectful and professional</li>
                  <li>Free from copyright infringement</li>
                  <li>Not harmful, offensive, or discriminatory</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">6. Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs 
                  your use of the Service, to understand our practices.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">7. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  We may terminate or suspend your account and bar access to the Service immediately, 
                  without prior notice or liability, under our sole discretion, for any reason whatsoever 
                  and without limitation, including but not limited to a breach of the Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">8. Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  The information on this website is provided on an "as is" basis. To the fullest extent 
                  permitted by law, this Company excludes all representations, warranties, conditions and 
                  terms related to our website and the use of this website.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at 
                  legal@researchnet.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;