'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import s from './page.module.scss'
import Map from 'components/home/Map/Map'
import Hero from 'components/home/Hero/Hero'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import SectionFooter from 'components/home/SectionFooter/SectionFooter'
import Space from 'components/home/Space/Space'
import RoomTypes from 'components/home/RoomTypes/RoomTypes'
import Experiences from 'components/home/Experiences/Experiences'

const Component = () => {
	return (
		<main className={s.home}>
			<div className={s.home__mobile}>
				<Hero />
				<RoomTypes />
				<Space
					titleTop="Restaurante"
					titleBottom="Amena"
					description="Sumérgete en una experiencia gastronómica única en Amena, un rincón culinario que fusiona la tradición mediterránea con el vibrante sabor colombiano"
					link="/"
					img="/delete/amena.jpg"
				/>
				<Space
					titleTop="Rooftop"
					titleBottom="Inzolente"
					description="Descubre el encanto de Medellín desde las alturas en el rooftop Inzolente, ubicado en el exclusivo hotel Hashtag 98. Este oasis urbano ofrece una experiencia única que combina vistas panorámicas impresionantes con cocteles de autor exquisitamente elaborados. "
					link="/"
					img="/delete/rooftop.jpg"
				/>
				<Experiences />
				<Map />
				<SectionFooter />
			</div>
			<div className={s.home__desktop}>
				<Swiper
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
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
						<Experiences />
					</SwiperSlide>
					<SwiperSlide>
						<Map />
					</SwiperSlide>
					<SwiperSlide>
						<SectionFooter />
					</SwiperSlide>
				</Swiper>
			</div>
		</main>
	)
}

export default Component
