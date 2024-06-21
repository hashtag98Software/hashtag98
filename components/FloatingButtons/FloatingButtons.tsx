import Script from 'next/script'
import { FaWhatsapp } from 'react-icons/fa'
import s from './FloatingButtons.module.scss'
import { draftMode } from 'next/headers'
import { getFloatingButtonsData } from 'lib/api'

const FloatingButtons = async ({ lang }: { lang: string }) => {
	const { isEnabled } = draftMode()
	const data = await getFloatingButtonsData({
		preview: isEnabled,
		locale: lang,
	})

	return (
		<>
			{data.activeWhatsapp && data.whatsapp && (
				<a
					href={`https://api.whatsapp.com/send?phone=${data.whatsapp}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp"
					className={s.floating_buttons__whatsapp}
					id="whatsapp-button"
				>
					<FaWhatsapp />
				</a>
			)}
			{data.activeAsksuite && data.asksuiteScriptSrc && (
				<Script id="script-infochat" src={data.asksuiteScriptSrc} />
			)}
		</>
	)
}

export default FloatingButtons
