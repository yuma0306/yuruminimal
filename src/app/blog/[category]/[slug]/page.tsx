import { AppGrid } from '@/components/AppGrid/AppGrid';
import { ArticleBody } from '@/components/ArticleBody/ArticleBody';
import { ArticleHead } from '@/components/ArticleHead/ArticleHead';
import { Block } from '@/components/Block/Block';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HolizonalSpacer } from '@/components/HolizonalSpacer/HolizonalSpacer';
import { Main } from '@/components/Main/Main';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import {
	commonMetaData,
	descriptionSuffix,
	notFoundTitle,
	titleSuffix,
} from '@/constants/data';
import { endpoints, getDetailData, getListData } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';
import type { Metadata } from 'next';
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

export async function generateMetadata({
	params,
}: { params: { slug: string } }): Promise<Metadata> {
	const { slug } = await params;
	const post = await getDetailData<BlogType>(endpoints.blogs, slug);
	if (!post) {
		return {
			title: notFoundTitle + titleSuffix,
			description: notFoundTitle + descriptionSuffix,
			...commonMetaData,
		};
	}
	return {
		title: post.title + titleSuffix,
		description: post.description + descriptionSuffix,
		...commonMetaData,
	};
}

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
	const breadcrumbItems = [
		{
			text: 'トップ',
			link: '/',
		},
		{
			text: `${post.category.name}の記事一覧`,
			link: `/blog/${post.category.id}/`,
		},
		{
			text: post.title,
			link: `/blog/${post.category.id}/${post.id}/`,
		},
	];
	return (
		<Wrapper>
			<Header />
			<Main>
				<HolizonalSpacer>
					<Breadcrumb items={breadcrumbItems} />
					<Block>
						<AppGrid as="div">
							<ArticleHead
								createdAt={post.createdAt}
								updatedAt={post.updatedAt}
								title={post.title}
								eyecatch={post.eyecatch}
							/>
							<ArticleBody html={post.content} />
						</AppGrid>
					</Block>
				</HolizonalSpacer>
			</Main>
			<Footer />
		</Wrapper>
	);
}
