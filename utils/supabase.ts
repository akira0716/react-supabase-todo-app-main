import { createClient } from "@supabase/supabase-js";
import { getSupabaseUrl, getSupabaseAPIKey } from "./getSupabaseEnv";

const supabaseUrl = String(getSupabaseUrl());
const supabaseAnonKey = String(getSupabaseAPIKey());

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
