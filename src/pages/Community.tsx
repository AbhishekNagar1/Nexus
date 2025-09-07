import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import { useToast } from "@/hooks/use-toast";  


const posts = [
  {
    id: 1,
    author: "Dr. Sarah Johnson",
    institution: "MIT",
    content: "Excited to announce our new breakthrough in quantum error correction! The implications for fault-tolerant quantum computing are significant.",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    tags: ["Quantum Computing", "Research"]
  },
  {
    id: 2,
    author: "Alex Chen",
    institution: "Stanford PhD Student",
    content: "Looking for collaborators on a project involving AI ethics in healthcare. Anyone working in similar areas?",
    timestamp: "5 hours ago",
    likes: 15,
    comments: 12,
    tags: ["AI Ethics", "Collaboration"]
  },
  {
    id: 3,
    author: "Prof. Michael Brown",
    institution: "Oxford University",
    content: "Climate data from our latest Antarctic expedition is now available. Fascinating patterns emerging in ice core samples.",
    timestamp: "1 day ago",
    likes: 42,
    comments: 18,
    tags: ["Climate Science", "Data"]
  }
];

const trending = [
  "Quantum Computing",
  "AI Ethics",
  "Climate Science",
  "Machine Learning",
  "Neuroscience",
  "Biotechnology"
];

const suggestions = [
  { name: "Dr. Emma Wilson", institution: "Cambridge", field: "Genetics" },
  { name: "Prof. James Liu", institution: "Berkeley", field: "Physics" },
  { name: "Dr. Maria Garcia", institution: "Barcelona", field: "Chemistry" }
];

const Community = () => {
  const [newPost, setNewPost] = useState("");
  const { toast } = useToast();

  const handlePost = () => {
    if (newPost.trim()) {
      toast({
        title: "Coming Soon! 📝",
        description: "Community posting functionality is currently in development. Social features will be available soon!",
        duration: 4000,
      });
      console.log("New post:", newPost);
      setNewPost("");
    } else {
      toast({
        title: "Empty Post",
        description: "Please write something before sharing your post.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic Community
            </h1>
            <p className="text-xl text-foreground/70">
              Connect, share, and collaborate with researchers worldwide
            </p>
          </div>

          {/* Development Notice Scroll */}
          <div className="overflow-hidden mb-8">
            <div className="animate-scroll whitespace-nowrap py-2">
              <span className="text-red-500 font-medium text-sm inline-block px-4">
                This section is currently under development and will be available soon for use. We are working hard to bring you an amazing community experience with enhanced features, real-time messaging, collaborative tools, and seamless networking opportunities for researchers worldwide.
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Trending Topics */}
            <div className="lg:col-span-1">
              <Card className="glass mb-6">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Trending Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {trending.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-primary/20">
                        #{topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Suggested Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {suggestions.map((person, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-foreground text-sm">{person.name}</div>
                          <div className="text-xs text-foreground/60">{person.institution}</div>
                          <div className="text-xs text-foreground/50">{person.field}</div>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs">
                          Connect
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-2">
              {/* Create Post */}
              <Card className="glass mb-6">
                <CardContent className="pt-6">
                  <Textarea
                    placeholder="Share your research insights..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="mb-4"
                    rows={3}
                  />
                  <Button onClick={handlePost} className="w-full">
                    Share Post
                  </Button>
                </CardContent>
              </Card>

              {/* Posts Feed */}
              <div className="space-y-6">
                {posts.map((post) => (
                  <Card key={post.id} className="glass">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-foreground">{post.author}</CardTitle>
                          <p className="text-sm text-foreground/60">{post.institution}</p>
                        </div>
                        <span className="text-xs text-foreground/50">{post.timestamp}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 mb-4">{post.content}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-foreground/60">
                        <button className="hover:text-foreground transition-colors">
                          👍 {post.likes} likes
                        </button>
                        <button className="hover:text-foreground transition-colors">
                          💬 {post.comments} comments
                        </button>
                        <button className="hover:text-foreground transition-colors">
                          🔄 Share
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Sidebar - Recent Activity */}
            <div className="lg:col-span-1">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="border-l-2 border-primary/30 pl-3">
                      <p className="text-foreground/80">Dr. Wilson published a new paper</p>
                      <p className="text-foreground/50 text-xs">30 minutes ago</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-3">
                      <p className="text-foreground/80">New PhD position posted at MIT</p>
                      <p className="text-foreground/50 text-xs">1 hour ago</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-3">
                      <p className="text-foreground/80">Prof. Chen started following you</p>
                      <p className="text-foreground/50 text-xs">2 hours ago</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-3">
                      <p className="text-foreground/80">Research grant deadline approaching</p>
                      <p className="text-foreground/50 text-xs">3 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <ProfessionalFooter />
    </div>
  );
};

export default Community;