'use client'
import { Restaurant } from 'utils/types/graphql/graphql'
import s from './page.module.scss'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { IoSearchSharp } from 'react-icons/io5'
import 'photoswipe/dist/photoswipe.css'
import { useScroll, useSpring, motion, useTransform } from 'framer-motion'
import { Abhaya_Libre } from 'next/font/google'

const Abhaya = Abhaya_Libre({ subsets: ['latin'], weight: '600' })

const Component = ({ data }: { data: Restaurant }) => {
	const { scrollYProgress } = useScroll()
	const spring = useSpring(scrollYProgress)
	const rotate = useTransform(spring, v => v * 360)

	return (
		<main>
			<section className={s.restaurant__hero}>
				{data.logo?.url && (
					<img
						src={data.logo?.url}
						alt="Logo"
						className={s.restaurant__hero__img}
					/>
				)}
				{data.video?.url && (
					<video
						autoPlay
						muted
						loop
						playsInline
						className={s.restaurant__hero__video}
					>
						<source src={data.video?.url} type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				)}
			</section>
			<section className={s.restaurant__message}>
				<h2 className={`${s.restaurant__message__title} ${Abhaya.className}`}>
					{data.message}
				</h2>
				<p className={s.restaurant__message__text}>{data.subMessage}</p>
			</section>
			<section className={s.restaurant__gallery}>
				<Gallery>
					{data.imagesCollection?.items.map(
						(img, index) =>
							img?.url && (
								<Item
									original={img.url}
									thumbnail={img.url}
									width={img.width || undefined}
									height={img.height || undefined}
									key={img.url}
								>
									{({ ref, open }) =>
										index < 4 ? (
											<div className={s.gallery__item}>
												<div className={s.gallery__item__content}>
													<IoSearchSharp size={32} />
												</div>
												{img.url && (
													<img
														ref={ref}
														onClick={open}
														src={img.url}
														alt={`Restaurant - ${index + 1}`}
														className={s.gallery__item__img}
													/>
												)}
											</div>
										) : (
											<div ref={ref} style={{ display: 'none' }} />
										)
									}
								</Item>
							)
					)}
				</Gallery>
			</section>
			<section className={s.restaurant__info}>
				<div className={s.restaurant__info__content}>
					{data.video2?.url && (
						<video
							autoPlay
							muted
							loop
							playsInline
							className={s.restaurant__info__content__video}
						>
							<source src={data.video2?.url} type="video/mp4" />
							Your browser does not support HTML5 video.
						</video>
					)}
					<div className={s.restaurant__info__content__buttons}>
						<a
							href="https://assets.ctfassets.net/9q4if916fz49/40oUL036YkAtl3kluJiN4C/31d31c7784a7445c16d8313a89c88e72/Carta_Amena_actualizada.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className={s.restaurant__info__content__buttons__item}
						>
							<motion.img
								src="/img/plato1.png"
								alt="Plato"
								className={s.restaurant__info__content__buttons__item__img}
								style={{ rotate, translateY: '-50%' }}
							/>
							{data.button1Text}
						</a>
						<a
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
							className={`${s.restaurant__info__content__buttons__item} ${s.two}`}
						>
							<motion.img
								src="/img/plato2.png"
								alt="Plato"
								className={s.restaurant__info__content__buttons__item__img}
								style={{ rotate, translateY: '-50%' }}
							/>
							{data.button2Text}
						</a>
					</div>
				</div>
				<h2 className={s.restaurant__info__text1}>{data.text1}</h2>
				<p className={s.restaurant__info__text2}>{data.text2}</p>
				<div className={s.restaurant__info__images}>
					{data.postImagesCollection?.items.map(
						img =>
							img?.url && (
								<img
									key={img.url}
									src={img.url}
									alt="Post"
									className={s.restaurant__info__images__item}
								/>
							)
					)}
				</div>
			</section>
		</main>
	)
}

export default Component
