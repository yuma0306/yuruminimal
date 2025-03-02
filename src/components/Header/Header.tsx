import { meta } from '@/constants/meta';
import { endpoints, getListData } from '@/features/microcms';
import type { CategoryType } from '@/types/microcms.type';
import Link from 'next/link';
import type React from 'react';
import { Inner } from '../Inner/Inner';

type Props = {
	as?: 'p' | 'h1';
};

export const Header = async ({ as: Component = 'p' }: Props) => {
	const { contents: categories } = await getListData<CategoryType>(
		endpoints.categories,
	);
	return (
		<header>
			<Inner>
				<Component>{meta.siteName}</Component>
				<ul>
					{categories.map((category) => (
						<li key={category.id}>
							<Link href={category.id}>{category.name}</Link>
						</li>
					))}
				</ul>
			</Inner>
		</header>
	);
};
