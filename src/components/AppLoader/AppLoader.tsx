import styles from './AppLoader.module.scss';

export const AppLoader = () => {
	return (
		<div className={styles.wrapper}>
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			<div className={styles.loader}></div>
		</div>
	);
};
