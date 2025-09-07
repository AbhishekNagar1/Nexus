import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-foreground/70">
              Last updated: January 2024
            </p>
          </div>

          <div className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  update your profile, or communicate with us. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Academic credentials and institutional affiliations</li>
                  <li>Research interests and expertise</li>
                  <li>Publications and academic achievements</li>
                  <li>Profile photos and other uploaded content</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Connect you with relevant academic opportunities</li>
                  <li>Enable communication between researchers and students</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Protect against fraud and abuse</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances: to comply with legal 
                  obligations, protect our rights, or with your explicit consent for specific services.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Public Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Certain information in your profile may be publicly visible, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Name and institutional affiliation</li>
                  <li>Research interests and expertise</li>
                  <li>Publications and academic achievements</li>
                  <li>Profile photo and bio</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  You can control the visibility of your information through your privacy settings.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the Internet is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Control the visibility of your profile information</li>
                  <li>Opt out of non-essential communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  We use cookies and similar technologies to improve your experience, analyze usage patterns, 
                  and deliver relevant content. You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">International Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  ResearchNet is operated from the United States. If you are located outside the US, please 
                  be aware that information we collect will be transferred to and processed in the US.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Our service is not intended for individuals under the age of 13. We do not knowingly 
                  collect personal information from children under 13.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any material 
                  changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@researchnet.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <ProfessionalFooter />
    </div>
  );
};

export default PrivacyPolicy;