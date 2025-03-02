import { meta } from '@/constants/meta';
import type React from 'react';
import { Inner } from '../Inner/Inner';

export const Footer = () => {
	return (
		<footer>
			<Inner>&copy;{meta.siteName}</Inner>
		</footer>
	);
};
