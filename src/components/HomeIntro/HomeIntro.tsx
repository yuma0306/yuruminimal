import { Inner } from '@/components/Inner/Inner';
import { siteContent } from '@/constants/siteContent';
import { endpoints, fetchList } from '@/libs/microcms';
import type { TagType } from '@/libs/microcms.type';
import Link from 'next/link';
import { AppDialog } from '../AppDialog/AppDialog';
import styles from './HomeIntro.module.scss';

export const HomeIntro = async () => {
	const { contents: tags } = await fetchList<TagType>(endpoints.tags);
	return (
		<section className={styles.intro}>
			<Inner>
				<h2 className={styles.heading}>{siteContent.intro.heading}</h2>
				<p className={styles.text}>{siteContent.intro.content}</p>
				<ul className={styles.tags}>
					{tags.map((tag) => (
						<li key={tag.id} className={styles.tag}>
							<Link className={styles.link} href={`/tag/${tag.id}/`}>
								#{tag.name}
							</Link>
						</li>
					))}
				</ul>
				<AppDialog />
			</Inner>
		</section>
	);
};
