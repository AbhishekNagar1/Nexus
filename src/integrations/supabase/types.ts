export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "13.0.4";
  };
  public: {
    Tables: {
      applications: {
        Row: {
          additional_documents: Json;
          applicant_id: string;
          cover_letter: string | null;
          cv_url: string | null;
          id: string;
          opportunity_id: string;
          reviewed_at: string | null;
          reviewer_notes: string | null;
          status: "pending" | "under_review" | "accepted" | "rejected" | "withdrawn";
          submitted_at: string;
        };
        Insert: {
          additional_documents?: Json;
          applicant_id: string;
          cover_letter?: string | null;
          cv_url?: string | null;
          id?: string;
          opportunity_id: string;
          reviewed_at?: string | null;
          reviewer_notes?: string | null;
          status?: "pending" | "under_review" | "accepted" | "rejected" | "withdrawn";
          submitted_at?: string;
        };
        Update: {
          additional_documents?: Json;
          applicant_id?: string;
          cover_letter?: string | null;
          cv_url?: string | null;
          id?: string;
          opportunity_id?: string;
          reviewed_at?: string | null;
          reviewer_notes?: string | null;
          status?: "pending" | "under_review" | "accepted" | "rejected" | "withdrawn";
          submitted_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "applications_applicant_id_fkey";
            columns: ["applicant_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "applications_opportunity_id_fkey";
            columns: ["opportunity_id"];
            isOneToOne: false;
            referencedRelation: "opportunities";
            referencedColumns: ["id"];
          },
        ];
      };
      connections: {
        Row: {
          accepted_at: string | null;
          addressee_id: string;
          created_at: string;
          id: string;
          requester_id: string;
          status: "pending" | "accepted" | "blocked";
        };
        Insert: {
          accepted_at?: string | null;
          addressee_id: string;
          created_at?: string;
          id?: string;
          requester_id: string;
          status?: "pending" | "accepted" | "blocked";
        };
        Update: {
          accepted_at?: string | null;
          addressee_id?: string;
          created_at?: string;
          id?: string;
          requester_id?: string;
          status?: "pending" | "accepted" | "blocked";
        };
        Relationships: [
          {
            foreignKeyName: "connections_addressee_id_fkey";
            columns: ["addressee_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "connections_requester_id_fkey";
            columns: ["requester_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      conversations: {
        Row: {
          created_at: string;
          id: string;
          opportunity_id: string | null;
          participants: string[];
          title: string | null;
          type: "direct" | "group" | "opportunity_related";
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          opportunity_id?: string | null;
          participants: string[];
          title?: string | null;
          type?: "direct" | "group" | "opportunity_related";
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          opportunity_id?: string | null;
          participants?: string[];
          title?: string | null;
          type?: "direct" | "group" | "opportunity_related";
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "conversations_opportunity_id_fkey";
            columns: ["opportunity_id"];
            isOneToOne: false;
            referencedRelation: "opportunities";
            referencedColumns: ["id"];
          },
        ];
      };
      institutions: {
        Row: {
          country: string | null;
          created_at: string;
          id: string;
          logo_url: string | null;
          name: string;
          ranking: number | null;
          type: "university" | "research_institute" | "company" | null;
          website: string | null;
        };
        Insert: {
          country?: string | null;
          created_at?: string;
          id?: string;
          logo_url?: string | null;
          name: string;
          ranking?: number | null;
          type?: "university" | "research_institute" | "company" | null;
          website?: string | null;
        };
        Update: {
          country?: string | null;
          created_at?: string;
          id?: string;
          logo_url?: string | null;
          name?: string;
          ranking?: number | null;
          type?: "university" | "research_institute" | "company" | null;
          website?: string | null;
        };
        Relationships: [];
      };
      messages: {
        Row: {
          content: string;
          conversation_id: string;
          created_at: string;
          file_url: string | null;
          id: string;
          is_read: boolean;
          message_type: "text" | "file" | "image" | "system";
          sender_id: string;
        };
        Insert: {
          content: string;
          conversation_id: string;
          created_at?: string;
          file_url?: string | null;
          id?: string;
          is_read?: boolean;
          message_type?: "text" | "file" | "image" | "system";
          sender_id: string;
        };
        Update: {
          content?: string;
          conversation_id?: string;
          created_at?: string;
          file_url?: string | null;
          id?: string;
          is_read?: boolean;
          message_type?: "text" | "file" | "image" | "system";
          sender_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey";
            columns: ["conversation_id"];
            isOneToOne: false;
            referencedRelation: "conversations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "messages_sender_id_fkey";
            columns: ["sender_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      notifications: {
        Row: {
          created_at: string;
          data: Json;
          id: string;
          is_read: boolean;
          message: string | null;
          title: string;
          type: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          data?: Json;
          id?: string;
          is_read?: boolean;
          message?: string | null;
          title: string;
          type: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          data?: Json;
          id?: string;
          is_read?: boolean;
          message?: string | null;
          title?: string;
          type?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      opportunities: {
        Row: {
          application_deadline: string | null;
          created_at: string;
          description: string | null;
          duration_months: number | null;
          funding_amount: number | null;
          id: string;
          institution_id: string | null;
          is_active: boolean;
          location: string | null;
          professor_id: string;
          requirements: Json;
          tags: string[];
          title: string;
          type: "phd" | "postdoc" | "research_position" | "internship" | "fellowship";
          updated_at: string;
        };
        Insert: {
          application_deadline?: string | null;
          created_at?: string;
          description?: string | null;
          duration_months?: number | null;
          funding_amount?: number | null;
          id?: string;
          institution_id?: string | null;
          is_active?: boolean;
          location?: string | null;
          professor_id: string;
          requirements?: Json;
          tags?: string[];
          title: string;
          type: "phd" | "postdoc" | "research_position" | "internship" | "fellowship";
          updated_at?: string;
        };
        Update: {
          application_deadline?: string | null;
          created_at?: string;
          description?: string | null;
          duration_months?: number | null;
          funding_amount?: number | null;
          id?: string;
          institution_id?: string | null;
          is_active?: boolean;
          location?: string | null;
          professor_id?: string;
          requirements?: Json;
          tags?: string[];
          title?: string;
          type?: "phd" | "postdoc" | "research_position" | "internship" | "fellowship";
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "opportunities_institution_id_fkey";
            columns: ["institution_id"];
            isOneToOne: false;
            referencedRelation: "institutions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "opportunities_professor_id_fkey";
            columns: ["professor_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          cv_url: string | null;
          email: string;
          first_name: string | null;
          id: string;
          institution: string | null;
          is_verified: boolean;
          last_name: string | null;
          location: string | null;
          role: "student" | "professor" | "institution";
          updated_at: string;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          cv_url?: string | null;
          email: string;
          first_name?: string | null;
          id: string;
          institution?: string | null;
          is_verified?: boolean;
          last_name?: string | null;
          location?: string | null;
          role?: "student" | "professor" | "institution";
          updated_at?: string;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          cv_url?: string | null;
          email?: string;
          first_name?: string | null;
          id?: string;
          institution?: string | null;
          is_verified?: boolean;
          last_name?: string | null;
          location?: string | null;
          role?: "student" | "professor" | "institution";
          updated_at?: string;
          website?: string | null;
        };
        Relationships: [];
      };
      publications: {
        Row: {
          abstract: string | null;
          authors: string[];
          citation_count: number;
          created_at: string;
          doi: string | null;
          id: string;
          journal: string | null;
          keywords: string[];
          pdf_url: string | null;
          publication_date: string | null;
          title: string;
        };
        Insert: {
          abstract?: string | null;
          authors: string[];
          citation_count?: number;
          created_at?: string;
          doi?: string | null;
          id?: string;
          journal?: string | null;
          keywords?: string[];
          pdf_url?: string | null;
          publication_date?: string | null;
          title: string;
        };
        Update: {
          abstract?: string | null;
          authors?: string[];
          citation_count?: number;
          created_at?: string;
          doi?: string | null;
          id?: string;
          journal?: string | null;
          keywords?: string[];
          pdf_url?: string | null;
          publication_date?: string | null;
          title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      search_opportunities: {
        Args: {
          search_term: string;
        };
        Returns: {
          id: string;
          title: string;
          description: string | null;
          type: string | null;
          institution_name: string | null;
          professor_name: string | null;
          location: string | null;
          rank: number | null;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof DatabaseWithoutInternals, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]) | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends { Row: infer R }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends { Row: infer R }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends { Insert: infer I }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends { Insert: infer I }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends { Update: infer U }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends { Update: infer U }
      ? U
      : never
    : never;
