"use client"

import { useState } from "react"
import { PollsList } from "@/components/polls/polls-list"
import { CreatePollForm } from "@/components/polls/create-poll-form"
import { usePolls } from "@/hooks/use-polls"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PollsPage() {
  const { polls, isLoading, createPoll, voteOnPoll } = usePolls()
  const { isAuthenticated } = useAuth()
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const handleCreatePoll = async (pollData: any) => {
    try {
      setIsCreating(true)
      await createPoll(pollData)
      setShowCreateForm(false)
    } catch (error) {
      console.error("Failed to create poll:", error)
    } finally {
      setIsCreating(false)
    }
  }

  const handleVote = async (pollId: string, optionId: string) => {
    try {
      await voteOnPoll(pollId, optionId)
    } catch (error) {
      console.error("Failed to vote:", error)
    }
  }

  const handleViewPoll = (pollId: string) => {
    // TODO: Navigate to individual poll page
    console.log("View poll:", pollId)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please sign in to view and create polls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="/auth/login">Sign In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showCreateForm) {
    return (
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => setShowCreateForm(false)}
          >
            ← Back to Polls
          </Button>
        </div>
        <CreatePollForm 
          onSubmit={handleCreatePoll}
          isLoading={isCreating}
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <PollsList
        polls={polls}
        onVote={handleVote}
        onViewPoll={handleViewPoll}
        onCreatePoll={() => setShowCreateForm(true)}
        isLoading={isLoading}
      />
    </div>
  )
}
