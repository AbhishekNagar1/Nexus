import type { RealtimeChannel } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const messageService = {
  async listConversations() {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) throw new Error("You must be signed in to view conversations.");

    const { data, error } = await supabase
      .from("conversations")
      .select("*")
      .contains("participants", [user.id])
      .order("updated_at", { ascending: false });

    if (error) throw error;
    return data ?? [];
  },

  async listMessages(conversationId: string) {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data ?? [];
  },

  subscribeToConversation(conversationId: string, callback: (message: unknown) => void): RealtimeChannel {
    return supabase
      .channel(`conversation:${conversationId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages", filter: `conversation_id=eq.${conversationId}` },
        (payload) => callback(payload.new),
      )
      .subscribe();
  },

  async sendMessage(conversationId: string, content: string, messageType: "text" | "file" | "image" | "system" = "text") {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) throw new Error("You must be signed in to send messages.");

    const { data, error } = await supabase
      .from("messages")
      .insert({
        conversation_id: conversationId,
        sender_id: user.id,
        content,
        message_type: messageType,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
