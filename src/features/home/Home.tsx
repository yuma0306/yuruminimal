import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Main } from '@/components/Main/Main';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import type { BlogType } from '@/libs/microcms.type';
import { Article } from './Article/Article';
import { Fv } from './Fv/Fv';
import { Intro } from './Intro/Intro';

type Props = {
	posts: BlogType[];
};

export const Home = ({ posts }: Props) => {
	return (
		<Wrapper>
			<Header isHome />
			<Main>
				<Fv posts={posts} />
				<Intro />
				<Article />
			</Main>
			<Footer />
		</Wrapper>
	);
};
