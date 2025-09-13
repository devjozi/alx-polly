"use client"

import { usePolls } from "@/hooks/use-polls"
import { PollsList } from "@/components/polls/polls-list"
import { Button } from "@/components/ui/button"
import withAuth from "@/components/withAuth"

function DashboardPage() {
  const { polls, isLoading } = usePolls()

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

export default withAuth(DashboardPage)
