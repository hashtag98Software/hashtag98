import { SVGProps, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import s from './FloatingMenu.module.scss'
import Link from 'next/link'
import {
	animationOnScreenContainer,
	menuItemsAnimation,
} from 'utils/helpers/framerMotionAnimations'
import { exit } from 'process'

const FloatingMenu = () => {
	const menuItems = [
		{ label: 'HOTEL', link: '/' },
		{ label: 'HABITACIONES', link: '/' },
		{ label: 'AMENA', link: '/' },
		{ label: 'INZOLENTE', link: '/' },
		{ label: 'EXPERIENCIAS', link: '/' },
		{ label: 'UBICACIÓN', link: '/' },
		{ label: 'CONTÁCTANOS', link: '/' },
	]
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<div className={s.floating_menu}>
			<button className={s.floating_menu__button} onClick={toggleMenu}>
				<span>MENÚ</span>
				<Arrow
					width={10}
					className={`${s.floating_menu__button__arrow} ${isOpen && s.active}`}
				/>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={s.floating_menu__content}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
					>
						<nav>
							<ul className={s.floating_menu__content__list}>
								{menuItems.map((item, i) => (
									<motion.li
										key={item.label}
										variants={menuItemsAnimation(i)}
										{...animationOnScreenContainer}
									>
										<Link
											className={s.floating_menu__content__list__item}
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
	)
}

const Arrow = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={17}
			height={10}
			viewBox="0 0 17 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M1.55566 8.25L8.55566 1.25L15.5557 8.25"
				stroke="white"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default FloatingMenu
