import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
