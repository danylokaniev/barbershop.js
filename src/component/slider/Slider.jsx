import React, { useState } from 'react'
import styles from './Slider.m.css'

const ImageSlider = ({ images }) => {
	const [current, setCurrent] = useState(0)
	const { length } = images

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	const dotClick = index => {
		setCurrent(index)
	}

	return (
		<section className={styles.slider}>
			<div className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide} />
			<div className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide} />
			{
				images.map((image, index) => (
					<div
						className={`${index === current ? `${styles.slide} ${styles.active}` : styles.slide}`}
						key={image}
					>
						{
							index === current && (
								<img src={image} className={styles.image} />
							)
						}
					</div>
				))
			}
			<div className={styles.dots}>
				{
					images.map((image, index) => (
						<div
							className={`${index === current ? `${styles.dot} ${styles.activeDot}` : styles.dot}`}
							key={image}
							onClick={() => dotClick(index)}
						/>
					))
				}
			</div>
		</section>
	)
}

export default ImageSlider
