import { siteData } from '@/constants/data';
import type React from 'react';
import { Inner } from '../Inner/Inner';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Inner>
				<small className={styles.copy}>&copy;{siteData.meta.title}</small>
			</Inner>
		</footer>
	);
};
