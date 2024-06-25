import { getRoomData, getRoomSeo, getRoomsSlugs } from 'lib/api'
import Component from './Component'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import Booking from 'components/Booking/Booking'
import { Metadata, ResolvingMetadata } from 'next'
import { generateAppMetadata } from 'utils/helpers/generateAppMetadata'

export async function generateStaticParams() {
	const slugs = await getRoomsSlugs()
	return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const seo = await getRoomSeo({ locale: params.lang, slug: params.slug })

	return generateAppMetadata({ seo, lang: params.lang })
}

type Props = { params: { slug: string; lang: string } }
const RoomType = async ({ params: { lang, slug } }: Props) => {
	const { isEnabled } = draftMode()
	const data = await getRoomData({
		preview: isEnabled,
		locale: lang,
		slug: slug,
	})

	if (!data) {
		notFound()
	}

	return (
		<Component data={data}>
			<Booking lang={lang} />
		</Component>
	)
}

export default RoomType
