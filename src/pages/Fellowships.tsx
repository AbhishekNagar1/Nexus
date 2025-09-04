import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, Globe, Users } from "lucide-react";

const Fellowships = () => {
  const fellowships = [
    {
      id: 1,
      title: "NSF Graduate Research Fellowship",
      organization: "National Science Foundation",
      amount: "$37,000/year",
      duration: "3 years",
      eligibility: "US Citizens/Permanent Residents",
      deadline: "October 21, 2024",
      fields: ["STEM", "Psychology", "Social Sciences"],
      description: "The NSF GRFP provides three years of financial support for outstanding graduate students in STEM fields."
    },
    {
      id: 2,
      title: "Fulbright Research Fellowship",
      organization: "Fulbright Commission",
      amount: "$25,000-$50,000",
      duration: "9-12 months",
      eligibility: "US Citizens",
      deadline: "September 15, 2024",
      fields: ["All Fields", "International Studies"],
      description: "Research fellowship for conducting research abroad in over 140 countries worldwide."
    },
    {
      id: 3,
      title: "Rhodes Scholarship",
      organization: "Rhodes Trust",
      amount: "Full funding",
      duration: "2-4 years",
      eligibility: "International",
      deadline: "August 1, 2024",
      fields: ["Any Field"],
      description: "Prestigious scholarship for study at the University of Oxford, covering all expenses."
    }
  ];

  const categories = [
    { name: "Research Fellowships", count: 45, icon: "🔬" },
    { name: "Travel Grants", count: 28, icon: "✈️" },
    { name: "Conference Support", count: 32, icon: "🎤" },
    { name: "Publication Grants", count: 19, icon: "📚" },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Fellowships & Grants
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Find funding opportunities to support your research and academic pursuits
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Card key={category.name} className="glass hover:bg-white/5 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                <p className="text-2xl font-bold text-primary">{category.count}</p>
                <p className="text-sm text-foreground/60">Available</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Fellowships */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground mb-6">Featured Fellowships</h2>
          {fellowships.map((fellowship) => (
            <Card key={fellowship.id} className="glass hover:bg-white/5 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {fellowship.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/80">
                      {fellowship.organization}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Featured</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <DollarSign size={16} />
                    <span>{fellowship.amount}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar size={16} />
                    <span>{fellowship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Globe size={16} />
                    <span>{fellowship.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Users size={16} />
                    <span>Due: {fellowship.deadline}</span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{fellowship.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Eligible Fields:</h4>
                  <div className="flex flex-wrap gap-2">
                    {fellowship.fields.map((field) => (
                      <Badge key={field} variant="outline" className="text-xs">
                        {field}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>Apply Now</Button>
                  <Button variant="outline" className="glass-button">
                    View Details
                  </Button>
                  <Button variant="ghost">Save for Later</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-16">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Fellowship Application Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Before You Apply</h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li>• Research eligibility requirements carefully</li>
                    <li>• Start your application early</li>
                    <li>• Gather required documents</li>
                    <li>• Contact references in advance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Writing Your Proposal</h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li>• Clearly state your research objectives</li>
                    <li>• Demonstrate impact and significance</li>
                    <li>• Show your qualifications</li>
                    <li>• Follow formatting guidelines exactly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Fellowships;