'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactInfo = async ({
	name,
	phone,
	email,
	to,
}: {
	name: string
	phone: string
	email: string
	to: string
}) => {
	const { error } = await resend.emails.send({
		from: 'Formulario de Contacto <formulario@hashtag98.com.co>',
		to: [to],
		subject: 'Nueva información de contacto recibida',
		react: (
			<div>
				<h1>Información de contacto</h1>
				<p>
					<strong>Nombre:</strong> {name}
				</p>
				<p>
					<strong>Celular:</strong> {phone}
				</p>
				<p>
					<strong>Correo:</strong> {email}
				</p>
			</div>
		),
	})

	return error ? { error } : { success: true }
}
