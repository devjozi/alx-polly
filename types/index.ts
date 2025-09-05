export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
}

export interface Poll {
  id: string
  title: string
  description?: string
  options: PollOption[]
  author: User
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
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}
