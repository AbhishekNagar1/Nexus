import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Users, Award } from "lucide-react";

const PhDPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "PhD in Computer Science",
      university: "Stanford University",
      duration: "4-6 years",
      funding: "Full funding available",
      students: "25 per year",
      specializations: ["AI/ML", "Systems", "Theory", "HCI"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "PhD in Bioengineering",
      university: "MIT",
      duration: "5-7 years",
      funding: "RA/TA positions",
      students: "15 per year",
      specializations: ["Synthetic Biology", "Biomedical Devices", "Tissue Engineering"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "PhD in Physics",
      university: "Harvard University",
      duration: "5-6 years",
      funding: "Stipend + tuition",
      students: "30 per year",
      specializations: ["Quantum Physics", "Astrophysics", "Condensed Matter"],
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=200&fit=crop"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            PhD Programs
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore world-class doctoral programs and start your research journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="glass hover:bg-white/5 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground mb-2">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80">
                  {program.university}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Clock size={16} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Users size={16} />
                    <span>{program.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70 col-span-2">
                    <Award size={16} />
                    <span>{program.funding}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.specializations.map((spec) => (
                      <Badge key={spec} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">Apply</Button>
                  <Button variant="outline" className="flex-1 glass-button">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-lg">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your PhD Journey?
            </h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Join thousands of researchers who have found their perfect PhD program through ResearchNet
            </p>
            <Button size="lg" className="px-8">
              Browse All Programs
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhDPrograms;