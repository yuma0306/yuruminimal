const domain = 'yuruminimal.vercel.app';
export const siteName = '海外ゆるミニマリスト';
export const gtmId = '5MBX2WQF';
export const baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: `https://${domain}`;
