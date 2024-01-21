import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.REACT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("");
}

if (!supabaseKey) {
  throw new Error("");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
