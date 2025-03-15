import { AppMain } from '@/components/AppMain/AppMain';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HomeFv } from '@/components/HomeFv/HomeFv';
import { HomeIntro } from '@/components/HomeIntro/HomeIntro';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { siteName } from '@/constants/siteConfig';
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
	title: siteName,
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
			<AppMain>
				<HomeFv posts={minFvPostLength ? copyPosts(posts) : posts} />
				<HomeIntro />
			</AppMain>
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
