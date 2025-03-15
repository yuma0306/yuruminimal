import { siteName } from '@/constants/siteConfig';
import { endpoints, fetchList } from '@/libs/microcms';
import type { InfoType } from '@/libs/microcms.type';
import Link from 'next/link';
import type React from 'react';
import { Inner } from '../Inner/Inner';
import styles from './Footer.module.scss';

export const Footer = async () => {
	const { contents: posts } = await fetchList<InfoType>(endpoints.info);
	return (
		<footer className={styles.footer}>
			<Inner>
				{posts && (
					<ul className={styles.list}>
						{posts.map((post, index) => (
							<li key={index}>
								<Link className={styles.link} href={`/info/${post.id}/`}>
									{post.title}
								</Link>
							</li>
						))}
					</ul>
				)}
				<small className={styles.copy}>&copy;{siteName}</small>
			</Inner>
		</footer>
	);
};
