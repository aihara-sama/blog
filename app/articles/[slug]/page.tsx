import { getArticleByTitle } from "@/db/client";
import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;

	const article = await getArticleByTitle(slug.replaceAll("_", " "));

	if (!article) return notFound();

	return {
		title: article.title,
		description: article.title,
	};
}

interface Props {
	params: Promise<{
		slug: string;
	}>;
}

const Page: NextPage<Props> = async ({ params }) => {
	const { slug } = await params;

	const article = await getArticleByTitle(slug.replaceAll("_", " "));

	if (!article) return notFound();

	return (
		<div className="markdown">
			<Markdown>{article!.body}</Markdown>
		</div>
	);
};

export default Page;
