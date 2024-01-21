import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

let supabaseUrl;
let supabaseAnonKey;
let method;

if (
  process.env.REACT_PUBLIC_SUPABASE_URL &&
  process.env.REACT_PUBLIC_SUPABASE_ANON_KEY
) {
  supabaseUrl = process.env.REACT_PUBLIC_SUPABASE_URL;
  supabaseAnonKey = process.env.REACT_PUBLIC_SUPABASE_ANON_KEY;

  method = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = method;
