import './page.scss'
import { notFound } from 'next/navigation'
import Component from './Component'
import { getHomeData, getHomeSeo } from 'lib/api'
import { draftMode } from 'next/headers'
import type { GlobalParams } from 'utils/types/GlobalParams'
import Booking from 'components/Booking/Booking'
import Footer from 'components/Footer/Footer'
import { Metadata, ResolvingMetadata } from 'next'
import { generateAppMetadata } from 'utils/helpers/generateAppMetadata'

export async function generateMetadata(
	{ params }: GlobalParams,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const seo = await getHomeSeo({ locale: params.lang })

	return generateAppMetadata({ seo, lang: params.lang })
}

const Home = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getHomeData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return (
		<Component data={data} footer={<Footer lang={lang} />}>
			<Booking lang={lang} />
		</Component>
	)
}

export default Home
