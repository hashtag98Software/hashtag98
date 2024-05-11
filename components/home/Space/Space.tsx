import Link from 'next/link'
import s from './Space.module.scss'
import { motion } from 'framer-motion'
import {
	animationOnScreenContainer,
	fade_in,
} from 'utils/helpers/framerMotionAnimations'

type Props = {
	titleTop: string
	titleBottom: string
	description: string
	link: string
	img: string
}
const Space = ({ titleTop, titleBottom, description, link, img }: Props) => {
	return (
		<section className={s.space}>
			<motion.div
				key={img}
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
				style={{ backgroundImage: `url(${img})` }}
			></motion.div>
			<motion.div
				className={s.space__content}
				variants={fade_in}
				{...animationOnScreenContainer}
			>
				<h2 className={s.space__content__title}>
					<span>{titleTop}</span>
					<span className={s.space__content__title__bottom}>{titleBottom}</span>
				</h2>
				<p className={s.space__content__description}>{description}</p>
				<Link href={link} className={s.space__content__button}>
					VER MÁS
				</Link>
			</motion.div>
		</section>
	)
}

export default Space
