import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import s from './Booking.module.scss'
import Link from 'next/link'
import {
	animationOnScreenContainer,
	menuItemsAnimation,
} from 'utils/helpers/framerMotionAnimations'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

const Booking = () => {
	const menuItems = [
		{ label: 'HOTEL', link: '/' },
		{ label: 'HABITACIONES', link: '/rooms' },
		{ label: 'AMENA', link: '/restaurant' },
		{ label: 'INZOLENTE', link: '/rooftop' },
		{ label: 'EXPERIENCIAS', link: '/' },
		{ label: 'UBICACIÓN', link: '/' },
		{ label: 'CONTÁCTANOS', link: '/contact' },
	]
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<div className={s.booking}>
			<div className={s.booking__menu}>
				<button className={s.booking__menu__button} onClick={toggleMenu}>
					<span>MENÚ</span>
					<MdOutlineKeyboardArrowUp
						size={30}
						className={`${s.booking__menu__button__arrow} ${
							isOpen && s.active
						}`}
					/>
				</button>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className={s.booking__menu__content}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
						>
							<nav>
								<ul className={s.booking__menu__content__list}>
									{menuItems.map((item, i) => (
										<motion.li
											key={item.label}
											variants={menuItemsAnimation(i)}
											{...animationOnScreenContainer}
										>
											<Link
												className={s.booking__menu__content__list__item}
												href={item.link}
											>
												{item.label}
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html:
						'<script src="https://hotels.cloudbeds.com/widget/load/KpLlBr/horiz?newWindow=1"></script>',
				}}
			></div>
		</div>
	)
}

export default Booking
