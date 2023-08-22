import styles from './footer.module.scss';
import Box from '../common-ui/box/box';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='site-section'>
			<Box color='dark'>
				<div className={`${styles.container} flex`}>
					<div className={styles.col}>
						<Image src='/images/logo.png' width={100} height={50} alt='logo' />
					</div>
					<div className={styles.col}>
						<h4 className={styles.heading}>Help & Information</h4>
						<ul className={styles.nav_list}>
							<li>
								<Link href='/'>Contact Us</Link>
							</li>
							<li>
								<Link href='/'>Returns & Refunds</Link>
							</li>
							<li>
								<Link href='/'>Delivery Information</Link>
							</li>
						</ul>
					</div>
					<div className={styles.col}>
						<h4 className={styles.heading}>About Axery</h4>
						<ul className={styles.nav_list}>
							<li>
								<Link href='/'>About Us</Link>
							</li>
							<li>
								<Link href='/'>Careers</Link>
							</li>
							<li>
								<Link href='/'>Investor Relations</Link>
							</li>
						</ul>
					</div>
					<div className={styles.col}>
						<h4 className={styles.heading}>More from Axery</h4>
						<ul className={styles.nav_list}>
							<li>
								<Link href='/'>Mobile App</Link>
							</li>
							<li>
								<Link href='/'>Gift Voucher</Link>
							</li>
							<li>
								<Link href='/'>Black Friday</Link>
							</li>
						</ul>
					</div>
				</div>
			</Box>
			<div className={`${styles.underfooter} flex`}>
				<p className={styles.copy_right}>© 2023 Axery. All Rights Reserved.</p>
				<div>
					<ul className={styles.policy_links}>
						<li>
							<Link href='/'>Privacy Policy</Link>
						</li>
						<li>
							<Link href='/'>Terms & Conditions</Link>
						</li>
						<li>
							<Link href='/'>Accessibility</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
