import { Article } from "@/types/article";
import { titleCaseToSnakeCase } from "@/utils/title-to-snake-case";
import Link from "next/link";
import { FunctionComponent } from "react";

interface Props {
	article: Article;
}

const ArticleCard: FunctionComponent<Props> = ({ article }) => {
	return (
		<Link
			href={`/articles/${titleCaseToSnakeCase(article.title)}`}
			className="shadow-md hover:shadow-lg transition-shadow px-9 py-7 max-w-[840px]"
		>
			<div className="font-medium text-xl mb-[14px]">{article.title}</div>
			<div className="text-gray-600 line-clamp-2">{article.description}</div>
		</Link>
	);
};

export default ArticleCard;
