import { useState, useEffect } from 'react';

const useScrollDirection = () => {
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [currentScrollPos, setCurrentScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const newScrollPos = window.scrollY;
			const scrollingUp = newScrollPos < prevScrollPos;

			setIsHeaderVisible(scrollingUp);
			setCurrentScrollPos(newScrollPos);
			setPrevScrollPos(newScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	return { currentScrollPos, isHeaderVisible };
};

export default useScrollDirection;
