import { siteRoutes } from '@/constants/siteRoutes';
import Link from 'next/link';
import styles from './AppNotFound.module.scss';

export const AppNotFound = () => {
	return (
		<div className={styles.notFound}>
			<p>{siteRoutes.notFound.text}</p>
			<Link href={siteRoutes.notFound.path} className={styles.link}>
				{siteRoutes.home.text}へ戻る
			</Link>
		</div>
	);
};
