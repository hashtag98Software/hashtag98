import { getExperiencesData, getExperiencesSeo } from 'lib/api'
import { draftMode } from 'next/headers'
import Component from './Component'
import { GlobalParams } from 'utils/types/GlobalParams'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { generateAppMetadata } from 'utils/helpers/generateAppMetadata'

export async function generateMetadata(
	{ params }: GlobalParams,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const seo = await getExperiencesSeo({ locale: params.lang })

	return generateAppMetadata({ seo, lang: params.lang })
}

const Experiences = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getExperiencesData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Experiences
