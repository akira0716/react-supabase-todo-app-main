import { createClient } from "@supabase/supabase-js";

const supabaseCreate = async () => {
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

export const supabase = supabaseCreate();
