import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { messageService } from "@/services/messageService";

type ConversationRow = {
  id: string;
  participants: string[];
  title: string | null;
  updated_at: string;
};

type MessageRow = {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  created_at: string;
};

const Messages = () => {
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();

  const [conversations, setConversations] = useState<ConversationRow[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<MessageRow[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedConversationObj = useMemo(
    () => conversations.find((c) => c.id === selectedConversation) ?? null,
    [conversations, selectedConversation],
  );

  useEffect(() => {
    if (!isAuthenticated) return;
    let mounted = true;

    const loadConversations = async () => {
      setLoading(true);
      try {
        const rows = (await messageService.listConversations()) as ConversationRow[];
        if (!mounted) return;
        setConversations(rows);
        if (!selectedConversation && rows.length > 0) {
          setSelectedConversation(rows[0].id);
        }
      } catch (error) {
        toast({
          title: "Unable to load conversations",
          description: (error as Error).message,
          variant: "destructive",
        });
      } finally {
        if (mounted) setLoading(false);
      }
    };

    void loadConversations();
    return () => {
      mounted = false;
    };
  }, [isAuthenticated, selectedConversation, toast]);

  useEffect(() => {
    if (!selectedConversation) {
      setMessages([]);
      return;
    }
    let mounted = true;

    const loadMessages = async () => {
      try {
        const rows = (await messageService.listMessages(selectedConversation)) as MessageRow[];
        if (mounted) setMessages(rows);
      } catch (error) {
        toast({
          title: "Unable to load messages",
          description: (error as Error).message,
          variant: "destructive",
        });
      }
    };

    void loadMessages();
    const channel = messageService.subscribeToConversation(selectedConversation, (newMessageRow) => {
      setMessages((prev) => [...prev, newMessageRow as MessageRow]);
    });

    return () => {
      mounted = false;
      channel.unsubscribe();
    };
  }, [selectedConversation, toast]);

  const handleSendMessage = async () => {
    const trimmed = newMessage.trim();
    if (!trimmed) {
      toast({
        title: "Empty Message",
        description: "Please enter a message before sending.",
        variant: "destructive",
        duration: 2000,
      });
      return;
    }

    if (!selectedConversation) {
      toast({
        title: "No conversation selected",
        description: "Please select a conversation first.",
        variant: "destructive",
      });
      return;
    }

    try {
      await messageService.sendMessage(selectedConversation, trimmed);
      setNewMessage("");
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Messages</h1>
            <p className="text-xl text-foreground/70">Connect and communicate with researchers</p>
          </div>

          {!isAuthenticated ? (
            <Card className="glass">
              <CardContent className="py-10 text-center text-foreground/80">
                Sign in to view and send messages.
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
              <div className="lg:col-span-1">
                <Card className="glass h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Conversations</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-0">
                      {loading && conversations.length === 0 ? (
                        <div className="p-4 text-sm text-foreground/70">Loading conversations...</div>
                      ) : conversations.length === 0 ? (
                        <div className="p-4 text-sm text-foreground/70">No conversations yet.</div>
                      ) : (
                        conversations.map((conv) => {
                          const title = conv.title || "Conversation";
                          const unread = false;
                          const subtitle = `Participants: ${conv.participants.length}`;
                          const time = new Date(conv.updated_at).toLocaleString();
                          return (
                            <div
                              key={conv.id}
                              className={`p-4 cursor-pointer border-b border-border/50 hover:bg-white/5 transition-colors ${
                                selectedConversation === conv.id ? "bg-white/10" : ""
                              }`}
                              onClick={() => setSelectedConversation(conv.id)}
                            >
                              <div className="flex items-start justify-between mb-1">
                                <div className="font-medium text-foreground text-sm truncate pr-2">{title}</div>
                                {unread && (
                                  <Badge variant="secondary" className="text-xs">
                                    New
                                  </Badge>
                                )}
                              </div>
                              <div className="text-xs text-foreground/60 mb-1">{subtitle}</div>
                              <div className="text-xs text-foreground/50 mt-1">{time}</div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card className="glass h-full flex flex-col">
                  <CardHeader className="border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {(selectedConversationObj?.title || "CV").slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground">
                          {selectedConversationObj?.title || "Conversation"}
                        </CardTitle>
                        <p className="text-sm text-foreground/60">
                          {selectedConversationObj
                            ? `${selectedConversationObj.participants.length} participants`
                            : "No conversation selected"}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {messages.length === 0 ? (
                        <p className="text-sm text-foreground/70">No messages yet.</p>
                      ) : (
                        messages.map((msg) => {
                          const isMe = msg.sender_id === user?.id;
                          return (
                            <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                              <div
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                  isMe ? "bg-primary text-primary-foreground" : "bg-white/10 text-foreground"
                                }`}
                              >
                                <p className="text-sm">{msg.content}</p>
                                <p
                                  className={`text-xs mt-1 ${
                                    isMe ? "text-primary-foreground/70" : "text-foreground/50"
                                  }`}
                                >
                                  {new Date(msg.created_at).toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </CardContent>

                  <div className="p-4 border-t border-border/50">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            void handleSendMessage();
                          }
                        }}
                        className="flex-1"
                      />
                      <Button onClick={() => void handleSendMessage()}>Send</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <ProfessionalFooter />
    </div>
  );
};

export default Messages;
