"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"
import { Button } from "@/components/ui/button"

export function QrShare({ url }: { url: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    QRCode.toCanvas(canvasRef.current, url, { width: 192 }, (error) => {
      if (error) console.error(error)
    })
  }, [url])

  return (
    <div className="flex flex-col items-center gap-3">
      <canvas ref={canvasRef} className="rounded bg-white p-2" />
      <div className="flex gap-2">
        <Button asChild size="sm"><a href={url} target="_blank" rel="noreferrer">Open Link</a></Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigator.clipboard.writeText(url)}
        >Copy Link</Button>
      </div>
    </div>
  )
}
