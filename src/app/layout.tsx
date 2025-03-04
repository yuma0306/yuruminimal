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
	icons: {
		icon: [
			{
				url: '/img/favicon/favicon-96x96.png',
				sizes: '96x96',
				type: 'image/png',
			},
			{ url: '/img/favicon/favicon.svg', type: 'image/svg+xml' },
		],
		shortcut: '/img/favicon/favicon.ico',
		apple: { url: '/img/favicon/apple-touch-icon.png', sizes: '180x180' },
	},
	appleWebApp: {
		title: 'MyWebSite',
	},
	manifest: '/img/favicon/site.webmanifest',
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
