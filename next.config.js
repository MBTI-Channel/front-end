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
		KAKAO_KEY: process.env.KAKAO_KEY,
		KAKAO_REDIRECT: process.env.KAKAO_REDIRECT,
		API_DEV: process.env.API_DEV,
		API_PRODUCT: process.env.API_PRODUCT,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

module.exports = nextConfig;
