import { Inner } from '@/components/Inner/Inner';
import { siteData } from '@/constants/config';
import { endpoints, getListData } from '@/libs/microcms';
import type { TagType } from '@/libs/microcms.type';
import Link from 'next/link';
import styles from './HomeIntro.module.scss';

export const HomeIntro = async () => {
	const { contents: tags } = await getListData<TagType>(endpoints.tags);
	return (
		<section className={styles.intro}>
			<Inner>
				<h2 className={styles.heading}>{siteData.intro.heading}</h2>
				<p className={styles.text}>{siteData.intro.content}</p>
				<ul className={styles.tags}>
					{tags.map((tag) => (
						<li key={tag.id} className={styles.tag}>
							<Link className={styles.link} href={`/tag/${tag.id}/`}>
								#{tag.name}
							</Link>
						</li>
					))}
				</ul>
			</Inner>
		</section>
	);
};
