import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.REACT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and key are required.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
