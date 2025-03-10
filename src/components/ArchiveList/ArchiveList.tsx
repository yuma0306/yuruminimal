import styles from './ArchiveList.module.scss';

type Props = {
	children: React.ReactNode;
};

export const ArchiveList = ({ children }: Props) => {
	return <ul className={styles.list}>{children}</ul>;
};
