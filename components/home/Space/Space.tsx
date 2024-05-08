import Link from 'next/link'
import s from './Space.module.scss'

type Props = {
	titleTop: string
	titleBottom: string
	description: string
	link: string
	img: string
}
const Space = ({ titleTop, titleBottom, description, link, img }: Props) => {
	return (
		<section
			className={s.space}
			style={{
				backgroundImage: `url(${img})`,
			}}
		>
			<div className={s.space__content}>
				<h2 className={s.space__content__title}>
					<span>{titleTop}</span>
					<span className={s.space__content__title__bottom}>{titleBottom}</span>
				</h2>
				<p className={s.space__content__description}>{description}</p>
				<Link href={link} className={s.space__content__button}>
					VER MÁS
				</Link>
			</div>
		</section>
	)
}

export default Space
