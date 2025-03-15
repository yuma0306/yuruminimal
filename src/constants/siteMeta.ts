import { baseUrl, siteName } from './siteConfig';

export const siteMeta = {
	description: `${siteName}では無理しないミニマルな生活について発信しています。`,
	titleSuffix: ` | ${siteName}`,
	descriptionSuffix: ` | ${siteName}では無理しないミニマルな生活について発信しています。`,
	og: {
		image: {
			url: '/img/og-image.png',
			width: 1200,
			height: 630,
			alt: siteName,
		},
		type: 'website' as const,
	},
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

export const getCommonMetadata = () => ({
	metadataBase: new URL(baseUrl),
	icons: siteMeta.icons,
	appleWebApp: siteMeta.appleWebApp,
	manifest: siteMeta.manifest,
});

export const getDefaultOpenGraph = () => ({
	title: siteName,
	description: siteMeta.description,
	images: siteMeta.og.image,
	type: siteMeta.og.type,
});
