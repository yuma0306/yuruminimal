import { Block } from '@/components/Block/Block';
import { HolizonalSpacer } from '@/components/HolizonalSpacer/HolizonalSpacer';
import { categoriesMap } from '@/libs/microcms';
import { ArticleList } from '../ArticleList/ArticleList';
import styles from './Article.module.scss';

export const Article = () => {
	return (
		<HolizonalSpacer as={'section'}>
			<div className={styles.blockWrapper}>
				<Block>
					<ul className={styles.list}>
						{Object.entries(categoriesMap).map(([key, value]) => (
							<ArticleList categorySlug={key} categoryName={value} key={key} />
						))}
					</ul>
				</Block>
			</div>
		</HolizonalSpacer>
	);
};
