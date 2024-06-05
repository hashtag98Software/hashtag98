import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import s from './Experiences.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { animationOnScreenContainer } from 'utils/helpers/framerMotionAnimations'
import { Experience, Maybe } from 'utils/types/graphql/graphql'
import { useState } from 'react'
import ExperiencePopup from 'components/ExperiencePopup/ExperiencePopup'

const Experiences = ({
	experiences1,
	experiences2,
	experiences3,
}: {
	experiences1: Maybe<Experience>[]
	experiences2: Maybe<Experience>[]
	experiences3: Maybe<Experience>[]
}) => {
	return (
		<section className={`${s.experiences} experiences`}>
			<ExperienceSection experiences={experiences1} />
			<ExperienceSection experiences={experiences2} />
			<ExperienceSection experiences={experiences3} />
		</section>
	)
}

export const ExperienceSection = ({
	experiences,
}: {
	experiences: Maybe<Experience>[]
}) => {
	const [currentExperience, setCurrentExperience] =
		useState<Maybe<Experience>>(null)
	return (
		<>
			{currentExperience && (
				<ExperiencePopup
					experience={currentExperience}
					close={() => setCurrentExperience(null)}
				/>
			)}
			<Swiper
				slidesPerView={1}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				loop
				modules={[Autoplay, Pagination]}
				className={s.experiences__swiper}
			>
				{experiences?.map(experience => (
					<SwiperSlide key={experience?.name}>
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
								<div
									className={s.experiences__swiper__container__content__info}
								>
									<h2
										className={
											s.experiences__swiper__container__content__info__title
										}
									>
										{experience?.name}
									</h2>
									<p
										className={
											s.experiences__swiper__container__content__info__description
										}
									>
										{experience?.description}
									</p>
								</div>
								<button
									onClick={() => setCurrentExperience(experience)}
									className={s.experiences__swiper__container__content__button}
								>
									VER MÁS
								</button>
							</motion.div>
							{experience?.imagePreview?.url && (
								<img
									src={experience.imagePreview.url}
									alt={experience.name || ''}
									className={s.experiences__swiper__container__img}
								/>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default Experiences
