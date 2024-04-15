export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      address: {
        Row: {
          address: string | null
          created_at: string
          id: string
          phone: string | null
          state: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          id: string
          phone?: string | null
          state?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: string
          phone?: string | null
          state?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_address_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      booking: {
        Row: {
          additional_players: Json
          booking_id: number
          created_at: string
          date_time: string | null
          duration_minutes: number | null
          is_team_booking: boolean | null
          numberOfPlayers: number | null
          slot_id: number | null
          status: string | null
          updatedAt: string
          user_id: string | null
        }
        Insert: {
          additional_players: Json
          booking_id?: number
          created_at?: string
          date_time?: string | null
          duration_minutes?: number | null
          is_team_booking?: boolean | null
          numberOfPlayers?: number | null
          slot_id?: number | null
          status?: string | null
          updatedAt: string
          user_id?: string | null
        }
        Update: {
          additional_players?: Json
          booking_id?: number
          created_at?: string
          date_time?: string | null
          duration_minutes?: number | null
          is_team_booking?: boolean | null
          numberOfPlayers?: number | null
          slot_id?: number | null
          status?: string | null
          updatedAt?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_booking_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      cards: {
        Row: {
          card_holder_name: string | null
          card_number: number | null
          created_at: string
          cvc: number | null
          id: number
          pin: number | null
          user_id: string | null
        }
        Insert: {
          card_holder_name?: string | null
          card_number?: number | null
          created_at?: string
          cvc?: number | null
          id?: number
          pin?: number | null
          user_id?: string | null
        }
        Update: {
          card_holder_name?: string | null
          card_number?: number | null
          created_at?: string
          cvc?: number | null
          id?: number
          pin?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_cards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      dailySlot: {
        Row: {
          created_at: string
          dailySlotId: string
          date: string | null
          totalSlots: number | null
          updatedAt: string
        }
        Insert: {
          created_at?: string
          dailySlotId?: string
          date?: string | null
          totalSlots?: number | null
          updatedAt: string
        }
        Update: {
          created_at?: string
          dailySlotId?: string
          date?: string | null
          totalSlots?: number | null
          updatedAt?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          id: string
          name: string | null
          picture: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          picture?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          picture?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profile_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      slots: {
        Row: {
          created_at: string
          currentCapacity: number | null
          dailySlotId: string | null
          endTime: string | null
          maxCapacity: number | null
          slotId: number
          startTime: string | null
          updatedAt: string
        }
        Insert: {
          created_at?: string
          currentCapacity?: number | null
          dailySlotId?: string | null
          endTime?: string | null
          maxCapacity?: number | null
          slotId?: number
          startTime?: string | null
          updatedAt: string
        }
        Update: {
          created_at?: string
          currentCapacity?: number | null
          dailySlotId?: string | null
          endTime?: string | null
          maxCapacity?: number | null
          slotId?: number
          startTime?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_slots_dailySlotId_fkey"
            columns: ["dailySlotId"]
            isOneToOne: false
            referencedRelation: "dailySlot"
            referencedColumns: ["dailySlotId"]
          }
        ]
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
