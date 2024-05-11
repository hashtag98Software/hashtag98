'use client'
import Link from 'next/link'
import s from './Header.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { animationOnScreenContainer } from 'utils/helpers/framerMotionAnimations'

const Header = () => {
	const menuItems = [
		{ label: 'HOTEL', link: '/' },
		{ label: 'HABITACIONES', link: '/' },
		{ label: 'AMENA', link: '/' },
		{ label: 'INZOLENTE', link: '/' },
		{ label: 'EXPERIENCIAS', link: '/' },
		{ label: 'UBICACIÓN', link: '/' },
		{ label: 'CONTÁCTANOS', link: '/' },
	]
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<header className={s.header}>
			<div className={`${s.header__menu} ${isMenuOpen && s.open}`}>
				<button className={s.header__menu__close} onClick={toggleMenu}>
					X
				</button>
				<nav className={s.header__menu__nav}>
					<ul className={s.header__menu__nav__list}>
						{menuItems.map((item, i) => (
							<motion.li
								key={item.link}
								className={s.header__menu__nav__list__item}
								variants={{
									offscreen: {
										opacity: 0,
										translateX: -100,
									},
									onscreen: {
										opacity: 1,
										translateX: 0,
										transition: {
											type: 'spring',
											duration: 0.4 * (i + 1),
										},
									},
								}}
								{...animationOnScreenContainer}
							>
								<Link href={item.link}>{item.label}</Link>
							</motion.li>
						))}
					</ul>
				</nav>
			</div>
			{isMenuOpen && (
				<div className={s.header__menu_overlay} onClick={toggleMenu} />
			)}
			<div className={s.header__left}>
				<button
					onClick={toggleMenu}
					className={s.header__left__button}
					aria-label="Abrir Menú"
				>
					<svg
						width={24}
						height={14}
						viewBox="0 0 24 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1H23"
							stroke="white"
							strokeWidth={2}
							strokeLinecap="round"
						/>
						<path
							d="M1 7H23"
							stroke="white"
							strokeWidth={2}
							strokeLinecap="round"
						/>
						<path
							d="M1 13H23"
							stroke="white"
							strokeWidth={2}
							strokeLinecap="round"
						/>
					</svg>
				</button>
				<Link className={s.header__left__lang} href="/">
					ES
				</Link>
			</div>
			<Link className={s.header__logo} href="/" aria-label="Hashtag98 Logo">
				<img src="/img/logo.png" alt="Hashtag98 Logo" width={106} height={57} />
			</Link>
			<nav className={s.header__nav}>
				<ul className={s.header__nav__list}>
					<li>
						<Link className={s.header__nav__list__item} href="/">
							INICIO
						</Link>
					</li>
					<li>
						<Link className={s.header__nav__list__item} href="/">
							HABITACIONES
						</Link>
					</li>
					<li>
						<Link className={s.header__nav__list__item} href="/">
							EXPERIENCIAS
						</Link>
					</li>
					<li>
						<a
							className={`${s.header__nav__list__item} ${s.button}`}
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
						>
							RESERVA YA
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
