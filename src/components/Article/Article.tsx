import styles from '@/components/Article/Article.module.scss';
import { categoriesMap } from '@/constants/category';
import { endpoints, getListData } from '@/features/microcms';
import type { BlogType } from '@/types/microcms.type';
import { CardLink2 } from '../CardLink2/CardLink2';

export const Article = async () => {
	const category = 'spiritual';
	const { contents: posts } = await getListData<BlogType>(endpoints.blogs, {
		filters: `category[equals]${category}`,
		limit: 2,
	});
	return (
		<section className={styles.article}>
			<div className={styles.block}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<h3 className={styles.heading}>{categoriesMap[category]}の記事</h3>
						<ul className={styles.articleList}>
							{posts.map((post) =>
								post.eyecatch?.width &&
								post.eyecatch?.height &&
								post.publishedAt ? (
									<li key={post.id} className={styles.articleItem}>
										<CardLink2
											link={`/blog/${post.category.id}/${post.id}`}
											image={post.eyecatch.url}
											width={post.eyecatch.width}
											height={post.eyecatch.height}
											time={post.publishedAt.slice(0, 10)}
											title={post.title}
										/>
									</li>
								) : undefined,
							)}
						</ul>
					</li>
				</ul>
			</div>
		</section>
	);
};
