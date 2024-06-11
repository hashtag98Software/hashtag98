'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import 'photoswipe/dist/photoswipe.css'
import { Rooftop } from 'utils/types/graphql/graphql'
import s from './page.module.scss'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { IoSearchSharp } from 'react-icons/io5'

const Component = ({ data }: { data: Rooftop }) => {
	return (
		<main>
			<section className={s.rooftop__hero}>
				{data.logoHero?.url && <img src={data.logoHero?.url} alt="Logo" />}
				{data.video?.url && (
					<video
						autoPlay
						muted
						loop
						playsInline
						className={s.rooftop__hero__video}
					>
						<source src={data.video?.url} type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				)}
			</section>
			<section className={s.rooftop__content}>
				{data.logoBlack?.url && <img src={data.logoBlack?.url} alt="Logo" />}
				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className={s.rooftop__content__button}
				>
					{data.buttonText}
				</a>
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
				{data.imagesCollection?.items?.length && (
					<Swiper
						slidesPerView={4}
						spaceBetween={32}
						centeredSlides={true}
						initialSlide={2}
						loop
						pagination={{
							clickable: true,
						}}
						className={s.rooftop__content__swiper}
						modules={[Pagination, Autoplay]}
					>
						{data.imagesCollection.items.map(
							item =>
								item?.url && (
									<SwiperSlide key={item.url}>
										<img
											src={item.url}
											alt="Image"
											className={s.rooftop__content__swiper__item}
										/>
									</SwiperSlide>
								)
						)}
					</Swiper>
				)}
				<a
					href={data.instagramUrl || '/'}
					target="_blank"
					rel="noopener noreferrer"
					className={s.rooftop__content__social}
				>
					<FaInstagram size={100} />
					{data.instagramUsername}
				</a>
				<a
					href={data.facebookUrl || '/'}
					target="_blank"
					rel="noopener noreferrer"
					className={s.rooftop__content__social}
				>
					<FaFacebook size={100} />
					{data.facebookUsername}
				</a>
				<img
					src="/img/top-left.png"
					alt="Logo"
					className={s.rooftop__content__img_top_left}
				/>
				<img
					src="/img/top-right.png"
					alt="Logo"
					className={s.rooftop__content__img_top_right}
				/>
				<img
					src="/img/bottom-left.png"
					alt="Logo"
					className={s.rooftop__content__img_bottom_left}
				/>
				<img
					src="/img/bottom-right.png"
					alt="Logo"
					className={s.rooftop__content__img_bottom_right}
				/>
			</section>
		</main>
	)
}

export default Component
