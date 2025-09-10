import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Filter, Search, MapPin, Building, Calendar, Clock, ChevronLeft, ChevronRight, X, Upload } from "lucide-react";
import Layout from "@/components/Layout";
import ApplicationForm from "@/components/ApplicationForm";
import { useToast } from "@/hooks/use-toast";

// University logos imports
import HarvardLogo from "@/assets/opportunities_university_logo/harvard_opportunity.svg";
import StanfordLogo from "@/assets/opportunities_university_logo/stanford_opportunity.svg";
import OxfordLogo from "@/assets/opportunities_university_logo/oxford_opportunity.svg";
import USCLogo from "@/assets/opportunities_university_logo/usc_opportunity.svg";
import UFLogo from "@/assets/opportunities_university_logo/uf_opportunity.svg";
import MITLogo from "@/assets/MIT University.svg";

const opportunities = [
  {
    id: 1,
    title: "PhD in Quantum Computing",
    institution: "Harvard University",
    location: "Boston, USA",
    type: "PhD",
    timeLeft: "3 days left",
    workSchedule: "Full Time",
    employmentType: "PhD",
    course: "Quantum Computing",
    description: "Research position in quantum algorithms and quantum error correction with leading experts in the field.",
    requirements: "Master's in Physics/Computer Science, Strong mathematical background, Research experience in quantum mechanics",
    funding: "Full funding available including tuition and stipend",
    supervisor: "Prof. Sarah Johnson",
    logo: HarvardLogo,
    applicationType: "form",
    tags: ["Full Time", "Sponsored", "PhD"],
    deadline: "2024-03-15"
  },
  {
    id: 2,
    title: "MS by Research in Computing Science",
    institution: "University of Southern California",
    location: "Los Angeles, USA",
    type: "MS",
    timeLeft: "5 days left",
    workSchedule: "Full Time",
    employmentType: "MS",
    course: "Computing Science",
    description: "Research-focused Master's program in computing science with emphasis on AI and machine learning.",
    requirements: "Bachelor's in CS/Engineering, Programming experience, GRE scores",
    funding: "Research assistantship available",
    supervisor: "Prof. Michael John S.",
    logo: USCLogo,
    applicationType: "link",
    applicationUrl: "https://usc.edu/apply/ms-computing",
    tags: ["Full Time", "Optional", "1x"],
    deadline: "2024-02-28"
  },
  {
    id: 3,
    title: "PhD in Artificial Intelligence",
    institution: "University of Florida",
    location: "Miami, USA",
    type: "PhD",
    timeLeft: "7 days left",
    workSchedule: "Full Time",
    employmentType: "PhD",
    course: "Artificial Intelligence",
    description: "Cutting-edge research in AI with focus on deep learning and neural networks.",
    requirements: "Master's degree, Strong programming skills, Publications preferred",
    funding: "Full funding with teaching opportunities",
    supervisor: "Prof. Kim Yutsu",
    logo: UFLogo,
    applicationType: "form",
    tags: ["Full Time", "Sponsored", "AI/ML"],
    deadline: "2024-04-10"
  },
  {
    id: 4,
    title: "PhD in Cloud Computing",
    institution: "Stanford University",
    location: "Stanford, USA",
    type: "PhD",
    timeLeft: "11 days left",
    workSchedule: "Full Time",
    employmentType: "PhD",
    course: "Cloud Computing",
    description: "Industrial PhD program in cloud computing and distributed systems.",
    requirements: "Master's in CS, Experience with cloud platforms, Strong research background",
    funding: "Industry funding with Stanford mentorship",
    supervisor: "Prof. Kim Yutsu",
    logo: StanfordLogo,
    applicationType: "link",
    applicationUrl: "https://stanford.edu/careers/phd-cloud",
    tags: ["Full Time", "Cloud Based", "3+ Years"],
    deadline: "2024-05-15"
  },
  {
    id: 5,
    title: "MS by Research in Central Computing",
    institution: "University of Oxford",
    location: "Helsinki, FIN",
    type: "MS",
    timeLeft: "7 days left",
    workSchedule: "Full Time",
    employmentType: "MS",
    course: "Central Computing",
    description: "Research Master's in central computing systems and architecture.",
    requirements: "Bachelor's degree, Strong analytical skills, Mathematics background",
    funding: "Scholarship available for international students",
    supervisor: "Prof. Kim Yutsu",
    logo: OxfordLogo,
    applicationType: "form",
    tags: ["Full Time", "Server Setup", "Content"],
    deadline: "2024-03-20"
  },
  {
    id: 6,
    title: "MS by Research in Central Computing",
    institution: "University of Oxford",
    location: "Helsinki, FIN",
    type: "MS",
    timeLeft: "7 days left",
    workSchedule: "Full Time",
    employmentType: "MS",
    course: "Central Computing",
    description: "Advanced research program in distributed computing systems.",
    requirements: "Master's prerequisite, Research experience, Strong technical background",
    funding: "Full funding with research opportunities",
    supervisor: "Prof. Kim Yutsu",
    logo: OxfordLogo,
    applicationType: "link",
    applicationUrl: "https://oxford.ac.uk/apply/ms-central-computing",
    tags: ["Full Time", "Server Setup", "Content"],
    deadline: "2024-04-25"
  },
  {
    id: 7,
    title: "PhD in Cloud Computing",
    institution: "Harvard University",
    location: "Cambridge, USA",
    type: "PhD",
    timeLeft: "11 days left",
    workSchedule: "Full Time",
    employmentType: "PhD",
    course: "Cloud Computing",
    description: "Research position focusing on next-generation cloud infrastructure.",
    requirements: "PhD qualification, Industry experience preferred, Strong publication record",
    funding: "Competitive salary with benefits",
    supervisor: "Prof. Kim Yutsu",
    logo: HarvardLogo,
    applicationType: "form",
    tags: ["Full Time", "Cloud Based", "3+ Years"],
    deadline: "2024-06-01"
  },
  {
    id: 8,
    title: "MS by Research in Central Computing",
    institution: "University of Oxford",
    location: "Helsinki, FIN",
    type: "MS",
    timeLeft: "7 days left",
    workSchedule: "Full Time",
    employmentType: "MS",
    course: "Central Computing",
    description: "Innovative research in central computing with industry partnerships.",
    requirements: "Strong academic record, Programming proficiency, Research aptitude",
    funding: "Research assistantship with project funding",
    supervisor: "Prof. Kim Yutsu",
    logo: OxfordLogo,
    applicationType: "link",
    applicationUrl: "https://oxford.ac.uk/research/central-computing",
    tags: ["Full Time", "Server Setup", "Content"],
    deadline: "2024-05-30"
  },
  {
    id: 9,
    title: "MS by Research in Central Computing",
    institution: "University of Oxford",
    location: "Helsinki, FIN",
    type: "MS",
    timeLeft: "7 days left",
    workSchedule: "Full Time",
    employmentType: "MS",
    course: "Central Computing",
    description: "Specialized research program in distributed and central computing systems.",
    requirements: "Technical degree, Research interest, Strong problem-solving skills",
    funding: "Merit-based scholarship available",
    supervisor: "Prof. Kim Yutsu",
    logo: OxfordLogo,
    applicationType: "form",
    tags: ["Full Time", "Server Setup", "Content"],
    deadline: "2024-04-15"
  },
  {
    id: 10,
    title: "PhD in Advanced Computing",
    institution: "MIT",
    location: "Cambridge, USA",
    type: "PhD",
    timeLeft: "14 days left",
    workSchedule: "Full Time",
    employmentType: "PhD",
    course: "Advanced Computing",
    description: "Cutting-edge research in advanced computing systems and algorithms.",
    requirements: "Master's degree, Excellent academic record, Research publications",
    funding: "Full funding with teaching assistantship",
    supervisor: "Prof. Alex Morgan",
    logo: MITLogo,
    applicationType: "link",
    applicationUrl: "https://mit.edu/apply/phd-advanced-computing",
    tags: ["Full Time", "Research", "Advanced"],
    deadline: "2024-07-01"
  }
];

const Opportunities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);
  const [showDetailSlider, setShowDetailSlider] = useState(false);
  const [detailOpportunity, setDetailOpportunity] = useState<any>(null);
  const [showInternalForm, setShowInternalForm] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    type: "",
    institute: "",
    salaryRange: [54, 90],
    cardLayout: "double", // "single" or "double"
    workingSchedule: {
      fullTime: true,
      partTime: false,
      internship: false,
      projectWork: true,
      volunteering: false
    },
    employmentType: {
      fullDay: true,
      flexibleSchedule: false,
      distantWork: false
    },
    courses: {
      cloudComputing: true,
      artificialIntelligence: true,
      computingSystems: false,
      operatingSystems: false
    }
  });
  
  const { toast } = useToast();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(opportunities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOpportunities = opportunities.slice(startIndex, startIndex + itemsPerPage);

  const handleDetailsClick = (opportunity: any) => {
    setDetailOpportunity(opportunity);
    setShowDetailSlider(true);
  };

  const handleApplyForm = (opportunity: any) => {
    setSelectedOpportunity(opportunity);
    setShowInternalForm(true);
    setShowDetailSlider(false);
  };

  const handleApplyRedirect = (opportunity: any) => {
    if (opportunity.applicationUrl) {
      window.open(opportunity.applicationUrl, "_blank");
    } else {
      toast({
        title: "Coming Soon! 🔗",
        description: "External application link will be available soon!",
        duration: 3000,
      });
    }
  };

  const handleFileUpload = (fileType: string) => {
    toast({
      title: "Coming Soon! 📄",
      description: `${fileType} upload functionality is currently in development!`,
      duration: 3000,
    });
  };

  const FilterSidebar = () => (
    <div className="w-80 bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-fit sticky top-6">
      {/* JobsKart Ad Section - Hidden on mobile */}
      <div className="hidden lg:block bg-black/60 border border-white/10 rounded-xl p-6 mb-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Get Your Best Guide with Nexus</h3>
        <Button className="bg-white/10 text-white hover:bg-white/20 border border-white/20 mt-4">
          Learn More
        </Button>
      </div>

      {/* Filters */}
      <div className="space-y-6">
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Filter size={16} />
            Filters
          </h3>
        </div>

        {/* Working Schedule */}
        <div>
          <h4 className="text-white font-medium mb-3">Working Schedule</h4>
          <div className="space-y-2">
            {[
              { key: 'fullTime', label: 'Full time' },
              { key: 'partTime', label: 'Part time' },
              { key: 'internship', label: 'Internship' },
              { key: 'projectWork', label: 'Project work' },
              { key: 'volunteering', label: 'Volunteering' }
            ].map(item => (
              <div key={item.key} className="flex items-center space-x-2">
                <Checkbox 
                  id={item.key}
                  checked={filters.workingSchedule[item.key as keyof typeof filters.workingSchedule]}
                  onCheckedChange={(checked) => 
                    setFilters(prev => ({
                      ...prev,
                      workingSchedule: { ...prev.workingSchedule, [item.key]: checked }
                    }))
                  }
                />
                <label htmlFor={item.key} className="text-gray-300 text-sm">{item.label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Employment Type */}
        <div>
          <h4 className="text-white font-medium mb-3">Employment Type</h4>
          <div className="space-y-2">
            {[
              { key: 'fullDay', label: 'Full Day' },
              { key: 'flexibleSchedule', label: 'Flexible schedule' },
              { key: 'distantWork', label: 'Distant work' }
            ].map(item => (
              <div key={item.key} className="flex items-center space-x-2">
                <Checkbox 
                  id={item.key}
                  checked={filters.employmentType[item.key as keyof typeof filters.employmentType]}
                  onCheckedChange={(checked) => 
                    setFilters(prev => ({
                      ...prev,
                      employmentType: { ...prev.employmentType, [item.key]: checked }
                    }))
                  }
                />
                <label htmlFor={item.key} className="text-gray-300 text-sm">{item.label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-white font-medium mb-3">Courses</h4>
          <div className="space-y-2">
            {[
              { key: 'cloudComputing', label: 'Cloud Computing' },
              { key: 'artificialIntelligence', label: 'Artificial Intelligence' },
              { key: 'computingSystems', label: 'Computing Systems' },
              { key: 'operatingSystems', label: 'Operating Systems' }
            ].map(item => (
              <div key={item.key} className="flex items-center space-x-2">
                <Checkbox 
                  id={item.key}
                  checked={filters.courses[item.key as keyof typeof filters.courses]}
                  onCheckedChange={(checked) => 
                    setFilters(prev => ({
                      ...prev,
                      courses: { ...prev.courses, [item.key]: checked }
                    }))
                  }
                />
                <label htmlFor={item.key} className="text-gray-300 text-sm">{item.label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const OpportunityCard = ({ opportunity }: { opportunity: any }) => {
    // Extract days from timeLeft string (e.g., "3 days left" -> 3)
    const daysLeft = parseInt(opportunity.timeLeft.match(/\d+/)?.[0] || '0');
    
    // Determine badge color based on days left
    const getBadgeColor = (days: number) => {
      if (days < 1) {
        return "bg-red-500/20 text-red-400 border-red-500/30";
      } else if (days < 10) {
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      } else if (days < 20) {
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      } else {
        return "bg-green-500/20 text-green-400 border-green-500/30";
      }
    };

    return (
    <Card className="bg-black/40 border-white/10 rounded-xl overflow-hidden hover:bg-black/50 transition-all duration-300 group">
      <CardContent className="p-6">
        {/* Time Left Badge */}
        <div className="flex justify-between items-start mb-4">
          <Badge className={getBadgeColor(daysLeft)}>
            {opportunity.timeLeft}
          </Badge>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <img 
              src={opportunity.logo} 
              alt={`${opportunity.institution} logo`}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Institution and Title */}
        <div className="mb-4">
          <h3 className="text-white font-semibold text-lg mb-1 truncate">{opportunity.institution}</h3>
          <h4 className="text-white text-xl font-bold mb-2 line-clamp-2">{opportunity.title}</h4>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {opportunity.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Supervisor and Location */}
        <div className="mb-6">
          <p className="text-white font-medium">{opportunity.supervisor}</p>
          <p className="text-gray-400 text-sm">{opportunity.location}</p>
        </div>

        {/* Details Button */}
        <Button 
          onClick={() => handleDetailsClick(opportunity)}
          className="w-full bg-white text-black hover:bg-gray-100 font-medium"
        >
          Details
        </Button>
      </CardContent>
    </Card>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/10">
        {/* Search Bar */}
        <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="text-gray-400" size={20} />
                <Select value={filters.search} onValueChange={(value) => setFilters(prev => ({ ...prev, search: value }))}>
                  <SelectTrigger className="bg-transparent border-none text-white focus:outline-none focus:ring-0">
                    <SelectValue placeholder="Designer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-3 flex-1">
                <MapPin className="text-gray-400" size={20} />
                <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
                  <SelectTrigger className="bg-transparent border-none text-white focus:outline-none focus:ring-0">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="finland">Finland</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-3 flex-1">
                <Calendar className="text-gray-400" size={20} />
                <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger className="bg-transparent border-none text-white focus:outline-none focus:ring-0">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="ms">MS/Master's</SelectItem>
                    <SelectItem value="postdoc">Post-Doc</SelectItem>
                    <SelectItem value="research">Research Position</SelectItem>
                    <SelectItem value="fellowship">Fellowship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-3 flex-1">
                <Building className="text-gray-400" size={20} />
                <Select value={filters.institute} onValueChange={(value) => setFilters(prev => ({ ...prev, institute: value }))}>
                  <SelectTrigger className="bg-transparent border-none text-white focus:outline-none focus:ring-0">
                    <SelectValue placeholder="Institute" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="harvard">Harvard University</SelectItem>
                    <SelectItem value="stanford">Stanford University</SelectItem>
                    <SelectItem value="mit">MIT</SelectItem>
                    <SelectItem value="oxford">Oxford University</SelectItem>
                    <SelectItem value="cambridge">Cambridge University</SelectItem>
                    <SelectItem value="caltech">Caltech</SelectItem>
                    <SelectItem value="yale">Yale University</SelectItem>
                    <SelectItem value="princeton">Princeton University</SelectItem>
                    <SelectItem value="usc">University of Southern California</SelectItem>
                    <SelectItem value="florida">University of Florida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Search Bar - Horizontally Scrollable */}
            <div className="md:hidden overflow-x-auto">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-max">
                <div className="flex items-center gap-3 min-w-[200px]">
                  <Search className="text-gray-400" size={20} />
                  <Select value={filters.search} onValueChange={(value) => setFilters(prev => ({ ...prev, search: value }))}>
                    <SelectTrigger className="bg-transparent border-none text-white focus:outline-none focus:ring-0">
                      <SelectValue placeholder="Designer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-3 min-w-[200px]">
                  <MapPin className="text-gray-400" size={20} />
                  <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
                    <SelectTrigger className="bg-transparent border-none text-white focus:outline-none focus:ring-0">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="finland">Finland</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-3 min-w-[200px]">
                  <Calendar className="text-gray-400" size={20} />
                  <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger className="bg-transparent border-none text-white focus:outline-none focus:ring-0">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="ms">MS/Master's</SelectItem>
                      <SelectItem value="postdoc">Post-Doc</SelectItem>
                      <SelectItem value="research">Research Position</SelectItem>
                      <SelectItem value="fellowship">Fellowship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-3 min-w-[200px]">
                  <Building className="text-gray-400" size={20} />
                  <Select value={filters.institute} onValueChange={(value) => setFilters(prev => ({ ...prev, institute: value }))}>
                    <SelectTrigger className="bg-transparent border-none text-white focus:outline-none focus:ring-0">
                      <SelectValue placeholder="Institute" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="harvard">Harvard University</SelectItem>
                      <SelectItem value="stanford">Stanford University</SelectItem>
                      <SelectItem value="mit">MIT</SelectItem>
                      <SelectItem value="oxford">Oxford University</SelectItem>
                      <SelectItem value="cambridge">Cambridge University</SelectItem>
                      <SelectItem value="caltech">Caltech</SelectItem>
                      <SelectItem value="yale">Yale University</SelectItem>
                      <SelectItem value="princeton">Princeton University</SelectItem>
                      <SelectItem value="usc">University of Southern California</SelectItem>
                      <SelectItem value="florida">University of Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Desktop Layout */}
          <div className="hidden lg:flex gap-8">
            {/* Desktop Sidebar */}
            <div>
              <FilterSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <h1 className="text-white text-2xl font-bold">Recommended Roles</h1>
                  <Badge className="bg-white/10 text-white">{opportunities.length}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Sort by</span>
                  <Select defaultValue="stipend">
                    <SelectTrigger className="bg-white/10 border-white/20 text-white w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stipend">High Stipend</SelectItem>
                      <SelectItem value="deadline">Deadline</SelectItem>
                      <SelectItem value="relevance">Relevance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentOpportunities.map((opportunity) => (
                  <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-10 h-10 text-white hover:bg-white/10"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ChevronLeft size={16} />
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "ghost"}
                    size="icon"
                    className={`rounded-full w-10 h-10 ${
                      currentPage === page 
                        ? "bg-white text-black" 
                        : "text-white hover:bg-white/10"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-10 h-10 text-white hover:bg-white/10"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Filter and Sort Row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-white text-xl font-bold">Recommended Roles</h1>
                <Badge className="bg-white/10 text-white">{opportunities.length}</Badge>
              </div>
              
              {/* Combined Filter Dropdown */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-white/10 border-white/20 text-white px-4 py-2">
                    <Filter size={16} className="mr-2" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="bg-background/95 backdrop-blur-sm border-white/20 h-[80vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-white text-lg font-semibold">Filters & Sort</h3>
                    </div>
                    
                    {/* Card Layout Toggle */}
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Card Layout</h4>
                      <div className="flex gap-2">
                        <Button
                          variant={filters.cardLayout === "single" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setFilters(prev => ({ ...prev, cardLayout: "single" }))}
                          className={filters.cardLayout === "single" ? "bg-white text-black" : "border-white/20 text-white hover:bg-white/10"}
                        >
                          Single Column
                        </Button>
                        <Button
                          variant={filters.cardLayout === "double" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setFilters(prev => ({ ...prev, cardLayout: "double" }))}
                          className={filters.cardLayout === "double" ? "bg-white text-black" : "border-white/20 text-white hover:bg-white/10"}
                        >
                          Double Column
                        </Button>
                      </div>
                    </div>

                    {/* Sort Section */}
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Sort By</h4>
                      <Select defaultValue="stipend">
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:outline-none focus:ring-0">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stipend">High Stipend</SelectItem>
                          <SelectItem value="deadline">Deadline</SelectItem>
                          <SelectItem value="relevance">Relevance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Filter Sections */}
                    <div className="space-y-6">
                      {/* Working Schedule */}
                      <div>
                        <h4 className="text-white font-medium mb-3">Working Schedule</h4>
                        <div className="space-y-2">
                          {[
                            { key: 'fullTime', label: 'Full time' },
                            { key: 'partTime', label: 'Part time' },
                            { key: 'internship', label: 'Internship' },
                            { key: 'projectWork', label: 'Project work' },
                            { key: 'volunteering', label: 'Volunteering' }
                          ].map(item => (
                            <div key={item.key} className="flex items-center space-x-2">
                              <Checkbox 
                                id={item.key}
                                checked={filters.workingSchedule[item.key as keyof typeof filters.workingSchedule]}
                                onCheckedChange={(checked) => 
                                  setFilters(prev => ({
                                    ...prev,
                                    workingSchedule: { ...prev.workingSchedule, [item.key]: checked }
                                  }))
                                }
                              />
                              <label htmlFor={item.key} className="text-gray-300 text-sm">{item.label}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Employment Type */}
                      <div>
                        <h4 className="text-white font-medium mb-3">Employment Type</h4>
                        <div className="space-y-2">
                          {[
                            { key: 'fullDay', label: 'Full Day' },
                            { key: 'flexibleSchedule', label: 'Flexible schedule' },
                            { key: 'distantWork', label: 'Distant work' }
                          ].map(item => (
                            <div key={item.key} className="flex items-center space-x-2">
                              <Checkbox 
                                id={item.key}
                                checked={filters.employmentType[item.key as keyof typeof filters.employmentType]}
                                onCheckedChange={(checked) => 
                                  setFilters(prev => ({
                                    ...prev,
                                    employmentType: { ...prev.employmentType, [item.key]: checked }
                                  }))
                                }
                              />
                              <label htmlFor={item.key} className="text-gray-300 text-sm">{item.label}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Courses */}
                      <div>
                        <h4 className="text-white font-medium mb-3">Courses</h4>
                        <div className="space-y-2">
                          {[
                            { key: 'cloudComputing', label: 'Cloud Computing' },
                            { key: 'artificialIntelligence', label: 'Artificial Intelligence' },
                            { key: 'computingSystems', label: 'Computing Systems' },
                            { key: 'operatingSystems', label: 'Operating Systems' }
                          ].map(item => (
                            <div key={item.key} className="flex items-center space-x-2">
                              <Checkbox 
                                id={item.key}
                                checked={filters.courses[item.key as keyof typeof filters.courses]}
                                onCheckedChange={(checked) => 
                                  setFilters(prev => ({
                                    ...prev,
                                    courses: { ...prev.courses, [item.key]: checked }
                                  }))
                                }
                              />
                              <label htmlFor={item.key} className="text-gray-300 text-sm">{item.label}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Mobile Cards Grid - Dynamic layout based on filter */}
            <div className={`grid gap-4 mb-8 ${
              filters.cardLayout === "single" ? "grid-cols-1" : "grid-cols-2"
            }`}>
              {currentOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>

            {/* Mobile Pagination */}
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-10 h-10 text-white hover:bg-white/10"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <ChevronLeft size={16} />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "ghost"}
                  size="icon"
                  className={`rounded-full w-10 h-10 ${
                    currentPage === page 
                      ? "bg-white text-black" 
                      : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-10 h-10 text-white hover:bg-white/10"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Slider Modal */}
      <Dialog open={showDetailSlider} onOpenChange={setShowDetailSlider}>
        <DialogContent className="max-w-4xl max-h-[85vh] mt-16 overflow-y-auto bg-black/90 border-white/20 text-white">
          {detailOpportunity && (
            <div className="p-6">
              <DialogHeader className="mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <img 
                      src={detailOpportunity.logo} 
                      alt={`${detailOpportunity.institution} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-white">
                      {detailOpportunity.title}
                    </DialogTitle>
                    <p className="text-lg text-gray-300">{detailOpportunity.institution}</p>
                    <p className="text-sm text-gray-400">{detailOpportunity.location}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {detailOpportunity.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-gray-700/50 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Description</h3>
                    <p className="text-gray-300 leading-relaxed">{detailOpportunity.description}</p>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Requirements</h3>
                    <p className="text-gray-300 leading-relaxed">{detailOpportunity.requirements}</p>
                  </div>

                  {/* Funding */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Funding</h3>
                    <p className="text-gray-300 leading-relaxed">{detailOpportunity.funding}</p>
                  </div>

                  {/* Supervisor */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Supervisor</h3>
                    <p className="text-gray-300 leading-relaxed">{detailOpportunity.supervisor}</p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Info */}
                  <div className="bg-white/5 rounded-xl p-6">
                    <h4 className="font-semibold mb-4 text-white">Quick Info</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-300">{detailOpportunity.timeLeft}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-300">Deadline: {detailOpportunity.deadline}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-300">{detailOpportunity.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-300">{detailOpportunity.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Buttons */}
                  <div className="space-y-3">
                    {detailOpportunity.applicationType === "form" ? (
                      <Button 
                        onClick={() => handleApplyForm(detailOpportunity)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
                      >
                        Apply (Form)
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => handleApplyRedirect(detailOpportunity)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 flex items-center justify-center gap-2"
                      >
                        Apply (Redirect)
                        <ExternalLink size={16} />
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                      onClick={() => {
                        toast({
                          title: "Coming Soon! 💾",
                          description: "Save functionality will be available soon!",
                          duration: 3000,
                        });
                      }}
                    >
                      Save for Later
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Internal Application Form Modal */}
      <Dialog open={showInternalForm} onOpenChange={setShowInternalForm}>
        <DialogContent className="max-w-2xl max-h-[85vh] mt-16 overflow-y-auto bg-black/95 backdrop-blur-sm border-white/20 text-white">
          {selectedOpportunity && (
            <div className="p-6">
              <DialogHeader className="mb-6">
                <div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    Apply for {selectedOpportunity.title}
                  </DialogTitle>
                  <p className="text-gray-300">{selectedOpportunity.institution}</p>
                </div>
              </DialogHeader>

              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                      <Input 
                        placeholder="Enter your first name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                      <Input 
                        placeholder="Enter your last name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input 
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                    <Input 
                      placeholder="Enter your phone number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Document Uploads */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Documents</h3>
                  
                  {/* ID Document */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">ID Document *</label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors cursor-pointer"
                         onClick={() => handleFileUpload('ID Document')}>
                      <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-gray-400 text-sm">Click to upload ID document</p>
                    </div>
                  </div>

                  {/* Marksheet */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Academic Transcripts/Marksheet *</label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors cursor-pointer"
                         onClick={() => handleFileUpload('Marksheet')}>
                      <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-gray-400 text-sm">Click to upload marksheet/transcripts</p>
                    </div>
                  </div>

                  {/* Resume */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Resume/CV *</label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors cursor-pointer"
                         onClick={() => handleFileUpload('Resume')}>
                      <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-gray-400 text-sm">Click to upload resume/CV</p>
                    </div>
                  </div>

                  {/* Statement of Purpose (Optional) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Statement of Purpose (Optional)</label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors cursor-pointer"
                         onClick={() => handleFileUpload('Statement of Purpose')}>
                      <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-gray-400 text-sm">Click to upload SOP (optional)</p>
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Cover Letter (Optional)</label>
                  <textarea 
                    placeholder="Write a brief cover letter explaining your interest..."
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    onClick={() => setShowInternalForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      toast({
                        title: "Application Submitted! 🎉",
                        description: "Your application has been submitted successfully. You will receive a confirmation email shortly.",
                        duration: 5000,
                      });
                      setShowInternalForm(false);
                    }}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Opportunities;