import { createClient, SupabaseClient } from "@supabase/supabase-js";

// 環境変数から取得する値の型
interface SupabaseEnv {
  REACT_PUBLIC_SUPABASE_URL: string;
  REACT_PUBLIC_SUPABASE_ANON_KEY: string;
}

// 環境変数から値を取得
const supabaseEnv: SupabaseEnv = {
  REACT_PUBLIC_SUPABASE_URL: process.env.REACT_PUBLIC_SUPABASE_URL || "",
  REACT_PUBLIC_SUPABASE_ANON_KEY:
    process.env.REACT_PUBLIC_SUPABASE_ANON_KEY || "",
};

// Supabaseクライアントの作成
export const supabase: SupabaseClient = createClient(
  supabaseEnv.REACT_PUBLIC_SUPABASE_URL,
  supabaseEnv.REACT_PUBLIC_SUPABASE_ANON_KEY
);
