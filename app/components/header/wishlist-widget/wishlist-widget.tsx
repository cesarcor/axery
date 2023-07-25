import styles from './wishlist-widget.module.scss';
import HeartSVG from '../../svgs/ui/heart-svg';

const WishlistWidget = () => {
	return (
		<button className={styles.wishlist_btn}>
			<HeartSVG />
			<span className={styles.wishlist_amount}>3</span>
		</button>
	);
};

export default WishlistWidget;
