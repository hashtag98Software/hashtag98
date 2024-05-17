import { notFound } from 'next/navigation'
import Component from './Component'
import './page.scss'
import { getHomeData } from 'lib/api'
import { draftMode } from 'next/headers'

const Home = async () => {
	const { isEnabled } = draftMode()
	const data = await getHomeData({ preview: isEnabled })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Home
