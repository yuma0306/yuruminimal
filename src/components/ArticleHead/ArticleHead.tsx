import styles from '@/components/ArticleHead/ArticleHead.module.scss';
import { trimTimefromDate } from '@/functions/date';
import type { BlogType } from '@/libs/microcms.type';
import type { MicroCMSImage } from 'microcms-js-sdk';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	createdAt: string;
	updatedAt: string;
	title: string;
	eyecatch?: MicroCMSImage;
	tags?: BlogType['tags'];
};

export const ArticleHead = ({
	createdAt,
	updatedAt,
	title,
	eyecatch,
	tags,
}: Props) => {
	return (
		<div className={styles.articleHead}>
			<div className={styles.dateWrapper}>
				<time className={styles.date}>
					公開日：{trimTimefromDate(createdAt)}
				</time>
				<time className={styles.date}>
					更新日：{trimTimefromDate(updatedAt)}
				</time>
			</div>
			<h1 className={styles.heading}>{title}</h1>
			{tags && (
				<ul className={styles.tags}>
					{tags.map((tag, index) => {
						return (
							<li className={styles.tag} key={index}>
								<Link href={''} className={styles.link}>
									#{tag.name}
								</Link>
							</li>
						);
					})}
				</ul>
			)}
			{eyecatch?.width && eyecatch?.height && (
				<Image
					className={styles.thumbnail}
					alt={title}
					src={eyecatch.url}
					height={eyecatch.height}
					width={eyecatch.width}
					priority
				/>
			)}
		</div>
	);
};
