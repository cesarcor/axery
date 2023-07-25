import styles from './mobile-menu.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface MobileMenuProps {
	menuIsOpen: boolean;
}

const MobileMenu = ({ menuIsOpen }: MobileMenuProps) => {
	return (
		<div
			className={`${styles.mobile_panel} ${menuIsOpen ? styles.isOpen : ''}`}
		>
			<div className={styles.logo}>
				<Image src='/images/logo.png' alt='Axery' width={100} height={40} />
			</div>
			<nav className={styles.mobile_nav}>
				<ul className={styles.mobile_nav_list}>
					<li>
						<Link href='/'>
							<span>Wishlist</span>
							<span className={styles.amount_badge}>3</span>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<span>Cart</span>
							<span className={styles.amount_badge}>3</span>
						</Link>
					</li>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/'>Products</Link>
					</li>
					<li>
						<Link href='/'>Blog</Link>
					</li>
					<li>
						<Link href='/'>Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileMenu;
