import { createClient } from "@supabase/supabase-js"

// Validate required environment variables
function validateSupabaseEnv() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const missingVars: string[] = []
  
  if (!supabaseUrl || supabaseUrl.trim() === "") {
    missingVars.push("NEXT_PUBLIC_SUPABASE_URL")
  }
  
  if (!supabaseAnonKey || supabaseAnonKey.trim() === "") {
    missingVars.push("NEXT_PUBLIC_SUPABASE_ANON_KEY")
  }

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required Supabase environment variables: ${missingVars.join(", ")}\n` +
      `Please set these variables in your .env.local file:\n` +
      `NEXT_PUBLIC_SUPABASE_URL=your_supabase_url\n` +
      `NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key\n` +
      `\nFor production, set these in your Vercel project settings.`
    )
  }

  return { supabaseUrl, supabaseAnonKey }
}

// Validate environment variables before creating client
const { supabaseUrl, supabaseAnonKey } = validateSupabaseEnv()

// Create Supabase client only after validation
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
