import { notFound } from 'next/navigation'
import Component from './Component'
import './page.scss'
import { getHomeData } from 'lib/api'
import { draftMode } from 'next/headers'

const Home = async ({ params: { lang } }: { params: { lang: string } }) => {
	const { isEnabled } = draftMode()
	const data = await getHomeData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Home
