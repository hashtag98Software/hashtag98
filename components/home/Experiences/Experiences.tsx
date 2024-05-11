import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import s from './Experiences.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { animationOnScreenContainer } from 'utils/helpers/framerMotionAnimations'

const Experiences = () => {
	const experiences1 = [
		{
			id: '1',
			video:
				'https://s3-figma-videos-production-sig.figma.com/video/1367241879391302405/TEAM/bd45/ebb5/-efc7-4ea2-8b9f-cb3f51d04bd3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8IS8wFzk8zW0cpT7HaPCtHQB4YJyxN7MGm3MmU3vRVxJh4fZ3H3ytVHQeMyPEJGCgDx8S4N0C3Bqbhv7077mU3sikWv7AM8XRVK0nKtjtMjFaguwf7rbQ0-t8lVCO~HbbNeMyfo-s4oQ0zD0kB1FetObgm6zjOYlxtXBBA74aWludWhxaj0L7qZurF~zTkLm4C612xJKetGaPNXDySyGgX5pazDIvq8u7a854TWvEjaUWbVaCah31HtSvbziLzoybSNzfzA~5G6fxZU6e6wsp56ykNdYuICPiL5PWmB4-GmtjwXE~E1c0z0tXfu7PSgUW5RQRRRQGHCrFNsmwBH6g__',
			title: 'COMUNA 13',
			description:
				'La Comuna 13 de Medellín, una vez marcada por la violencia y el conflicto, ha florecido en un símbolo de resiliencia y transformación.',
			link: '/',
		},
		{
			id: '2',
			video:
				'https://cdn.pixabay.com/video/2020/01/25/31569-387675206_medium.mp4',
			title: 'Test',
			description:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			link: '/',
		},
	]
	const experiences2 = [
		{
			id: '3',
			video:
				'https://cdn.pixabay.com/video/2019/11/27/29529-376565555_small.mp4',
			title: 'TOUR DEL CAFÉ',
			description:
				'Sumérgete en el mundo del café en Medellín con un tour que despierta todos tus sentidos.',
			link: '/',
		},
		{
			id: '4',
			video:
				'https://s3-figma-videos-production-sig.figma.com/video/1367241879391302405/TEAM/bd45/ebb5/-efc7-4ea2-8b9f-cb3f51d04bd3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8IS8wFzk8zW0cpT7HaPCtHQB4YJyxN7MGm3MmU3vRVxJh4fZ3H3ytVHQeMyPEJGCgDx8S4N0C3Bqbhv7077mU3sikWv7AM8XRVK0nKtjtMjFaguwf7rbQ0-t8lVCO~HbbNeMyfo-s4oQ0zD0kB1FetObgm6zjOYlxtXBBA74aWludWhxaj0L7qZurF~zTkLm4C612xJKetGaPNXDySyGgX5pazDIvq8u7a854TWvEjaUWbVaCah31HtSvbziLzoybSNzfzA~5G6fxZU6e6wsp56ykNdYuICPiL5PWmB4-GmtjwXE~E1c0z0tXfu7PSgUW5RQRRRQGHCrFNsmwBH6g__',
			title: 'Test',
			description:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			link: '/',
		},
	]
	const experiences3 = [
		{
			id: '5',
			video:
				'https://s3-figma-videos-production-sig.figma.com/video/1367241879391302405/TEAM/bd45/ebb5/-efc7-4ea2-8b9f-cb3f51d04bd3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8IS8wFzk8zW0cpT7HaPCtHQB4YJyxN7MGm3MmU3vRVxJh4fZ3H3ytVHQeMyPEJGCgDx8S4N0C3Bqbhv7077mU3sikWv7AM8XRVK0nKtjtMjFaguwf7rbQ0-t8lVCO~HbbNeMyfo-s4oQ0zD0kB1FetObgm6zjOYlxtXBBA74aWludWhxaj0L7qZurF~zTkLm4C612xJKetGaPNXDySyGgX5pazDIvq8u7a854TWvEjaUWbVaCah31HtSvbziLzoybSNzfzA~5G6fxZU6e6wsp56ykNdYuICPiL5PWmB4-GmtjwXE~E1c0z0tXfu7PSgUW5RQRRRQGHCrFNsmwBH6g__',
			title: 'PUEBLITO PAISA',
			description:
				'El Pueblito Paisa en Medellín es un tesoro encaramado en lo alto de la ciudad, donde el encanto de un pueblo tradicional se fusiona con la vibrante vida urbana.',
			link: '/',
		},
		{
			id: '6',
			video:
				'https://cdn.pixabay.com/video/2018/02/24/14476-257440741_small.mp4',
			title: 'Test',
			description:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			link: '/',
		},
	]

	return (
		<section className={`${s.experiences} experiences`}>
			<ExperienceSection experiences={experiences1} />
			<ExperienceSection experiences={experiences2} />
			<ExperienceSection experiences={experiences3} />
		</section>
	)
}

const ExperienceSection = ({
	experiences,
}: {
	experiences: {
		id: string
		video: string
		title: string
		description: string
		link: string
	}[]
}) => {
	return (
		<Swiper
			slidesPerView={1}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			pagination={{ clickable: true }}
			loop
			modules={[Autoplay, Pagination]}
			className={s.experiences__swiper}
		>
			{experiences.map(experience => (
				<SwiperSlide key={experience.id}>
					<div className={s.experiences__swiper__container}>
						<motion.div
							className={s.experiences__swiper__container__content}
							variants={{
								offscreen: {
									opacity: 0,
									translateY: 100,
								},
								onscreen: {
									opacity: 1,
									translateY: 0,
									transition: {
										type: 'spring',
										duration: 1,
									},
								},
							}}
							{...animationOnScreenContainer}
						>
							<div className={s.experiences__swiper__container__content__info}>
								<h2
									className={
										s.experiences__swiper__container__content__info__title
									}
								>
									{experience.title}
								</h2>
								<p
									className={
										s.experiences__swiper__container__content__info__description
									}
								>
									{experience.description}
								</p>
							</div>
							<Link
								href={experience.link}
								className={s.experiences__swiper__container__content__button}
							>
								VER MÁS
							</Link>
						</motion.div>
						<video
							autoPlay
							muted
							loop
							id="myVideo"
							className={s.experiences__swiper__container__video}
						>
							<source src={experience.video} type="video/mp4" />
							Your browser does not support HTML5 video.
						</video>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Experiences
