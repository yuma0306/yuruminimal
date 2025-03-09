import { BlogDetail } from '@/features/blogs/BlogDetail/BlogDetail';
import { endpoints, getDetailData, getListData } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	const { contents } = await getListData<BlogType>(endpoints.blogs);
	const paths = contents.map((post) => {
		return {
			category: post.category.id,
			slug: post.id,
		};
	});
	return paths;
}

export const dynamicParams = false;

type Props = {
	params: Promise<{
		category: string;
		slug: string;
	}>;
};

export default async function BlogDetailPage({ params }: Props) {
	const { category, slug } = await params;
	const post = await getDetailData<BlogType>(endpoints.blogs, slug);
	if (!post || !category) {
		notFound();
	}
	return <BlogDetail post={post} />;
}
