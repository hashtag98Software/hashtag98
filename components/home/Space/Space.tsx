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
import { useMediaQuery } from 'usehooks-ts'
import { mobile } from 'utils/helpers/mediaQueries'

type Props = {
	data: HotelPlace
}
const Space = ({ data }: Props) => {
	const updatedData = useContentfulLiveUpdates(data)
	const inspectorProps = useContentfulInspectorMode({ entryId: data.sys.id })
	const isMobile = useMediaQuery(mobile)
	const bg =
		isMobile && updatedData.mobileImage?.url
			? updatedData.mobileImage?.url
			: updatedData.image?.url

	console.log({ isMobile })
	console.log(updatedData.mobileImage?.url)

	return (
		<section className={s.space}>
			<motion.div
				key={bg}
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
				style={{ backgroundImage: `url(${bg})` }}
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
						className={s.space__content__title__top}
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
				<p
					className={s.space__content__description_mobile}
					{...inspectorProps({
						fieldId: 'mobileDescription',
					})}
				>
					{updatedData.mobileDescription}
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
