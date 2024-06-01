import Booking from 'components/Booking/Booking'
import RoomTypes from 'components/RoomTypes/RoomTypes'
import { getRoomsData } from 'lib/api'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { GlobalParams } from 'utils/types/GlobalParams'
import s from './page.module.scss'

const Rooms = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getRoomsData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return (
		<main>
			<div className={s.rooms__booking}>
				<Booking />
			</div>
			<RoomTypes data={data} />
		</main>
	)
}

export default Rooms
