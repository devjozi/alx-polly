
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

export default function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithAuth: React.FC<P> = (props) => {
    const { user, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!isLoading && !user) {
        router.replace("/auth/login")
      }
    }, [isLoading, user, router])

    if (isLoading) {
      return <div>Loading...</div> // Or a spinner component
    }

    if (!user) {
      return null // Or a redirect component
    }

    return <WrappedComponent {...props} />
  }

  return WithAuth
}
