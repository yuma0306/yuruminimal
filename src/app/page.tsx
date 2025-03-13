import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HomeFv } from '@/components/HomeFv/HomeFv';
import { HomeIntro } from '@/components/HomeIntro/HomeIntro';
import { Main } from '@/components/Main/Main';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { commonMetaData, siteDescription, siteName } from '@/constants/data';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: siteName,
	description: siteDescription,
	...commonMetaData,
};

export default async function HomePage() {
	const { contents: posts } = await getListData<BlogType>(endpoints.blogs, {
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

const minFvPostLength = 6;

function copyPosts(posts: BlogType[]) {
	if (posts.length === 0) return [];
	if (posts.length > minFvPostLength) return posts;
	const doubledPosts = [...posts, ...posts];
	return copyPosts(doubledPosts);
}
