import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              About ResearchNet
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Bridging the gap between academic opportunities and talented minds worldwide
            </p>
          </div>

          <div className="space-y-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  ResearchNet is dedicated to connecting the global academic community by providing a platform where 
                  professors, universities, and research institutes can discover and connect with talented students, 
                  researchers, and collaborators. We believe that groundbreaking research happens when brilliant minds 
                  come together, regardless of geographical boundaries.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">For Researchers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Post PhD and research opportunities</li>
                    <li>• Find qualified candidates worldwide</li>
                    <li>• Build your research network</li>
                    <li>• Collaborate across institutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">For Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Discover research opportunities</li>
                    <li>• Connect with leading researchers</li>
                    <li>• Showcase your academic profile</li>
                    <li>• Access global opportunities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Founded in 2024, ResearchNet emerged from the recognition that the academic world needed a 
                  specialized platform to facilitate meaningful connections between researchers and students. 
                  Traditional networking platforms weren't designed for the unique needs of the academic community.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Today, we serve thousands of researchers, professors, and students from over 50 countries, 
                  facilitating connections that lead to groundbreaking research, innovative collaborations, 
                  and academic success stories.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Join Our Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Whether you're a seasoned researcher looking for the next brilliant mind to join your team, 
                  or a student seeking the perfect research opportunity, ResearchNet is here to make those 
                  connections happen. Join us in building the future of academic collaboration.
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

export default About;