'use client';

import styles from './product-item.module.scss';
import HeartSVG from '../svgs/ui/heart-svg';
import Link from 'next/link';
import Image from 'next/image';

const ProductItem = () => {
	const handleButtonPropagation = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('button clicked');
	};

	return (
		<article className={styles.product_item}>
			<Link href='/'>
				<div className={styles.product_img}>
					<figure className={styles.fig}>
						<Image
							src='/images/l_handbag.jpg'
							alt='product'
							width={300}
							height={300}
						/>
					</figure>
					<button onClick={handleButtonPropagation}>
						<HeartSVG />
					</button>
				</div>
				<div className={styles.content}>
					<div>
						<h3>Product Name</h3>
						<span>$ 100.00</span>
					</div>
					<div className={styles.btn_container}>
						<button
							className={styles.add_to_cart_btn}
							onClick={handleButtonPropagation}
						>
							+
						</button>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default ProductItem;
