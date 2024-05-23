import { notFound } from 'next/navigation'
import Component from './Component'
import './page.scss'
import { getHomeData } from 'lib/api'
import { draftMode } from 'next/headers'
import type { GlobalParams } from 'utils/types/GlobalParams'

const Home = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getHomeData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Home
