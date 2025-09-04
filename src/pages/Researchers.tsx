import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSignIn from "@/components/FloatingSignIn";

const researchers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    institution: "MIT",
    department: "Quantum Computing Lab",
    specialization: ["Quantum Algorithms", "Quantum Error Correction", "Quantum Machine Learning"],
    publications: 45,
    hIndex: 28,
    image: "/placeholder.svg",
    bio: "Leading researcher in quantum computing with focus on practical quantum algorithms."
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    institution: "Stanford University",
    department: "AI Ethics Institute",
    specialization: ["AI Ethics", "Machine Learning", "Healthcare AI"],
    publications: 67,
    hIndex: 35,
    image: "/placeholder.svg",
    bio: "Expert in AI ethics and responsible AI development in healthcare applications."
  },
  {
    id: 3,
    name: "Dr. Emma Wilson",
    institution: "Oxford University",
    department: "Climate Science Center",
    specialization: ["Climate Modeling", "Environmental Science", "Data Analysis"],
    publications: 52,
    hIndex: 31,
    image: "/placeholder.svg",
    bio: "Climate scientist specializing in advanced climate modeling and prediction systems."
  }
];

const Researchers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingSignIn />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Distinguished Researchers
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Connect with leading academics and researchers from top institutions worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchers.map((researcher) => (
              <Card key={researcher.id} className="glass hover:bg-white/5 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {researcher.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {researcher.name}
                  </CardTitle>
                  <CardDescription className="text-foreground/80">
                    {researcher.institution}
                  </CardDescription>
                  <CardDescription className="text-sm text-foreground/60">
                    {researcher.department}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/80 text-center">
                    {researcher.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {researcher.specialization.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center py-2">
                    <div>
                      <div className="text-lg font-bold text-foreground">{researcher.publications}</div>
                      <div className="text-xs text-foreground/60">Publications</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">{researcher.hIndex}</div>
                      <div className="text-xs text-foreground/60">h-index</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Researchers;