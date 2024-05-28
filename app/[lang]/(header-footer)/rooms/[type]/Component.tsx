'use client'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import s from './page.module.scss'
import Link from 'next/link'

const Component = () => {
	return (
		<main>
			<section className={s.room_type__hero}>
				<div className={s.room_type__hero__content}>
					<h1 className={s.room_type__hero__content__title}>HABITACIÓN L</h1>
					<p className={s.room_type__hero__content__text}>
						Superior con sofa cama y balcón
					</p>
				</div>
				<video autoPlay muted loop className={s.room_type__hero__video}>
					<source src="/delete/video.mp4" type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
			</section>
			<section className={s.room_type__gallery}>
				<Gallery>
					<Item
						original="https://placehold.co/600x400"
						thumbnail="https://placehold.co/600x400"
						width="600"
						height="400"
					>
						{({ ref, open }) => (
							<div className={s.room_type__gallery__item}>
								<img
									ref={ref}
									onClick={open}
									src="https://placehold.co/600x400"
									alt="kitten"
									className={s.room_type__gallery__item__img}
								/>
							</div>
						)}
					</Item>
					<Item
						original="https://placehold.co/600x400"
						thumbnail="https://placehold.co/600x400"
						width="600"
						height="400"
					>
						{({ ref, open }) => (
							<div className={s.room_type__gallery__item}>
								<img
									ref={ref}
									onClick={open}
									src="https://placehold.co/600x400"
									alt="kitten"
									className={s.room_type__gallery__item__img}
								/>
							</div>
						)}
					</Item>
					<Item
						original="https://placehold.co/600x400"
						thumbnail="https://placehold.co/600x400"
						width="600"
						height="400"
					>
						{({ ref, open }) => (
							<div className={s.room_type__gallery__item}>
								<img
									ref={ref}
									onClick={open}
									src="https://placehold.co/600x400"
									alt="kitten"
									className={s.room_type__gallery__item__img}
								/>
							</div>
						)}
					</Item>
					<Item
						original="https://placehold.co/600x400"
						thumbnail="https://placehold.co/600x400"
						width="600"
						height="400"
					>
						{({ ref, open }) => (
							<div className={s.room_type__gallery__item}>
								<img
									ref={ref}
									onClick={open}
									src="https://placehold.co/600x400"
									alt="kitten"
									className={s.room_type__gallery__item__img}
								/>
							</div>
						)}
					</Item>
				</Gallery>
			</section>
			<section className={s.room_type__more_types}>
				<div className={s.room_type__more_types__item}>
					<div className={s.room_type__more_types__item__content}>
						<h3 className={s.room_type__more_types__item__content__title}>
							XL
						</h3>
						<Link
							href="/es/rooms/xl"
							className={s.room_type__more_types__item__content__button}
						>
							VER MÁS
						</Link>
					</div>
					<video
						autoPlay
						muted
						loop
						className={s.room_type__more_types__item__video}
					>
						<source src="/delete/video.mp4" type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				</div>
				<div className={s.room_type__more_types__item}>
					<div className={s.room_type__more_types__item__content}>
						<h3 className={s.room_type__more_types__item__content__title}>
							XL
						</h3>
						<Link
							href="/es/rooms/xl"
							className={s.room_type__more_types__item__content__button}
						>
							VER MÁS
						</Link>
					</div>
					<video
						autoPlay
						muted
						loop
						className={s.room_type__more_types__item__video}
					>
						<source src="/delete/video.mp4" type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				</div>
				<div className={s.room_type__more_types__item}>
					<div className={s.room_type__more_types__item__content}>
						<h3 className={s.room_type__more_types__item__content__title}>
							XL
						</h3>
						<Link
							href="/es/rooms/xl"
							className={s.room_type__more_types__item__content__button}
						>
							VER MÁS
						</Link>
					</div>
					<video
						autoPlay
						muted
						loop
						className={s.room_type__more_types__item__video}
					>
						<source src="/delete/video.mp4" type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				</div>
			</section>
		</main>
	)
}

export default Component
