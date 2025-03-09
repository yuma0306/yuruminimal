import { BlogArchive } from '@/features/blogs/BlogArchive/BlogArchive';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType, CategoryType } from '@/libs/microcms.type';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	const { contents: categories } = await getListData<CategoryType>(
		endpoints.categories,
	);
	const paths = categories.map((category) => {
		return {
			category: category.id,
		};
	});
	return paths;
}

export const dynamicParams = false;

type Props = {
	params: Promise<{
		category: string;
	}>;
};

export default async function BlogArchivePage({ params }: Props) {
	const { category } = await params;
	const { contents: posts } = await getListData<BlogType>(endpoints.blogs, {
		filters: `category[equals]${category}`,
	});
	if (!category || posts.length === 0) {
		notFound();
	}
	return <BlogArchive posts={posts} category={posts[0]?.category.name} />;
}
