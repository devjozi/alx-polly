"use client"

import { Poll } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PollCardProps {
  poll: Poll
  onVote?: (pollId: string, optionId: string) => void
  onView?: (pollId: string) => void
}

export function PollCard({ poll, onVote, onView }: PollCardProps) {
  const handleVote = (optionId: string) => {
    if (onVote) {
      onVote(poll.id, optionId)
    }
  }

  const handleView = () => {
    if (onView) {
      onView(poll.id)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{poll.title}</CardTitle>
            {poll.description && (
              <CardDescription>{poll.description}</CardDescription>
            )}
          </div>
          <Badge variant={poll.isActive ? "default" : "secondary"}>
            {poll.isActive ? "Active" : "Closed"}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>By {poll.author.name}</span>
          <span className="mx-2">•</span>
          <span>{poll.totalVotes} votes</span>
          <span className="mx-2">•</span>
          <span>{new Date(poll.createdAt).toLocaleDateString()}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {poll.options.map((option) => (
            <div key={option.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">{option.text}</span>
                <span className="text-sm text-muted-foreground">
                  {option.votes} votes
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${poll.totalVotes > 0 ? (option.votes / poll.totalVotes) * 100 : 0}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <Button onClick={handleView} variant="outline" size="sm">
            View Details
          </Button>
          {poll.isActive && onVote && (
            <Button size="sm">
              Vote
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
