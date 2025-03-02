import styles from '@/components/Inner/Inner.module.scss';

type Props = {
	children: React.ReactNode;
};

export const Inner = ({ children }: Props) => {
	return (
		<>
			<div className={styles.inner}>{children}</div>
		</>
	);
};
