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
	async redirects() {
		return [
			{
				source: '/politicas-de-privacidad-y-tratamiento-de-datos',
				destination: '/privacy',
				permanent: true,
			},
			{
				source: '/politicas-de-privacidad-y-tratamiento-de-datos-2',
				destination: '/code-of-conduct',
				permanent: true,
			},
			{
				source: '/home-2',
				destination: '/',
				permanent: true,
			},
			{
				source: '/conoce-nuestras-habitaciones',
				destination: '/rooms',
				permanent: true,
			},
			{
				source: '/habitacion-xl',
				destination: '/rooms/xl-superior-with-balcony',
				permanent: true,
			},
			{
				source: '/habitacion-l',
				destination: '/rooms/l-superior-with-sofa-bed-and-balcony',
				permanent: true,
			},
			{
				source: '/habitacion-m-estandar-con-balcon',
				destination: '/rooms/m-standard-with-balcony',
				permanent: true,
			},
			{
				source: '/habitacion-m-superior',
				destination: '/rooms/m-superior',
				permanent: true,
			},
			{
				source: '/habitacion-s-estandar',
				destination: '/rooms/s-standard',
				permanent: true,
			},
			{
				source: '/habitacion-s-superior',
				destination: '/rooms/s-superior',
				permanent: true,
			},
			{
				source: '/espacios',
				destination: '/',
				permanent: true,
			},
			{
				source: '/restaurante',
				destination: '/restaurant',
				permanent: true,
			},
			{
				source: '/restaurante-2',
				destination: '/rooftop',
				permanent: true,
			},
			{
				source: '/contacto',
				destination: '/contact',
				permanent: true,
			},
			{
				source: '/en/home',
				destination: '/en',
				permanent: true,
			},
			{
				source: '/en/our-rooms',
				destination: '/en/rooms',
				permanent: true,
			},
			{
				source: '/en/spaces',
				destination: '/en',
				permanent: true,
			},
			{
				source: '/en/room-s-superior',
				destination: '/en/rooms/s-superior',
				permanent: true,
			},
			{
				source: '/en/room-s-standard',
				destination: '/en/rooms/s-standard',
				permanent: true,
			},
			{
				source: '/en/room-m-superior',
				destination: '/en/rooms/m-superior',
				permanent: true,
			},
			{
				source: '/en/room-m-standard-with-balcony',
				destination: '/en/rooms/m-standard-with-balcony',
				permanent: true,
			},
			{
				source: '/en/room-l-superior-with-bathtub',
				destination: '/en/rooms/l-superior-with-bathtub',
				permanent: true,
			},
			{
				source: '/en/room-l-superior-with-sofa-bed-and-balcony',
				destination: '/en/rooms/l-superior-with-sofa-bed-and-balcony',
				permanent: true,
			},
			{
				source: '/en/room-xl',
				destination: '/en/rooms/xl-superior-with-balcony',
				permanent: true,
			},
			{
				source: '/habitacion-l-superior-con-banera',
				destination: '/rooms/l-superior-with-bathtub',
				permanent: true,
			},
		]
	},
}

export default nextConfig
