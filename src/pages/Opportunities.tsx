import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import ApplicationForm from "@/components/ApplicationForm";

const opportunities = [
  {
    id: 1,
    title: "PhD in Quantum Computing",
    institution: "MIT",
    location: "Cambridge, MA",
    type: "PhD",
    deadline: "2024-03-15",
    description: "Research position in quantum algorithms and quantum error correction.",
    requirements: "Master's in Physics/CS, GRE scores, Research experience",
    funding: "Full funding available",
    supervisor: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    title: "Research Assistant - AI Ethics",
    institution: "Stanford University",
    location: "Stanford, CA",
    type: "Research Assistant",
    deadline: "2024-02-28",
    description: "Working on ethical implications of AI in healthcare.",
    requirements: "Bachelor's in CS/Philosophy, Programming skills",
    funding: "$3000/month",
    supervisor: "Prof. Michael Chen"
  },
  {
    id: 3,
    title: "JRF in Climate Science",
    institution: "Oxford University",
    location: "Oxford, UK",
    type: "JRF",
    deadline: "2024-04-10",
    description: "Junior Research Fellowship in climate modeling and prediction.",
    requirements: "PhD in Environmental Science, Publications required",
    funding: "£35,000/year",
    supervisor: "Dr. Emma Wilson"
  }
];

const Opportunities = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  const handleApply = (opportunity: any) => {
    setSelectedOpportunity(opportunity);
    setShowApplicationForm(true);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Research Opportunities
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover PhD positions, research fellowships, and academic opportunities worldwide
          </p>
        </div>

        <div className="space-y-6">
          {opportunities.map((opportunity) => (
            <Card 
              key={opportunity.id} 
              className="glass hover:bg-white/5 transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === opportunity.id ? null : opportunity.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {opportunity.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/80">
                      {opportunity.institution} • {opportunity.location}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{opportunity.type}</Badge>
                    <Badge variant="outline">Deadline: {opportunity.deadline}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              {expandedCard === opportunity.id && (
                <CardContent className="animate-fade-in">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Description</h4>
                      <p className="text-foreground/80">{opportunity.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                      <p className="text-foreground/80">{opportunity.requirements}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Funding</h4>
                        <p className="text-foreground/80">{opportunity.funding}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Supervisor</h4>
                        <p className="text-foreground/80">{opportunity.supervisor}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(opportunity);
                        }}
                        className="px-8 py-3"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
      
      {showApplicationForm && (
        <ApplicationForm 
          opportunity={selectedOpportunity}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </Layout>
  );
};

export default Opportunities;