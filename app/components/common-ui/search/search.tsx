import React, { useState } from 'react';
import styles from './search.module.scss';
import SearchSVG from '../../svgs/ui/search-svg';
import SearchSuggestionsModal from '../search-suggestions-modal/search-suggestions-modal';

const Search = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setSearchQuery(inputValue);
	};

	return (
		<div className={styles.search_container}>
			<div className={styles.search}>
				<input
					type='text'
					placeholder='Search'
					className={`${styles.search_input}`}
					value={searchQuery}
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<SearchSVG />
			</div>
			{searchQuery.length > 0 && isFocused && <SearchSuggestionsModal />}
		</div>
	);
};

export default Search;
