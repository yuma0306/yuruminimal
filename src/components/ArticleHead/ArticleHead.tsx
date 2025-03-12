import styles from '@/components/ArticleHead/ArticleHead.module.scss';
import { trimTimefromDate } from '@/functions/date';
import type { MicroCMSImage } from 'microcms-js-sdk';
import Image from 'next/image';

type Props = {
	createdAt: string;
	updatedAt: string;
	title: string;
	eyecatch?: MicroCMSImage;
};

export const ArticleHead = ({
	createdAt,
	updatedAt,
	title,
	eyecatch,
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
