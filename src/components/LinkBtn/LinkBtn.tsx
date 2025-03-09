import styles from '@/components/LinkBtn/LinkBtn.module.scss';
import Link from 'next/link';

type Props = {
	children: React.ReactNode;
	href: string;
};

export const LinkBtn = ({ href, children }: Props) => {
	return (
		<Link className={styles.btn} href={href}>
			<span>{children}</span>
		</Link>
	);
};
