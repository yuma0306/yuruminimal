import styles from '@/components/Intro/Intro.module.scss';
import Image from 'next/image';
import uranaishi from '../../../public/img/ill-uranaishi.png';
import { Inner } from '../Inner/Inner';

export const Intro = () => {
	return (
		<section className={styles.intro}>
			<Inner>
				<h2 className={styles.heading}>スピスピの世界へようこそ</h2>
				<div className={styles.block}>
					<div className={styles.imageWrapper}>
						<Image src={uranaishi} alt="" />
					</div>
					<p className={styles.text}>
						スピスピでは、普段は人に言えない世界中の都市伝説、目に見えないスピリチュアルなエネルギーについて発信しています。
						<br />
						現実との狭間に隠された真実とは？信じるかどうかはあなた次第。
						<br />
						あなたの知らない世界への扉を一緒に開いてみませんか？？
					</p>
				</div>
			</Inner>
		</section>
	);
};
