import styles from './page.module.scss';
import Hero from './components/hero/hero';
import Benefits from './components/benefits/benefits';
import AboutSection from './components/sections/about-section/about-section';
import FeaturedProducts from './components/sections/featured-products/featured-products';

export default function Home() {
	return (
		<>
			<section className='site-section'>
				<Hero />
			</section>
			<section className='site-section'>
				<Benefits />
			</section>
			<section className='site-section'>
				<AboutSection />
			</section>
			<section className='site-section'>
				<FeaturedProducts />
			</section>
		</>
	);
}
