import { Experience, Maybe } from 'utils/types/graphql/graphql'
import { createPortal } from 'react-dom'
import { MdLocationOn } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import s from './ExperiencePopup.module.scss'

const ExperiencePopup = ({
	experience,
	close,
}: {
	experience: Maybe<Experience>
	close: () => void
}) => {
	return createPortal(
		<div className={s.experience_popup}>
			<div className={s.experience_popup__overlay} onClick={close} />
			<div className={s.experience_popup__content}>
				<button className={s.experience_popup__content__close} onClick={close}>
					X
				</button>
				{experience?.video?.url && (
					<video
						controls
						playsInline
						muted
						className={s.experience_popup__content__video}
					>
						<source src={experience?.video?.url} type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				)}
				<h3 className={s.experience_popup__content__title}>
					{experience?.name}
				</h3>
				<p className={s.experience_popup__content__text}>
					{experience?.description}
				</p>
				<div className={s.experience_popup__content__contact}>
					<div className={s.experience_popup__content__contact__item}>
						<div className={s.experience_popup__content__contact__item__icon}>
							<FaPhoneAlt />
						</div>
						<span className={s.experience_popup__content__contact__item__text}>
							{experience?.phone}
						</span>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById('experience-popup') as HTMLElement
	)
}

export default ExperiencePopup
