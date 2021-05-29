import React from 'react'
import style from './style.m.css'

const Modal = ({ active, setActive, children }) => (
	<div
		className={`
        ${style.modal} 
        ${active ? style.active : ''}
      `}
		onClick={() => setActive(false)}
	>
		<div className={style.content} onClick={e => e.stopPropagation()}>
			{children}
		</div>
	</div>
)

export default Modal
