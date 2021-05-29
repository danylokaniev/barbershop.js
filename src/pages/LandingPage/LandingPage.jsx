import React, { useState } from 'react'
import Header from '../../component/header/Header'
import style from './style.m.css'
import HaircutSlider from '../../component/haircutSlider/HaircutSlider'
import HairCuts from '../../component/haircuts/Haircuts'
import About from '../../component/about/About'
import Footer from '../../component/footer/Footer'

import Calendar from '../../component/calendar/Calendar'
import Select from '../../component/Select/Select'

import Modal from '../../component/Modal/Modal'


import ModalForm from './ModalHair'

const mockOptions = [
	{
		title: 'Katherina',
		value: 'kath'
	},
	{
		title: 'Olga',
		value: 'olga'
	},
	{
		title: 'June',
		value: 'june'
	},
	{
		title: 'Malta',
		value: 'mala'
	}
]

const mockCalendar = {
	kath: [
		'05-05-2021', '09-05-2021',
		'12-05-2021', '13-05-2021'
	],

	olga: [
		'01-05-2021', '02-05-2021',
		'07-05-2021', '09-05-2021'
	],

	june: [
		'01-05-2021', '02-05-2021',
		'03-05-2021', '04-05-2021'
	],

	mala: [
		'05-05-2021', '06-05-2021',
		'07-05-2021', '08-05-2021'
	],
}


export default function LandingPage() {
	const [select, setSelect] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const [selectedDay, setSelectedDay] = useState('')

	const handleCalendarClick = day => {
		if (!select) return


		setSelectedDay(day)
		setOpenModal(true)
	}

	return (
		<>
			<Header />
			<div>
				<Modal active={openModal} setActive={setOpenModal}>
					<ModalForm
						date={selectedDay}
						hairdresser={mockOptions?.find(dr => dr.value === select)?.title}
						onSubmit={() => {
							mockCalendar[select] = [...mockCalendar[select], selectedDay]

							setSelectedDay('')
							setOpenModal(false)
						}}
					/>
				</Modal>
				<div id="about" className={style.block}>
					<About />
				</div>
				<div id="haircuts" className={style.block}>
					<div className={style.priceTable}>
						<HairCuts />
						<div className={style.priceImages}>
							<HaircutSlider />
						</div>
					</div>
				</div>
				<div id="hairdresser">
					<div className={style.hairdresser}>
						<div className={style.hairdresserSelect}>
							<Select
								options={mockOptions}
								handlerSelected={setSelect}
								selectedValue={select}
								placeholder="Select hairdresser"
							/>
							<p>
								If you like your look and you have a good relationship with your stylist,
								do what I did and have them write down how they executed it.
								Justin whipped up a custom color for me and generously shared the formula
								for the color and gloss he used. If your current stylist is doing anything unique,
								have them detail it to you in a text or e-mail.
								I keep mine on my phone so it’s handy when I try a new salon.
							</p>
						</div>

						<div className={style.calendar}>
							<Calendar handleDayClick={handleCalendarClick} selectedDays={mockCalendar[select]} />
						</div>
					</div>
				</div>
				<div id="contact">
					<Footer />
				</div>
			</div>
		</>
	)
}
