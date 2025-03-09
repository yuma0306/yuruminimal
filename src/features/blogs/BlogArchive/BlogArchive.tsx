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

interface Props {
	posts: BlogType[];
	category: string;
}

export const BlogArchive = ({ posts, category }: Props) => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<HolizonalSpacer>
					<Breadcrumb items={['トップ', category]} />
					<Block>
						{posts.length === 0 ? (
							<p>{siteData.blog.noPostText}</p>
						) : (
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
						)}
					</Block>
				</HolizonalSpacer>
			</Main>
			<Footer />
		</Wrapper>
	);
};
