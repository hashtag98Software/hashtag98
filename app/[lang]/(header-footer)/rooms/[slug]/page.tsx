import { getRoomData, getRoomsSlugs } from 'lib/api'
import Component from './Component'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const slugs = await getRoomsSlugs()
	return slugs.map(({ slug }) => ({ slug }))
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

	return <Component data={data} />
}

export default RoomType
