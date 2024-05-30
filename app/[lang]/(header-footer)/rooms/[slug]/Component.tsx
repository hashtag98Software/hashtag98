'use client'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import s from './page.module.scss'
import Link from 'next/link'
import { Room } from 'utils/types/graphql/graphql'
import { IoSearchSharp } from 'react-icons/io5'
import { useState } from 'react'
import Booking from 'components/Booking/Booking'

const Component = ({ data }: { data: Room }) => {
	const [isOpenAttributes, setIsOpenAttributes] = useState(false)

	const toggleAttributes = () => setIsOpenAttributes(!isOpenAttributes)

	return (
		<main>
			<div className={s.room__booking}>
				<Booking />
			</div>
			<section className={s.room__hero}>
				<div className={s.room__hero__content}>
					<h1 className={s.room__hero__content__title}>
						HABITACIÓN {data.type}
					</h1>
					<p className={s.room__hero__content__text}>{data.mainDescription}</p>
					<button
						className={s.room__hero__content__button}
						onClick={toggleAttributes}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="26"
							viewBox="0 0 36 26"
							fill="none"
							className={`${s.room__hero__content__button__icon} ${
								isOpenAttributes && s.active
							}`}
						>
							<line
								y1="-0.5"
								x2="24.531"
								y2="-0.5"
								transform="matrix(-0.733753 0.679416 -0.906921 -0.4213 18 8.33322)"
								stroke="white"
							/>
							<line
								y1="-0.5"
								x2="24.5312"
								y2="-0.5"
								transform="matrix(-0.733768 -0.6794 0.906914 -0.421316 36 25)"
								stroke="white"
							/>
							<line
								y1="-0.5"
								x2="24.531"
								y2="-0.5"
								transform="matrix(-0.733753 0.679416 -0.906921 -0.4213 18 -3.05176e-05)"
								stroke="white"
							/>
							<line
								y1="-0.5"
								x2="24.5312"
								y2="-0.5"
								transform="matrix(-0.733768 -0.6794 0.906914 -0.421316 36 16.6667)"
								stroke="white"
							/>
						</svg>
						<span>Descripción</span>
					</button>
				</div>
				<div
					className={`${s.room__hero__attributes} ${
						isOpenAttributes && s.active
					}`}
				>
					{data.attributes?.map(attr => (
						<div key={attr} className={s.room__hero__attributes__item}>
							<span>{attr}</span>
						</div>
					))}
				</div>
				{isOpenAttributes && (
					<div
						className={s.room__hero__attributes_overlay}
						onClick={toggleAttributes}
						role="button"
					/>
				)}
				{data.video?.url && (
					<video autoPlay muted loop className={s.room__hero__video}>
						<source src={data.video.url} type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				)}
			</section>
			<section className={s.room__description}>
				<p>{data.description}</p>
			</section>
			<section className={s.room__gallery}>
				<Gallery>
					{data.imagesCollection?.items?.map(
						img =>
							img?.url && (
								<Item
									original={img.url}
									thumbnail={img.url}
									width={img.width || undefined}
									height={img.height || undefined}
									key={img.url}
								>
									{({ ref, open }) => (
										<div className={s.room__gallery__item}>
											<div className={s.room__gallery__item__content}>
												<IoSearchSharp size={32} />
											</div>
											{img.url && (
												<img
													ref={ref}
													onClick={open}
													src={img.url}
													alt={`${data.type} - ${data.mainDescription}`}
													className={s.room__gallery__item__img}
												/>
											)}
										</div>
									)}
								</Item>
							)
					)}
				</Gallery>
			</section>
			<section className={s.room__more_types}>
				<div className={s.room__more_types__item}>
					<div className={s.room__more_types__item__content}>
						<h3 className={s.room__more_types__item__content__title}>XL</h3>
						<Link
							href="/es/rooms/xl"
							className={s.room__more_types__item__content__button}
						>
							VER MÁS
						</Link>
					</div>
					<video
						autoPlay
						muted
						loop
						className={s.room__more_types__item__video}
					>
						<source src="/delete/video.mp4" type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				</div>
				<div className={s.room__more_types__item}>
					<div className={s.room__more_types__item__content}>
						<h3 className={s.room__more_types__item__content__title}>XL</h3>
						<Link
							href="/es/rooms/xl"
							className={s.room__more_types__item__content__button}
						>
							VER MÁS
						</Link>
					</div>
					<video
						autoPlay
						muted
						loop
						className={s.room__more_types__item__video}
					>
						<source src="/delete/video.mp4" type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				</div>
				<div className={s.room__more_types__item}>
					<div className={s.room__more_types__item__content}>
						<h3 className={s.room__more_types__item__content__title}>XL</h3>
						<Link
							href="/es/rooms/xl"
							className={s.room__more_types__item__content__button}
						>
							VER MÁS
						</Link>
					</div>
					<video
						autoPlay
						muted
						loop
						className={s.room__more_types__item__video}
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
