import { NextResponse } from "next/server"

// POST /api/polls - create a poll (placeholder)
export async function POST(req: Request) {
  try {
    const body = await req.json()
    // TODO: validate and insert into Supabase
    return NextResponse.json({ ok: true, poll: body }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: "Failed to create poll" }, { status: 500 })
  }
}

// GET /api/polls - list polls (placeholder)
export async function GET() {
  try {
    // TODO: fetch from Supabase
    return NextResponse.json({ polls: [] })
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}
