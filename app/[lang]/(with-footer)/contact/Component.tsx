'use client'
import Map from 'components/Map/Map'
import s from './page.module.scss'
import { Contact } from 'utils/types/graphql/graphql'
import { useForm } from 'react-hook-form'
import { sendContactInfo } from 'lib/server-actions/sendContactInfo'
import { IoLocationSharp, IoMail } from 'react-icons/io5'
import { MdLocalPhone } from 'react-icons/md'
import { useState } from 'react'

const ContactPage = ({ data, lang }: { data: Contact; lang: string }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<{
		name: string
		phone: string
		email: string
		terms: boolean
	}>()
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	const onSubmit = handleSubmit(async info => {
		if (data.email) {
			const res = await sendContactInfo({ ...info, to: data.email })
			if (res.error) {
				setError(true)
			} else {
				setSuccess(true)
			}
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
							{data.title}
						</h1>
						{data.address?.href && (
							<a
								href={data.address?.href}
								target="_blank"
								rel="noopener noreferrer"
								className={s.contact__hero__content__info__item}
							>
								<IoLocationSharp size={26} />
								<span>{data.address?.text}</span>
							</a>
						)}
						<a
							href={`mailto:${data.email}`}
							className={s.contact__hero__content__info__item}
						>
							<IoMail size={26} />
							<span className={s.contact__hero__content__info__item__mail}>
								{data.email}
							</span>
						</a>
						{data.guestServicesPhone?.href && (
							<a
								href={data.guestServicesPhone?.href}
								className={s.contact__hero__content__info__item}
							>
								<MdLocalPhone size={26} />
								<span>{data.guestServicesPhone?.text}</span>
							</a>
						)}
						{data.marketingAndSalesPhone?.href && (
							<a
								href={data.marketingAndSalesPhone?.href}
								className={s.contact__hero__content__info__item}
							>
								<MdLocalPhone size={26} />
								<span>{data.marketingAndSalesPhone.text}</span>
							</a>
						)}
						{data.frontDeskManagerPhone?.href && (
							<a
								href={data.frontDeskManagerPhone?.href}
								className={s.contact__hero__content__info__item}
							>
								<MdLocalPhone size={26} />
								<span>{data.frontDeskManagerPhone.text}</span>
							</a>
						)}
					</div>
					<form onSubmit={onSubmit} className={s.contact__hero__content__form}>
						{success ? (
							<h2 className={s.contact__hero__content__form__title}>
								{lang === 'es'
									? '¡Tu información ha sido enviada con éxito!'
									: 'Your information has been successfully sent!'}
							</h2>
						) : error ? (
							<h2 className={s.contact__hero__content__form__title}>
								{lang === 'es'
									? '¡Hubo un error al enviar tu información!'
									: 'There was an error sending your information!'}
							</h2>
						) : (
							<>
								<h2 className={s.contact__hero__content__form__title}>
									{lang === 'es'
										? 'Recibe más información'
										: 'Get more information'}
								</h2>
								<label className={s.contact__hero__content__form__label}>
									<span className={s.contact__hero__content__form__label__text}>
										{lang === 'es' ? 'Nombre Completo*' : 'Full Name*'}
									</span>
									<input
										{...register('name', {
											required: {
												value: true,
												message:
													lang === 'es'
														? 'Este campo es requerido'
														: 'This field is required',
											},
										})}
										type="text"
										placeholder={
											lang === 'es' ? 'Tu nombre acá' : 'Your name here'
										}
										className={s.contact__hero__content__form__label__input}
									/>
									{errors.name && (
										<span
											className={s.contact__hero__content__form__label__error}
										>
											{errors.name.message}
										</span>
									)}
								</label>
								<label className={s.contact__hero__content__form__label}>
									<span className={s.contact__hero__content__form__label__text}>
										{lang === 'es' ? 'Celular*' : 'Phone*'}
									</span>
									<input
										{...register('phone', {
											required: {
												value: true,
												message:
													lang === 'es'
														? 'Este campo es requerido'
														: 'This field is required',
											},
										})}
										type="tel"
										placeholder={
											lang === 'es' ? 'Tu celular acá' : 'Your phone here'
										}
										className={s.contact__hero__content__form__label__input}
									/>
									{errors.phone && (
										<span
											className={s.contact__hero__content__form__label__error}
										>
											{errors.phone.message}
										</span>
									)}
								</label>
								<label className={s.contact__hero__content__form__label}>
									<span className={s.contact__hero__content__form__label__text}>
										{lang === 'es' ? 'Correo electrónico*' : 'Email*'}
									</span>
									<input
										{...register('email', {
											required: {
												value: true,
												message:
													lang === 'es'
														? 'Este campo es requerido'
														: 'This field is required',
											},
										})}
										type="email"
										placeholder={
											lang === 'es' ? 'Tu email acá' : 'Your email here'
										}
										className={s.contact__hero__content__form__label__input}
									/>
									{errors.email && (
										<span
											className={s.contact__hero__content__form__label__error}
										>
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
												message: lang
													? 'Debes aceptar los términos'
													: 'You must accept the terms',
											},
										})}
									/>
									<span className={s.contact__hero__content__form__terms__text}>
										{lang === 'es'
											? 'Acepto la política de privacidad y tratamiento de datos personales registrados en este sitio.'
											: 'I accept the privacy policy and treatment of personal data registered on this site.'}
									</span>
									{errors.terms && (
										<span
											className={s.contact__hero__content__form__terms__error}
										>
											{errors.terms.message}
										</span>
									)}
								</label>
								<button
									className={s.contact__hero__content__form__button}
									disabled={isSubmitting}
								>
									{lang === 'es' ? 'Enviar' : 'Send'}
								</button>
							</>
						)}
					</form>
				</div>
			</section>
			<Map className={s.contact__map} />
			<section className={s.contact__info}>
				<h2 className={s.contact__info__title}>{data.title}</h2>
				{data.address?.href && (
					<a
						href={data.address?.href}
						target="_blank"
						rel="noopener noreferrer"
						className={s.contact__info__item}
					>
						<IoLocationSharp size={26} />
						<span>{data.address?.text}</span>
					</a>
				)}
				<a href={`mailto:${data.email}`} className={s.contact__info__item}>
					<IoMail size={26} />
					<span className={s.contact__info__item__mail}>{data.email}</span>
				</a>
				{data.phoneMobile?.href && (
					<a href={data.phoneMobile?.href} className={s.contact__info__item}>
						<MdLocalPhone size={26} />
						<span>{data.phoneMobile?.text}</span>
					</a>
				)}
			</section>
		</main>
	)
}

export default ContactPage
