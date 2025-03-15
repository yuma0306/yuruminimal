import { siteRoutes } from './siteRoutes';

const domain = 'yuruminimal.vercel.app';
const siteName = '海外ゆるミニマリスト';

export const siteMeta = {
	domain,
	baseUrl:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3000'
			: `https://${domain}`,
	siteName,
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
	metadataBase: new URL(siteMeta.baseUrl),
	icons: siteMeta.icons,
	appleWebApp: siteMeta.appleWebApp,
	manifest: siteMeta.manifest,
});

export const getNotFoundMetadata = () => {
	return {
		...getCommonMetadata(),
		title: `${siteRoutes.notFound.text}${siteMeta.titleSuffix}`,
		description: `${siteRoutes.notFound.text}${siteMeta.descriptionSuffix}`,
		openGraph: getDefaultOpenGraph(),
		alternates: {
			canonical: siteRoutes.notFound.path,
		},
	};
};

export const getDefaultOpenGraph = () => ({
	title: siteMeta.siteName,
	description: siteMeta.description,
	images: siteMeta.og.image,
	type: siteMeta.og.type,
});
