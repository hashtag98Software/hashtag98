import Link from 'next/link'
import s from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footer__content}>
				<nav className={s.footer__content__nav}>
					<ul className={s.footer__content__nav__list}>
						<li>
							<Link className={s.footer__content__nav__list__item} href="/">
								Inicio
							</Link>
						</li>
						<li>
							<Link className={s.footer__content__nav__list__item} href="/">
								Habitaciones
							</Link>
						</li>
						<li>
							<Link className={s.footer__content__nav__list__item} href="/">
								Experiencias
							</Link>
						</li>
						<li>
							<Link className={s.footer__content__nav__list__item} href="/">
								Contáctanos
							</Link>
						</li>
						<li>
							<Link className={s.footer__content__nav__list__item} href="/">
								Póliticas de uso
							</Link>
						</li>
						<li>
							<Link className={s.footer__content__nav__list__item} href="/">
								Políticas de privacidad
							</Link>
						</li>
					</ul>
				</nav>
				<div className={s.footer__content__info}>
					<ul className={s.footer__content__info__list}>
						<li>
							<a
								href="https://maps.app.goo.gl/FdwvVJALKCuvtyqw7"
								target="_blank"
								rel="noopener noreferrer"
							>
								Cra 41 # 10 - 37, Medellín, El Poblado, Atioquia
							</a>
						</li>
						<li>
							<a href="mailto:frontdesk@hashtag98.com.co">
								frontdesk@hashtag98.com.co
							</a>
						</li>
					</ul>
					<ul className={s.footer__content__info__list}>
						<li>
							<a href="tel:+573142770519">
								Atención huespedes: +57 314 277 0519
							</a>
						</li>
						<li>
							<a href="tel:+573142779585">
								Mercadeo y ventas: +57 314 277 9585
							</a>
						</li>
						<li>
							<a href="tel:+573146596818">Jefe de Recepción: +57 314659 6818</a>
						</li>
					</ul>
				</div>
				<div className={s.footer__content__text}>
					<p>
						En Hashtag 98 rechazamos rotundamente cualquier tipo de abuso o
						explotación sexual de Niños, Niñas y Adolescentes.
					</p>
					<br />
					<p>Prohibimos el ingreso a nuestras instalaciones de:</p>
					<br />
					<ul>
						<li className={s.footer__content__text__list__item}>
							1) Cualquier persona que pretenda ofrecer servicios o planes
							relacionados con la Explotación Sexual Comercial de Niños, Niñas y
							Adolescentes.
						</li>
						<li className={s.footer__content__text__list__item}>
							2) De Niños, Niñas y Adolescentes que no estén acompañados por sus
							padres o tutores o que no estén debidamente autorizados por estos.
						</li>
					</ul>
					<br />
					<p>
						Advertimos a todos nuestros huéspedes y clientes que en desarrollo
						de lo dispuesto en el artículo 17 de la Ley 679 de 2001, La Ley 1098
						de 2006, La Ley 1336 de 2009, la Resolución 3840 de 2009 y Código
						Ético MundialPara el Turismo, la explotación y el abuso sexual de
						menores de edad (Niños, Niñas y Adolescentes) en el país, son
						sancionados con Penas de hasta 20 años de cárcel y multas de hasta
						1500 Salarios Mínimos Legales Mensuales Vigentes.
					</p>
				</div>
				<Link
					href="/"
					aria-label="Hashtag98 Logo"
					className={s.footer__content__logo}
				>
					<img
						src="/img/logo.png"
						alt="Hashtag98 Logo"
						width={106}
						height={57}
					/>
				</Link>
			</div>
		</footer>
	)
}

export default Footer
