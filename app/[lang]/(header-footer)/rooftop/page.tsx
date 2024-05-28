import { getRooftopData } from 'lib/api'
import Component from './Component'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { GlobalParams } from 'utils/types/GlobalParams'

const Rooftop = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getRooftopData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Rooftop
