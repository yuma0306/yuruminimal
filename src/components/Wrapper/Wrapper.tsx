import styles from './Wrapper.module.scss';

type Props = {
	children: React.ReactNode;
};

export const Wrapper = ({ children }: Props) => {
	return <div className={styles.wrapper}>{children}</div>;
};
