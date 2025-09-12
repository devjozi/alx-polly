"use client"

import { useState } from "react"
import { PollsList } from "@/components/polls/polls-list"
import { CreatePollForm } from "@/components/polls/create-poll-form"
import { usePolls } from "@/hooks/use-polls"
import { Button } from "@/components/ui/button"
import withAuth from "@/components/withAuth"

function PollsPage() {
  const { polls, isLoading, createPoll, voteOnPoll } = usePolls()
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

export default withAuth(PollsPage)
