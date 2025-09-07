import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Building, GraduationCap, BookOpen, Trophy, Users } from "lucide-react";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";


const researchers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Professor of Quantum Computing",
    institution: "MIT",
    department: "Quantum Computing Lab",
    email: "sarah.johnson@mit.edu",
    location: "Cambridge, MA, USA",
    specialization: ["Quantum Algorithms", "Quantum Error Correction", "Quantum Machine Learning"],
    publications: 45,
    hIndex: 28,
    citations: 1250,
    experience: "15 years",
    image: "/placeholder.svg",
    bio: "Leading researcher in quantum computing with focus on practical quantum algorithms. Dr. Johnson has pioneered several breakthrough methods in quantum error correction and has been instrumental in developing quantum machine learning frameworks.",
    education: ["PhD in Physics - Harvard University (2008)", "MS in Computer Science - MIT (2004)", "BS in Physics - Stanford University (2002)"],
    achievements: ["NSF CAREER Award (2015)", "IEEE Quantum Computing Award (2020)", "MIT Teaching Excellence Award (2018)"],
    recentProjects: ["Quantum Error Correction for NISQ Devices", "Hybrid Classical-Quantum ML Algorithms", "Quantum Advantage in Optimization"]
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Director of AI Ethics Institute",
    institution: "Stanford University",
    department: "AI Ethics Institute",
    email: "michael.chen@stanford.edu",
    location: "Stanford, CA, USA",
    specialization: ["AI Ethics", "Machine Learning", "Healthcare AI"],
    publications: 67,
    hIndex: 35,
    citations: 2100,
    experience: "18 years",
    image: "/placeholder.svg",
    bio: "Expert in AI ethics and responsible AI development in healthcare applications. Prof. Chen leads interdisciplinary research on ethical AI frameworks and their implementation in real-world healthcare systems.",
    education: ["PhD in Computer Science - Stanford University (2005)", "MS in Biomedical Informatics - UCSF (2001)", "BS in Computer Science - UC Berkeley (1999)"],
    achievements: ["ACM Fellow (2019)", "Stanford Teaching Award (2016)", "Healthcare AI Innovation Award (2021)"],
    recentProjects: ["Ethical AI in Medical Diagnosis", "Bias Detection in Healthcare Algorithms", "Transparent AI for Clinical Decision Support"]
  },
  {
    id: 3,
    name: "Dr. Emma Wilson",
    title: "Senior Research Fellow",
    institution: "Oxford University",
    department: "Climate Science Center",
    email: "emma.wilson@oxford.ac.uk",
    location: "Oxford, UK",
    specialization: ["Climate Modeling", "Environmental Science", "Data Analysis"],
    publications: 52,
    hIndex: 31,
    citations: 1580,
    experience: "12 years",
    image: "/placeholder.svg",
    bio: "Climate scientist specializing in advanced climate modeling and prediction systems. Dr. Wilson's work focuses on developing more accurate climate models to predict environmental changes and their impacts.",
    education: ["PhD in Climate Science - Oxford University (2011)", "MS in Environmental Science - Cambridge University (2008)", "BS in Physics - Imperial College London (2006)"],
    achievements: ["Royal Society Research Fellowship (2017)", "Climate Science Excellence Award (2019)", "Young Scientist Award - EGU (2014)"],
    recentProjects: ["Next-Generation Climate Models", "Arctic Ice Sheet Dynamics", "Climate Change Impact Assessment"]
  }
];

const Researchers = () => {
  const [selectedResearcher, setSelectedResearcher] = useState(null);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xl font-bold text-primary">
                              {researcher.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <DialogTitle className="text-2xl text-foreground mb-1">
                              {researcher.name}
                            </DialogTitle>
                            <DialogDescription className="text-lg text-foreground/80">
                              {researcher.title}
                            </DialogDescription>
                            <div className="flex items-center gap-2 mt-2 text-foreground/60">
                              <Building size={16} />
                              <span>{researcher.institution}</span>
                            </div>
                          </div>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Contact & Location */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-2 text-foreground/70">
                            <Mail size={16} />
                            <span className="text-sm">{researcher.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-foreground/70">
                            <MapPin size={16} />
                            <span className="text-sm">{researcher.location}</span>
                          </div>
                        </div>
                        
                        {/* Bio */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Users size={18} />
                            About
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">{researcher.bio}</p>
                        </div>
                        
                        <Separator />
                        
                        {/* Research Metrics */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Trophy size={18} />
                            Research Metrics
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-3 glass rounded-lg">
                              <div className="text-2xl font-bold text-foreground">{researcher.publications}</div>
                              <div className="text-sm text-foreground/60">Publications</div>
                            </div>
                            <div className="text-center p-3 glass rounded-lg">
                              <div className="text-2xl font-bold text-foreground">{researcher.hIndex}</div>
                              <div className="text-sm text-foreground/60">h-index</div>
                            </div>
                            <div className="text-center p-3 glass rounded-lg">
                              <div className="text-2xl font-bold text-foreground">{researcher.citations}</div>
                              <div className="text-sm text-foreground/60">Citations</div>
                            </div>
                            <div className="text-center p-3 glass rounded-lg">
                              <div className="text-2xl font-bold text-foreground">{researcher.experience}</div>
                              <div className="text-sm text-foreground/60">Experience</div>
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        {/* Specializations */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-3">Research Areas</h3>
                          <div className="flex flex-wrap gap-2">
                            {researcher.specialization.map((spec, index) => (
                              <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Separator />
                        
                        {/* Education */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <GraduationCap size={18} />
                            Education
                          </h3>
                          <div className="space-y-2">
                            {researcher.education.map((edu, index) => (
                              <div key={index} className="flex items-start gap-3 p-3 glass rounded-lg">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-foreground/80">{edu}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Separator />
                        
                        {/* Recent Projects */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <BookOpen size={18} />
                            Recent Projects
                          </h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            {researcher.recentProjects.map((project, index) => (
                              <div key={index} className="p-3 glass rounded-lg">
                                <span className="text-foreground/80">{project}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Separator />
                        
                        {/* Achievements */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Trophy size={18} />
                            Achievements & Awards
                          </h3>
                          <div className="space-y-2">
                            {researcher.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start gap-3 p-3 glass rounded-lg">
                                <Trophy size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                                <span className="text-foreground/80">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1">
                            <Mail size={16} className="mr-2" />
                            Contact Researcher
                          </Button>
                          <Button variant="outline" className="flex-1">
                            View Publications
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <ProfessionalFooter />
    </div>
  );
};

export default Researchers;