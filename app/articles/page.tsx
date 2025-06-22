import ArticleCard from "@/app/articles/components/article-card";
import { DEFAULT_GET_LIMIT } from "@/constants";
import { getArticles } from "@/db/client";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Blog - Latest Articles",
	description: "Blog - Latest Articles",
	alternates: {
		canonical: `${process.env.NEXT_SITE_URL}/articles`,
	},
};

const Page: NextPage = async () => {
	const articles = await getArticles({ offset: 0, limit: DEFAULT_GET_LIMIT });

	return (
		<div>
			<h3 className="mb-8 text-2xl font-medium">Latest Articles</h3>

			<div className="flex flex-col gap-10">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</div>
	);
};

export default Page;
