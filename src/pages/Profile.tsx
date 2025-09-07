import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="glass mb-8">
            <CardHeader>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">JS</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl text-foreground mb-2">John Smith</CardTitle>
                  <CardDescription className="text-lg text-foreground/80 mb-2">
                    PhD Student in Computer Science
                  </CardDescription>
                  <CardDescription className="text-foreground/60 mb-4">
                    Stanford University • California, USA
                  </CardDescription>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">AI Ethics</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button>Edit Profile</Button>
                    <Button variant="outline">Download CV</Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Profile Content */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    I am a PhD student in Computer Science at Stanford University, specializing in machine learning 
                    and AI ethics. My research focuses on developing fair and transparent AI systems, particularly 
                    in healthcare applications. I am passionate about ensuring that AI technology benefits all 
                    members of society while minimizing potential harms.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">PhD in Computer Science</h4>
                    <p className="text-foreground/80">Stanford University • 2022 - Present</p>
                    <p className="text-sm text-foreground/60">Advisor: Prof. Michael Chen</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Master of Science in Computer Science</h4>
                    <p className="text-foreground/80">UC Berkeley • 2020 - 2022</p>
                    <p className="text-sm text-foreground/60">GPA: 3.9/4.0</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Bachelor of Science in Computer Science</h4>
                    <p className="text-foreground/80">MIT • 2016 - 2020</p>
                    <p className="text-sm text-foreground/60">Magna Cum Laude</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="research" className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Current Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-2">Fair AI in Healthcare Diagnostics</h4>
                  <p className="text-foreground/80 mb-4">
                    Developing machine learning models that provide equitable healthcare diagnostics across 
                    different demographic groups. Focus on identifying and mitigating algorithmic bias in 
                    medical imaging and clinical decision support systems.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Healthcare AI</Badge>
                    <Badge variant="outline">Algorithmic Fairness</Badge>
                    <Badge variant="outline">Medical Imaging</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Research Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Algorithmic fairness and bias mitigation</li>
                    <li>• Explainable AI and interpretability</li>
                    <li>• AI applications in healthcare</li>
                    <li>• Computer vision and medical imaging</li>
                    <li>• Ethics in artificial intelligence</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="publications" className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Publications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">
                      "Mitigating Bias in Medical Image Classification: A Comprehensive Framework"
                    </h4>
                    <p className="text-sm text-foreground/80">J. Smith, M. Chen, S. Williams</p>
                    <p className="text-sm text-foreground/60">
                      IEEE Transactions on Medical Imaging, 2024 (Under Review)
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">
                      "Ethical Considerations in AI-Driven Healthcare: A Survey"
                    </h4>
                    <p className="text-sm text-foreground/80">J. Smith, A. Johnson, M. Chen</p>
                    <p className="text-sm text-foreground/60">
                      Nature Machine Intelligence, 2023
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">
                      "Fairness-Aware Machine Learning in Clinical Decision Support"
                    </h4>
                    <p className="text-sm text-foreground/80">J. Smith, R. Davis, M. Chen</p>
                    <p className="text-sm text-foreground/60">
                      AAAI Conference on Artificial Intelligence, 2023
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="experience" className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Research Assistant</h4>
                    <p className="text-foreground/80">Stanford AI Lab • 2022 - Present</p>
                    <p className="text-sm text-foreground/60 mt-2">
                      Working on fairness in machine learning under Prof. Michael Chen. Developing 
                      algorithms for bias detection and mitigation in healthcare AI systems.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Machine Learning Intern</h4>
                    <p className="text-foreground/80">Google Research • Summer 2023</p>
                    <p className="text-sm text-foreground/60 mt-2">
                      Worked on improving fairness in computer vision models. Contributed to 
                      open-source fairness evaluation tools.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Teaching Assistant</h4>
                    <p className="text-foreground/80">Stanford University • 2022 - 2023</p>
                    <p className="text-sm text-foreground/60 mt-2">
                      TA for CS229 (Machine Learning). Conducted office hours, graded assignments, 
                      and mentored undergraduate students.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;