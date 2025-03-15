import { baseUrl } from '@/constants/config';
import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType, InfoType, TagType } from '@/libs/microcms.type';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const routes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 1.0,
		},
	];

	const { contents: blogs } = await getListData<BlogType>(endpoints.blogs);
	const blogUrls = blogs.map((blog) => {
		return {
			url: `${baseUrl}/blog/${blog.id}/`,
			lastModified: new Date(blog.updatedAt),
			changeFrequency: 'weekly' as const,
			priority: 0.8,
		};
	});

	const { contents: tags } = await getListData<TagType>(endpoints.tags);
	const tagUrls = tags.map((tag) => {
		return {
			url: `${baseUrl}/${tag.id}/`,
			lastModified: new Date(tag.updatedAt),
			changeFrequency: 'weekly' as const,
			priority: 0.8,
		};
	});

	const { contents: infos } = await getListData<InfoType>(endpoints.info);
	const infoUrls = infos.map((info) => {
		return {
			url: `${baseUrl}/info/${info.id}/`,
			lastModified: new Date(info.updatedAt),
			changeFrequency: 'monthly' as const,
			priority: 0.6,
		};
	});

	return [...routes, ...blogUrls, ...tagUrls, ...infoUrls];
}
