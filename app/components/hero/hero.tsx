import styles from './hero.module.scss';
import HeroSlider from '../hero-slider/hero-slider';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.hero_container}>
				<HeroSlider />
			</div>
		</div>
	);
};

export default Hero;
