import { siteName } from '@/constants/data';
import { categoreisData } from '@/libs/microcms';
import Link from 'next/link';
import type React from 'react';
import { Inner } from '../Inner/Inner';
import styles from './Header.module.scss';

type Props = {
	isHome?: boolean;
};

export const Header = async ({ isHome = false }: Props) => {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				{isHome ? (
					<h1 className={styles.logo}>{siteName}</h1>
				) : (
					<Link href={'/'} className={styles.logo} data-is-home={isHome}>
						{siteName}
					</Link>
				)}
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{categoreisData.map((category) => (
							<li key={category.id} className={styles.item}>
								<Link href={`/blog/${category.id}/`} className={styles.link}>
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
