import { useState } from 'react';
import styles from './search-btn.module.scss';
import SearchSVG from '../../svgs/ui/search-svg';
import Search from '../../common-ui/search/search';

const SearchBtn = () => {
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	return (
		<>
			<button
				className={`${styles.search_btn} ${isSearchOpen ? styles.active : ''}`}
				onClick={toggleSearch}
			>
				<SearchSVG />
			</button>
			{isSearchOpen && (
				<div className={styles.mobile_search_popup}>
					<Search />
				</div>
			)}
		</>
	);
};

export default SearchBtn;
