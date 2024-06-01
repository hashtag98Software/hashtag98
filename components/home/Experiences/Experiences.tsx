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
			video: '/delete/video.mp4',
			title: 'COMUNA 13',
			description:
				'La Comuna 13 de Medellín, una vez marcada por la violencia y el conflicto, ha florecido en un símbolo de resiliencia y transformación.',
			link: '/',
		},
		{
			id: '2',
			video: '/delete/video.mp4',
			title: 'Test',
			description:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			link: '/',
		},
	]
	const experiences2 = [
		{
			id: '3',
			video: '/delete/video.mp4',
			title: 'TOUR DEL CAFÉ',
			description:
				'Sumérgete en el mundo del café en Medellín con un tour que despierta todos tus sentidos.',
			link: '/',
		},
		{
			id: '4',
			video: '/delete/video.mp4',
			title: 'Test',
			description:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			link: '/',
		},
	]
	const experiences3 = [
		{
			id: '5',
			video: '/delete/video.mp4',
			title: 'PUEBLITO PAISA',
			description:
				'El Pueblito Paisa en Medellín es un tesoro encaramado en lo alto de la ciudad, donde el encanto de un pueblo tradicional se fusiona con la vibrante vida urbana.',
			link: '/',
		},
		{
			id: '6',
			video: '/delete/video.mp4',
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
							playsInline
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
