"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QrShare } from "@/components/qr/qr-share"
import { usePolls } from "@/hooks/use-polls"

export default function PublicPollPage() {
  const { id } = useParams<{ id: string }>()
  const { polls, voteOnPoll } = usePolls()
  const [isVoting, setIsVoting] = useState(false)

  const poll = useMemo(() => polls.find(p => p.id === id), [polls, id])
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/p/${id}` : ""

  const onVote = async (optionId: string) => {
    setIsVoting(true)
    try {
      await voteOnPoll(id, optionId)
    } finally {
      setIsVoting(false)
    }
  }

  useEffect(() => {
    // TODO: fetch single poll by id from API when backend is ready
  }, [id])

  if (!poll) {
    return <div className="container mx-auto py-8">Poll not found.</div>
  }

  return (
    <div className="container mx-auto py-8 grid gap-6 md:grid-cols-[1fr_280px]">
      <Card>
        <CardHeader>
          <CardTitle>{poll.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {poll.options.map((o) => (
            <div key={o.id} className="flex items-center justify-between gap-3">
              <span>{o.text}</span>
              <Button size="sm" disabled={isVoting || !poll.isActive} onClick={() => onVote(o.id)}>Vote</Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Share</CardTitle>
        </CardHeader>
        <CardContent>
          <QrShare url={shareUrl} />
        </CardContent>
      </Card>
    </div>
  )
}
