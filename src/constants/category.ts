import { endpoints, getListData } from '@/features/microcms';
import type { CategoryType } from '@/types/microcms.type';

const getCategoriesConst = async () => {
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

export const { categoreisData, categoriesMap } = await getCategoriesConst();
