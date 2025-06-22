import { DEFAULT_GET_LIMIT } from "@/constants";
import { DB } from "@/lib/supabase/db";

export const getArticles = async (filters?: {
	limit?: number;
	offset?: number;
}) => {
	const { data } = await DB.from("articles")
		.select("*")
		.range(filters?.offset || 0, filters?.limit || DEFAULT_GET_LIMIT)
		.order("created_at", { ascending: false });
	return data || [];
};
