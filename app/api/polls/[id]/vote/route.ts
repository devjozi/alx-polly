import { NextResponse } from "next/server"

// POST /api/polls/:id/vote - cast a vote (placeholder)
export async function POST(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const pollId = params.id
    // TODO: read optionId from body and write to Supabase with constraints
    return NextResponse.json({ ok: true, pollId }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: "Failed to vote" }, { status: 500 })
  }
}
