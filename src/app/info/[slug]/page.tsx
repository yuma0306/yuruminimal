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
import type { InfoType } from '@/libs/microcms.type';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export async function generateStaticParams() {
	const { contents } = await getListData<InfoType>(endpoints.info);
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
	const post = await getDetailData<InfoType>(endpoints.info, slug);
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

export default async function InfoDetailPage({ params }: Props) {
	const post = await getDetailData<InfoType>(
		endpoints.info,
		(await params).slug,
	);
	if (!post) {
		notFound();
	}
	const breadcrumbItems = [
		{
			text: 'トップ',
			link: '/',
		},
		{
			text: post.title,
			link: `/info/${post.id}/`,
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
