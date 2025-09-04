import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Calendar, Building } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google Research",
      location: "Mountain View, CA",
      duration: "10-12 weeks",
      type: "Summer 2024",
      deadline: "February 15, 2024",
      stipend: "$8,000/month",
      description: "Work on cutting-edge AI/ML projects with world-class researchers and engineers.",
      requirements: ["CS/EE Major", "Python/C++", "Machine Learning basics"]
    },
    {
      id: 2,
      title: "Research Intern - Climate Science",
      company: "NASA Goddard",
      location: "Greenbelt, MD",
      duration: "8-10 weeks",
      type: "Summer 2024",
      deadline: "March 1, 2024",
      stipend: "$6,500/month",
      description: "Analyze satellite data to study climate change impacts and atmospheric dynamics.",
      requirements: ["Physics/Environmental Science", "Data Analysis", "Programming"]
    },
    {
      id: 3,
      title: "Biomedical Research Intern",
      company: "Mayo Clinic",
      location: "Rochester, MN",
      duration: "12 weeks",
      type: "Summer 2024",
      deadline: "January 31, 2024",
      stipend: "$5,800/month",
      description: "Contribute to groundbreaking medical research in cancer treatment and diagnostics.",
      requirements: ["Biology/Pre-med", "Lab Experience", "GPA 3.5+"]
    }
  ];

  const companies = [
    { name: "Google", positions: 15, logo: "G" },
    { name: "Microsoft", positions: 12, logo: "M" },
    { name: "NASA", positions: 8, logo: "N" },
    { name: "Apple", positions: 10, logo: "A" },
    { name: "Meta", positions: 7, logo: "F" },
    { name: "Amazon", positions: 14, logo: "A" },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Research Internships
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Gain hands-on research experience with leading companies and institutions
          </p>
        </div>

        {/* Top Companies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Top Companies Hiring</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map((company) => (
              <Card key={company.name} className="glass hover:bg-white/5 transition-all duration-300 text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-background font-bold text-lg">{company.logo}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{company.name}</h3>
                  <p className="text-xs text-foreground/60">{company.positions} positions</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search Filters */}
        <div className="glass p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Search internships..." className="bg-background/50" />
            <Select>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="bio">Biology/Life Sciences</SelectItem>
                <SelectItem value="eng">Engineering</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ca">California</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="ma">Massachusetts</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Button>Search</Button>
          </div>
        </div>

        {/* Internship Listings */}
        <div className="space-y-6">
          {internships.map((internship) => (
            <Card key={internship.id} className="glass hover:bg-white/5 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {internship.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/80 mb-4">
                      {internship.company}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{internship.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin size={16} />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Clock size={16} />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Building size={16} />
                    <span>{internship.stipend}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar size={16} />
                    <span>Due: {internship.deadline}</span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{internship.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.requirements.map((req) => (
                      <Badge key={req} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>Apply Now</Button>
                  <Button variant="outline" className="glass-button">
                    View Details
                  </Button>
                  <Button variant="ghost">Save</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Timeline */}
        <div className="mt-16">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Internship Application Timeline
              </CardTitle>
              <CardDescription className="text-foreground/70">
                Plan ahead for successful applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Fall</h4>
                  <p className="text-sm text-foreground/70">Research companies and update resume</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Winter</h4>
                  <p className="text-sm text-foreground/70">Submit applications and prepare for interviews</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Spring</h4>
                  <p className="text-sm text-foreground/70">Interview rounds and final decisions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Summer</h4>
                  <p className="text-sm text-foreground/70">Start your internship journey!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Internships;