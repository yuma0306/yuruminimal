const domain = 'yuruminimal.vercel.app';
export const baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: `https://${domain}`;

export const siteName = '海外ゆるミニマリスト';
export const siteDescription = `${siteName}では無理しないミニマルな生活について発信しています。`;
export const titleSuffix = ` | ${siteName}`;
export const descriptionSuffix = ` | ${siteDescription}`;
export const notFoundTitle = 'ページが見つかりません';

export const commonOgImages = [
	{
		url: '/img/og-image.png',
		width: 1200,
		height: 630,
		alt: siteName,
	},
];

export const commonMetaData = {
	metadataBase: new URL(baseUrl),
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
		title: siteName,
	},
	manifest: '/img/favicon/site.webmanifest',
};

export const siteData = {
	intro: {
		heading: 'ゆるミニマリストとは',
		content: (
			<>
				自分が心地よく感じる範囲でミニマルな暮らしをする（大切なものにフォーカスする）人のこと。
				<br />
				「無理しないミニマリスト」なので誰でも実践しやすい生き方です。
				<br />
				管理人はタイで働きながら、無理しないミニマルな生活について発信しています。
			</>
		),
	},
};
