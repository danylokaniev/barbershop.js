import React from 'react'
import Header from '../../component/header/Header'
import style from './style.m.css'
import HaircutSlider from '../../component/haircutSlider/HaircutSlider'
import HairCuts from '../../component/haircuts/Haircuts'
import About from '../../component/about/About'
import Footer from '../../component/footer/Footer'

export default function LandingPage() {
	return (
		<>
			<Header />
			<div>
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
			</div>
			<Footer />
		</>
	)
}
