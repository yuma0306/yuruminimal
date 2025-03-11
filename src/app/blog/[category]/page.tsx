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
	descriptionSuffix,
	notFoundTitle,
	titleSuffix,
} from '@/constants/data';
import { trimTimefromDate } from '@/functions/date';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType, CategoryType, InfoType } from '@/libs/microcms.type';
import type { Metadata } from 'next';
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

export async function generateMetadata({
	params,
}: { params: { category: string } }): Promise<Metadata> {
	const { category } = await params;
	const { contents: posts } = await getListData<BlogType>(endpoints.blogs, {
		filters: `category[equals]${category}`,
	});
	if (!category || posts.length === 0) {
		return {
			title: notFoundTitle + titleSuffix,
			description: notFoundTitle + descriptionSuffix,
			...commonMetaData,
		};
	}
	return {
		title: `${posts[0].category.name}の記事一覧${titleSuffix}`,
		description: `${posts[0].category.name}の記事一覧${descriptionSuffix}`,
		...commonMetaData,
	};
}

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
	const breadcrumbItems = [
		{
			text: 'トップ',
			link: '/',
		},
		{
			text: `${posts[0].category.name}の記事一覧`,
			link: `/blog/${posts[0].category.id}/`,
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
												link={`/blog/${post.category.id}/${post.id}/`}
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
