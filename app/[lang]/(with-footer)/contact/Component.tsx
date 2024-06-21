'use client'
import Map from 'components/Map/Map'
import s from './page.module.scss'
import { Contact } from 'utils/types/graphql/graphql'
import { useForm } from 'react-hook-form'
import { sendContactInfo } from 'lib/server-actions/sendContactInfo'
import { IoLocationSharp, IoMail } from 'react-icons/io5'
import { MdLocalPhone } from 'react-icons/md'

const ContactPage = ({ data }: { data: Contact }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{
		name: string
		phone: string
		email: string
		terms: boolean
	}>()

	const onSubmit = handleSubmit(async info => {
		if (data.email) {
			await sendContactInfo({ ...info, to: data.email })
		}
	})

	return (
		<main>
			<section
				className={s.contact__hero}
				style={{ backgroundImage: `url(${data.image?.url})` }}
			>
				<div className={s.contact__hero__content}>
					<div className={s.contact__hero__content__info}>
						<h1 className={s.contact__hero__content__info__title}>
							CONTÁCTANOS
						</h1>
						<a
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
							className={s.contact__hero__content__info__item}
						>
							<IoLocationSharp size={26} />
							<span>Cra 41 # 10 - 37, Medellín, El Poblado</span>
						</a>
						<a
							href="mailto:frontdesk@hashtag98.com.co"
							className={s.contact__hero__content__info__item}
						>
							<IoMail size={26} />
							<span className={s.contact__hero__content__info__item__mail}>
								frontdesk@hashtag98.com.co
							</span>
						</a>
						<a href="tel:+" className={s.contact__hero__content__info__item}>
							<MdLocalPhone size={26} />
							<span>314 277 0519 l Atención a Huéspedes</span>
						</a>
						<a href="tel:+" className={s.contact__hero__content__info__item}>
							<MdLocalPhone size={26} />
							<span>314 277 95 85 l Mercadeo y Ventas</span>
						</a>
						<a href="tel:+" className={s.contact__hero__content__info__item}>
							<MdLocalPhone size={26} />
							<span>314 659 6818 l Jefe de Recepción</span>
						</a>
					</div>
					<form onSubmit={onSubmit} className={s.contact__hero__content__form}>
						<h2 className={s.contact__hero__content__form__title}>
							Recibe más información
						</h2>
						<label className={s.contact__hero__content__form__label}>
							<span className={s.contact__hero__content__form__label__text}>
								Nombre Completo*
							</span>
							<input
								{...register('name', {
									required: {
										value: true,
										message: 'Este campo es requerido',
									},
								})}
								type="text"
								placeholder="Tu nombre acá"
								className={s.contact__hero__content__form__label__input}
							/>
							{errors.name && (
								<span className={s.contact__hero__content__form__label__error}>
									{errors.name.message}
								</span>
							)}
						</label>
						<label className={s.contact__hero__content__form__label}>
							<span className={s.contact__hero__content__form__label__text}>
								Celular*
							</span>
							<input
								{...register('phone', {
									required: {
										value: true,
										message: 'Este campo es requerido',
									},
								})}
								type="phone"
								placeholder="Tu número acá"
								className={s.contact__hero__content__form__label__input}
							/>
							{errors.phone && (
								<span className={s.contact__hero__content__form__label__error}>
									{errors.phone.message}
								</span>
							)}
						</label>
						<label className={s.contact__hero__content__form__label}>
							<span className={s.contact__hero__content__form__label__text}>
								Correo electrónico*
							</span>
							<input
								{...register('email', {
									required: {
										value: true,
										message: 'Este campo es requerido',
									},
								})}
								type="email"
								placeholder="Tu correo acá"
								className={s.contact__hero__content__form__label__input}
							/>
							{errors.email && (
								<span className={s.contact__hero__content__form__label__error}>
									{errors.email.message}
								</span>
							)}
						</label>
						<label className={s.contact__hero__content__form__terms}>
							<input
								type="checkbox"
								className={s.contact__hero__content__form__terms__input}
								{...register('terms', {
									required: {
										value: true,
										message: 'Debes aceptar los términos y condiciones',
									},
								})}
							/>
							<span className={s.contact__hero__content__form__terms__text}>
								Acepto la política de privacidad y tratamiento de datos
								personales registrados en este sitio.
							</span>
							{errors.terms && (
								<span className={s.contact__hero__content__form__terms__error}>
									{errors.terms.message}
								</span>
							)}
						</label>
						<button className={s.contact__hero__content__form__button}>
							Enviar
						</button>
					</form>
				</div>
			</section>
			<Map className={s.contact__map} />
			<section className={s.contact__info}>
				<h2 className={s.contact__info__title}>CONTÁCTANOS</h2>
				<a
					className={s.contact__info__item}
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IoLocationSharp size={26} />
					<span>Cra 41 # 10 - 37, Medellín, El Poblado</span>
				</a>
				<a className={s.contact__info__item} href="mailto:">
					<IoMail size={26} />
					<span className={s.contact__info__item__mail}>
						frontdesk@hashtag98.com.co
					</span>
				</a>
				<a href="tel:+" className={s.contact__info__item}>
					<MdLocalPhone size={26} />
					<span>314 277 95 85</span>
				</a>
			</section>
		</main>
	)
}

export default ContactPage
