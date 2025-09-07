import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import { useToast } from "@/hooks/use-toast";

const conversations = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    institution: "MIT",
    lastMessage: "Thanks for your interest in the quantum computing position...",
    timestamp: "2 hours ago",
    unread: true
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    institution: "Stanford",
    lastMessage: "I'd be happy to discuss the collaboration opportunity.",
    timestamp: "1 day ago",
    unread: false
  },
  {
    id: 3,
    name: "Dr. Emma Wilson",
    institution: "Oxford",
    lastMessage: "The research proposal looks promising. Let's schedule a call.",
    timestamp: "3 days ago",
    unread: true
  }
];

const currentChat = [
  {
    id: 1,
    sender: "Dr. Sarah Johnson",
    message: "Hello! I saw your application for our quantum computing PhD position. Your background in theoretical physics is impressive.",
    timestamp: "10:30 AM",
    isMe: false
  },
  {
    id: 2,
    sender: "You",
    message: "Thank you for reaching out! I'm very excited about the opportunity to work on quantum error correction.",
    timestamp: "10:45 AM",
    isMe: true
  },
  {
    id: 3,
    sender: "Dr. Sarah Johnson",
    message: "Great! Would you be available for a video call next week to discuss the project in more detail?",
    timestamp: "10:50 AM",
    isMe: false
  }
];

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      toast({
        title: "Coming Soon! 💬",
        description: "Messaging functionality is currently in development. Chat features will be available soon!",
        duration: 4000,
      });
      console.log("Sending message:", newMessage);
      setNewMessage("");
    } else {
      toast({
        title: "Empty Message",
        description: "Please enter a message before sending.",
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
              Messages
            </h1>
            <p className="text-xl text-foreground/70">
              Connect and communicate with researchers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card className="glass h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Conversations</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {conversations.map((conv) => (
                      <div
                        key={conv.id}
                        className={`p-4 cursor-pointer border-b border-border/50 hover:bg-white/5 transition-colors ${
                          selectedConversation === conv.id ? 'bg-white/10' : ''
                        }`}
                        onClick={() => setSelectedConversation(conv.id)}
                      >
                        <div className="flex items-start justify-between mb-1">
                          <div className="font-medium text-foreground text-sm">{conv.name}</div>
                          {conv.unread && (
                            <Badge variant="secondary" className="text-xs">New</Badge>
                          )}
                        </div>
                        <div className="text-xs text-foreground/60 mb-1">{conv.institution}</div>
                        <div className="text-sm text-foreground/70 truncate">{conv.lastMessage}</div>
                        <div className="text-xs text-foreground/50 mt-1">{conv.timestamp}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              <Card className="glass h-full flex flex-col">
                <CardHeader className="border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">SJ</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">Dr. Sarah Johnson</CardTitle>
                      <p className="text-sm text-foreground/60">MIT • Online</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {currentChat.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.isMe
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-white/10 text-foreground'
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p className={`text-xs mt-1 ${
                            msg.isMe ? 'text-primary-foreground/70' : 'text-foreground/50'
                          }`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <div className="p-4 border-t border-border/50">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage}>Send</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <ProfessionalFooter />
    </div>
  );
};

export default Messages;