import { Block } from '@/components/Block/Block';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HolizonalSpacer } from '@/components/HolizonalSpacer/HolizonalSpacer';
import { Main } from '@/components/Main/Main';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import styles from '@/features/blogs/BlogDetail/BlogDetail.module.scss';
import type { BlogType } from '@/libs/microcms.type';
import Image from 'next/image';

interface Props {
	post: BlogType;
}

export const BlogDetail = ({ post }: Props) => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<HolizonalSpacer>
					<Breadcrumb items={['トップ', post.category.name, post.title]} />
					<Block>
						<div>
							<time>更新日：{post.updatedAt.split('T')[0]}</time>
						</div>
						<h1>{post.title}</h1>
						{post.eyecatch?.width &&
							post.eyecatch?.height &&
							post.publishedAt && (
								<Image
									className={styles.thumbnail}
									alt={post.title}
									src={post.eyecatch.url}
									height={post.eyecatch.height}
									width={post.eyecatch.width}
									priority
								/>
							)}
						<div
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>
					</Block>
				</HolizonalSpacer>
			</Main>
			<Footer />
		</Wrapper>
	);
};
