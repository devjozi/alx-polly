import { User as SupabaseUser } from "@supabase/supabase-js"

// App-specific user profile (extends Supabase user with additional fields)
export interface UserProfile {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
}

// For auth context, use Supabase User directly
export type User = SupabaseUser

export interface Poll {
  id: string
  title: string
  description?: string
  options: PollOption[]
  author: UserProfile
  createdAt: Date
  updatedAt: Date
  expiresAt?: Date
  isActive: boolean
  totalVotes: number
}

export interface PollOption {
  id: string
  text: string
  votes: number
  pollId: string
}

export interface Vote {
  id: string
  pollId: string
  optionId: string
  userId: string
  createdAt: Date
}

export interface CreatePollData {
  title: string
  description?: string
  options: string[]
  expiresAt?: Date
}

export interface AuthState {
  user: SupabaseUser | null
  isLoading: boolean
  isAuthenticated: boolean
}
