import { useState } from 'react'
import s from './RoomTypes.module.scss'

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
					img: '/delete/type.png',
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
					img: '/delete/type.png',
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
					img: '/delete/type.png',
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
					img: '/delete/type.png',
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
		<section
			className={s.room_types}
			style={{ backgroundImage: `url(${currentSubType.img})` }}
		>
			<h2 className={s.room_types__title}>
				{currentType.name} - {currentSubType.name}
			</h2>
			<a
				href={currentSubType.link}
				target="_blank"
				rel="noopener noreferrer"
				className={s.room_types__button}
			>
				RESERVA AHORA
			</a>
			<div className={s.room_types__buttons}>
				{types.map(type => (
					<div key={type.id} className={s.room_types__buttons__item}>
						<button
							className={s.room_types__buttons__item__type}
							onClick={() => changeType(type)}
							disabled={type.id === currentType.id}
						>
							{type.name}
						</button>
						<div className={s.room_types__buttons__item__subtypes}>
							{type.subTypes.map(
								subType =>
									type.id === currentType.id && (
										<button
											key={subType.id}
											onClick={() => setCurrentSubType(subType)}
											disabled={subType.id === currentSubType.id}
											className={s.room_types__buttons__item__subtypes__item}
										>
											{subType.name}
										</button>
									)
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default RoomTypes
