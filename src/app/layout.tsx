import { GoogleTagManager } from '@next/third-parties/google';
import { Noto_Serif_JP } from 'next/font/google';
import '../styles/global.scss';
import { gtmId } from '@/constants/siteConfig';

const font = Noto_Serif_JP({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<GoogleTagManager gtmId={`GTM-${gtmId}`} />
			<body className={`${font.className}`}>{children}</body>
		</html>
	);
}
