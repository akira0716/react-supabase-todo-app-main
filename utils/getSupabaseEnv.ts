"use server";

export async function getSupabaseUrl(): Promise<string | undefined> {
  const url = process.env.REACT_APP_SUPABASE_URL;
  if (url) {
    return url;
  } else {
    throw new Error("not url");
  }
}

export async function getSupabaseAPIKey(): Promise<string | undefined> {
  const api_key = process.env.REACT_APP_SUPABASE_ANON_KEY;
  if (api_key) {
    return api_key;
  } else {
    throw new Error("not api_key");
  }
}
