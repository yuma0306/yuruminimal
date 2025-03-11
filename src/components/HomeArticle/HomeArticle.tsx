import { Block } from '@/components/Block/Block';
import { HolizonalSpacer } from '@/components/HolizonalSpacer/HolizonalSpacer';
import { categoriesMap } from '@/libs/microcms';
import { HomeArticleList } from '../HomeArticleList/HomeArticleList';
import styles from './HomeArticle.module.scss';

export const HomeArticle = () => {
	return (
		<HolizonalSpacer as={'section'}>
			<div className={styles.blockWrapper}>
				<Block>
					<ul className={styles.list}>
						{Object.entries(categoriesMap).map(([key, value]) => (
							<HomeArticleList
								categorySlug={key}
								categoryName={value}
								key={key}
							/>
						))}
					</ul>
				</Block>
			</div>
		</HolizonalSpacer>
	);
};
