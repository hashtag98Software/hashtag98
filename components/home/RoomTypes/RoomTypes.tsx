import { useState } from 'react'
import s from './RoomTypes.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import {
	animationOnScreenContainer,
	buttonAnimation,
} from 'utils/helpers/framerMotionAnimations'
import Link from 'next/link'
import { Room, Rooms } from 'utils/types/graphql/graphql'

const RoomTypes = ({ data }: { data: Rooms }) => {
	const rooms = data.roomsCollection?.items || []
	const allTypes = rooms.map(room => room?.type)
	const types = allTypes.filter(
		(item, index) => allTypes.indexOf(item) === index
	)
	const initialType = rooms[0]?.type
	const [currentType, setCurrentType] = useState(initialType)
	const [currentRoom, setCurrentRoom] = useState(
		rooms.filter(room => room?.type === initialType)[0]
	)
	const currentTypeRooms = rooms.filter(room => room?.type === currentType)
	const key = `${currentRoom?.mainDescription} ${currentType}`

	const changeType = (type: string) => {
		setCurrentType(type)
		setCurrentRoom(rooms.filter(room => room?.type === type)[0])
	}

	return (
		<section className={s.room_types}>
			<motion.div
				variants={{
					offscreen: {
						scale: 1.5,
					},
					onscreen: {
						scale: 1,
						transition: {
							duration: 1,
						},
					},
				}}
				{...animationOnScreenContainer}
				className={s.room_types__background}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={key}
						style={{
							backgroundImage: `url(${currentRoom?.imagesCollection?.items[0]?.url})`,
						}}
						transition={{ duration: 0.5 }}
						initial={{ scale: 1.2 }}
						animate={{ scale: 1 }}
						className={s.room_types__background__img}
					/>
				</AnimatePresence>
			</motion.div>

			<AnimatePresence mode="wait">
				<motion.div
					key={key}
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.2 }}
					className={s.room_types__content}
				>
					<h2 className={s.room_types__content__title}>
						{currentRoom?.type} - {currentRoom?.mainDescription}
					</h2>
					<Link
						href={`/rooms/${currentRoom?.slug}`}
						className={s.room_types__content__button}
					>
						VER MÁS
					</Link>
				</motion.div>
			</AnimatePresence>
			<div className={s.room_types__buttons}>
				{types.map(
					(type, i) =>
						type && (
							<motion.div
								key={type}
								className={s.room_types__buttons__item}
								variants={{
									offscreen: {
										opacity: 0,
										translateX: 100,
									},
									onscreen: {
										opacity: 1,
										translateX: 0,
										transition: {
											type: 'spring',
											duration: 0.6 * (i + 1),
										},
									},
								}}
								{...animationOnScreenContainer}
							>
								<motion.button
									className={s.room_types__buttons__item__type}
									onClick={() => changeType(type)}
									disabled={type === currentType}
									{...buttonAnimation}
								>
									{type}
								</motion.button>
								<div className={s.room_types__buttons__item__subtypes}>
									{currentTypeRooms.map(
										(room, i) =>
											type === currentType && (
												<motion.button
													key={room?.slug}
													onClick={() => setCurrentRoom(room)}
													disabled={room?.slug === currentRoom?.slug}
													className={
														s.room_types__buttons__item__subtypes__item
													}
													variants={{
														offscreen: {
															opacity: 0,
															scale: 0.5,
														},
														onscreen: {
															opacity: 1,
															scale: 1,
															transition: {
																type: 'spring',
																duration: 0.8 * (i + 1),
															},
														},
													}}
													{...buttonAnimation}
													{...animationOnScreenContainer}
												>
													{room?.mainDescription}
												</motion.button>
											)
									)}
								</div>
							</motion.div>
						)
				)}
			</div>
		</section>
	)
}

export default RoomTypes
