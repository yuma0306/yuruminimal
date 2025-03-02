import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		domains: ['images.microcms-assets.io'],
	},
};

export default nextConfig;
