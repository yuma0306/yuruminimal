import styles from '@/components/Block/Block.module.scss';

type Props = {
	children: React.ReactNode;
};

export const Block = ({ children }: Props) => {
	return <div className={styles.block}>{children}</div>;
};
