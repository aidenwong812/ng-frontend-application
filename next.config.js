/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		// 1 week
		minimumCacheTTL: 1000 * 60 * 60 * 24 * 7,
		domains: ['cdn-staging.nodeguardians.com'],
		deviceSizes: [660, 900, 1200, 1600, 1800]
	}
};

module.exports = nextConfig;
