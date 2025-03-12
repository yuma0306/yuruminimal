import { Inner } from '@/components/Inner/Inner';
import { siteData } from '@/constants/data';
import Image from 'next/image';
import styles from './HomeIntro.module.scss';

export const HomeIntro = () => {
	return (
		<section className={styles.intro}>
			<Inner>
				<h2 className={styles.heading}>{siteData.intro.heading}</h2>
				<div className={styles.block}>
					<div className={styles.imageWrapper}>
						<Image
							src={'/img/ill-uranaishi.png'}
							width={371}
							height={400}
							alt=""
						/>
					</div>
					<p className={styles.text}>{siteData.intro.content}</p>
				</div>
			</Inner>
		</section>
	);
};
