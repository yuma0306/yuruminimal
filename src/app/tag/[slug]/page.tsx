import { ArchiveList } from '@/components/ArchiveList/ArchiveList';
import { Block } from '@/components/Block/Block';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { CardLink } from '@/components/CardLink/CardLink';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HolizonalSpacer } from '@/components/HolizonalSpacer/HolizonalSpacer';
import { Main } from '@/components/Main/Main';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import {
	commonMetaData,
	commonOgImages,
	descriptionSuffix,
	notFoundTitle,
	titleSuffix,
} from '@/constants/config';
import { trimTimefromDate } from '@/functions/date';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType, TagType } from '@/libs/microcms.type';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	const { contents: tags } = await getListData<TagType>(endpoints.tags);
	const paths = tags.map((tag) => {
		return {
			slug: tag.id,
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

	const { contents: tagContents } = await getListData<TagType>(endpoints.tags, {
		filters: `id[equals]${slug}`,
	});

	if (tagContents.length === 0) {
		return {
			title: notFoundTitle + titleSuffix,
			description: notFoundTitle + descriptionSuffix,
			openGraph: {
				title: notFoundTitle + titleSuffix,
				description: notFoundTitle + descriptionSuffix,
				images: commonOgImages,
			},
			...commonMetaData,
		};
	}

	const tagName = tagContents[0].name;

	return {
		title: `${tagName}の記事一覧${titleSuffix}`,
		description: `${tagName}の記事一覧${descriptionSuffix}`,
		openGraph: {
			title: `${tagName}の記事一覧${titleSuffix}`,
			description: `${tagName}の記事一覧${descriptionSuffix}`,
			images: commonOgImages,
		},
		...commonMetaData,
	};
}

export default async function TagArchivePage({ params }: Props) {
	const { slug } = await params;

	const { contents: tagContents } = await getListData<TagType>(endpoints.tags, {
		filters: `id[equals]${slug}`,
	});

	if (tagContents.length === 0) {
		notFound();
	}

	const tagName = tagContents[0].name;

	const { contents } = await getListData<BlogType>(endpoints.blogs);

	const posts = contents.filter((item) =>
		item.tags.some((tag) => tag.id.toString() === slug),
	);

	if (posts.length === 0) {
		notFound();
	}

	const breadcrumbItems = [
		{
			text: 'トップ',
			link: '/',
		},
		{
			text: `#${tagName}の記事一覧`,
			link: `/tag/${slug}/`,
		},
	];

	return (
		<Wrapper>
			<Header />
			<Main>
				<HolizonalSpacer>
					<Breadcrumb items={breadcrumbItems} />
					<Block>
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
					</Block>
				</HolizonalSpacer>
			</Main>
			<Footer />
		</Wrapper>
	);
}
