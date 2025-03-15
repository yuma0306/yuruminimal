import { AppBlock } from '@/components/AppBlock/AppBlock';
import { AppBreadcrumb } from '@/components/AppBreadcrumb/AppBreadcrumb';
import { AppGrid } from '@/components/AppGrid/AppGrid';
import { ArticleBody } from '@/components/ArticleBody/ArticleBody';
import { ArticleHead } from '@/components/ArticleHead/ArticleHead';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HolizonalSpacer } from '@/components/HolizonalSpacer/HolizonalSpacer';
import { Main } from '@/components/Main/Main';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import {
	getCommonMetadata,
	getDefaultOpenGraph,
	siteMeta,
} from '@/constants/siteMeta';
import { siteRoutes } from '@/constants/siteRoutes';
import { endpoints, fetchList, fetchListDetail } from '@/libs/microcms';
import type { InfoType } from '@/libs/microcms.type';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export async function generateStaticParams() {
	const { contents } = await fetchList<InfoType>(endpoints.info);
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
	const post = await fetchListDetail<InfoType>(endpoints.info, slug);
	!post && notFound();

	return {
		...getCommonMetadata(),
		title: post.title + siteMeta.titleSuffix,
		description: post.description + siteMeta.descriptionSuffix,
		openGraph: getDefaultOpenGraph(),
		alternates: {
			canonical: `${siteRoutes.info.index.path}${post.id}/`,
		},
		robots: {
			index: !post.noindex,
			follow: !post.nofollow,
		},
	};
}

export default async function InfoDetailPage({ params }: Props) {
	const post = await fetchListDetail<InfoType>(
		endpoints.info,
		(await params).slug,
	);
	!post && notFound();

	const breadcrumbItems = [
		{
			text: siteRoutes.home.text,
			link: siteRoutes.home.path,
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
					<AppBreadcrumb items={breadcrumbItems} />
					<AppBlock>
						<AppGrid as="div">
							<ArticleHead
								createdAt={post.createdAt}
								updatedAt={post.updatedAt}
								title={post.title}
							/>
							<ArticleBody html={post.content} />
						</AppGrid>
					</AppBlock>
				</HolizonalSpacer>
			</Main>
			<Footer />
		</Wrapper>
	);
}
