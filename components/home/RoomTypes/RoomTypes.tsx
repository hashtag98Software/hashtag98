import { useState } from 'react'
import s from './RoomTypes.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import {
	animationOnScreenContainer,
	buttonAnimation,
} from 'utils/helpers/framerMotionAnimations'
import Link from 'next/link'

type RoomType = {
	id: string
	name: string
	subTypes: {
		id: string
		name: string
		img: string
		link: string
	}[]
}
const RoomTypes = () => {
	const types = [
		{
			id: 'S',
			name: 'S',
			subTypes: [
				{
					id: 'Estándar',
					name: 'Estándar',
					img: '/delete/type.png',
					link: '/',
				},
				{
					id: 'Superior',
					name: 'Superior',
					img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					link: '/',
				},
			],
		},
		{
			id: 'M',
			name: 'M',
			subTypes: [
				{
					id: 'Estándar',
					name: 'Estándar',
					img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					link: '/',
				},
				{
					id: 'Superior',
					name: 'Superior',
					img: '/delete/type.png',
					link: '/',
				},
			],
		},
		{
			id: 'L',
			name: 'L',
			subTypes: [
				{
					id: 'Estándar',
					name: 'Estándar',
					img: '/delete/type.png',
					link: '/',
				},
				{
					id: 'Superior',
					name: 'Superior',
					img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					link: '/',
				},
			],
		},
		{
			id: 'XL',
			name: 'XL',
			subTypes: [
				{
					id: 'Estándar',
					name: 'Estándar',
					img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					link: '/',
				},
			],
		},
	]
	const [currentType, setCurrentType] = useState<RoomType>(types[0])
	const [currentSubType, setCurrentSubType] = useState(types[0].subTypes[0])

	const changeType = (type: RoomType) => {
		setCurrentType(type)
		setCurrentSubType(type.subTypes[0])
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
						key={currentSubType.id + currentType.id}
						style={{ backgroundImage: `url(${currentSubType.img})` }}
						transition={{ duration: 0.5 }}
						initial={{ scale: 1.2 }}
						animate={{ scale: 1 }}
						className={s.room_types__background__img}
					/>
				</AnimatePresence>
			</motion.div>

			<AnimatePresence mode="wait">
				<motion.div
					key={currentSubType.id + currentType.id}
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.2 }}
					className={s.room_types__content}
				>
					<h2 className={s.room_types__content__title}>
						{currentType.name} - {currentSubType.name}
					</h2>
					<Link
						href={currentSubType.link}
						className={s.room_types__content__button}
					>
						VER MÁS
					</Link>
				</motion.div>
			</AnimatePresence>
			<div className={s.room_types__buttons}>
				{types.map((type, i) => (
					<motion.div
						key={type.id}
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
							disabled={type.id === currentType.id}
							{...buttonAnimation}
						>
							{type.name}
						</motion.button>
						<div className={s.room_types__buttons__item__subtypes}>
							{type.subTypes.map(
								(subType, i) =>
									type.id === currentType.id && (
										<motion.button
											key={subType.id}
											onClick={() => setCurrentSubType(subType)}
											disabled={subType.id === currentSubType.id}
											className={s.room_types__buttons__item__subtypes__item}
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
											{subType.name}
										</motion.button>
									)
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	)
}

export default RoomTypes
