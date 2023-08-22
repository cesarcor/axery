'use client';

import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Search from '../common-ui/search/search';
import WishlistWidget from './wishlist-widget/wishlist-widget';
import CartWidget from './cart-widget/cart-widget';
import SearchBtn from './search-btn/search-btn';
import MobileMenu from './mobile-menu/mobile-menu';
import useScrollDirection from '../../hooks/useScrollDirection';

const Header = () => {
	const { currentScrollPos, isHeaderVisible } = useScrollDirection();

	const headerVisibility = () =>
		currentScrollPos > 61
			? isHeaderVisible
				? styles.visible
				: styles.hidden
			: '';

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.position = 'fixed';
		} else {
			document.body.style.position = 'static';
		}

		return () => {
			document.body.style.position = 'static';
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			<header className={`${styles.header} ${headerVisibility()}`}>
				<div className={styles.container}>
					<div className={styles.search_col_mobile}>
						<SearchBtn />
					</div>
					<div className={styles.logo_col}>
						<Image src='/images/logo.png' alt='Axery' width={100} height={40} />
					</div>
					<div className={styles.menu_col}>
						<button
							className={`${styles.hamburger} ${
								isMobileMenuOpen ? styles.isActive : ''
							}`}
							onClick={toggleMobileMenu}
						>
							<div className={styles.line}></div>
							<div className={styles.line}></div>
							<div className={styles.line}></div>
						</button>
						<nav className={styles.desktop_nav}>
							<ul>
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
					<div className={styles.actions_col}>
						<Search />
						<WishlistWidget />
						<CartWidget />
					</div>
				</div>
			</header>
			<MobileMenu menuIsOpen={isMobileMenuOpen} />
		</>
	);
};

export default Header;
