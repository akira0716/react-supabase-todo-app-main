import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yrlpjrhizgzfvcfewccy.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlybHBqcmhpemd6ZnZjZmV3Y2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2Njk5NTEsImV4cCI6MjAyMTI0NTk1MX0.15oyD8TdAkpWmEHSTR6pN7u45fJ95DH1YdzShpyjgc8";

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
