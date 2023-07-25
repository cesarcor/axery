import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | null;

const useScrollDirection = () => {
	const [headerIsHidden, setHeaderIsHidden] = useState(true);
	const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const direction = scrollY > lastScrollY ? 'down' : 'up';

			if (window.scrollY > window.innerHeight && direction === 'up') {
				setHeaderIsHidden(false);
			} else {
				setHeaderIsHidden(true);
			}

			if (
				direction !== scrollDirection &&
				Math.abs(scrollY - lastScrollY) > 10
			) {
				setScrollDirection(direction);
			}

			lastScrollY = scrollY > 0 ? scrollY : 0;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return headerIsHidden;
};

export default useScrollDirection;
