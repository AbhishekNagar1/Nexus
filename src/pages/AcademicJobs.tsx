import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, GraduationCap } from "lucide-react";

const AcademicJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Assistant Professor of Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      type: "Tenure-track",
      salary: "$95,000 - $110,000",
      deadline: "December 15, 2024",
      field: "Computer Science",
      requirements: ["PhD in CS or related field", "Strong research record", "Teaching experience"],
      description: "We seek a dynamic faculty member to join our world-renowned CS department with expertise in AI, ML, or systems."
    },
    {
      id: 2,
      title: "Postdoctoral Research Associate",
      institution: "Harvard Medical School",
      location: "Boston, MA",
      type: "Postdoc",
      salary: "$65,000 - $70,000",
      deadline: "November 30, 2024",
      field: "Biomedical Sciences",
      requirements: ["PhD in Biology/Chemistry", "Cell biology experience", "Publication record"],
      description: "Join our cutting-edge research on cancer therapeutics and drug discovery in a collaborative environment."
    },
    {
      id: 3,
      title: "Lecturer in Applied Mathematics",
      institution: "Oxford University",
      location: "Oxford, UK",
      type: "Teaching-focused",
      salary: "£45,000 - £55,000",
      deadline: "January 20, 2025",
      field: "Mathematics",
      requirements: ["PhD in Mathematics", "Excellent teaching skills", "Applied math focus"],
      description: "Teaching-focused position with opportunities for curriculum development and student mentorship."
    }
  ];

  const jobTypes = [
    { name: "Tenure-track", count: 234, color: "bg-blue-500" },
    { name: "Postdoc", count: 187, color: "bg-green-500" },
    { name: "Lecturer", count: 156, color: "bg-purple-500" },
    { name: "Visiting", count: 89, color: "bg-orange-500" },
  ];

  const disciplines = [
    "Computer Science", "Biology", "Physics", "Chemistry", "Mathematics", 
    "Engineering", "Psychology", "Economics", "History", "Literature"
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Academic Jobs
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Find your next academic position at leading universities and research institutions
          </p>
        </div>

        {/* Job Type Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {jobTypes.map((type) => (
            <Card key={type.name} className="glass hover:bg-white/5 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-4 h-4 ${type.color} rounded-full mx-auto mb-3`}></div>
                <h3 className="font-semibold text-foreground mb-1">{type.name}</h3>
                <p className="text-3xl font-bold text-primary">{type.count}</p>
                <p className="text-sm text-foreground/60">Open positions</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Jobs */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Featured Positions</h2>
          {jobs.map((job) => (
            <Card key={job.id} className="glass hover:bg-white/5 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/80">
                      {job.institution}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Badge variant="outline">{job.field}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Clock size={16} />
                    <span>Due: {job.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <GraduationCap size={16} />
                    <span>{job.field}</span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req) => (
                      <Badge key={req} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>Apply Now</Button>
                  <Button variant="outline" className="glass-button">
                    View Full Details
                  </Button>
                  <Button variant="ghost">Save Position</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Browse by Discipline */}
        <div className="mb-12">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Browse by Discipline
              </CardTitle>
              <CardDescription className="text-foreground/70">
                Find positions in your field of expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {disciplines.map((discipline) => (
                  <Button
                    key={discipline}
                    variant="outline"
                    className="glass-button justify-start h-auto p-4"
                  >
                    {discipline}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Advice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Job Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Tenure-track positions</span>
                  <span className="font-semibold text-foreground">+12% this year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Postdoc opportunities</span>
                  <span className="font-semibold text-foreground">+8% this year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Industry transitions</span>
                  <span className="font-semibold text-foreground">+25% this year</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Application Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/70">
                <li>• Tailor your cover letter to each position</li>
                <li>• Highlight your research impact and citations</li>
                <li>• Demonstrate teaching experience and philosophy</li>
                <li>• Network at conferences and workshops</li>
                <li>• Apply early - deadlines vary by institution</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AcademicJobs;