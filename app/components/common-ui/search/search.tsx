import styles from './search.module.scss';
import SearchSVG from '../../svgs/ui/search-svg';

const Search = () => {
	return (
		<div className={styles.search}>
			<input type='text' placeholder='Search' />
			<SearchSVG />
		</div>
	);
};

export default Search;
