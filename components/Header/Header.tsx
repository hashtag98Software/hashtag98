'use client'
import Link from 'components/Link/Link'
import NextLink from 'next/link'
import s from './Header.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
	animationOnScreenContainer,
	menuItemsAnimation,
} from 'utils/helpers/framerMotionAnimations'
import { useParams, usePathname } from 'next/navigation'

const Header = () => {
	const menuItems = [
		{ label: 'INICIO', link: '/' },
		{ label: 'HABITACIONES', link: '/rooms' },
		{ label: 'AMENA', link: '/restaurant' },
		{ label: 'INZOLENTE', link: '/rooftop' },
		{ label: 'EXPERIENCIAS', link: '/experiences' },
		{ label: 'CONTÁCTANOS', link: '/contact' },
	]
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()
	const params = useParams<{ lang: string }>()
	const lang = params.lang
	const pathnameWithoutLang = pathname
		.split('/')
		.filter(p => p !== lang)
		.join('/')

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	console.log({ lang, pathnameWithoutLang, pathname })
	console.log(lang === 'es' ? `/en${pathnameWithoutLang}` : pathnameWithoutLang)

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
								key={item.label}
								className={s.header__menu__nav__list__item}
								variants={menuItemsAnimation(i)}
								{...animationOnScreenContainer}
							>
								<Link href={item.link} onClick={toggleMenu}>
									{item.label}
								</Link>
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
				<NextLink
					className={s.header__left__lang}
					href={
						lang === 'es' ? `/en${pathnameWithoutLang}` : pathnameWithoutLang
					}
				>
					{lang === 'es' ? 'EN' : 'ES'}
				</NextLink>
			</div>
			<Link className={s.header__logo} href="/" aria-label="Hashtag98 Logo">
				<img
					className={s.header__logo__img}
					src="/img/logo.png"
					alt="Hashtag98 Logo"
				/>
			</Link>
			<nav className={s.header__nav}>
				<ul className={s.header__nav__list}>
					<li>
						<Link className={s.header__nav__list__item} href="/">
							INICIO
						</Link>
					</li>
					<li>
						<Link className={s.header__nav__list__item} href="/rooms">
							HABITACIONES
						</Link>
					</li>
					<li>
						<Link className={s.header__nav__list__item} href="/experiences">
							EXPERIENCIAS
						</Link>
					</li>
					<li>
						<a
							className={`${s.header__nav__list__item} ${s.button}`}
							href="https://hotels.cloudbeds.com/en/reservation/KpLlBr"
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
