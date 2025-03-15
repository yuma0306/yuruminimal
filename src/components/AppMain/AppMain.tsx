import styles from './AppMain.module.scss';

type Props = {
	children: React.ReactNode;
};

export const AppMain = ({ children }: Props) => {
	return <main className={styles.main}>{children}</main>;
};
