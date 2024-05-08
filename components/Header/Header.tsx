import Link from 'next/link'
import s from './Header.module.scss'

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__left}>
				<button></button>
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
