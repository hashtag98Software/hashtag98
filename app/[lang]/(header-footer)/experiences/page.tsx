import { getExperiencesData } from 'lib/api'
import { draftMode } from 'next/headers'
import Component from './Component'
import { GlobalParams } from 'utils/types/GlobalParams'
import { notFound } from 'next/navigation'

const Experiences = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getExperiencesData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Experiences
