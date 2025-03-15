import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HomeFv } from '@/components/HomeFv/HomeFv';
import { HomeIntro } from '@/components/HomeIntro/HomeIntro';
import { Main } from '@/components/Main/Main';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import {
	getCommonMetadata,
	getDefaultOpenGraph,
	siteMeta,
} from '@/constants/siteMeta';
import { siteRoutes } from '@/constants/siteRoutes';
import { endpoints, fetchList } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';
import type { Metadata } from 'next';

const minFvPostLength = 6;

export const metadata: Metadata = {
	...getCommonMetadata(),
	title: siteMeta.siteName,
	description: siteMeta.description,
	openGraph: getDefaultOpenGraph(),
	alternates: {
		canonical: siteRoutes.home.path,
	},
};

export default async function HomePage() {
	const { contents: posts } = await fetchList<BlogType>(endpoints.blogs, {
		filters: 'recommend[equals]true',
	});
	return (
		<Wrapper>
			<Header isHome />
			<Main>
				<HomeFv posts={minFvPostLength ? copyPosts(posts) : posts} />
				<HomeIntro />
			</Main>
			<Footer />
		</Wrapper>
	);
}

function copyPosts(posts: BlogType[]) {
	if (posts.length === 0) return [];
	if (posts.length > minFvPostLength) return posts;
	const doubledPosts = [...posts, ...posts];
	return copyPosts(doubledPosts);
}
