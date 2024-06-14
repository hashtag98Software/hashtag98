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
import type { Header } from 'utils/types/graphql/graphql'

const Header = ({ data }: { data?: Header }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()
	const params = useParams<{ lang: string }>()
	const lang = params.lang
	const pathnameWithoutLang = pathname
		.split('/')
		.filter(p => p !== lang)
		.join('/')

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<header className={s.header}>
			<div className={`${s.header__menu} ${isMenuOpen && s.open}`}>
				<button className={s.header__menu__close} onClick={toggleMenu}>
					X
				</button>
				<nav className={s.header__menu__nav}>
					<ul className={s.header__menu__nav__list}>
						{data?.menu?.linksCollection?.items?.map((item, i) => (
							<motion.li
								key={item?.text}
								className={s.header__menu__nav__list__item}
								variants={menuItemsAnimation(i)}
								{...animationOnScreenContainer}
							>
								<Link href={item?.href || '/'} onClick={toggleMenu}>
									{item?.text}
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
						lang === 'es'
							? `/en${pathnameWithoutLang}`
							: pathnameWithoutLang || '/'
					}
				>
					{lang === 'es' ? 'EN' : 'ES'}
				</NextLink>
			</div>
			<Link className={s.header__logo} href="/" aria-label="Hashtag98 Logo">
				<img
					className={s.header__logo__img}
					src={data?.logo?.url || '/img/logo.png'}
					alt="Hashtag98 Logo"
				/>
			</Link>
			<nav className={s.header__nav}>
				<ul className={s.header__nav__list}>
					{data?.linksCollection?.items?.map(item => (
						<li key={item?.text}>
							<Link
								className={s.header__nav__list__item}
								href={item?.href || '/'}
							>
								{item?.text}
							</Link>
						</li>
					))}
					<li>
						<a
							className={`${s.header__nav__list__item} ${s.button}`}
							href={data?.callToAction?.href || '/'}
							target="_blank"
							rel="noopener noreferrer"
						>
							{data?.callToAction?.text}
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
