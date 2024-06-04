'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import s from './page.module.scss'
import Map from 'components/Map/Map'
import Hero from 'components/home/Hero/Hero'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'
import Space from 'components/home/Space/Space'
import RoomTypes from 'components/RoomTypes/RoomTypes'
import Experiences from 'components/home/Experiences/Experiences'
import Booking from 'components/Booking/Booking'
import { Home } from 'utils/types/graphql/graphql'
import Footer from 'components/Footer/Footer'
import { useState } from 'react'

const Component = ({ data }: { data: Home }) => {
	const [hiddenBooking, setHiddenBooking] = useState(false)
	const { spacesCollection } = data

	return (
		<main className={s.home}>
			<div className={`${s.home__booking} ${hiddenBooking && s.hidden}`}>
				<Booking />
			</div>
			<div className={s.home__mobile}>
				<Hero video={data?.video?.url} />
				{data.rooms && <RoomTypes data={data.rooms} />}
				<Swiper
					id="home-slider-mobile"
					slidesPerView={1}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					pagination={{ clickable: true }}
					loop
					modules={[Autoplay, Pagination]}
					className={s.home__mobile__swiper}
				>
					{spacesCollection?.items.map(
						space =>
							space && (
								<SwiperSlide key={space?.sys.id}>
									<Space data={space} />
								</SwiperSlide>
							)
					)}
				</Swiper>
				{data.experiences1Collection?.items &&
					data.experiences2Collection?.items &&
					data.experiences3Collection?.items && (
						<Experiences
							experiences1={data.experiences1Collection?.items}
							experiences2={data.experiences2Collection?.items}
							experiences3={data.experiences3Collection?.items}
						/>
					)}
				<Map className={s.home__map} />
				<Footer />
			</div>
			<div className={s.home__desktop}>
				<Swiper
					id="home-slider"
					direction={'vertical'}
					slidesPerView={1}
					mousewheel={true}
					pagination={{
						clickable: true,
					}}
					modules={[Mousewheel, Pagination]}
					allowTouchMove={false}
					className={s.home__desktop__swiper}
					onRealIndexChange={(swiper: any) =>
						setHiddenBooking(swiper.realIndex === swiper.slides.length - 1)
					}
				>
					<SwiperSlide>
						<Hero video={data?.video?.url} />
					</SwiperSlide>
					{data.rooms && (
						<SwiperSlide>
							<RoomTypes data={data.rooms} />
						</SwiperSlide>
					)}
					{spacesCollection?.items.map(
						space =>
							space && (
								<SwiperSlide key={space?.sys.id}>
									<Space data={space} />
								</SwiperSlide>
							)
					)}
					<SwiperSlide>
						{data.experiences1Collection?.items &&
							data.experiences2Collection?.items &&
							data.experiences3Collection?.items && (
								<Experiences
									experiences1={data.experiences1Collection?.items}
									experiences2={data.experiences2Collection?.items}
									experiences3={data.experiences3Collection?.items}
								/>
							)}
					</SwiperSlide>
					<SwiperSlide>
						<Map className={s.home__map} />
					</SwiperSlide>
					<SwiperSlide>
						<Footer />
					</SwiperSlide>
				</Swiper>
			</div>
		</main>
	)
}

export default Component
