import React, { useState, useEffect } from 'react'
import {
	Link,
	DirectLink,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from 'react-scroll'
import { useHistory } from 'react-router'
import style from './header.style.m.css'

const PointNavLink = [
	{
		title: 'About',
		path: 'about',
	},
	{
		title: 'Haircuts',
		path: 'haircuts',
	},
	{
		title: 'Contact Us',
		path: 'contact',
	},
]

const LinkConfig = ({ children, idAnchor }) => (
	<Link
		activeClass={style.activeLink}
		className={style.link}
		to={idAnchor}
		spy
		smooth
		duration={1000}
	>
		{children}
	</Link>
)

const LandingHeader = () => {
	const [isScrollTop, setIsScrollTop] = useState(false)

	useEffect(() => {
		window.onscroll = () => {
			setIsScrollTop(window.pageYOffset !== 0)
		}

		return () => {
			Events.scrollEvent.remove('begin')
			window.onscroll = null
		}
	}, [])

	return (
		<>
			<div className={style.seatReservation} id="top" />
			<div className={`${style.headerWrapper} ${isScrollTop ? style.shadow : ''}`}>
				<header className={style.header}>
					<Link className={style.linkLogo} to="top" spy smooth duration={1000}>
						Barbershop
					</Link>
					<div className={style.desktop}>
						<nav className={style.navigation}>
							{PointNavLink.map(({ title, path }, index) => (
								<LinkConfig key={index} idAnchor={path}>
									{title}
								</LinkConfig>
							))}
						</nav>
					</div>
				</header>
			</div>
		</>
	)
}

export default LandingHeader
