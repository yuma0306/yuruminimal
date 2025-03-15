export const siteRoutes = {
	home: {
		text: 'ホーム',
		path: '/',
	},
	notFound: {
		text: 'ページが見つかりません',
		path: '/404/',
	},
	blog: {
		index: {
			text: 'ブログ記事一覧',
			path: '/blog/',
		},
	},
	tag: {
		index: {
			path: 'tag/',
		},
	},
	info: {
		index: {
			path: '/info/',
		},
	},
} as const;
