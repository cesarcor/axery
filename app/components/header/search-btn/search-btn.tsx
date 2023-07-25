import styles from './search-btn.module.scss';
import SearchSVG from '../../svgs/ui/search-svg';

const SearchBtn = () => {
	return (
		<button className={styles.search_btn}>
			<SearchSVG />
		</button>
	);
};

export default SearchBtn;
