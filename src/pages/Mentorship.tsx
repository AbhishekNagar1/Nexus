import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Users, MessageCircle, Award } from "lucide-react";

const Mentorship = () => {
  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Professor of Computer Science",
      institution: "MIT",
      expertise: ["Machine Learning", "AI Ethics", "Computer Vision"],
      rating: 4.9,
      sessions: 127,
      price: "$150/hour",
      availability: "Available",
      description: "20+ years of experience in AI research with focus on ethical AI development and machine learning applications."
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      title: "Associate Professor of Biology",
      institution: "Stanford University",
      expertise: ["Molecular Biology", "Genetics", "Research Methods"],
      rating: 4.8,
      sessions: 89,
      price: "$120/hour",
      availability: "Busy",
      description: "Expert in molecular genetics with extensive experience mentoring PhD students and postdocs."
    },
    {
      id: 3,
      name: "Dr. Amanda Thompson",
      title: "Senior Research Scientist",
      institution: "NASA Goddard",
      expertise: ["Climate Science", "Data Analysis", "Remote Sensing"],
      rating: 4.9,
      sessions: 156,
      price: "$140/hour",
      availability: "Available",
      description: "Leading climate researcher specializing in satellite data analysis and climate modeling."
    }
  ];

  const programs = [
    {
      name: "Research Fundamentals",
      description: "Learn the basics of academic research methodology",
      duration: "4 weeks",
      participants: 45,
      icon: "📚"
    },
    {
      name: "PhD Application Prep",
      description: "Complete guidance for PhD applications and interviews",
      duration: "6 weeks",
      participants: 78,
      icon: "🎓"
    },
    {
      name: "Career Transition",
      description: "Navigate from academia to industry or vice versa",
      duration: "8 weeks",
      participants: 32,
      icon: "🔄"
    },
    {
      name: "Grant Writing Workshop",
      description: "Master the art of writing successful grant proposals",
      duration: "3 weeks",
      participants: 67,
      icon: "💰"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Mentorship Programs
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Connect with experienced researchers and academics to accelerate your career growth
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-foreground/60">Expert Mentors</div>
            </CardContent>
          </Card>
          <Card className="glass text-center">
            <CardContent className="p-6">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">10k+</div>
              <div className="text-sm text-foreground/60">Sessions Completed</div>
            </CardContent>
          </Card>
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-foreground/60">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">85%</div>
              <div className="text-sm text-foreground/60">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Mentors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Top Mentors</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="glass hover:bg-white/5 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-primary text-background font-bold text-lg">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground mb-1">
                        {mentor.name}
                      </CardTitle>
                      <CardDescription className="text-foreground/80 mb-2">
                        {mentor.title}
                      </CardDescription>
                      <p className="text-sm text-foreground/60">{mentor.institution}</p>
                    </div>
                    <Badge 
                      variant={mentor.availability === "Available" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {mentor.availability}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-foreground">{mentor.rating}</span>
                    </div>
                    <div className="text-sm text-foreground/60">
                      {mentor.sessions} sessions
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {mentor.price}
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70 mb-4">{mentor.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" disabled={mentor.availability === "Busy"}>
                      Book Session
                    </Button>
                    <Button variant="outline" className="glass-button">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Group Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Group Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <Card key={program.name} className="glass hover:bg-white/5 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{program.icon}</div>
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {program.name}
                      </CardTitle>
                      <CardDescription className="text-foreground/80">
                        {program.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-foreground/60">
                      Duration: {program.duration}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {program.participants} participants
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Join Program</Button>
                    <Button variant="outline" className="glass-button">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div>
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                How Mentorship Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Find Your Mentor</h3>
                  <p className="text-sm text-foreground/70">Browse our network of expert mentors and find the perfect match for your goals.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Book Sessions</h3>
                  <p className="text-sm text-foreground/70">Schedule one-on-one sessions or join group programs that fit your schedule.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Learn & Grow</h3>
                  <p className="text-sm text-foreground/70">Get personalized guidance, feedback, and support to achieve your career goals.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Achieve Success</h3>
                  <p className="text-sm text-foreground/70">Apply what you've learned and take your academic or research career to the next level.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Mentorship;