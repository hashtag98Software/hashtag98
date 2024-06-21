import { getRestaurantData, getRestaurantSeo } from 'lib/api'
import Component from './Component'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { GlobalParams } from 'utils/types/GlobalParams'
import { Metadata, ResolvingMetadata } from 'next'
import { generateAppMetadata } from 'utils/helpers/generateAppMetadata'

export async function generateMetadata(
	{ params }: GlobalParams,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const seo = await getRestaurantSeo({ locale: params.lang })

	return generateAppMetadata({ seo, lang: params.lang })
}

const Restaurant = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getRestaurantData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Restaurant
