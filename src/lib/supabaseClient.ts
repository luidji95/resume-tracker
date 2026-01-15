import { createClient } from "@supabase/supabase-js";

const supabseUrl = import.meta.env.VITE_SUPBASE_URL as string;
const supbaseAnonKey = import.meta.env.VITE_SUPABSE_ANON_KEY as string;

export const supabse = createClient(supabseUrl,supbaseAnonKey);