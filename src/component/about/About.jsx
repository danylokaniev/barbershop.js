import React from 'react'
import style from './style.m.css'


export default function About() {
	return (
		<div className={style.containerWhite}>
			<div className={style.imagesBlock}>
				<div className={style.image} />
				<div className={style.image} />
				<div className={style.image} />
				<div className={style.image} />
			</div>
			<div className={style.textBlock}>

				<div className={style.text}>
					<h2>A NEW CHAPTER</h2>
					<p>
						<span>RXB London</span> is proud to serve our local community - offering class,
						culture and comfort since 2012, one haircut at a time.
						We now step into a new chapter, under new management.
					</p>

					<p>
						<span>Whilst the RXB</span>  you know and love will remain open,
						there may be a few tweaks here and there over
						the coming months which reflect this.

					</p>
					<p>
						<span>Thanks as always</span> for your continued support during this divansition.
						Stay safe and stay fly.

					</p>
					<h4>The RXB London Team</h4>
				</div>

			</div>
		</div>
	)
}
