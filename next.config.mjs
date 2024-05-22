/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: '/es/:path*',
			},
			{
				source: '/es/en/:path*',
				destination: '/en/:path*',
			},
		]
	},
}

export default nextConfig
