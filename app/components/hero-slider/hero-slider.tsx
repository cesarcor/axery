'use client';

import { useState } from 'react';
import styles from './hero-slider.module.scss';
import Image from 'next/image';
import Button from '../common-ui/button/button';
import ArrowSVG from '../svgs/arrow-svg';
import { Bebas_Neue, Qwitcher_Grypen } from 'next/font/google';

const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const qwitcher_gryphen = Qwitcher_Grypen({
	subsets: ['latin'],
	weight: ['400'],
});

const HeroSlider = () => {
	const slides = [
		{
			image: '/images/hero.jpg',
			alt: 'temp. hero',
			content: {
				designer: 'Tom Fletcher',
				title: 'Elegant Leather Backpacks',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id tempus lorem. Donec ultricies cursus tempus. Vivamus aliquet dolor orci, ac congue ligula sagittis et.',
			},
		},
		{
			image: '/images/hero2.jpg',
			alt: 'temp. hero',
			content: {
				designer: 'John Doe',
				title: 'Go anywhere with style',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id tempus lorem. Donec ultricies cursus tempus. Vivamus aliquet dolor orci, ac congue ligula sagittis et.',
			},
		},
		{
			image: '/images/hero3.jpg',
			alt: 'temp. hero',
			content: {
				designer: 'Jane Smith',
				title: 'Carry your essentials in style',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id tempus lorem. Donec ultricies cursus tempus. Vivamus aliquet dolor orci, ac congue ligula sagittis et.',
			},
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const slideUp = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? slides.length - 1 : prevSlide - 1
		);
	};

	const slideDown = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === slides.length - 1 ? 0 : prevSlide + 1
		);
	};

	const handleControlBarClick = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div className={styles.hero_slider}>
			<div className={styles.container}>
				<div className={styles.images_col}>
					{slides.map((slide, index) => (
						<div
							className={`${styles.image_item} ${
								index === currentSlide ? styles.active : ''
							}`}
							key={index}
							style={{
								transform: `translateY(-${currentSlide * 100}%)`,
								transition: 'all 0.7s ease-in-out',
							}}
						>
							<figure className={styles.fig}>
								<Image
									src={slide.image}
									alt={slide.alt}
									width={600}
									height={600}
								/>
							</figure>
						</div>
					))}
				</div>
				<div className={styles.content_col}>
					<div className={styles.content}>
						{slides.map((slide, index) => (
							<div
								className={styles.content_item}
								key={index}
								style={{
									transform: `translateX(-${currentSlide * 100}%)`,
									transition: 'all 0.7s ease-in-out',
								}}
							>
								<div>
									<span
										className={`${styles.designer} ${qwitcher_gryphen.className}`}
									>
										{slide.content.designer}
									</span>
									<h2 className={bebas_neue.className}>
										{slide.content.title}
									</h2>
									<p>{slide.content.description}</p>
									<Button text='Explore More' />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={styles.controls}>
					<div className={styles.control_bars}>
						{slides.map((_, index) => (
							<button
								className={`${styles.control_bar} ${
									index === currentSlide ? styles.active : ''
								}`}
								key={index}
								onClick={() => handleControlBarClick(index)}
							></button>
						))}
					</div>
					<div className={styles.control_btns}>
						<button
							className={`${styles.control_btn} ${styles.control_prev}`}
							onClick={slideUp}
						>
							<ArrowSVG />
						</button>
						<button
							className={`${styles.control_btn} ${styles.control_next}`}
							onClick={slideDown}
						>
							<ArrowSVG />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSlider;
