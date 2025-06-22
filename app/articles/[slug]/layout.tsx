import { getArticles } from "@/db/client";
import { FunctionComponent, PropsWithChildren } from "react";

export async function generateStaticParams() {
	const articles = await getArticles();

	return articles.map(({ title }) => ({
		slug: title.replaceAll(" ", "_"),
	}));
}

interface Props {
	params: Promise<{
		slug: string;
	}>;
}
const Layout: FunctionComponent<PropsWithChildren<Props>> = async ({
	children,
}) => {
	return <>{children}</>;
};

export default Layout;
