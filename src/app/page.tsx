import { Article } from '@/components/Article/Article';
import { Footer } from '@/components/Footer/Footer';
import { Fv } from '@/components/Fv/Fv';
import { Header } from '@/components/Header/Header';
import { Intro } from '@/components/Intro/Intro';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';

const minFvPostLength = 6;

export default async function Home() {
	const { contents: posts } = await getListData<BlogType>(endpoints.blogs, {
		filters: 'recommend[equals]true',
	});
	if (!posts || posts.length === 0) {
		return <h1>投稿はまだありません</h1>;
	}
	return (
		<Wrapper>
			<Header isHome />
			<Fv posts={posts.length <= minFvPostLength ? copyPosts(posts) : posts} />
			<Intro />
			<Article />
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
