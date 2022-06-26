/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ['pages', 'utils'],
	},
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
	images: {
		loader: 'akamai',
		path: '/',
	},
	env: {
		CLIENT_ID: process.env.KAKAO_KEY,
		REDIRECT_URI: process.env.REDIRECT_URI,
		API_DEV: process.env.API_DEV,
		API_PRODUCT: process.env.API_PRODUCT,
	},
};

module.exports = nextConfig;
