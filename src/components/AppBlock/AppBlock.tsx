import styles from '@/components/AppBlock/AppBlock.module.scss';

type Props = {
	children: React.ReactNode;
};

export const AppBlock = ({ children }: Props) => {
	return <div className={styles.block}>{children}</div>;
};
