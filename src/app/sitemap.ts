import { endpoints, getListData } from '@/libs/microcms';
import type { BlogType, InfoType } from '@/libs/microcms.type';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://supisupi.vercel.app';

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
			url: `${baseUrl}/blog/${blog.tag.id}/${blog.id}/`,
			lastModified: new Date(blog.updatedAt),
			changeFrequency: 'weekly' as const,
			priority: 0.8,
		};
	});

	const tagSet = new Set<string>();
	for (const blog of blogs) {
		tagSet.add(String(blog.tag.id));
	}
	const tagUrls = Array.from(tagSet).map((tagId) => {
		return {
			url: `${baseUrl}/blog/${tagId}/`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.7,
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
