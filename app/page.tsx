"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/polls")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            ALX Poll
          </h1>
          <p className="text-lg text-gray-600">
            Create, share, and vote on polls with your community
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome to ALX Poll</CardTitle>
            <CardDescription>
              A modern polling platform built with Next.js and Shadcn UI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Features:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Create custom polls with multiple options</li>
                <li>• Real-time voting and results</li>
                <li>• User authentication and profiles</li>
                <li>• Responsive design for all devices</li>
              </ul>
            </div>
            <div className="flex gap-2">
              <Button asChild className="flex-1">
                <a href="/auth/login">Get Started</a>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <a href="/polls">View Polls</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
