import styles from './benefits.module.scss';
import Box from '../common-ui/box/box';
import ShippingSVG from '../svgs/benefits/shipping-svg';
import GuaranteeSVG from '../svgs/benefits/guarantee-svg';
import QualitySVG from '../svgs/benefits/quality-svg';
import SecureSVG from '../svgs/benefits/secure-svg';

const Benefits = () => {
	return (
		<Box color='dark'>
			<div className={styles.benefits}>
				<div className={styles.item}>
					<div>
						<ShippingSVG />
						<span>Free Shipping & Returns</span>
					</div>
				</div>
				<div className={styles.item}>
					<div>
						<GuaranteeSVG />
						<span>100% Money Back Guarantee</span>
					</div>
				</div>
				<div className={styles.item}>
					<div>
						<QualitySVG />
						<span>High Quality Material</span>
					</div>
				</div>
				<div className={styles.item}>
					<div>
						<SecureSVG />
						<span>Safe and Secure Checkout</span>
					</div>
				</div>
			</div>
		</Box>
	);
};

export default Benefits;
