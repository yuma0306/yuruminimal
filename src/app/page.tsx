import { Home } from '@/features/home/Home';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';

export default async function HomePage() {
	const { contents: posts } = await getListData<BlogType>(endpoints.blogs, {
		filters: 'recommend[equals]true',
	});
	return <Home posts={minFvPostLength ? copyPosts(posts) : posts} />;
}

const minFvPostLength = 6;

function copyPosts(posts: BlogType[]) {
	if (posts.length === 0) return [];
	if (posts.length > minFvPostLength) return posts;
	const doubledPosts = [...posts, ...posts];
	return copyPosts(doubledPosts);
}
