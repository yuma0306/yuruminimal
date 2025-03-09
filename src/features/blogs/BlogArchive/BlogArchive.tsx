import { Block } from '@/components/Block/Block';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { CardLink } from '@/components/CardLink/CardLink';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HolizonalSpacer } from '@/components/HolizonalSpacer/HolizonalSpacer';
import { Main } from '@/components/Main/Main';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { siteData } from '@/constants/data';
import styles from '@/features/blogs/BlogArchive/BlogArchive.module.scss';
import type { BlogType, CategoryType } from '@/libs/microcms.type';

type Props = {
	posts: BlogType[];
};

export const BlogArchive = ({ posts }: Props) => {
	if (posts.length === 0) {
		return undefined;
	}
	const breadcrumbItems = [
		{
			text: 'トップ',
			link: '/',
		},
		{
			text: posts[0].category.name,
			link: `/blog/${posts[0].category.id}/`,
		},
	];

	return (
		<Wrapper>
			<Header />
			<Main>
				<HolizonalSpacer>
					<Breadcrumb items={breadcrumbItems} />
					<Block>
						<ul className={styles.list}>
							{posts.map(
								(post) =>
									post.eyecatch?.width &&
									post.eyecatch?.height &&
									post.publishedAt && (
										<li key={post.id.toString()} className={styles.item}>
											<CardLink
												link={`/blog/${post.category.id}/${post.id}/`}
												image={post.eyecatch.url}
												width={post.eyecatch.width}
												height={post.eyecatch.height}
												time={post.updatedAt.split('T')[0]}
												title={post.title}
											/>
										</li>
									),
							)}
						</ul>
					</Block>
				</HolizonalSpacer>
			</Main>
			<Footer />
		</Wrapper>
	);
};
