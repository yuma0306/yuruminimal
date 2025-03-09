import styles from './Main.module.scss';

type Props = {
	children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
	return <main className={styles.main}>{children}</main>;
};
