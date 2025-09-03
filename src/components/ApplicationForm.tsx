import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ApplicationFormProps {
  opportunity: any;
  onClose: () => void;
}

const ApplicationForm = ({ opportunity, onClose }: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    gpa: "",
    researchExperience: "",
    publications: "",
    coverLetter: "",
    cv: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, cv: file }));
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto glass">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">
            Apply for {opportunity.title}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
              <Input 
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email *</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-foreground">Phone</Label>
              <Input 
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="university" className="text-foreground">Current University *</Label>
              <Input 
                id="university"
                value={formData.university}
                onChange={(e) => handleInputChange("university", e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="degree" className="text-foreground">Current Degree *</Label>
              <Input 
                id="degree"
                value={formData.degree}
                onChange={(e) => handleInputChange("degree", e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="gpa" className="text-foreground">GPA/CGPA</Label>
              <Input 
                id="gpa"
                value={formData.gpa}
                onChange={(e) => handleInputChange("gpa", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="researchExperience" className="text-foreground">Research Experience</Label>
            <Textarea 
              id="researchExperience"
              value={formData.researchExperience}
              onChange={(e) => handleInputChange("researchExperience", e.target.value)}
              rows={3}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="publications" className="text-foreground">Publications (if any)</Label>
            <Textarea 
              id="publications"
              value={formData.publications}
              onChange={(e) => handleInputChange("publications", e.target.value)}
              rows={3}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="coverLetter" className="text-foreground">Cover Letter *</Label>
            <Textarea 
              id="coverLetter"
              value={formData.coverLetter}
              onChange={(e) => handleInputChange("coverLetter", e.target.value)}
              rows={4}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="cv" className="text-foreground">CV/Resume (PDF) *</Label>
            <Input 
              id="cv"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="mt-1"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              Submit Application
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;