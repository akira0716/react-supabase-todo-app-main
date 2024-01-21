import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.REACT_PUBLIC_SUPABASE_ANON_KEY;

console.log(supabaseUrl);
console.log(supabaseKey);

if (!supabaseUrl) {
  throw new Error("URLがないよ");
}

if (!supabaseKey) {
  throw new Error("KEYがないよ");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
