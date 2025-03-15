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
import { getCommonMetadata, siteMeta } from '@/constants/siteMeta';
import { siteRoutes } from '@/constants/siteRoutes';
import { endpoints, fetchList, fetchListDetail } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	const { contents } = await fetchList<BlogType>(endpoints.blogs);
	const paths = contents.map((post) => {
		return {
			slug: post.id,
		};
	});
	return paths;
}
export const dynamicParams = false;

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = await fetchListDetail<BlogType>(endpoints.blogs, slug);
	!post && notFound();

	return {
		...getCommonMetadata(),
		title: post.title + siteMeta.titleSuffix,
		description: post.description + siteMeta.descriptionSuffix,
		openGraph: {
			type: siteMeta.og.type,
			title: post.title + siteMeta.titleSuffix,
			description: post.description + siteMeta.descriptionSuffix,
			images: post.eyecatch?.url
				? [
						{
							url: post.eyecatch.url,
							width: post.eyecatch.width,
							height: post.eyecatch.height,
							alt: post.title,
						},
					]
				: siteMeta.og.image,
		},
		alternates: {
			canonical: `${siteRoutes.blog.index.path}${post.id}/`,
		},
	};
}

export default async function BlogDetailPage({ params }: Props) {
	const { slug } = await params;
	const post = await fetchListDetail<BlogType>(endpoints.blogs, slug);
	!post && notFound();

	const breadcrumbItems = [
		{
			text: siteRoutes.home.text,
			link: siteRoutes.home.path,
		},
		{
			text: siteRoutes.blog.index.text,
			link: `${siteRoutes.blog.index.path}`,
		},
		{
			text: post.title,
			link: `${siteRoutes.blog.index.path}${post.id}/`,
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
								tags={post.tags}
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
