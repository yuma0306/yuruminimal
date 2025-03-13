export const siteName = '海外ゆるミニマリスト';
export const siteDescription = `${siteName}では都市伝説やスピリチュアルについての情報を発信しています`;

export const titleSuffix = ` | ${siteName}`;
export const descriptionSuffix = ` | ${siteDescription}`;

export const notFoundTitle = 'ページが見つかりません';

export const commonMetaData = {
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
				ゆるミニマリストとは、無理しないミニマリストで大切なものにフォーカスを当てた誰でも実践しやすい生き方。
				<br />
				あなたの知らない世界への扉を一緒に開いてみませんか？？
			</>
		),
	},
};
