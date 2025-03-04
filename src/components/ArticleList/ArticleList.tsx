import styles from '@/components/Article/Article.module.scss';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';
import { CardLink2 } from '../CardLink2/CardLink2';

type Props = {
	categorySlug: string;
	categoryName: string;
};

export const ArticleList = async ({ categorySlug, categoryName }: Props) => {
	const { contents: posts } = await getListData<BlogType>(endpoints.blogs, {
		filters: `category[equals]${categorySlug}`,
		limit: 2,
	});
	if (posts.length === 0) {
		return undefined;
	}
	return (
		<li className={styles.item}>
			<h3 className={styles.heading}>{categoryName}の記事</h3>
			<ul className={styles.articleList}>
				{posts.map((post) =>
					post.eyecatch?.width && post.eyecatch?.height && post.publishedAt ? (
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
	);
};
