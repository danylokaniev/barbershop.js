import React, { useState } from 'react'
import {
	format,
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth,
	addDays,
	isSameMonth,
	isSameDay,
	parse,
	addMonths,
	subMonths
} from 'date-fns'
import styles from './Calendar.m.css'

const Calendar = () => {
	const [state, setState] = useState({
		currentMonth: new Date(),
		selectedDate: new Date()
	})

	const renderHeader = () => {
		const dateFormat = 'MMMM yyyy'

		return (
			<div className={`${styles.header} ${styles.row} ${styles.flexMiddle}`}>
				<div className={`${styles.col} ${styles.colStart}`}>
					<div className={styles.icon} onClick={prevMonth}>
						chevron_left
					</div>
				</div>
				<div className={`${styles.col} ${styles.colCenter}`}>
					<span>{format(state.currentMonth, dateFormat)}</span>
				</div>
				<div className={`${styles.col} ${styles.colEnd}`} onClick={nextMonth}>
					<div className={styles.icon}>chevron_right</div>
				</div>
			</div>
		)
	}

	const renderDays = () => {
		const dateFormat = 'eeee'
		const days = []

		const startDate = startOfWeek(state.currentMonth)

		for (let i = 0; i < 7; i++) {
			days.push(
				<div className={`${styles.col} ${styles.colCenter}`} key={i} >
					{format(addDays(startDate, i), dateFormat)}
				</div >
			)
		}

		return <div className={`${styles.days} ${styles.row}`} > {days}</div >
	}

	const renderCells = () => {
		const { currentMonth, selectedDate } = state
		const monthStart = startOfMonth(currentMonth)
		const monthEnd = endOfMonth(monthStart)
		const startDate = startOfWeek(monthStart)
		const endDate = endOfWeek(monthEnd)

		const dateFormat = 'd'
		const rows = []

		let days = []
		let day = startDate
		let formattedDate = ''

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = format(day, dateFormat)
				const cloneDay = day
				days.push(
					<div
						className={`${styles.col} ${styles.cell} ${!isSameMonth(day, monthStart)
							? styles.disabled
							: isSameDay(day, selectedDate) ? styles.selected : ''
							}`}
						key={day}
						onClick={() => onDateClick(parse(cloneDay))}
					>
						<span className={styles.number}>{formattedDate}</span>
						<span className={styles.bg}>{formattedDate}</span>
					</div>
				)
				day = addDays(day, 1)
			}
			rows.push(
				<div className={styles.row} key={day}>
					{days}
				</div>
			)
			days = []
		}
		return <div className={styles.body}>{rows}</div>
	}

	const onDateClick = day => {
		setState({ ...state, selectedDate: day })
	}

	const nextMonth = () => {
		setState({ ...state, currentMonth: addMonths(state.currentMonth, 1) })
	}

	const prevMonth = () => {
		setState({ ...state, currentMonth: subMonths(state.currentMonth, 1) })
	}

	return (
		<div className={styles.calendar}>
			{renderHeader()}
			{renderDays()}
			{renderCells()}
		</div>
	)
}

export default Calendar
