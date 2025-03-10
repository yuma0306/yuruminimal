import styles from './AppGrid.module.scss';

type Props = {
	children: React.ReactNode;
	as?: 'div' | 'ul';
	isCol?: boolean;
};

export const AppGrid = ({ children, as = 'div', isCol = false }: Props) => {
	const Component = as;
	return (
		<Component className={styles.grid} data-col={isCol}>
			{children}
		</Component>
	);
};
