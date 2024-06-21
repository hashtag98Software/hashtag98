import { getContactData } from 'lib/api'
import Component from './Component'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import type { GlobalParams } from 'utils/types/GlobalParams'

const Contact = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getContactData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Contact
