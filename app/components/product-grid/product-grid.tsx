import styles from './product-grid.module.scss';

interface ProductGridProps {
	children: React.ReactNode;
}

const ProductGrid = ({ children }: ProductGridProps) => {
	return <div className={styles.product_grid}>{children}</div>;
};

export default ProductGrid;
