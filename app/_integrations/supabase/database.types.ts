
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      quiz_submissions: {
        Row: {
          id: string
          user_email: string
          answers: Json
          profile_type: string
          created_at: string
        }
        Insert: {
          id?: string
          user_email: string
          answers: Json
          profile_type: string
          created_at?: string
        }
        Update: {
          id?: string
          user_email?: string
          answers?: Json
          profile_type?: string
          created_at?: string
        }
        Relationships: []
      }
      user_info_requests: {
        Row: {
          id: string
          name: string
          email: string
          profile_type: string
          preferred_method: string
          created_at: string
          contacted: boolean
        }
        Insert: {
          id?: string
          name: string
          email: string
          profile_type: string
          preferred_method: string
          created_at?: string
          contacted?: boolean
        }
        Update: {
          id?: string
          name?: string
          email?: string
          profile_type?: string
          preferred_method?: string
          created_at?: string
          contacted?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}