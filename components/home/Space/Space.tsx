import Link from 'next/link'
import s from './Space.module.scss'
import { motion } from 'framer-motion'
import {
	animationOnScreenContainer,
	fade_in,
} from 'utils/helpers/framerMotionAnimations'
import { HotelPlace } from 'utils/types/graphql/graphql'
import {
	useContentfulInspectorMode,
	useContentfulLiveUpdates,
} from '@contentful/live-preview/react'

type Props = {
	data: HotelPlace
}
const Space = ({ data }: Props) => {
	const updatedData = useContentfulLiveUpdates(data)
	const inspectorProps = useContentfulInspectorMode({ entryId: data.sys.id })

	return (
		<section className={s.space}>
			<motion.div
				key={updatedData.image?.url}
				variants={{
					offscreen: {
						scale: 1.5,
					},
					onscreen: {
						scale: 1,
						transition: {
							duration: 1,
						},
					},
				}}
				{...animationOnScreenContainer}
				className={s.space__background}
				style={{ backgroundImage: `url(${updatedData.image?.url})` }}
			></motion.div>
			<motion.div
				className={s.space__content}
				variants={fade_in}
				{...animationOnScreenContainer}
			>
				<h2 className={s.space__content__title}>
					<span
						{...inspectorProps({
							fieldId: 'titleTop',
						})}
					>
						{updatedData.titleTop}
					</span>
					<span
						className={s.space__content__title__bottom}
						{...inspectorProps({
							fieldId: 'titleBottom',
						})}
					>
						{updatedData.titleBottom}
					</span>
				</h2>
				<p
					className={s.space__content__description}
					{...inspectorProps({
						fieldId: 'description',
					})}
				>
					{updatedData.description}
				</p>
				{updatedData.link && (
					<Link
						{...inspectorProps({
							fieldId: 'link',
						})}
						href={updatedData.link}
						className={s.space__content__button}
					>
						VER MÁS
					</Link>
				)}
			</motion.div>
		</section>
	)
}

export default Space
