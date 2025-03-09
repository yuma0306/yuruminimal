import { Inner } from '@/components/Inner/Inner';
import { siteData } from '@/constants/data';
import styles from '@/features/home/Intro/Intro.module.scss';
import Image from 'next/image';
import uranaishi from '../../../../public/img/ill-uranaishi.png';

export const Intro = () => {
	return (
		<section className={styles.intro}>
			<Inner>
				<h2 className={styles.heading}>{siteData.intro.heading}</h2>
				<div className={styles.block}>
					<div className={styles.imageWrapper}>
						<Image src={uranaishi} alt="" />
					</div>
					<p className={styles.text}>{siteData.intro.content}</p>
				</div>
			</Inner>
		</section>
	);
};
