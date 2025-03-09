import type { CategoryType } from '@/libs/microcms.type';
import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';

export const endpoints = {
	blogs: 'blogs',
	categories: 'categories',
} as const;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error('MICROCMS_SERVICE_DOMAINがありません。');
}
if (!process.env.MICROCMS_API_KEY) {
	throw new Error('MICROCMS_API_KEYがありません。');
}

const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_API_KEY,
});

export const getListData = async <T>(
	endpoint: keyof typeof endpoints,
	queries?: MicroCMSQueries,
) => {
	const data = await client.getList<T>({
		endpoint: endpoint,
		queries,
	});
	return data;
};

export const getDetailData = async <T>(
	endpoint: keyof typeof endpoints,
	contentId: string,
	queries?: MicroCMSQueries,
) => {
	const detailData = await client.getListDetail<T>({
		endpoint: endpoint,
		contentId,
		queries,
	});
	return detailData;
};

const getCategories = async () => {
	const { contents: categoreisData } = await getListData<CategoryType>(
		endpoints.categories,
	);
	const categoriesMap = categoreisData.reduce<Record<string, string>>(
		(acc, category) => {
			acc[category.id] = category.name;
			return acc;
		},
		{},
	);
	return {
		categoreisData,
		categoriesMap,
	};
};

export const { categoreisData, categoriesMap } = await getCategories();
