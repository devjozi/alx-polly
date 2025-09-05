"use client"

import { Poll } from "@/types"
import { PollCard } from "./poll-card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface PollsListProps {
  polls: Poll[]
  onVote?: (pollId: string, optionId: string) => void
  onViewPoll?: (pollId: string) => void
  onCreatePoll?: () => void
  isLoading?: boolean
}

export function PollsList({ 
  polls, 
  onVote, 
  onViewPoll, 
  onCreatePoll, 
  isLoading = false 
}: PollsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Polls</h2>
          <Button onClick={onCreatePoll}>
            <Plus className="w-4 h-4 mr-2" />
            Create Poll
          </Button>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Polls</h2>
        <Button onClick={onCreatePoll}>
          <Plus className="w-4 h-4 mr-2" />
          Create Poll
        </Button>
      </div>
      
      {polls.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">
            No polls yet
          </h3>
          <p className="text-muted-foreground mb-4">
            Be the first to create a poll and start gathering opinions!
          </p>
          <Button onClick={onCreatePoll}>
            <Plus className="w-4 h-4 mr-2" />
            Create Your First Poll
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {polls.map((poll) => (
            <PollCard
              key={poll.id}
              poll={poll}
              onVote={onVote}
              onView={onViewPoll}
            />
          ))}
        </div>
      )}
    </div>
  )
}
