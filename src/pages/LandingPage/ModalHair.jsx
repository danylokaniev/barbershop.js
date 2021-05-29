import React, { useState } from 'react'
import style from './Modal.style.m.css'


export default function ModalHair({ date, onSubmit, hairdresser }) {
	const dateHair = date.split('-').reverse().join('-')

	const [name, setName] = useState('')

	const [surname, setSurName] = useState('')

	const [email, setEmail] = useState('')

	const [phone, setPhone] = useState('')
	return (
		<div className={style.modal}>
			<div className={style.formGroup}>
				<span>Date</span>
				<input className={style.formField} type="date" value={dateHair} />
			</div>

			<div className={style.formGroup}>
				<span>Hairdresser</span>
				<input className={style.formField} type="text" value={hairdresser} />
			</div>
			<div className={style.formGroup}>
				<span>Name</span>
				<input
					className={style.formField}
					type="text"
					placeholder="type name..."
					value={name}
					onChange={({ target }) => setName(target.value)}
				/>
			</div>

			<div className={style.formGroup}>
				<span>Surname</span>
				<input
					className={style.formField}
					type="text"
					placeholder="type surname..."
					value={surname}
					onChange={({ target }) => setSurName(target.value)}
				/>
			</div>

			<div className={style.formGroup}>
				<input
					className={style.formField}
					type="email"
					placeholder="type email..."
					value={email}
					onChange={({ target }) => setEmail(target.value)}
				/>
				<span>Email</span>
			</div>

			<div className={style.formGroup}>
				<span>Phone number</span>
				<input
					className={style.formField}
					type="text"
					placeholder="type phonenumber..."
					value={phone}
					onChange={({ target }) => setPhone(target.value)}
				/>
			</div>

			<button
				className={style.learnMode}
				type="submit"
				onClick={() => {
					setName('')
					setSurName('')
					setEmail('')
					setPhone('')
					onSubmit()
				}}
			>Submit
			</button>
		</div>
	)
}
