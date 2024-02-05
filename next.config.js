/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		serverActionsBodySizeLimit: "10mb",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	reactStrictMode: true
};

module.exports = nextConfig;
