import styles from './cart-widget.module.scss';
import BasketSVG from '../../svgs/ui/basket-svg';

const CartWidget = () => {
	return (
		<button className={styles.cart_btn}>
			<BasketSVG />
			<span className={styles.cart_amount}>3</span>
		</button>
	);
};

export default CartWidget;
