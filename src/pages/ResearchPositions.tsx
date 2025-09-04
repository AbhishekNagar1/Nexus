import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar, Briefcase } from "lucide-react";

const ResearchPositions = () => {
  const positions = [
    {
      id: 1,
      title: "Machine Learning Research Scientist",
      institution: "Stanford University",
      location: "Stanford, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      deadline: "March 15, 2024",
      description: "Join our cutting-edge AI research team to develop next-generation machine learning algorithms."
    },
    {
      id: 2,
      title: "Quantum Computing Researcher",
      institution: "MIT",
      location: "Cambridge, MA",
      type: "Postdoc",
      salary: "$65,000 - $75,000",
      deadline: "April 1, 2024",
      description: "Research quantum algorithms and quantum error correction in our state-of-the-art quantum lab."
    },
    {
      id: 3,
      title: "Climate Data Analyst",
      institution: "NASA Goddard",
      location: "Greenbelt, MD",
      type: "Contract",
      salary: "$80,000 - $100,000",
      deadline: "March 30, 2024",
      description: "Analyze satellite climate data to understand global warming trends and environmental changes."
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Research Positions
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover exciting research opportunities across various fields and institutions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60" size={18} />
              <Input placeholder="Search positions..." className="pl-10 bg-background/50" />
            </div>
            <Select>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Field of Study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai">Artificial Intelligence</SelectItem>
                <SelectItem value="bio">Biology</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Position Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulltime">Full-time</SelectItem>
                <SelectItem value="postdoc">Postdoc</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
            <Button>Search</Button>
          </div>
        </div>

        {/* Positions Grid */}
        <div className="space-y-6">
          {positions.map((position) => (
            <Card key={position.id} className="glass hover:bg-white/5 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {position.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/80 mb-4">
                      {position.institution}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{position.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin size={16} />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Briefcase size={16} />
                    <span>{position.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar size={16} />
                    <span>Deadline: {position.deadline}</span>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">{position.description}</p>
                <div className="flex gap-4">
                  <Button>Apply Now</Button>
                  <Button variant="outline" className="glass-button">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ResearchPositions;