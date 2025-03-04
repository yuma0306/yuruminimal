'use client';
import styles from '@/components/Fv/Fv.module.scss';
import type { BlogType } from '@/libs/microcms.type';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { media } from '@/constants/media';
import { CardLink } from '../CardLink/CardLink';

type Props = {
	posts: BlogType[];
};

export const Fv = ({ posts }: Props) => {
	return (
		<div className={styles.fv}>
			<Swiper
				className={styles.slider}
				slidesPerView={1.5}
				spaceBetween={20}
				loop
				centeredSlides
				modules={[Navigation, Pagination]}
				navigation
				pagination={{ clickable: true }}
				breakpoints={{
					[media.tab]: {
						slidesPerView: 3.5,
						spaceBetween: 20,
					},
					[media.pc]: {
						slidesPerView: 3.5,
						spaceBetween: 30,
					},
				}}
			>
				{posts.map((post, index) =>
					post.eyecatch?.width && post.eyecatch?.height && post.publishedAt ? (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<SwiperSlide className={styles.sliderItem} key={index}>
							<CardLink
								link={`/blog/${post.category.id}/${post.id}`}
								image={post.eyecatch.url}
								width={post.eyecatch.width}
								height={post.eyecatch.height}
								time={post.publishedAt.slice(0, 10)}
								title={post.title}
								loading="eager"
								decoding="auto"
								priority
							/>
						</SwiperSlide>
					) : undefined,
				)}
			</Swiper>
		</div>
	);
};
