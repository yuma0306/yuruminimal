import { categoreisData } from '@/constants/category';
import { meta } from '@/constants/meta';
import Link from 'next/link';
import type React from 'react';
import styles from './Header.module.scss';

type Props = {
	isHome?: boolean;
};

export const Header = async ({ isHome = false }: Props) => {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				{isHome ? (
					<h1 className={styles.logo}>{meta.siteName}</h1>
				) : (
					<Link href={'/'} className={styles.logo} data-is-home={!isHome}>
						{meta.siteName}
					</Link>
				)}
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{categoreisData.map((category) => (
							<li key={category.id} className={styles.item}>
								<Link href={`/${category.id}/`} className={styles.link}>
									{category.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
