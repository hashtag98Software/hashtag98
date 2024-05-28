import { getRestaurantData } from 'lib/api'
import Component from './Component'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { GlobalParams } from 'utils/types/GlobalParams'

const Restaurant = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getRestaurantData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Restaurant
