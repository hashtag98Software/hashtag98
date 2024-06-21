import Booking from 'components/Booking/Booking'
import RoomTypes from 'components/RoomTypes/RoomTypes'
import { getRoomsData, getRoomsSeo } from 'lib/api'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { GlobalParams } from 'utils/types/GlobalParams'
import s from './page.module.scss'
import { Metadata, ResolvingMetadata } from 'next'
import { generateAppMetadata } from 'utils/helpers/generateAppMetadata'

export async function generateMetadata(
	{ params }: GlobalParams,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const seo = await getRoomsSeo({ locale: params.lang })

	return generateAppMetadata({ seo, lang: params.lang })
}

const Rooms = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getRoomsData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return (
		<main id="rooms">
			<div className={s.rooms__booking}>
				<Booking lang={lang} />
			</div>
			<RoomTypes data={data} />
		</main>
	)
}

export default Rooms
