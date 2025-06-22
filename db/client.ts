import { DB } from "@/lib/supabase/db";

export const getSimilarArticles = async (id: string) => {
	const articlesTags = await DB.from("tags_articles")
		.select("article:articles(*)")
		.eq("tag_id", "45e482c2-d733-43d6-a894-7de07c29d295")
		.neq("article_id", id);

	return (articlesTags.data || []).map(({ article }) => article);
};

export const getArticles = async (filters?: {
	limit?: number;
	offset?: number;
}) => {
	let query = DB.from("articles").select("*");

	if (filters?.offset && filters.limit) {
		query = query.range(filters.offset || 0, filters.limit);
	}

	query = query.order("created_at", { ascending: false });

	return (await query).data || [];
};

export const getArticleByTitle = async (title: string) => {
	const { data } = await DB.from("articles")
		.select("*")
		.eq("title", title)
		.single();

	return data;
};
