import { AppBlock } from '@/components/AppBlock/AppBlock';
import { AppBreadcrumb } from '@/components/AppBreadcrumb/AppBreadcrumb';
import { ArchiveList } from '@/components/ArchiveList/ArchiveList';
import { CardLink } from '@/components/CardLink/CardLink';
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
import { trimTimefromDate } from '@/functions/date';
import { endpoints, fetchList } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	...getCommonMetadata(),
	title: `${siteRoutes.blog.index.text}${siteMeta.titleSuffix}`,
	description: `${siteRoutes.blog.index.text}${siteMeta.descriptionSuffix}`,
	openGraph: getDefaultOpenGraph(),
	alternates: {
		canonical: siteRoutes.blog.index.path,
	},
};

export default async function BlogArchivePage() {
	const { contents: posts } = await fetchList<BlogType>(endpoints.blogs);
	posts.length === 0 && notFound();

	const breadcrumbItems = [
		{
			text: siteRoutes.home.text,
			link: siteRoutes.home.path,
		},
		{
			text: siteRoutes.blog.index.text,
			link: `${siteRoutes.blog.index.path}`,
		},
	];
	return (
		<Wrapper>
			<Header />
			<Main>
				<HolizonalSpacer>
					<AppBreadcrumb items={breadcrumbItems} />
					<AppBlock>
						<ArchiveList>
							{posts.map(
								(post) =>
									post.eyecatch?.width &&
									post.eyecatch?.height &&
									post.publishedAt && (
										<li key={post.id.toString()}>
											<CardLink
												link={`/blog/${post.id}/`}
												image={post.eyecatch.url}
												width={post.eyecatch.width}
												height={post.eyecatch.height}
												time={trimTimefromDate(post.updatedAt)}
												title={post.title}
											/>
										</li>
									),
							)}
						</ArchiveList>
					</AppBlock>
				</HolizonalSpacer>
			</Main>
			<Footer />
		</Wrapper>
	);
}
