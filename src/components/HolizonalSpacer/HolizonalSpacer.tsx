import styles from '@/components/HolizonalSpacer/HolizonalSpacer.module.scss';

type Props = {
	as?: 'div' | 'section';
	children: React.ReactNode;
};

export const HolizonalSpacer = ({ as = 'div', children }: Props) => {
	const Component = as;
	return <Component className={styles.holizonalSpacer}>{children}</Component>;
};
