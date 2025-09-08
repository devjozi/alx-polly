"use client"

import { useAuth } from "@/hooks/use-auth"
import { usePolls } from "@/hooks/use-polls"
import { PollsList } from "@/components/polls/polls-list"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const { isAuthenticated } = useAuth()
  const { polls, isLoading } = usePolls()

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-12">
        <p className="text-muted-foreground">Please sign in to view your dashboard.</p>
        <Button asChild className="mt-4"><a href="/auth/login">Sign In</a></Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Polls</h1>
        <Button asChild><a href="/polls">Browse All</a></Button>
      </div>
      <PollsList polls={polls} isLoading={isLoading} onCreatePoll={() => (window.location.href = "/polls")} />
    </div>
  )
}
