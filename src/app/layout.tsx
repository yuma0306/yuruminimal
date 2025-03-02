import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import '../styles/global.scss';

const notoSansJp = Noto_Sans_JP({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'スピスピ',
	description:
		'スピスピは都市伝説やスピリチュアルについての情報を発信しています',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${notoSansJp.className}`}>{children}</body>
		</html>
	);
}
