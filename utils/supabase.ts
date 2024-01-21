import { createClient } from "@supabase/supabase-js";

export const supabase = async () => {
  "use server";

  const supabaseUrl = process.env.REACT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.REACT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error("URLがないよ");
  }

  if (!supabaseKey) {
    throw new Error("KEYがないよ");
  }

  return createClient(supabaseUrl, supabaseKey);
};
