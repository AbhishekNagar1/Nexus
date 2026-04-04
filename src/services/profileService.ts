import { supabase } from "@/integrations/supabase/client";

type ProfileUpdate = {
  first_name?: string | null;
  last_name?: string | null;
  institution?: string | null;
  role?: "student" | "professor" | "institution";
  bio?: string | null;
  website?: string | null;
  location?: string | null;
  avatar_url?: string | null;
  cv_url?: string | null;
};

export const profileService = {
  async getProfile(userId: string) {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
    if (error) throw error;
    return data;
  },

  async updateProfile(userId: string, updates: ProfileUpdate) {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async uploadAvatar(userId: string, file: File) {
    const ext = file.name.split(".").pop();
    const path = `${userId}/avatar.${ext ?? "png"}`;

    const { error: uploadError } = await supabase.storage.from("avatars").upload(path, file, { upsert: true });
    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("avatars").getPublicUrl(path);
    await this.updateProfile(userId, { avatar_url: data.publicUrl });
    return data.publicUrl;
  },

  async uploadDocument(userId: string, file: File) {
    const ext = file.name.split(".").pop();
    const stamp = Date.now();
    const path = `${userId}/${stamp}.${ext ?? "dat"}`;

    const { error: uploadError } = await supabase.storage.from("documents").upload(path, file, { upsert: false });
    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("documents").getPublicUrl(path);
    return data.publicUrl;
  },

  async uploadOwnDocument(file: File) {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) throw new Error("You must be signed in to upload documents.");
    return this.uploadDocument(user.id, file);
  },
};
