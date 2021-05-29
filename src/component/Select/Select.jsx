import React, { useState, useEffect } from 'react'
import style from './style.m.css'

const Select = ({
	size,
	options = [],
	handlerSelected,
	disabled = false,
	menuPosition = 'bottom',
	placeholder,
	selectedValue = null,
}) => {
	const [selectedOption, setSelectedOption] = useState(null)
	const [openMenu, setOpenMenu] = useState(false)

	let ref

	const onSelect = option => {
		setSelectedOption(option)
		handlerSelected(option.value)
	}

	const onToggle = e => {
		e.stopPropagation()
		setOpenMenu(!openMenu)
	}

	useEffect(() => {
		if (openMenu) {
			ref.focus()
		}
	}, [openMenu])

	useEffect(() => {
		setSelectedOption(options.find(opt => opt.value === selectedValue))
	}, [options])

	return (
		<div
			className={`
        ${style.wrapper} 
        ${openMenu ? style.active : ''} 
        ${disabled ? style.disabled : ''}
      `}
			onClick={disabled ? null : onToggle}
			ref={el => (ref = el)}
			tabIndex={0}
			onBlur={e => {
				if (openMenu) onToggle(e)
			}}
		>
			<div
				className={`
        ${style.wrapperInput} 
        ${size ? style[size] : ''}
      `}
			>
				<span className={style.inputView}>{selectedOption?.title || placeholder}</span>
			</div>
			{!!options.length && (
				<ul
					className={`
          ${style.menu} 
          ${style[menuPosition]}
          scroll
        `}
				>
					{options.map((option, i) => (
						<li
							key={i}
							className={style.option}
							onClick={() => onSelect(option)}
						>
							{option.title}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Select
