'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import s from './Booking.module.scss'
import Link from 'components/Link/Link'
import {
	animationOnScreenContainer,
	menuItemsAnimation,
} from 'utils/helpers/framerMotionAnimations'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import DatePicker from 'react-datepicker'
import { format, addDays, isAfter } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import './Booking.scss'
import { Menu } from 'utils/types/graphql/graphql'

const Booking = ({ data }: { data?: Menu }) => {
	const [isOpen, setIsOpen] = useState(false)
	type DateState = Date | undefined
	const initialDate = new Date()
	const formatString = 'yyyy-MM-dd'
	const [startDate, setStartDate] = useState<DateState>(initialDate)
	const [endDate, setEndDate] = useState<DateState>(addDays(initialDate, 1))
	const formatStartDay = startDate && format(startDate, formatString)
	const formatEndDate = endDate && format(endDate, formatString)
	const [currentInputSelected, setCurrentInputSelected] = useState<
		'start' | 'end' | null
	>(null)

	const toggleMenu = () => setIsOpen(!isOpen)

	const onClickOutside = () => setCurrentInputSelected(null)

	return (
		<div className={s.booking}>
			<div className={s.booking__menu}>
				<button className={s.booking__menu__button} onClick={toggleMenu}>
					<span>{data?.name}</span>
					<MdOutlineKeyboardArrowUp
						size={30}
						className={`${s.booking__menu__button__arrow} ${
							isOpen && s.active
						}`}
					/>
				</button>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className={s.booking__menu__content}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
						>
							<nav>
								<ul className={s.booking__menu__content__list}>
									{data?.linksCollection?.items.map((item, i) => (
										<motion.li
											key={item?.href}
											variants={menuItemsAnimation(i)}
											{...animationOnScreenContainer}
										>
											<Link
												className={s.booking__menu__content__list__item}
												href={item?.href || '/'}
											>
												{item?.text}
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div className={s.booking__form}>
				<label className={s.booking__form__label}>
					<span className={s.booking__form__label__span}>IN</span>
					<DatePicker
						selected={startDate}
						onChange={date => {
							setStartDate(date || undefined)
							setCurrentInputSelected('end')
							if (date && endDate && isAfter(date, endDate)) {
								setEndDate(addDays(date, 1))
							}
						}}
						onFocus={() => setCurrentInputSelected('start')}
						open={currentInputSelected === 'start'}
						onClickOutside={onClickOutside}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						showDisabledMonthNavigation
						minDate={initialDate}
						className={s.booking__form__label__input}
						readOnly
					/>
				</label>
				<label className={s.booking__form__label}>
					<span className={s.booking__form__label__span}>OUT</span>
					<DatePicker
						selected={endDate}
						onChange={date => {
							setEndDate(date || undefined)
							setCurrentInputSelected(null)
						}}
						onFocus={() => setCurrentInputSelected('end')}
						open={currentInputSelected === 'end'}
						onClickOutside={onClickOutside}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						minDate={startDate}
						showDisabledMonthNavigation
						className={s.booking__form__label__input}
						readOnly
					/>
				</label>
				<a
					href={`https://hotels.cloudbeds.com/en/reservation/KpLlBr?checkin=${formatStartDay}&checkout=${formatEndDate}`}
					target="_blank"
					rel="noopener noreferrer"
					className={s.booking__form__button}
				>
					GO{' '}
					<span className={s.booking__form__button__help}>to booking page</span>
				</a>
			</div>
		</div>
	)
}

export default Booking
