'use client';
import styles from '@/components/Fv/Fv.module.scss';
import type { BlogType } from '@/types/microcms.type';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import { media } from '@/constants/media';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	posts: BlogType[];
};

export const Fv = ({ posts }: Props) => {
	return (
		<Swiper
			className={styles.slider}
			tag="ul"
			slidesPerView={1}
			spaceBetween={20}
			loop
			modules={[Navigation, Pagination]}
			navigation
			pagination={{ clickable: true }}
			breakpoints={{
				[media.tab]: {
					slidesPerView: 2,
				},
				[media.pc]: {
					slidesPerView: 3,
				},
			}}
		>
			{Array.from({ length: 5 })
				.flatMap(() => posts)
				.map(
					(post) =>
						post.eyecatch && (
							<SwiperSlide
								className={styles.sliderItem}
								key={String(post.id) + Math.random()}
								tag={'li'}
							>
								<Link
									className={styles.link}
									href={`/blog/${post.category.id}/${post.id}`}
								>
									<Image
										className={styles.image}
										alt={''}
										src={post.eyecatch.url}
										height={post.eyecatch.height}
										width={post.eyecatch.width}
										priority
									/>
									<p className={styles.title}>{post.title}</p>
								</Link>
							</SwiperSlide>
						),
				)}
		</Swiper>
	);
};
