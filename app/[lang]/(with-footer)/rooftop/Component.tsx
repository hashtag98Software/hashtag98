'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import './page.scss'
import 'photoswipe/dist/photoswipe.css'
import { Rooftop } from 'utils/types/graphql/graphql'
import s from './page.module.scss'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { IoSearchSharp } from 'react-icons/io5'
import { Kameron } from 'next/font/google'

const KameronFont = Kameron({ subsets: ['latin'], weight: '600' })

const Component = ({ data }: { data: Rooftop }) => {
	return (
		<main id="rooftop">
			<section className={s.rooftop__hero}>
				{data.logoHero?.url && (
					<img
						src={data.logoHero?.url}
						alt="Logo"
						className={s.rooftop__hero__logo}
					/>
				)}
				{data.videoHero?.url && (
					<video
						autoPlay
						muted
						loop
						playsInline
						className={s.rooftop__hero__video}
					>
						<source src={data.videoHero?.url} type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				)}
			</section>
			<section className={s.rooftop__content}>
				<p
					className={`${s.rooftop__content__message1} ${KameronFont.className}`}
				>
					{data.message1}
				</p>
				<div className={s.rooftop__content__info}>
					<div className={s.rooftop__content__info__buttons}>
						{data.booking && (
							<a
								href={data.booking}
								target="_blank"
								rel="noopener noreferrer"
								className={s.rooftop__content__info__buttons__item}
							>
								{data.buttonText}
							</a>
						)}
						{data.menu?.url && (
							<a
								href={data.menu?.url}
								target="_blank"
								rel="noopener noreferrer"
								className={s.rooftop__content__info__buttons__item}
							>
								{data.buttonText2}
							</a>
						)}
					</div>
					{data.video?.url && (
						<video
							autoPlay
							muted
							loop
							playsInline
							className={s.rooftop__content__info__video}
						>
							<source src={data.video?.url} type="video/mp4" />
							Your browser does not support HTML5 video.
						</video>
					)}
				</div>
				<p
					className={`${s.rooftop__content__message2} ${KameronFont.className}`}
				>
					{data.message2}
				</p>
				<div className={s.rooftop__content__gallery}>
					<Gallery>
						{data.imagesGalleryCollection?.items.map(
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
				</div>
				<p
					className={`${s.rooftop__content__message3} ${KameronFont.className}`}
				>
					{data.message3}
				</p>
				{data.imagesCollection?.items?.length && (
					<Swiper
						slidesPerView="auto"
						spaceBetween={32}
						initialSlide={2}
						loop
						autoplay={{
							delay: 5000,
						}}
						pagination={{
							clickable: true,
						}}
						className={s.rooftop__content__swiper}
						modules={[Pagination, Autoplay]}
					>
						{data.imagesCollection.items.map(
							item =>
								item?.url && (
									<SwiperSlide
										key={item.url}
										className={s.rooftop__content__swiper__item}
									>
										<img
											src={item.url}
											alt="Image"
											className={s.rooftop__content__swiper__item__img}
										/>
									</SwiperSlide>
								)
						)}
					</Swiper>
				)}
				{data.imagesCollection?.items?.length && (
					<div className={s.rooftop__content__images}>
						{data.imagesCollection.items
							.slice(0, 4)
							.map(
								item =>
									item?.url && (
										<img
											src={item.url}
											alt="Image"
											className={s.rooftop__content__images__img}
											key={item.url}
										/>
									)
							)}
					</div>
				)}
				<a
					href={data.instagramUrl || '/'}
					target="_blank"
					rel="noopener noreferrer"
					className={s.rooftop__content__social}
				>
					<FaInstagram />
					{data.instagramUsername}
				</a>
				<a
					href={data.facebookUrl || '/'}
					target="_blank"
					rel="noopener noreferrer"
					className={s.rooftop__content__social}
				>
					<FaFacebook />
					{data.facebookUsername}
				</a>
				<img
					src="/img/rooftop/1.png"
					alt="drinks"
					className={s.rooftop__content__img_1}
				/>
				<img
					src="/img/rooftop/2.png"
					alt="drinks"
					className={s.rooftop__content__img_2}
				/>
				<img
					src="/img/rooftop/3.png"
					alt="drinks"
					className={s.rooftop__content__img_3}
				/>
				<img
					src="/img/rooftop/4.png"
					alt="drinks"
					className={s.rooftop__content__img_4}
				/>
				<img
					src="/img/rooftop/5.png"
					alt="drinks"
					className={s.rooftop__content__img_5}
				/>
				<img
					src="/img/rooftop/6.png"
					alt="drinks"
					className={s.rooftop__content__img_6}
				/>
				<img
					src="/img/rooftop/1_mobile.png"
					alt="drinks"
					className={s.rooftop__content__img_1_mobile}
				/>
				<img
					src="/img/rooftop/2_mobile.png"
					alt="drinks"
					className={s.rooftop__content__img_2_mobile}
				/>
				<img
					src="/img/rooftop/3_mobile.png"
					alt="drinks"
					className={s.rooftop__content__img_3_mobile}
				/>
				<img
					src="/img/rooftop/4_mobile.png"
					alt="drinks"
					className={s.rooftop__content__img_4_mobile}
				/>
			</section>
		</main>
	)
}

export default Component
