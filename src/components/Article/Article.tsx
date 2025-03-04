import styles from '@/components/Article/Article.module.scss';
import { categoriesMap } from '@/libs/microcms';
import { ArticleList } from '../ArticleList/ArticleList';

export const Article = () => {
	return (
		<section className={styles.article}>
			<div className={styles.block}>
				<ul className={styles.list}>
					{Object.entries(categoriesMap).map(([key, value]) => (
						<ArticleList categorySlug={key} categoryName={value} key={key} />
					))}
				</ul>
			</div>
		</section>
	);
};
