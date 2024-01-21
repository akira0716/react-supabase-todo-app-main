import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  String(process.env.EXPO_PUBLIC_SUPABASE_URL),
  String(process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY)
);
