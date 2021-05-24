import React, { useState } from 'react'
import style from './style.m.css'
import haircuts from './data'

export default function Haircuts() {
	const [currentFilter, setCurrentFilter] = useState('')

	const onChangeValue = e => {
		switch (e.target.value) {
			case 'free':
				setCurrentFilter('FREE')
				break
			case 'paid':
				setCurrentFilter('£')
				break
			default:
			case 'all':
				setCurrentFilter('')
				break
		}
	}
	return (
		<div className={style.prices}>
			<div className={style.table}>
				<h2>
					HAIRCUTS
				</h2>
				{
					haircuts
						.filter(({ price }) => price.includes(currentFilter))
						.map(({ title, price }) => (
							<div className={style.priceRow} key={title}>
								<div>{title}</div>
								<div />
								<div>{price}</div>
							</div>
						))
				}
				<div className={style.filters} onChange={onChangeValue}>
					<label htmlFor="f-option" className={style.lRadio}>
						<input type="radio" id="f-option" name="selector" tabIndex="1" value="free" />
						<span>FREE</span>
					</label>
					<label htmlFor="s-option" className={style.lRadio}>
						<input type="radio" id="s-option" name="selector" tabIndex="2" value="paid" />
						<span>Paid</span>
					</label>
					<label htmlFor="t-option" className={style.lRadio}>
						<input type="radio" id="t-option" name="selector" tabIndex="3" value="all" />
						<span>All</span>
					</label>
				</div>
			</div>


		</div>
	)
}
