import { CardLink } from '@/components/CardLink/CardLink';
import { LinkBtn } from '@/components/LinkBtn/LinkBtn';
import { trimTimefromDate } from '@/functions/date';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType } from '@/libs/microcms.type';
import styles from './ArticleList.module.scss';

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
			<div className={styles.articleList}>
				{posts.map(
					(post) =>
						post.eyecatch?.width &&
						post.eyecatch?.height &&
						post.publishedAt && (
							<div key={post.id} className={styles.articleItem}>
								<CardLink
									link={`/blog/${post.category.id}/${post.id}/`}
									image={post.eyecatch.url}
									width={post.eyecatch.width}
									height={post.eyecatch.height}
									time={trimTimefromDate(post.updatedAt)}
									title={post.title}
								/>
							</div>
						),
				)}
			</div>
			<LinkBtn href={`/blog/${categorySlug}/`}>
				{categoryName}の記事一覧
			</LinkBtn>
		</li>
	);
};
