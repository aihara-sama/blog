import type { Database } from "@/types/supabase";

export type Article = Database["public"]["Tables"]["articles"]["Row"];
