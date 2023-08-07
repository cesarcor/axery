import styles from './featured-products.module.scss';
import Box from '../../common-ui/box/box';
import SectionOverview from '../../common-ui/section-overview/section-overview';
import ProductGrid from '../../product-grid/product-grid';
import ProductItem from '../../product-item/product-item';

const FeaturedProducts = () => {
	return (
		<Box color='light'>
			<div className='content-wrapper'>
				<SectionOverview
					sectionTitle='LATTEST ARRIVALS'
					sectionDescription='Lorem ipsum is simply dummy text of the printing and typesetting industry'
					buttonText='View All'
					buttonLink='/products'
				/>
				<div className={styles.featured_products_bottom}>
					<ProductGrid>
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
					</ProductGrid>
				</div>
			</div>
		</Box>
	);
};

export default FeaturedProducts;
