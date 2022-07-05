/** @type {import('next').NextConfig} */
const nextConfig = {
	// BUG: 해당 디렉토리에서 발생하는 eslint 버그성 오류들 무시
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
		KAKAO_KEY: process.env.KAKAO_KEY,
		KAKAO_REDIRECT: process.env.KAKAO_REDIRECT,
		API_DEV: process.env.API_DEV,
		API_PRODUCT: process.env.API_PRODUCT,
	},
};

module.exports = nextConfig;
