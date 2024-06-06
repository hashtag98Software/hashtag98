'use client'
import { Experience, ExperiencesPage, Maybe } from 'utils/types/graphql/graphql'
import s from './page.module.scss'
import { useState } from 'react'
import ExperiencePopup from 'components/ExperiencePopup/ExperiencePopup'

const Component = ({ data }: { data: ExperiencesPage }) => {
	const [currentExperience, setCurrentExperience] =
		useState<Maybe<Experience>>(null)

	return (
		<main>
			<section className={s.experiences__hero}>
				<h1 className={s.experiences__hero__title}>{data.title}</h1>
				<p className={s.experiences__hero__subtitle}>{data.subTitle}</p>
				{data.video?.url && (
					<video
						autoPlay
						muted
						loop
						playsInline
						className={s.experiences__hero__video}
					>
						<source src={data.video?.url} type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				)}
			</section>
			<section className={s.experiences__content}>
				{currentExperience && (
					<ExperiencePopup
						experience={currentExperience}
						close={() => setCurrentExperience(null)}
					/>
				)}
				<ul className={s.experiences__content__list}>
					{data.experiencesCollection?.items.map(item => (
						<li key={item?.name} className={s.experiences__content__list__item}>
							<button
								onClick={() => setCurrentExperience(item)}
								className={s.experiences__content__list__item__button}
							>
								{item?.image?.url && (
									<img src={item.image.url} alt={item.name || ''} />
								)}
								<div
									className={s.experiences__content__list__item__button__text}
								>
									<h2
										className={
											s.experiences__content__list__item__button__text__title
										}
									>
										{item?.name}
									</h2>
									<p
										className={
											s.experiences__content__list__item__button__text__description
										}
									>
										{item?.description}
									</p>
								</div>
							</button>
						</li>
					))}
				</ul>
				<div className={s.experiences__content__text}>
					<h1 className={s.experiences__content__text__title}>{data.title}</h1>
					<p className={s.experiences__content__text__subtitle}>
						{data.subTitle}
					</p>
				</div>
			</section>
		</main>
	)
}

export default Component
