import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export interface OpportunityFilters {
  type?: string;
  institutionId?: string;
  location?: string;
  search?: string;
}

export type OpportunityInsert = {
  title: string;
  description?: string | null;
  type: "phd" | "postdoc" | "research_position" | "internship" | "fellowship";
  institution_id?: string | null;
  professor_id: string;
  requirements?: Record<string, unknown>;
  application_deadline?: string | null;
  funding_amount?: number | null;
  duration_months?: number | null;
  location?: string | null;
  tags?: string[];
};

export type ApplicationInsert = {
  cover_letter?: string;
  cv_url?: string;
  additional_documents?: Record<string, unknown>;
};

type SearchOpportunityRow = Database["public"]["Functions"]["search_opportunities"] extends {
  Returns: infer T;
}
  ? T extends (infer U)[]
    ? U
    : never
  : never;

export const opportunityService = {
  async getOpportunities(page = 0, limit = 10, filters: OpportunityFilters = {}) {
    let query = supabase
      .from("opportunities")
      .select("*", { count: "exact" })
      .eq("is_active", true)
      .order("created_at", { ascending: false })
      .range(page * limit, page * limit + limit - 1);

    if (filters.type) query = query.eq("type", filters.type);
    if (filters.institutionId) query = query.eq("institution_id", filters.institutionId);
    if (filters.location) query = query.ilike("location", `%${filters.location}%`);
    if (filters.search) query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);

    const { data, error, count } = await query;
    if (error) throw error;
    return { data: data ?? [], count: count ?? 0 };
  },

  async searchOpportunities(searchTerm: string): Promise<SearchOpportunityRow[]> {
    const { data, error } = await supabase.rpc("search_opportunities", { search_term: searchTerm });
    if (error) throw error;
    return (data ?? []) as SearchOpportunityRow[];
  },

  async createOpportunity(input: OpportunityInsert) {
    const { data, error } = await supabase
      .from("opportunities")
      .insert({
        ...input,
        requirements: input.requirements ?? {},
        tags: input.tags ?? [],
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async applyToOpportunity(opportunityId: string, applicationData: ApplicationInsert) {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) throw new Error("You must be signed in to apply.");

    const { data, error } = await supabase
      .from("applications")
      .insert({
        opportunity_id: opportunityId,
        applicant_id: user.id,
        cover_letter: applicationData.cover_letter ?? null,
        cv_url: applicationData.cv_url ?? null,
        additional_documents: applicationData.additional_documents ?? {},
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
