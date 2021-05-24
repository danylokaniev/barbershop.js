import React from 'react'
import style from './style.m.css'

import { FacebookIcon } from '../../assets/icons/FacebookIcon'
import { TwitterIcon } from '../../assets/icons/TwitterIcon'
import { TelegramIcon } from '../../assets/icons/TelegramIcon'

import Map from './GoogleMap'

const Footer = () => (
	<footer className={style.footer}>
		<div className={style.footerContainer}>
			<div className={style.footerUp}>
				<Map />
			</div>
			<div className={style.footerDown}>
				<span className={style.copyright}>&copy; 2021 Barbershop. All rights reserved</span>
				<ul className={style.listSocialNetWork}>
					<li className={style.listSocialNetWorkItem}>
						<a
							className={style.socialNetWorklink}
							target="_blank"
							href="https://www.facebook.com/"
							rel="noreferrer"
						>
							<FacebookIcon />
						</a>
					</li>
					<li className={style.listSocialNetWorkItem}>
						<a
							className={style.socialNetWorklink}
							target="_blank"
							href="https://twitter.com/"
							rel="noreferrer"
						>
							<TwitterIcon />
						</a>
					</li>
					<li className={style.listSocialNetWorkItem}>
						<a
							className={style.socialNetWorklink}
							target="_blank"
							href="https://telegram.org/"
							rel="noreferrer"
						>
							<TelegramIcon />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
)

export default Footer
