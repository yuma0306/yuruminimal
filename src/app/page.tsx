import { Footer } from '@/components/Footer/Footer';
import { Fv } from '@/components/Fv/Fv';
import { Header } from '@/components/Header/Header';
import { Inner } from '@/components/Inner/Inner';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { endpoints, getListData } from '@/features/microcms';
import type { BlogType } from '@/types/microcms.type';

export default async function Home() {
	const { contents: posts } = await getListData<BlogType>(endpoints.blogs, {
		filters: 'recommend[equals]true',
	});
	if (!posts || posts.length === 0) {
		return <h1>投稿はまだありません</h1>;
	}
	return (
		<Wrapper>
			<Header as={'h1'} />
			<div>
				<Inner>
					<Fv posts={posts} />
				</Inner>
			</div>
			<section>
				<Inner>
					<p>
						ようこそ、スピスピへ！
						<br />
						スピスピでは、世界中の不思議な都市伝説、スピリチュアルな体験、そして目に見えないエネルギーについて探求します。
						<br />
						現実との狭間に隠された真実とは？スピリチュアルを信じるかどうかはあなた次第。
						<br />
						あなたの知らない世界への扉を一緒に開いてみませんか？？
					</p>
					<ul>
						<li>
							<h2>都市伝説の記事</h2>
							<ul>
								<li>あああ</li>
							</ul>
						</li>
						<li>
							<h2>スピリチュアルの記事</h2>
							<ul>
								<li>あああ</li>
							</ul>
						</li>
						<li>
							<h2>心理学の記事</h2>
							<ul>
								<li>あああ</li>
							</ul>
						</li>
						<li>
							<h2>自然科学の記事</h2>
							<ul>
								<li>あああ</li>
							</ul>
						</li>
					</ul>
				</Inner>
			</section>
			<Footer />
		</Wrapper>
	);
}
