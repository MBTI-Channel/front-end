/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
	images: {
		loader: 'akamai',
		path: '/',
	},
	env: {
		CLIENT_ID: process.env.NEXT_PUBLIC_KAKAO_KEY,
		REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
		API_DEV: process.env.NEXT_PUBLIC_API_DEV,
		API_PRODUCT: process.env.NEXT_PUBLIC_API_PRODUCT,
	},
};

module.exports = nextConfig;
