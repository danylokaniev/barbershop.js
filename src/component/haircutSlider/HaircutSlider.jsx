import React from 'react'
import Slider from '../slider/Slider'
import img1 from '../../assets/hair1.jpg'
import img2 from '../../assets/hair2.jpg'
import img3 from '../../assets/hair3.jpg'
import img4 from '../../assets/hair4.jpg'
import img5 from '../../assets/hair5.jpg'
import img6 from '../../assets/hair6.jpg'

export default function HaircutSlider() {
	return (
		<Slider images={[img1, img2, img3, img4, img5, img6]} />
	)
}
