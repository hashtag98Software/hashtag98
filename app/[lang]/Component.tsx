'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import s from './page.module.scss'
import Map from 'components/Map/Map'
import Hero from 'components/home/Hero/Hero'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'
import Space from 'components/home/Space/Space'
import RoomTypes from 'components/home/RoomTypes/RoomTypes'
import Experiences from 'components/home/Experiences/Experiences'
import FloatingMenu from 'components/home/FloatingMenu/FloatingMenu'
import { Home } from 'utils/types/graphql/graphql'
import Footer from 'components/Footer/Footer'

const Component = ({ data }: { data: Home }) => {
	const { spacesCollection } = data

	return (
		<main className={s.home}>
			<FloatingMenu />
			<div
				dangerouslySetInnerHTML={{
					__html:
						'<script src="https://hotels.cloudbeds.com/widget/load/KpLlBr/horiz?newWindow=1"></script>',
				}}
			></div>
			<div className={s.home__mobile}>
				<Hero />
				<RoomTypes />
				<Swiper
					id="home-slider-mobile"
					slidesPerView={1}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					pagination={{ clickable: true }}
					loop
					modules={[Autoplay, Pagination]}
					className={s.home__mobile__swiper}
				>
					{/* <SwiperSlide>
						<Space
							titleTop="Restaurante"
							titleBottom="Amena"
							description="Sumérgete en una experiencia gastronómica única en Amena, un rincón culinario que fusiona la tradición mediterránea con el vibrante sabor colombiano"
							link="/"
							img="/delete/amena.jpg"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Space
							titleTop="Rooftop"
							titleBottom="Inzolente"
							description="Descubre el encanto de Medellín desde las alturas en el rooftop Inzolente, ubicado en el exclusivo hotel Hashtag 98. Este oasis urbano ofrece una experiencia única que combina vistas panorámicas impresionantes con cocteles de autor exquisitamente elaborados. "
							link="/"
							img="/delete/rooftop.jpg"
						/>
					</SwiperSlide> */}
				</Swiper>
				<Experiences />
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
				>
					<SwiperSlide>
						<Hero />
					</SwiperSlide>
					<SwiperSlide>
						<RoomTypes />
					</SwiperSlide>
					{spacesCollection?.items.map(
						space =>
							space && (
								<SwiperSlide key={space?.sys.id}>
									<Space data={space} />
								</SwiperSlide>
							)
					)}
					{/* <SwiperSlide>
						<Space
							titleTop="Rooftop"
							titleBottom="Inzolente"
							description="Descubre el encanto de Medellín desde las alturas en el rooftop Inzolente, ubicado en el exclusivo hotel Hashtag 98. Este oasis urbano ofrece una experiencia única que combina vistas panorámicas impresionantes con cocteles de autor exquisitamente elaborados. "
							link="/"
							img="/delete/rooftop.jpg"
						/>
					</SwiperSlide> */}
					<SwiperSlide>
						<Experiences />
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
